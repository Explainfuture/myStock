/**
 * A股历史数据导入脚本
 *
 * 使用方法：
 * 1. 准备 CSV 文件，格式：symbol,date,open,high,low,close,volume
 * 2. 运行：npx tsx scripts/import-ohlcv.ts <csv-file-path>
 *
 * 或者使用内置的演示数据：
 * npx tsx scripts/import-ohlcv.ts --demo
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// 手动加载 .env.local
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          process.env[key.trim()] = valueParts.join('=').trim();
        }
      }
    });
  }
}
loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!; // 需要 service_role key

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('请设置环境变量：NEXT_PUBLIC_SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// 演示数据：贵州茅台 600519 的模拟 K 线数据（展示 M 顶形态）
const demoData = {
  symbol: '600519',
  name: '贵州茅台',
  candles: generateDemoCandles(),
};

function generateDemoCandles() {
  // 生成一个包含 M 顶形态的模拟数据
  const candles: Array<{
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }> = [];

  let basePrice = 1800;
  const startDate = new Date('2024-01-02');

  // 阶段1：上涨（1月）
  for (let i = 0; i < 20; i++) {
    const change = (Math.random() - 0.3) * 30;
    const open = basePrice;
    const close = basePrice + change;
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;
    const date = new Date(startDate);
    date.setDate(date.getDate() + i + Math.floor(i / 5) * 2); // 跳过周末

    candles.push({
      date: date.toISOString().split('T')[0],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(2000000 + Math.random() * 3000000),
    });

    basePrice = close;
  }

  // 阶段2：第一顶（2月初）
  const peak1Price = 2100;
  for (let i = 0; i < 10; i++) {
    const progress = i / 10;
    const targetPrice = basePrice + (peak1Price - basePrice) * progress;
    const open = basePrice + (peak1Price - basePrice) * (i / 10);
    const close = targetPrice + (Math.random() - 0.5) * 20;
    const high = Math.max(open, close) + Math.random() * 15;
    const low = Math.min(open, close) - Math.random() * 10;
    const date = new Date(startDate);
    date.setDate(date.getDate() + 20 + i + Math.floor(i / 5) * 2);

    candles.push({
      date: date.toISOString().split('T')[0],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(3000000 + Math.random() * 4000000),
    });

    basePrice = close;
  }

  // 阶段3：回撤（2月中-3月）
  const neckLine = 1950;
  for (let i = 0; i < 15; i++) {
    const progress = i / 15;
    const open = basePrice;
    const close = basePrice - (basePrice - neckLine) * 0.1 + (Math.random() - 0.6) * 20;
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 15;
    const date = new Date(startDate);
    date.setDate(date.getDate() + 30 + i + Math.floor(i / 5) * 2);

    candles.push({
      date: date.toISOString().split('T')[0],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(2500000 + Math.random() * 3000000),
    });

    basePrice = close;
  }

  // 阶段4：第二顶（3月-4月）- 略低于第一顶
  const peak2Price = 2080;
  for (let i = 0; i < 12; i++) {
    const progress = i / 12;
    const open = basePrice;
    const targetPrice = basePrice + (peak2Price - basePrice) * progress;
    const close = targetPrice + (Math.random() - 0.5) * 15;
    const high = Math.max(open, close) + Math.random() * 12;
    const low = Math.min(open, close) - Math.random() * 8;
    const date = new Date(startDate);
    date.setDate(date.getDate() + 45 + i + Math.floor(i / 5) * 2);

    candles.push({
      date: date.toISOString().split('T')[0],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(2800000 + Math.random() * 3500000),
    });

    basePrice = close;
  }

  // 阶段5：下跌跌破颈线（4月-5月）
  for (let i = 0; i < 20; i++) {
    const open = basePrice;
    const close = basePrice - 15 - Math.random() * 25;
    const high = Math.max(open, close) + Math.random() * 8;
    const low = Math.min(open, close) - Math.random() * 12;
    const date = new Date(startDate);
    date.setDate(date.getDate() + 57 + i + Math.floor(i / 5) * 2);

    candles.push({
      date: date.toISOString().split('T')[0],
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(3500000 + Math.random() * 5000000),
    });

    basePrice = close;
  }

  return candles;
}

async function importFromCsv(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.trim().split('\n');

  // 跳过表头
  const dataLines = lines.slice(1);

  const records = dataLines.map((line) => {
    const [symbol, date, open, high, low, close, volume] = line.split(',');
    return {
      symbol: symbol.trim(),
      date: date.trim(),
      open: parseFloat(open),
      high: parseFloat(high),
      low: parseFloat(low),
      close: parseFloat(close),
      volume: parseInt(volume),
    };
  });

  return importData(records);
}

async function importDemoData() {
  console.log(`导入演示数据: ${demoData.name} (${demoData.symbol})`);
  console.log(`K线条数: ${demoData.candles.length}`);

  // 添加 symbol 字段到每条记录，并去重
  const seen = new Set<string>();
  const records = demoData.candles
    .map((c) => ({
      ...c,
      symbol: demoData.symbol,
    }))
    .filter((r) => {
      const key = `${r.symbol}-${r.date}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  console.log(`去重后: ${records.length} 条`);
  return importData(records);
}

async function importData(
  records: Array<{
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }>
) {
  // 分批导入，每批 500 条
  const batchSize = 500;
  let imported = 0;

  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    const { error } = await supabase.from('ohlcv_daily_cn').upsert(batch, {
      onConflict: 'symbol,date',
    });

    if (error) {
      console.error(`导入失败 (batch ${Math.floor(i / batchSize) + 1}):`, error.message);
    } else {
      imported += batch.length;
      console.log(`已导入: ${imported}/${records.length}`);
    }
  }

  console.log(`\n导入完成! 共导入 ${imported} 条记录`);
  return imported;
}

// 主函数
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('使用方法:');
    console.log('  npx tsx scripts/import-ohlcv.ts --demo        # 导入演示数据');
    console.log('  npx tsx scripts/import-ohlcv.ts <csv-file>    # 从 CSV 文件导入');
    console.log('');
    console.log('CSV 格式: symbol,date,open,high,low,close,volume');
    process.exit(0);
  }

  if (args[0] === '--demo') {
    await importDemoData();
  } else {
    const csvPath = path.resolve(args[0]);
    if (!fs.existsSync(csvPath)) {
      console.error(`文件不存在: ${csvPath}`);
      process.exit(1);
    }
    await importFromCsv(csvPath);
  }
}

main().catch(console.error);
