import type { ChartCaseData } from '@/lib/types';
import { getSupabaseClientCached } from '@/lib/supabase/client';
import { mockChartCases } from '@/lib/data/mock';
import { unstable_cache } from 'next/cache';

async function fetchChartCaseData(caseId: string): Promise<ChartCaseData | null> {
  const sb = getSupabaseClientCached();
  if (!sb) return mockChartCases[caseId] ?? null;

  const { data: chartCase, error: caseErr } = await sb
    .from('chart_cases')
    .select('id,symbol,from_date,to_date,spec')
    .eq('id', caseId)
    .single();
  if (caseErr || !chartCase) return null;

  const spec = chartCase.spec as any;

  // 如果 spec 中已有 candles 和 volumes 数据（使用整数时间戳），直接使用
  if (spec?.candles && spec?.volumes) {
    return {
      candles: spec.candles,
      volumes: spec.volumes,
      spec: spec,
      indicators: spec?.indicators ?? undefined,
    };
  }

  // 否则从 ohlcv_daily_cn 表获取（兼容旧数据）
  const { data: rows, error: ohlcvErr } = await sb
    .from('ohlcv_daily_cn')
    .select('date,open,high,low,close,volume')
    .eq('symbol', chartCase.symbol)
    .gte('date', chartCase.from_date)
    .lte('date', chartCase.to_date)
    .order('date', { ascending: true });
  if (ohlcvErr || !rows || rows.length === 0) return null;

  const candles = rows.map((r) => ({
    time: r.date,
    open: Number(r.open),
    high: Number(r.high),
    low: Number(r.low),
    close: Number(r.close),
  }));

  const volumes = rows.map((r) => ({
    time: r.date,
    value: Number(r.volume),
  }));

  return {
    candles,
    volumes,
    spec: chartCase.spec ?? undefined,
    indicators: (chartCase.spec as any)?.indicators ?? undefined,
  };
}

// Cache chart data for 60 seconds
export const getChartCaseData = unstable_cache(
  fetchChartCaseData,
  ['chart-case-data'],
  { revalidate: 60, tags: ['chart-cases'] }
);
