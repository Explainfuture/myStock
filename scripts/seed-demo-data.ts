/**
 * 填充演示数据脚本
 *
 * 运行：npx tsx scripts/seed-demo-data.ts
 *
 * 需要 SUPABASE_SERVICE_ROLE_KEY 环境变量
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
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('请设置环境变量：NEXT_PUBLIC_SUPABASE_URL 和 SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seed() {
  console.log('开始填充演示数据...\n');

  // 1. 清空现有数据（按外键依赖顺序删除）
  console.log('清空现有数据...');
  await supabase.from('chart_cases').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('articles').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('chapters').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  await supabase.from('categories').delete().neq('id', '');

  // 2. 插入分类
  console.log('插入分类...');
  const { data: categories, error: catErr } = await supabase
    .from('categories')
    .insert([
      { id: 'origins', name: '股票起源', order: 1 },
      { id: 'patterns', name: '股票形态', order: 2 },
      { id: 'indicators', name: '常见指标', order: 3 },
    ])
    .select();

  if (catErr) {
    console.error('插入分类失败:', catErr);
    return;
  }

  // 3. 插入章节
  console.log('插入章节...');
  const chapters = [
    // 股票起源
    { id: '00000000-0000-0000-0001-000000000001', category_id: 'origins', title: '第一章：初识股票', order: 1 },
    { id: '00000000-0000-0000-0001-000000000002', category_id: 'origins', title: '第二章：市场与交易', order: 2 },
    // 股票形态
    { id: '00000000-0000-0000-0002-000000000001', category_id: 'patterns', title: '第一章：反转形态', order: 1 },
    { id: '00000000-0000-0000-0002-000000000002', category_id: 'patterns', title: '第二章：持续形态', order: 2 },
    // 常见指标
    { id: '00000000-0000-0000-0003-000000000001', category_id: 'indicators', title: '第一章：趋势指标', order: 1 },
    { id: '00000000-0000-0000-0003-000000000002', category_id: 'indicators', title: '第二章：震荡指标', order: 2 },
  ];

  const { error: chErr } = await supabase.from('chapters').insert(chapters);
  if (chErr) {
    console.error('插入章节失败:', chErr);
    return;
  }

  // 4. 插入文章
  console.log('插入文章...');
  const articles = [
    // 股票起源
    {
      id: '10000000-0000-0000-0001-000000000001',
      chapter_id: '00000000-0000-0000-0001-000000000001',
      slug: 'what-is-stock',
      title: '什么是股票？',
      layout_type: 'standard',
      content_blocks: [
        { type: 'p', text: '股票可以理解为一家公司所有权的一小份切片。买入股票，你就成为了公司的股东之一。' },
        {
          type: 'callout',
          variant: 'tip',
          title: '核心概念',
          text: '股票代表了你对一家公司的部分所有权，这种所有权让你有权分享公司的利润（分红）和增长（股价上涨）。',
        },
        { type: 'h2', text: '股票从哪里来？' },
        {
          type: 'p',
          text: '当一家公司需要资金来扩展业务时，它可以选择"上市"——在股票交易所公开发行股票，这就是 IPO（首次公开募股）。',
        },
        {
          type: 'ul',
          items: [
            '公司通过 IPO 募集资金用于发展',
            '投资者购买股票成为股东',
            '股票在二级市场（如A股）自由买卖',
          ],
        },
        { type: 'h2', text: '为什么会有价格波动？' },
        {
          type: 'ul',
          items: [
            '供需关系：买的人多，价格就上涨；卖的人多，价格就下跌',
            '公司业绩：盈利增长通常推动股价上涨',
            '市场情绪：投资者的预期会影响买卖行为',
            '宏观环境：利率、政策等外部因素也会影响股价',
          ],
        },
      ],
    },
    {
      id: '10000000-0000-0000-0001-000000000002',
      chapter_id: '00000000-0000-0000-0001-000000000001',
      slug: 'stock-market',
      title: '股票市场是如何运作的？',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: '股票市场就像一个大型的"交易集市"，买家和卖家在这里撮合交易。在中国，主要有上海证券交易所和深圳证券交易所。',
        },
        { type: 'h2', text: 'A股市场特点' },
        {
          type: 'ul',
          items: [
            'T+1 交易制度：今天买入的股票，明天才能卖出',
            '涨跌停限制：单日涨跌幅通常限制在 10%（科创板/创业板为 20%）',
            '交易时间：工作日 9:30-11:30, 13:00-15:00',
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: '注意',
          text: '股市有风险，投资需谨慎。在入市前，请确保你了解基本的交易规则和风险。',
        },
      ],
    },
    {
      id: '10000000-0000-0000-0001-000000000003',
      chapter_id: '00000000-0000-0000-0001-000000000002',
      slug: 'why-invest',
      title: '为什么要投资股票？',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: '投资股票的主要原因是为了让财富增值。长期来看，股票市场的平均回报率通常高于银行存款和债券。',
        },
        { type: 'h2', text: '投资股票的收益来源' },
        {
          type: 'ul',
          items: [
            '股价上涨：低价买入，高价卖出获得的差价收益',
            '分红：部分公司会将利润以现金形式分给股东',
            '股息再投资：将分红继续买入股票，复利增长',
          ],
        },
      ],
    },
    // 股票形态
    {
      id: '10000000-0000-0000-0002-000000000001',
      chapter_id: '00000000-0000-0000-0002-000000000001',
      slug: 'm-top',
      title: 'M顶（双顶）',
      layout_type: 'split',
      content_blocks: [
        {
          type: 'p',
          text: 'M顶是最经典的顶部反转形态之一。它由两个大致相等的高点组成，形似字母"M"，通常出现在上涨趋势的末端。',
        },
        { type: 'h2', text: '形态构成' },
        {
          type: 'ul',
          items: [
            '左顶：第一次冲高形成的峰值',
            '颈线：两顶之间回撤的低点连线',
            '右顶：第二次冲高形成的峰值（通常略低于左顶）',
            '确认信号：价格跌破颈线',
          ],
        },
        { type: 'h2', text: '交易要点' },
        {
          type: 'ul',
          items: [
            '成交量：左顶通常放量，右顶往往缩量',
            '跌破颈线时若放量，确认信号更强',
            '理论跌幅：从颈线向下，约等于顶部到颈线的距离',
          ],
        },
        {
          type: 'callout',
          variant: 'warn',
          title: '重要提醒',
          text: '形态只是辅助工具，不能保证 100% 准确。在实际交易中，要结合止损和仓位管理。',
        },
      ],
    },
    {
      id: '10000000-0000-0000-0002-000000000002',
      chapter_id: '00000000-0000-0000-0002-000000000001',
      slug: 'head-shoulders-top',
      title: '头肩顶',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: '头肩顶是另一种经典的顶部反转形态，由一个头部和两个肩部组成，比 M 顶更具可靠性。',
        },
        { type: 'h2', text: '形态构成' },
        {
          type: 'ul',
          items: [
            '左肩：第一次冲高后回撤',
            '头部：第二次冲高创新高后回撤',
            '右肩：第三次冲高但未超过头部',
            '颈线：连接两次回撤低点的直线',
          ],
        },
      ],
    },
    {
      id: '10000000-0000-0000-0002-000000000003',
      chapter_id: '00000000-0000-0000-0002-000000000001',
      slug: 'double-bottom',
      title: 'W底（双底）',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: 'W底是 M 顶的镜像，是底部反转形态。它由两个大致相等的低点组成，通常出现在下跌趋势的末端。',
        },
        { type: 'h2', text: '形态构成' },
        {
          type: 'ul',
          items: [
            '左底：第一次探底形成的低点',
            '颈线：两底之间反弹的高点',
            '右底：第二次探底形成的低点',
            '确认信号：价格突破颈线',
          ],
        },
      ],
    },
    {
      id: '10000000-0000-0000-0002-000000000004',
      chapter_id: '00000000-0000-0000-0002-000000000002',
      slug: 'triangle-patterns',
      title: '三角形整理',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: '三角形整理是一种持续形态，表示市场在积蓄能量，等待方向选择。',
        },
        { type: 'h2', text: '常见类型' },
        {
          type: 'ul',
          items: [
            '对称三角形：高点降低、低点抬高，波动收窄',
            '上升三角形：高点持平、低点抬高，偏向看涨',
            '下降三角形：高点降低、低点持平，偏向看跌',
          ],
        },
      ],
    },
    // 常见指标
    {
      id: '10000000-0000-0000-0003-000000000001',
      chapter_id: '00000000-0000-0000-0003-000000000001',
      slug: 'ma',
      title: '均线（MA）',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: '均线（Moving Average）是最基础的技术指标，它平滑了价格波动，帮助识别趋势方向。',
        },
        { type: 'h2', text: '常用均线周期' },
        {
          type: 'ul',
          items: [
            'MA5：短期趋势，适合短线交易',
            'MA20：中期趋势，常用作月线参考',
            'MA60：长期趋势，用于判断大方向',
            'MA250：年线，重要的牛熊分界线',
          ],
        },
        { type: 'h2', text: '均线的作用' },
        {
          type: 'ul',
          items: [
            '趋势判断：价格在均线上方为多头，下方为空头',
            '支撑阻力：均线常成为价格回调的支撑或阻力',
            '金叉死叉：短期均线上穿长期均线为金叉（看涨），反之为死叉',
          ],
        },
      ],
    },
    {
      id: '10000000-0000-0000-0003-000000000002',
      chapter_id: '00000000-0000-0000-0003-000000000001',
      slug: 'macd',
      title: 'MACD 指标',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: 'MACD（异同移动平均线）是趋势跟踪指标，由快线、慢线和柱状图组成。',
        },
        { type: 'h2', text: 'MACD 组成' },
        {
          type: 'ul',
          items: [
            'DIF（快线）：12日EMA - 26日EMA',
            'DEA（慢线）：DIF 的9日EMA',
            'MACD柱：(DIF - DEA) × 2',
          ],
        },
      ],
    },
    {
      id: '10000000-0000-0000-0003-000000000003',
      chapter_id: '00000000-0000-0000-0003-000000000002',
      slug: 'rsi',
      title: 'RSI 相对强弱指标',
      layout_type: 'standard',
      content_blocks: [
        {
          type: 'p',
          text: 'RSI（Relative Strength Index）是一个震荡指标，用于衡量价格变动的速度和幅度，判断超买超卖。',
        },
        { type: 'h2', text: 'RSI 数值含义' },
        {
          type: 'ul',
          items: [
            'RSI > 70：超买区域，可能回调',
            'RSI < 30：超卖区域，可能反弹',
            'RSI 在 50 附近：多空均衡',
          ],
        },
      ],
    },
  ];

  const { error: artErr } = await supabase.from('articles').insert(articles);
  if (artErr) {
    console.error('插入文章失败:', artErr);
    return;
  }

  // 5. 插入图表案例
  console.log('插入图表案例...');
  const chartCases = [
    {
      id: '20000000-0000-0000-0002-000000000001',
      article_id: '10000000-0000-0000-0002-000000000001',
      symbol: '600519',
      from_date: '2024-01-02',
      to_date: '2024-05-31',
      spec: {
        markers: [
          { time: '2024-02-08', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '左顶' },
          { time: '2024-03-28', position: 'belowBar', color: '#26a69a', shape: 'square', text: '颈线' },
          { time: '2024-04-12', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '右顶' },
          { time: '2024-04-25', position: 'belowBar', color: '#ef5350', shape: 'arrowDown', text: '跌破' },
        ],
      },
    },
  ];

  const { error: caseErr } = await supabase.from('chart_cases').insert(chartCases);
  if (caseErr) {
    console.error('插入图表案例失败:', caseErr);
    return;
  }

  // 6. 更新文章的 chart_case_id
  console.log('更新文章关联...');
  const { error: updateErr } = await supabase
    .from('articles')
    .update({ chart_case_id: '20000000-0000-0000-0002-000000000001' })
    .eq('id', '10000000-0000-0000-0002-000000000001');

  if (updateErr) {
    console.error('更新文章关联失败:', updateErr);
    return;
  }

  console.log('\n演示数据填充完成！');
  console.log('- 分类: 3 个');
  console.log('- 章节: 6 个');
  console.log('- 文章: 10 篇');
  console.log('- 图表案例: 1 个');
}

seed().catch(console.error);
