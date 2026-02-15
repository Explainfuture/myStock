import type { Article, ChartCaseData, NavigationTree } from '@/lib/types';

export const mockNavigationTree: NavigationTree = {
  categories: [
    {
      id: 'origins',
      name: '股票起源',
      chapters: [
        {
          id: 'origins-ch1',
          title: '第一章：从交易到证券',
          articles: [{ slug: 'what-is-stock', title: '什么是股票？', layout_type: 'standard' }],
        },
      ],
    },
    {
      id: 'patterns',
      name: '股票形态',
      chapters: [
        {
          id: 'patterns-ch1',
          title: '第一章：反转形态入门',
          articles: [{ slug: 'm-top', title: 'M顶（双顶）', layout_type: 'split' }],
        },
      ],
    },
    {
      id: 'indicators',
      name: '常见指标',
      chapters: [
        {
          id: 'indicators-ch1',
          title: '第一章：把指标当语言',
          articles: [{ slug: 'ma', title: '均线（MA）', layout_type: 'standard' }],
        },
      ],
    },
  ],
};

export const mockArticles: Article[] = [
  {
    id: 'a-what-is-stock',
    category_id: 'origins',
    chapter_id: 'origins-ch1',
    slug: 'what-is-stock',
    title: '什么是股票？',
    layout_type: 'standard',
    content_blocks: [
      {
        type: 'p',
        text: '股票可以理解为一家公司所有权的一小份切片。买入股票，你就成为了公司的股东之一。',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: '新手常见误区',
        text: '“股票=赌博”是常见误解。风险来自你是否理解交易对象，以及是否把概率和仓位当成纪律。',
      },
      { type: 'h2', text: '为什么会有价格波动？' },
      {
        type: 'ul',
        items: [
          '供需：买的人多，价格就会上去；卖的人多，价格就会下来。',
          '预期：市场交易的是“未来的想象”，不是“过去的报表”。',
          '流动性：交易越活跃，价格越容易被连续撮合推着走。',
        ],
      },
    ],
  },
  {
    id: 'a-m-top',
    category_id: 'patterns',
    chapter_id: 'patterns-ch1',
    slug: 'm-top',
    title: 'M顶（双顶）',
    layout_type: 'split',
    chart_case_id: 'case-m-top-1',
    content_blocks: [
      {
        type: 'p',
        text: 'M顶常被称为“双顶”，它描述的是上涨动能衰竭后的反转结构：两次冲高失败，中间形成回撤颈线。',
      },
      { type: 'h2', text: '你要看什么' },
      {
        type: 'ul',
        items: [
          '左顶：第一次冲高后的放量/缩量结构。',
          '右顶：再次冲高但无法创新高，或创新高失败回落。',
          '颈线：两顶之间回撤低点形成的关键价位。',
          '跌破颈线后的确认：放量下跌更有说服力。',
        ],
      },
      {
        type: 'callout',
        variant: 'warn',
        title: '形态不是魔法',
        text: '形态是“描述”，不是“保证”。把它当成风险识别工具：看到动能衰竭的结构，先问自己哪里该止损。',
      },
    ],
  },
  {
    id: 'a-ma',
    category_id: 'indicators',
    chapter_id: 'indicators-ch1',
    slug: 'ma',
    title: '均线（MA）',
    layout_type: 'standard',
    content_blocks: [
      {
        type: 'p',
        text: '均线是把价格“平滑”后的趋势参考。它不会预测未来，但能帮你用更少的噪音看趋势。',
      },
      { type: 'h2', text: '均线能解决什么' },
      {
        type: 'ul',
        items: [
          '趋势：向上/向下/震荡更容易辨认。',
          '支撑阻力：趋势行情中，均线常成为回踩参考。',
          '节奏：不同周期均线交叉，常用来描述多空转换。',
        ],
      },
    ],
  },
];

export const mockChartCases: Record<string, ChartCaseData> = {
  'case-m-top-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.4, low: 9.9, close: 10.3 },
      { time: '2025-01-03', open: 10.3, high: 10.8, low: 10.1, close: 10.7 },
      { time: '2025-01-06', open: 10.7, high: 11.2, low: 10.6, close: 11.1 },
      { time: '2025-01-07', open: 11.1, high: 11.5, low: 10.9, close: 11.0 },
      { time: '2025-01-08', open: 11.0, high: 11.3, low: 10.6, close: 10.7 },
      { time: '2025-01-09', open: 10.7, high: 10.9, low: 10.2, close: 10.3 },
      { time: '2025-01-10', open: 10.3, high: 10.7, low: 10.1, close: 10.6 },
      { time: '2025-01-13', open: 10.6, high: 11.0, low: 10.5, close: 10.9 },
      { time: '2025-01-14', open: 10.9, high: 11.2, low: 10.7, close: 11.0 },
      { time: '2025-01-15', open: 11.0, high: 11.1, low: 10.4, close: 10.5 }
    ],
    volumes: [
      { time: '2025-01-02', value: 1200000 },
      { time: '2025-01-03', value: 1650000 },
      { time: '2025-01-06', value: 2100000 },
      { time: '2025-01-07', value: 1900000 },
      { time: '2025-01-08', value: 1700000 },
      { time: '2025-01-09', value: 2300000 },
      { time: '2025-01-10', value: 1500000 },
      { time: '2025-01-13', value: 1400000 },
      { time: '2025-01-14', value: 1350000 },
      { time: '2025-01-15', value: 2600000 }
    ],
    spec: {
      markers: [
        { time: '2025-01-07', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '左顶' },
        { time: '2025-01-14', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '右顶' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' }
      ],
    },
  },
};

