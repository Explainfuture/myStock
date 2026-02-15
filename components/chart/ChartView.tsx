"use client";

import {
  CandlestickSeries,
  ColorType,
  HistogramSeries,
  LineSeries,
  createChart,
  createSeriesMarkers,
} from "lightweight-charts";
import { useEffect, useMemo, useRef } from "react";
import type { ChartCaseData } from "@/lib/types";

const COLOR_UP = "#ef5350"; // CN A-share: up (red)
const COLOR_DOWN = "#26a69a"; // CN A-share: down (green)

function readChartTheme() {
  const styles = getComputedStyle(document.documentElement);
  const get = (name: string, fallback: string) => styles.getPropertyValue(name).trim() || fallback;

  return {
    bg: get("--chart-bg", "#ffffff"),
    text: get("--chart-text", "#334155"),
    grid: get("--chart-grid", "#e2e8f0"),
    border: get("--chart-border", "#cbd5e1"),
  };
}

function withVolumeColors(candles: ChartCaseData["candles"], volumes: ChartCaseData["volumes"]) {
  const candleByTime = new Map<string, ChartCaseData["candles"][number]>();
  for (const c of candles) candleByTime.set(String(c.time), c);

  return volumes.map((v) => {
    const c = candleByTime.get(String(v.time));
    const isUp = c ? c.close >= c.open : true;
    return { ...v, color: isUp ? COLOR_UP : COLOR_DOWN };
  });
}

export default function ChartView({
  caseData,
  height = 500,
}: {
  caseData: ChartCaseData;
  height?: number;
}) {
  const mainChartRef = useRef<HTMLDivElement | null>(null);
  const indicatorChartRef = useRef<HTMLDivElement | null>(null);

  const coloredVolumes = useMemo(
    () => withVolumeColors(caseData.candles, caseData.volumes),
    [caseData.candles, caseData.volumes]
  );

  const hasIndicators = caseData.indicators && caseData.indicators.length > 0;
  const mainChartHeight = hasIndicators ? height - 120 : height;

  useEffect(() => {
    const mainEl = mainChartRef.current;
    if (!mainEl) return;

    const theme = readChartTheme();
    const mainChart = createChart(mainEl, {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: theme.bg },
        textColor: theme.text,
        attributionLogo: false,
      },
      grid: {
        vertLines: { color: theme.grid },
        horzLines: { color: theme.grid },
      },
      rightPriceScale: { borderColor: theme.border },
      timeScale: { borderColor: theme.border, visible: !hasIndicators },
    });

    const candleSeries = mainChart.addSeries(CandlestickSeries, {
      upColor: COLOR_UP,
      downColor: COLOR_DOWN,
      borderVisible: false,
      wickUpColor: COLOR_UP,
      wickDownColor: COLOR_DOWN,
    });
    candleSeries.setData(caseData.candles);

    const volumeSeries = mainChart.addSeries(HistogramSeries, {
      priceFormat: { type: "volume" },
      priceScaleId: "vol",
      lastValueVisible: false,
      priceLineVisible: false,
    });
    volumeSeries.setData(coloredVolumes);

    mainChart.priceScale("vol").applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    const plugin = caseData.spec?.markers?.length
      ? createSeriesMarkers(candleSeries, caseData.spec.markers)
      : null;

    mainChart.timeScale().fitContent();

    // Indicator chart
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let indicatorChart: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const indicatorSeries: any[] = [];

    if (hasIndicators && indicatorChartRef.current) {
      indicatorChart = createChart(indicatorChartRef.current, {
        autoSize: true,
        layout: {
          background: { type: ColorType.Solid, color: theme.bg },
          textColor: theme.text,
          attributionLogo: false,
        },
        grid: {
          vertLines: { color: theme.grid },
          horzLines: { color: theme.grid },
        },
        rightPriceScale: { borderColor: theme.border },
        timeScale: { borderColor: theme.border, visible: true },
      });

      for (const indicator of caseData.indicators!) {
        const lineSeries = indicatorChart.addSeries(LineSeries, {
          color: indicator.color,
          lineWidth: (indicator.lineWidth ?? 2) as 1 | 2 | 3 | 4,
          lineStyle: (indicator.lineStyle ?? 0) as 0 | 1 | 2 | 3,
          title: indicator.title,
          priceLineVisible: false,
          lastValueVisible: false,
        });
        lineSeries.setData(indicator.data);
        indicatorSeries.push(lineSeries);
      }

      indicatorChart.timeScale().fitContent();

      // Sync time scales
      mainChart.timeScale().subscribeVisibleLogicalRangeChange((range: any) => {
        if (range && indicatorChart) {
          indicatorChart.timeScale().setVisibleLogicalRange(range);
        }
      });

      indicatorChart.timeScale().subscribeVisibleLogicalRangeChange((range: any) => {
        if (range && mainChart) {
          mainChart.timeScale().setVisibleLogicalRange(range);
        }
      });
    }

    // Keep chart theme in sync with the `dark` class toggled on <html>.
    const applyTheme = () => {
      const t = readChartTheme();
      mainChart.applyOptions({
        layout: {
          background: { type: ColorType.Solid, color: t.bg },
          textColor: t.text,
        },
        grid: {
          vertLines: { color: t.grid },
          horzLines: { color: t.grid },
        },
        rightPriceScale: { borderColor: t.border },
        timeScale: { borderColor: t.border },
      });
      if (indicatorChart) {
        indicatorChart.applyOptions({
          layout: {
            background: { type: ColorType.Solid, color: t.bg },
            textColor: t.text,
          },
          grid: {
            vertLines: { color: t.grid },
            horzLines: { color: t.grid },
          },
          rightPriceScale: { borderColor: t.border },
          timeScale: { borderColor: t.border },
        });
      }
    };

    const observer = new MutationObserver(() => applyTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      plugin?.detach();
      mainChart.remove();
      if (indicatorChart) {
        indicatorChart.remove();
      }
    };
  }, [caseData.candles, caseData.spec?.markers, caseData.indicators, coloredVolumes, hasIndicators]);

  return (
    <div className="flex flex-col gap-0">
      <div ref={mainChartRef} className="w-full" style={{ height: mainChartHeight }} />
      {hasIndicators && (
        <div className="border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 px-2 py-1 text-xs text-slate-500 dark:text-slate-400">
            {caseData.indicators!.map((ind, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ind.color }} />
                {ind.title}
              </span>
            ))}
          </div>
          <div ref={indicatorChartRef} className="w-full" style={{ height: 120 }} />
        </div>
      )}
    </div>
  );
}
