import { getSupabaseClient } from '@/lib/supabase/client';

export async function getOhlcv({
  symbol,
  from,
  to,
}: {
  symbol: string;
  from?: string;
  to?: string;
}) {
  const sb = getSupabaseClient();
  if (!sb) return [];

  let q = sb
    .from('ohlcv_daily_cn')
    .select('symbol,date,open,high,low,close,volume')
    .eq('symbol', symbol)
    .order('date', { ascending: true });

  if (from) q = q.gte('date', from);
  if (to) q = q.lte('date', to);

  const { data, error } = await q;
  if (error || !data) return [];
  return data;
}

