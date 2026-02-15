import type { ChartCaseData } from '@/lib/types';
import { getSupabaseClient } from '@/lib/supabase/client';
import { mockChartCases } from '@/lib/data/mock';

export async function getChartCaseData(caseId: string): Promise<ChartCaseData | null> {
  const sb = getSupabaseClient();
  if (!sb) return mockChartCases[caseId] ?? null;

  const { data: chartCase, error: caseErr } = await sb
    .from('chart_cases')
    .select('id,symbol,from_date,to_date,spec')
    .eq('id', caseId)
    .single();
  if (caseErr || !chartCase) return null;

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
  };
}

