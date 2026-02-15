import { NextResponse } from 'next/server';
import { getOhlcv } from '@/lib/data/ohlcv';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol') ?? '';
  const from = searchParams.get('from') ?? '';
  const to = searchParams.get('to') ?? '';

  if (!symbol) {
    return NextResponse.json({ error: 'Missing symbol' }, { status: 400 });
  }

  const data = await getOhlcv({ symbol, from, to });
  return NextResponse.json(data);
}

