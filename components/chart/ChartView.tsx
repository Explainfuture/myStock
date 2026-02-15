"use client";

import {
  CandlestickSeries,
  ColorType,
  HistogramSeries,
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
  const containerRef = useRef<HTMLDivElement | null>(null);

  const coloredVolumes = useMemo(
    () => withVolumeColors(caseData.candles, caseData.volumes),
    [caseData.candles, caseData.volumes]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const theme = readChartTheme();
    const chart = createChart(el, {
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
      timeScale: { borderColor: theme.border },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: COLOR_UP,
      downColor: COLOR_DOWN,
      borderVisible: false,
      wickUpColor: COLOR_UP,
      wickDownColor: COLOR_DOWN,
    });
    candleSeries.setData(caseData.candles);

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceFormat: { type: "volume" },
      priceScaleId: "vol",
      lastValueVisible: false,
      priceLineVisible: false,
    });
    volumeSeries.setData(coloredVolumes);

    // Compress volume scale to the bottom (~20% height).
    chart.priceScale("vol").applyOptions({
      scaleMargins: { top: 0.8, bottom: 0 },
    });

    const plugin = caseData.spec?.markers?.length
      ? createSeriesMarkers(candleSeries, caseData.spec.markers)
      : null;

    chart.timeScale().fitContent();

    // Keep chart theme in sync with the `dark` class toggled on <html>.
    const applyTheme = () => {
      const t = readChartTheme();
      chart.applyOptions({
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
    };

    const observer = new MutationObserver(() => applyTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      plugin?.detach();
      chart.remove();
    };
  }, [caseData.candles, caseData.spec?.markers, coloredVolumes]);

  return <div ref={containerRef} className="w-full" style={{ height }} />;
}
