import type { Article, ChartCaseData, NavigationTree } from '@/lib/types';

/**
 * 完整的导航树结构 - 包含所有股票形态和技术指标
 */
export const mockNavigationTree: NavigationTree = {
  categories: [
    // 股票起源
    {
      id: 'origins',
      name: '股票起源',
      chapters: [
        {
          id: 'origins-ch1',
          title: '第一章：从交易到证券',
          articles: [
            { slug: 'what-is-stock', title: '什么是股票？', layout_type: 'standard' },
          ],
        },
      ],
    },
    // 股票形态 - 反转形态
    {
      id: 'patterns-reversal',
      name: '股票形态',
      subTitle: '反转形态',
      chapters: [
        {
          id: 'patterns-ch1',
          title: '第一章：双顶与双底',
          articles: [
            { slug: 'm-top', title: 'M顶（双顶）', layout_type: 'split' },
            { slug: 'w-bottom', title: 'W底（双底）', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch2',
          title: '第二章：头肩形态',
          articles: [
            { slug: 'head-shoulders', title: '头肩顶', layout_type: 'split' },
            { slug: 'inverse-head-shoulders', title: '头肩底', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch3',
          title: '第三章：三重形态',
          articles: [
            { slug: 'triple-top', title: '三重顶', layout_type: 'split' },
            { slug: 'triple-bottom', title: '三重底', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch4',
          title: '第四章：圆弧形态',
          articles: [
            { slug: 'rounding-top', title: '圆顶', layout_type: 'split' },
            { slug: 'rounding-bottom', title: '圆底', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch5',
          title: '第五章：V型反转',
          articles: [
            { slug: 'v-top', title: '尖顶（V型反转）', layout_type: 'split' },
            { slug: 'v-bottom', title: '尖底（V型反转）', layout_type: 'split' },
          ],
        },
      ],
    },
    // 股票形态 - 持续形态
    {
      id: 'patterns-continuation',
      name: '股票形态',
      subTitle: '持续形态',
      chapters: [
        {
          id: 'patterns-ch6',
          title: '第一章：三角形形态',
          articles: [
            { slug: 'ascending-triangle', title: '上升三角形', layout_type: 'split' },
            { slug: 'descending-triangle', title: '下降三角形', layout_type: 'split' },
            { slug: 'symmetrical-triangle', title: '对称三角形', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch7',
          title: '第二章：旗形形态',
          articles: [
            { slug: 'bull-flag', title: '上升旗形', layout_type: 'split' },
            { slug: 'bear-flag', title: '下降旗形', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch8',
          title: '第三章：楔形形态',
          articles: [
            { slug: 'rising-wedge', title: '上升楔形', layout_type: 'split' },
            { slug: 'falling-wedge', title: '下降楔形', layout_type: 'split' },
          ],
        },
        {
          id: 'patterns-ch9',
          title: '第四章：矩形与杯柄',
          articles: [
            { slug: 'rectangle', title: '矩形整理', layout_type: 'split' },
            { slug: 'cup-handle', title: '杯柄形态', layout_type: 'split' },
          ],
        },
      ],
    },
    // 技术指标 - 趋势指标
    {
      id: 'indicators-trend',
      name: '技术指标',
      subTitle: '趋势类',
      chapters: [
        {
          id: 'indicators-ch1',
          title: '第一章：均线系统',
          articles: [
            { slug: 'ma', title: '均线（MA）', layout_type: 'standard' },
            { slug: 'ema', title: '指数移动平均线（EMA）', layout_type: 'standard' },
          ],
        },
        {
          id: 'indicators-ch2',
          title: '第二章：趋势指标',
          articles: [
            { slug: 'macd', title: 'MACD', layout_type: 'standard' },
            { slug: 'alligator', title: '鳄鱼指标', layout_type: 'standard' },
          ],
        },
      ],
    },
    // 技术指标 - 摆动指标
    {
      id: 'indicators-oscillator',
      name: '技术指标',
      subTitle: '摆动类',
      chapters: [
        {
          id: 'indicators-ch3',
          title: '第一章：超买超卖',
          articles: [
            { slug: 'rsi', title: 'RSI 相对强弱指标', layout_type: 'standard' },
            { slug: 'kdj', title: 'KDJ 随机指标', layout_type: 'standard' },
          ],
        },
        {
          id: 'indicators-ch4',
          title: '第二章：波动率指标',
          articles: [
            { slug: 'bollinger-bands', title: '布林带（BB）', layout_type: 'standard' },
            { slug: 'atr', title: 'ATR 平均真实波幅', layout_type: 'standard' },
          ],
        },
      ],
    },
    // 技术指标 - 成交量指标
    {
      id: 'indicators-volume',
      name: '技术指标',
      subTitle: '成交量类',
      chapters: [
        {
          id: 'indicators-ch5',
          title: '第一章：量价关系',
          articles: [
            { slug: 'obv', title: 'OBV 能量潮', layout_type: 'standard' },
            { slug: 'vol', title: '成交量VOL', layout_type: 'standard' },
          ],
        },
      ],
    },
    // 技术指标 - 均线组合
    {
      id: 'indicators-combo',
      name: '技术指标',
      subTitle: '组合应用',
      chapters: [
        {
          id: 'indicators-ch6',
          title: '第一章：均线组合',
          articles: [
            { slug: 'ma-combo', title: '均线金叉死叉', layout_type: 'standard' },
            { slug: 'bbi', title: 'BBI 多空指数', layout_type: 'standard' },
          ],
        },
      ],
    },
  ],
};

/**
 * 完整的文章内容数据
 */
export const mockArticles: Article[] = [
  // ========== 股票起源 ==========
  {
    id: 'a-what-is-stock',
    category_id: 'origins',
    chapter_id: 'origins-ch1',
    slug: 'what-is-stock',
    title: '什么是股票？',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '股票可以理解为一家公司所有权的一小份切片。买入股票，你就成为了公司的股东之一。' },
      { type: 'callout', variant: 'tip', title: '新手常见误区', text: '"股票=赌博"是常见误解。风险来自你是否理解交易对象，以及是否把概率和仓位当成纪律。' },
      { type: 'h2', text: '为什么会有价格波动？' },
      { type: 'ul', items: ['供需：买的人多，价格就会上去；卖的人多，价格就会下来。', '预期：市场交易的是"未来的想象"，不是"过去的报表"。', '流动性：交易越活跃，价格越容易被连续撮合推着走。'] },
    ],
  },

  // ========== 反转形态 - 双顶与双底 ==========
  {
    id: 'a-m-top',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch1',
    slug: 'm-top',
    title: 'M顶（双顶）',
    layout_type: 'split',
    chart_case_id: 'case-m-top-1',
    content_blocks: [
      { type: 'p', text: 'M顶常被称为"双顶"，是上涨趋势中常见的反转形态。它描述的是价格两次冲高失败，中间形成回撤颈线的结构。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['两个大致相同的高点（左顶和右顶）', '两个高点之间有明显的回撤低点', '颈线是两顶之间最低点的水平连线', '通常伴随成交量放大'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['右顶可以略低于或略高于左顶', '跌破颈线是确认信号', '跌破后常常出现回抽确认', '最小跌幅约等于顶部到颈线的距离'] },
      { type: 'callout', variant: 'warn', title: '风险提示', text: '形态是"描述"，不是"保证"。把它当成风险识别工具：看到动能衰竭的结构，先问自己哪里该止损。' },
    ],
  },
  {
    id: 'a-w-bottom',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch1',
    slug: 'w-bottom',
    title: 'W底（双底）',
    layout_type: 'split',
    chart_case_id: 'case-w-bottom-1',
    content_blocks: [
      { type: 'p', text: 'W底是双底的另一种叫法，是下跌趋势中常见的反转形态。两个相近的低点形成" W "字形，预示着价格可能由跌转涨。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['两个大致相同的低点（左底和右底）', '两个低点之间有明显的反弹高点', '颈线是两底之间最高点的水平连线', '右底成交量通常小于左底'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['突破颈线是买入信号', '突破时成交量放大更有说服力', '突破后常常回抽确认', '最小涨幅约等于底部到颈线的距离'] },
      { type: 'callout', variant: 'tip', title: '使用技巧', text: 'W底在长期横盘后的有效性更高，短期波动中的W底假突破较多。' },
    ],
  },

  // ========== 反转形态 - 头肩形态 ==========
  {
    id: 'a-head-shoulders',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch2',
    slug: 'head-shoulders',
    title: '头肩顶',
    layout_type: 'split',
    chart_case_id: 'case-head-shoulders-1',
    content_blocks: [
      { type: 'p', text: '头肩顶是技术分析中最经典的反转形态之一。它由左肩、头部和右肩三个部分组成，预示着上涨趋势即将结束。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['左肩：第一次上涨后回落，形成第一个高峰', '头部：价格继续上涨创出新高，随后回落', '右肩：第三次上涨但无法超过头部高点，然后下跌', '颈线：连接两个谷底的直线'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['右肩通常低于头部，也可能略高于或等于', '跌破颈线是确认信号', '跌破后跌幅通常是头部到颈线距离的1-2倍', '成交量在右肩处通常萎缩'] },
    ],
  },
  {
    id: 'a-inverse-head-shoulders',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch2',
    slug: 'inverse-head-shoulders',
    title: '头肩底',
    layout_type: 'split',
    chart_case_id: 'case-inverse-head-shoulders-1',
    content_blocks: [
      { type: 'p', text: '头肩底是头肩顶的镜像形态，是下跌趋势中常见的反转信号。三个低谷形成"头肩"的形状，预示着价格可能由跌转涨。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['左肩：第一次下跌后反弹，形成第一个谷底', '头部：价格继续下跌创出新低，随后反弹', '右肩：第三次下跌但无法跌破头部低点，然后上涨', '颈线：连接两个峰顶的直线'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['右肩成交量通常明显放大', '突破颈线需要成交量配合', '突破后涨幅通常是头部到颈线距离的1-2倍', '有时会出现回抽确认'] },
    ],
  },

  // ========== 反转形态 - 三重形态 ==========
  {
    id: 'a-triple-top',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch3',
    slug: 'triple-top',
    title: '三重顶',
    layout_type: 'split',
    chart_case_id: 'case-triple-top-1',
    content_blocks: [
      { type: 'p', text: '三重顶由三个相近的高点组成，是双重顶的延伸形态。三个高点都无法突破，表明上方抛压沉重。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['三个高点大致处于同一水平', '两个高点之间有明显的回落', '通常伴随成交量在第三次冲高时萎缩', '颈线是三个低点形成的支撑线'] },
      { type: 'h2', text: '与双顶的区别' },
      { type: 'ul', items: ['三重顶需要更多的时间形成', '三个高点的压力更明确', '跌破后的跌幅通常更大'] },
    ],
  },
  {
    id: 'a-triple-bottom',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch3',
    slug: 'triple-bottom',
    title: '三重底',
    layout_type: 'split',
    chart_case_id: 'case-triple-bottom-1',
    content_blocks: [
      { type: 'p', text: '三重底是三重顶的镜像形态，三个相近的低点表明下方支撑强劲，是中长期底部的常见形态。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['三个低点大致处于同一水平', '两个低点之间有明显的反弹', '右底成交量通常放大', '颈线是三个高点形成的阻力线'] },
      { type: 'h2', text: '交易策略' },
      { type: 'ul', items: ['突破颈线时买入', '回抽确认不破颈线加仓', '止损位设在第三个低点下方'] },
    ],
  },

  // ========== 反转形态 - 圆弧形态 ==========
  {
    id: 'a-rounding-top',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch4',
    slug: 'rounding-top',
    title: '圆顶',
    layout_type: 'split',
    chart_case_id: 'case-rounding-top-1',
    content_blocks: [
      { type: 'p', text: '圆顶是一种平缓的反转形态，价格在顶部区域形成圆弧形逐渐下降。它代表市场情绪从乐观逐渐转向谨慎的过程。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['顶部形成圆弧形，没有明显的峰值', '成交量通常随价格下降而萎缩', '形成时间较长，通常数周至数月', '跌破颈线时确认反转'] },
      { type: 'h2', text: '识别要点' },
      { type: 'ul', items: ['注意与横盘整理的区别', '圆顶通常伴随成交量逐步萎缩', '跌破弧形下沿（颈线）确认下跌开始'] },
    ],
  },
  {
    id: 'a-rounding-bottom',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch4',
    slug: 'rounding-bottom',
    title: '圆底',
    layout_type: 'split',
    chart_case_id: 'case-rounding-bottom-1',
    content_blocks: [
      { type: 'p', text: '圆底也称为"碟形底"，是一种平缓的趋势反转形态。价格从下跌逐渐转为横盘，再逐渐上升，形成圆弧形。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['底部形成圆弧形，没有明显的谷底', '成交量通常随价格上升而放大', '形成时间较长，是中长期底部信号', '突破颈线时确认上涨'] },
      { type: 'h2', text: '交易价值' },
      { type: 'ul', items: ['圆底是可靠性较高的反转形态', '突破后的涨幅通常可观', '适合中长线布局'] },
    ],
  },

  // ========== 反转形态 - V型反转 ==========
  {
    id: 'a-v-top',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch5',
    slug: 'v-top',
    title: '尖顶（V型反转）',
    layout_type: 'split',
    chart_case_id: 'case-v-top-1',
    content_blocks: [
      { type: 'p', text: 'V型反转是最剧烈的反转形态之一，价格在顶部快速上涨后突然快速下跌，形成"V"字形的左边。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上涨阶段陡峭，几乎没有回调', '顶部常常伴随放量长上影线', '下跌阶段同样陡峭', '成交量在转折点通常放大'] },
      { type: 'h2', text: '形成原因' },
      { type: 'ul', items: ['利好消息刺激的暴涨', '市场情绪过度乐观后的踩踏', '游资快速拉高出货'] },
      { type: 'callout', variant: 'warn', title: '风险提示', text: 'V型反转难以预测，右侧交易更安全。等趋势稳定后再入场。' },
    ],
  },
  {
    id: 'a-v-bottom',
    category_id: 'patterns-reversal',
    chapter_id: 'patterns-ch5',
    slug: 'v-bottom',
    title: '尖底（V型反转）',
    layout_type: 'split',
    chart_case_id: 'case-v-bottom-1',
    content_blocks: [
      { type: 'p', text: 'V型底也称为"尖底"或"恐慌底"，是下跌后快速反弹的形态。这种形态常常伴随着V形的右边快速上升。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['下跌阶段陡峭，常常伴随放量长下影线', '底部经常出现十字星或锤子线', '反弹阶段同样陡峭', '成交量在转折点通常放大'] },
      { type: 'h2', text: '识别技巧' },
      { type: 'ul', items: ['极端恐慌情绪导致的非理性下跌', '往往伴随利空消息的消化', '反弹后可能形成横盘整理'] },
    ],
  },

  // ========== 持续形态 - 三角形 ==========
  {
    id: 'a-ascending-triangle',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch6',
    slug: 'ascending-triangle',
    title: '上升三角形',
    layout_type: 'split',
    chart_case_id: 'case-ascending-triangle-1',
    content_blocks: [
      { type: 'p', text: '上升三角形是一种看涨的持续形态，高点水平但低点逐步抬高。它表明买方意愿越来越强。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上边：水平阻力线，多次测试不过', '下边：上升支撑线，低点逐步抬高', '成交量在形态内逐步萎缩', '向上突破是大概率事件'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['突破上边阻力线时买入', '突破时成交量放大更可靠', '止损位设在最后一个低点下方', '最小涨幅约等于三角形高度'] },
    ],
  },
  {
    id: 'a-descending-triangle',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch6',
    slug: 'descending-triangle',
    title: '下降三角形',
    layout_type: 'split',
    chart_case_id: 'case-descending-triangle-1',
    content_blocks: [
      { type: 'p', text: '下降三角形是一种看跌的持续形态，低点水平但高点逐步降低。它表明卖方压力越来越大。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['下边：水平支撑线，多次测试不破', '上边：下降阻力线，高点逐步降低', '成交量在形态内逐步萎缩', '向下突破是大概率事件'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['跌破下边支撑线时卖出', '跌破时成交量放大更可靠', '止损位设在最后一个高点上方'] },
    ],
  },
  {
    id: 'a-symmetrical-triangle',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch6',
    slug: 'symmetrical-triangle',
    title: '对称三角形',
    layout_type: 'split',
    chart_case_id: 'case-symmetrical-triangle-1',
    content_blocks: [
      { type: 'p', text: '对称三角形是收敛整理形态，高点降低、低点抬高。它表示市场暂时处于观望状态，等待突破方向。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上边下倾的高点连线', '下边上倾的低点连线', '成交量在形态内逐步萎缩', '向上向下突破概率相近'] },
      { type: 'h2', text: '交易策略' },
      { type: 'ul', items: ['等待突破后再顺势交易', '向上突破买入，向下突破卖出', '假突破后可能快速向反方向运行'] },
    ],
  },

  // ========== 持续形态 - 旗形 ==========
  {
    id: 'a-bull-flag',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch7',
    slug: 'bull-flag',
    title: '上升旗形',
    layout_type: 'split',
    chart_case_id: 'case-bull-flag-1',
    content_blocks: [
      { type: 'p', text: '上升旗形是强劲上涨后的整理形态，价格在旗面内小幅震荡，然后继续向上突破。它是上涨中继的经典形态。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['旗杆：急剧上涨的阶段', '旗面：向下倾斜的平行通道', '整理时间通常较短（1-3周）', '成交量在旗面内萎缩'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['突破上边时买入', '旗杆的高度约等于突破后的涨幅', '止损位设在旗面下边下方'] },
      { type: 'callout', variant: 'tip', title: '使用技巧', text: '旗形出现在强势上涨后，是"稍息"而非"休息"。' },
    ],
  },
  {
    id: 'a-bear-flag',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch7',
    slug: 'bear-flag',
    title: '下降旗形',
    layout_type: 'split',
    chart_case_id: 'case-bear-flag-1',
    content_blocks: [
      { type: 'p', text: '下降旗形是下跌后的整理形态，价格在旗面内小幅反弹，然后继续向下突破。它是下跌中继的经典形态。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['旗杆：急剧下跌的阶段', '旗面：向上倾斜的平行通道', '整理时间通常较短（1-3周）', '成交量在旗面内萎缩'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['跌破下边时卖出', '旗杆的高度约等于跌破后的跌幅', '止损位设在旗面上边上方'] },
    ],
  },

  // ========== 持续形态 - 楔形 ==========
  {
    id: 'a-rising-wedge',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch8',
    slug: 'rising-wedge',
    title: '上升楔形',
    layout_type: 'split',
    chart_case_id: 'case-rising-wedge-1',
    content_blocks: [
      { type: 'p', text: '上升楔形是高点和低点同时上升但幅度不同的形态。它通常出现在上涨末期，是看跌的信号。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上边和下边都向上倾斜', '上边斜率大于下边（开口收窄）', '成交量逐步萎缩', '最终向下突破'] },
      { type: 'h2', text: '与旗形的区别' },
      { type: 'ul', items: ['楔形的两条边同向倾斜', '楔形通常出现在趋势末端', '楔形整理后反向运行的概率高'] },
    ],
  },
  {
    id: 'a-falling-wedge',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch8',
    slug: 'falling-wedge',
    title: '下降楔形',
    layout_type: 'split',
    chart_case_id: 'case-falling-wedge-1',
    content_blocks: [
      { type: 'p', text: '下降楔形是高点和低点同时下降但幅度不同的形态。它通常出现在下跌末期，是看涨的信号。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上边和下边都向下倾斜', '下边斜率大于上边（开口收窄）', '成交量逐步萎缩', '最终向上突破'] },
      { type: 'h2', text: '交易价值' },
      { type: 'ul', items: ['下降楔形是可靠性较高的反转形态', '突破后涨幅通常可观', '止损位设在楔形下边下方'] },
    ],
  },

  // ========== 持续形态 - 矩形与杯柄 ==========
  {
    id: 'a-rectangle',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch9',
    slug: 'rectangle',
    title: '矩形整理',
    layout_type: 'split',
    chart_case_id: 'case-rectangle-1',
    content_blocks: [
      { type: 'p', text: '矩形整理是价格在两条平行水平线之间震荡的形态。它表示市场暂时处于平衡状态，等待突破方向。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['上边：多次测试的高点连线', '下边：多次测试的低点连线', '两条边水平平行', '成交量在形态内相对稳定'] },
      { type: 'h2', text: '交易策略' },
      { type: 'ul', items: ['突破上边买入，跌破下边卖出', '突破时成交量放大更可靠', '整理时间越长，突破后力度越大'] },
    ],
  },
  {
    id: 'a-cup-handle',
    category_id: 'patterns-continuation',
    chapter_id: 'patterns-ch9',
    slug: 'cup-handle',
    title: '杯柄形态',
    layout_type: 'split',
    chart_case_id: 'case-cup-handle-1',
    content_blocks: [
      { type: 'p', text: '杯柄形态是一种持续上涨的形态，形状像咖啡杯。它被认为是成功率较高的中长线买入信号。' },
      { type: 'h2', text: '形态特征' },
      { type: 'ul', items: ['杯身：圆弧形的下跌和上涨', '杯底：圆弧形的底部', '柄部：杯身后向下的小幅回调', '柄部通常在杯身高度的1/3以内'] },
      { type: 'h2', text: '交易要点' },
      { type: 'ul', items: ['突破柄部高点时买入', '杯身深度不应超过柄部起点的1/3', '成交量在杯身逐步放大', '止损位设在杯柄最低点下方'] },
    ],
  },

  // ========== 技术指标 - 均线系统 ==========
  {
    id: 'a-ma',
    category_id: 'indicators-trend',
    chapter_id: 'indicators-ch1',
    slug: 'ma',
    title: '均线（MA）',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '均线是把价格"平滑"后的趋势参考。它不会预测未来，但能帮你用更少的噪音看趋势。' },
      { type: 'h2', text: '均线能解决什么' },
      { type: 'ul', items: ['趋势：向上/向下/震荡更容易辨认', '支撑阻力：趋势行情中，均线常成为回踩参考', '节奏：不同周期均线交叉，常用来描述多空转换'] },
      { type: 'h2', text: '常见周期设置' },
      { type: 'ul', items: ['短期：5日、10日均线 - 反映近期价格走势', '中期：20日、30日、60日均线 - 反映中期趋势', '长期：120日、250日均线 - 反映长期趋势'] },
      { type: 'callout', variant: 'tip', title: '使用技巧', text: '均线不要设置太多，专注2-3条即可。周期太长反应迟钝，周期太短噪音太多。' },
    ],
  },
  {
    id: 'a-ema',
    category_id: 'indicators-trend',
    chapter_id: 'indicators-ch1',
    slug: 'ema',
    title: '指数移动平均线（EMA）',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'EMA是对近期价格给予更大权重的均线，比MA更敏感。它能更快反映价格变化，适合短线交易。' },
      { type: 'h2', text: '与MA的区别' },
      { type: 'ul', items: ['MA是简单平均，EMA是加权平均', 'EMA对近期价格反应更敏感', 'EMA在震荡行情中可能产生更多假信号'] },
      { type: 'h2', text: '常用EMA组合' },
      { type: 'ul', items: ['EMA(12) + EMA(26)：用于MACD计算', 'EMA(9)：常作为短期买卖信号', 'EMA(50) + EMA(200)：判断中长期趋势'] },
    ],
  },

  // ========== 技术指标 - 趋势指标 ==========
  {
    id: 'a-macd',
    category_id: 'indicators-trend',
    chapter_id: 'indicators-ch2',
    slug: 'macd',
    title: 'MACD',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'MACD（Moving Average Convergence Divergence）是最常用的趋势动量指标，由Gerald Appel创建。它通过比较不同周期的EMA来判断趋势方向和动能。' },
      { type: 'h2', text: '三个核心组件' },
      { type: 'ul', items: ['DIF线：EMA(12) - EMA(26)，反映短期与长期的差异', 'DEA线：DIF的EMA(9)，对DIF进一步平滑', 'MACD柱：(DIF - DEA) × 2，反映两者的差值'] },
      { type: 'h2', text: '四种基本信号' },
      { type: 'ul', items: ['金叉：DIF上穿DEA，看涨信号', '死叉：DIF下穿DEA，看跌信号', '顶背离：价格创新高但MACD没有，看跌', '底背离：价格创新低但MACD没有，看涨'] },
      { type: 'callout', variant: 'tip', title: '使用技巧', text: 'MACD在震荡行情中容易失效。建议结合趋势指标（如均线）使用，过滤假信号。' },
    ],
  },
  {
    id: 'a-alligator',
    category_id: 'indicators-trend',
    chapter_id: 'indicators-ch2',
    slug: 'alligator',
    title: '鳄鱼指标',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '鳄鱼指标（Alligator）由Bill Williams发明，是一个趋势跟踪指标。它的三条均线像鳄鱼的嘴巴一样张开或闭合，用来判断市场是趋势还是震荡。' },
      { type: 'h2', text: '三条均线（鳄鱼的嘴巴）' },
      { type: 'ul', items: ['蓝线（唇部）：EMA(5)，代表短期观点', '红线（牙齿）：EMA(8)，代表中期观点', '绿线（颚部）：EMA(13)，代表长期观点'] },
      { type: 'h2', text: '交易信号' },
      { type: 'ul', items: ['三线向上张开：上涨趋势，积极做多', '三线向下张开：下跌趋势，积极做空', '三线缠绕：震荡行情，保持观望'] },
    ],
  },

  // ========== 技术指标 - 摆动指标 ==========
  {
    id: 'a-rsi',
    category_id: 'indicators-oscillator',
    chapter_id: 'indicators-ch3',
    slug: 'rsi',
    title: 'RSI 相对强弱指标',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'RSI（Relative Strength Index）是最常用的超买超卖指标之一，由J. Welles Wilder Jr.创立。它通过比较一定周期内的上涨和下跌幅度来判断价格的强弱。' },
      { type: 'h2', text: '数值含义' },
      { type: 'ul', items: ['RSI > 70：超买区，价格可能过热', 'RSI < 30：超卖区，价格可能超跌', 'RSI = 50：多空平衡点'] },
      { type: 'h2', text: '三种用法' },
      { type: 'ul', items: ['超买超卖：RSI进入70以上准备卖出，进入30以下准备买入', '背离：价格创新高但RSI没有，预示趋势可能反转', '形态：RSI形成的支撑阻力线比价格更可靠'] },
      { type: 'callout', variant: 'warn', title: '注意事项', text: 'RSI在强势趋势中可能长期维持在超买/超卖区，此时不宜逆势操作。' },
    ],
  },
  {
    id: 'a-kdj',
    category_id: 'indicators-oscillator',
    chapter_id: 'indicators-ch3',
    slug: 'kdj',
    title: 'KDJ 随机指标',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'KDJ随机指标由George Lane发明，是一种超买超卖指标。它通过比较收盘价与一定周期内的最高价和最低价来判断价格的相对位置。' },
      { type: 'h2', text: '三个数值' },
      { type: 'ul', items: ['K值：快速随机指标，对价格变化敏感', 'D值：慢速随机指标，是K值的平滑', 'J值：3 × K - 2 × D，波动最剧烈'] },
      { type: 'h2', text: '交易信号' },
      { type: 'ul', items: ['K值上穿D值（金叉）：买入信号，尤其在20以下', 'K值下穿D值（死叉）：卖出信号，尤其在80以上', 'J值 > 100：超买，可能见顶', 'J值 < 0：超卖，可能见底'] },
    ],
  },

  // ========== 技术指标 - 波动率指标 ==========
  {
    id: 'a-bollinger-bands',
    category_id: 'indicators-oscillator',
    chapter_id: 'indicators-ch4',
    slug: 'bollinger-bands',
    title: '布林带（BB）',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '布林带（Bollinger Bands）由John Bollinger发明，是一种结合了趋势和波动率的指标。它由三条线组成，可以直观显示价格的相对高低和波动程度。' },
      { type: 'h2', text: '三条轨道' },
      { type: 'ul', items: ['中轨：20日简单移动平均线（MA20）', '上轨：中轨 + 2倍标准差', '下轨：中轨 - 2倍标准差'] },
      { type: 'h2', text: '核心用法' },
      { type: 'ul', items: ['价格触及上轨：可能过热，注意回调', '价格触及下轨：可能超跌，注意反弹', '布林带收窄：波动率低，可能迎来突破', '布林带开口：波动率放大，趋势加速'] },
      { type: 'callout', variant: 'tip', title: '进阶用法', text: '结合RSI使用效果更好：当价格触及上轨且RSI超买时，看跌信号更可靠。' },
    ],
  },
  {
    id: 'a-atr',
    category_id: 'indicators-oscillator',
    chapter_id: 'indicators-ch4',
    slug: 'atr',
    title: 'ATR 平均真实波幅',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'ATR（Average True Range）是衡量价格波动幅度的指标，由J. Welles Wilder Jr.创立。它不考虑方向，只反映价格的波动程度。' },
      { type: 'h2', text: '计算方法' },
      { type: 'ul', items: ['真实波幅（TR）= max(最高-最低, |最高-前收盘|, |最低-前收盘|)', 'ATR = TR的14日简单平均'] },
      { type: 'h2', text: '实际应用' },
      { type: 'ul', items: ['设置止损：止损位 = 入场价 - 2×ATR', '判断趋势：ATR上升表示波动加大，趋势可能加速', '选择交易品种：ATR大的品种波动大，潜在收益和风险都高'] },
    ],
  },

  // ========== 技术指标 - 成交量指标 ==========
  {
    id: 'a-obv',
    category_id: 'indicators-volume',
    chapter_id: 'indicators-ch5',
    slug: 'obv',
    title: 'OBV 能量潮',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'OBV（On-Balance Volume）能量潮是由Joe Granville发明的一种累计成交量指标。它通过将成交量与价格涨跌联系起来，判断资金是流入还是流出。' },
      { type: 'h2', text: '计算方法' },
      { type: 'ul', items: ['上涨日：OBV = 前一日OBV + 当日成交量', '下跌日：OBV = 前一日OBV - 当日成交量', '平盘日：OBV不变'] },
      { type: 'h2', text: '用法' },
      { type: 'ul', items: ['OBV与价格同步上涨：上涨趋势健康', 'OBV与价格背离：趋势可能即将反转', 'OBV突破前高：预示价格可能创新高'] },
    ],
  },
  {
    id: 'a-vol',
    category_id: 'indicators-volume',
    chapter_id: 'indicators-ch5',
    slug: 'vol',
    title: '成交量VOL',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '成交量是技术分析的基础，它反映了市场的参与度和活跃程度。"量在价先"是技术分析的重要原则之一。' },
      { type: 'h2', text: '量价关系' },
      { type: 'ul', items: ['价涨量增：健康的上涨趋势', '价涨量缩：可能上涨乏力', '价跌量增：恐慌性抛售，可能见底', '价跌量缩：下跌动能减弱，可能见底'] },
      { type: 'h2', text: '关键信号' },
      { type: 'ul', items: ['放量突破：突破有效信号', '缩量回调：回调可能是机会', '天量：历史最大成交量，往往是顶部', '地量：历史最小成交量，往往是底部'] },
    ],
  },

  // ========== 技术指标 - 组合应用 ==========
  {
    id: 'a-ma-combo',
    category_id: 'indicators-combo',
    chapter_id: 'indicators-ch6',
    slug: 'ma-combo',
    title: '均线金叉死叉',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: '均线金叉死叉是最基础的均线交易系统。通过不同周期均线的交叉来判断趋势的转换。' },
      { type: 'h2', text: '金叉（买入信号）' },
      { type: 'ul', items: ['短期均线上穿长期均线', '例如：5日上穿10日，20日上穿60日', '金叉时成交量放大更可靠', '在上升趋势中金叉更有效'] },
      { type: 'h2', text: '死叉（卖出信号）' },
      { type: 'ul', items: ['短期均线下穿长期均线', '死叉时成交量放大更可靠', '在下降趋势中死叉更有效'] },
      { type: 'callout', variant: 'tip', title: '常见组合', text: '短线：5日+10日 | 中线：20日+60日 | 长线：120日+250日' },
    ],
  },
  {
    id: 'a-bbi',
    category_id: 'indicators-combo',
    chapter_id: 'indicators-ch6',
    slug: 'bbi',
    title: 'BBI 多空指数',
    layout_type: 'standard',
    content_blocks: [
      { type: 'p', text: 'BBI（Bull and Bear Index）多空指数是一种综合多条均线的指标。它通过将不同周期的平均价格综合，来判断多空双方的力量对比。' },
      { type: 'h2', text: '计算方法' },
      { type: 'ul', items: ['BBI = (MA3 + MA6 + MA12 + MA24) / 4', '其中MA3是3日均线，MA6是6日均线，以此类推'] },
      { type: 'h2', text: '用法' },
      { type: 'ul', items: ['价格在BBI上方：多头市场', '价格在BBI下方：空头市场', 'BBI走平：市场处于盘整', 'BBI向上倾斜：多头占优'] },
    ],
  },
];

/**
 * 完整的图表案例数据
 */
export const mockChartCases: Record<string, ChartCaseData> = {
  // ========== 反转形态案例 ==========
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
      { time: '2025-01-15', open: 11.0, high: 11.1, low: 10.4, close: 10.5 },
      { time: '2025-01-16', open: 10.5, high: 10.6, low: 9.8, close: 9.9 },
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
      { time: '2025-01-15', value: 2600000 },
      { time: '2025-01-16', value: 3200000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-07', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '左顶' },
        { time: '2025-01-14', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '右顶' },
        { time: '2025-01-16', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' },
      ],
    },
  },

  'case-w-bottom-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.2, low: 11.5, close: 11.6 },
      { time: '2025-01-03', open: 11.6, high: 11.8, low: 11.0, close: 11.2 },
      { time: '2025-01-06', open: 11.2, high: 11.3, low: 10.5, close: 10.6 },
      { time: '2025-01-07', open: 10.6, high: 10.8, low: 10.2, close: 10.3 },
      { time: '2025-01-08', open: 10.3, high: 10.5, low: 10.0, close: 10.2 },
      { time: '2025-01-09', open: 10.2, high: 10.4, low: 10.1, close: 10.3 },
      { time: '2025-01-10', open: 10.3, high: 10.6, low: 10.2, close: 10.5 },
      { time: '2025-01-13', open: 10.5, high: 10.9, low: 10.4, close: 10.8 },
      { time: '2025-01-14', open: 10.8, high: 11.0, low: 10.5, close: 10.6 },
      { time: '2025-01-15', open: 10.6, high: 10.7, low: 10.2, close: 10.3 },
      { time: '2025-01-16', open: 10.3, high: 10.8, low: 10.2, close: 10.7 },
      { time: '2025-01-17', open: 10.7, high: 11.2, low: 10.6, close: 11.1 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1800000 },
      { time: '2025-01-03', value: 2200000 },
      { time: '2025-01-06', value: 2800000 },
      { time: '2025-01-07', value: 2000000 },
      { time: '2025-01-08', value: 1500000 },
      { time: '2025-01-09', value: 1200000 },
      { time: '2025-01-10', value: 1100000 },
      { time: '2025-01-13', value: 1300000 },
      { time: '2025-01-14', value: 1400000 },
      { time: '2025-01-15', value: 1200000 },
      { time: '2025-01-16', value: 1800000 },
      { time: '2025-01-17', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-06', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '左底' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '右底' },
        { time: '2025-01-17', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 头肩顶案例
  'case-head-shoulders-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.5, low: 9.8, close: 10.3 },
      { time: '2025-01-03', open: 10.3, high: 10.8, low: 10.2, close: 10.6 },
      { time: '2025-01-06', open: 10.6, high: 11.0, low: 10.5, close: 10.8 },
      { time: '2025-01-07', open: 10.8, high: 11.5, low: 10.7, close: 11.3 },
      { time: '2025-01-08', open: 11.3, high: 11.8, low: 11.1, close: 11.5 }, // 左肩
      { time: '2025-01-09', open: 11.5, high: 11.6, low: 11.0, close: 11.2 },
      { time: '2025-01-10', open: 11.2, high: 11.3, low: 10.8, close: 10.9 },
      { time: '2025-01-13', open: 10.9, high: 11.0, low: 10.5, close: 10.6 },
      { time: '2025-01-14', open: 10.6, high: 10.8, low: 10.4, close: 10.5 },
      { time: '2025-01-15', open: 10.5, high: 11.2, low: 10.4, close: 11.0 },
      { time: '2025-01-16', open: 11.0, high: 12.0, low: 10.9, close: 11.8 }, // 头
      { time: '2025-01-17', open: 11.8, high: 11.9, low: 11.3, close: 11.5 },
      { time: '2025-01-20', open: 11.5, high: 11.6, low: 11.0, close: 11.2 },
      { time: '2025-01-21', open: 11.2, high: 11.3, low: 10.7, close: 10.8 },
      { time: '2025-01-22', open: 10.8, high: 10.9, low: 10.5, close: 10.6 },
      { time: '2025-01-23', open: 10.6, high: 11.5, low: 10.5, close: 11.3 }, // 右肩
      { time: '2025-01-24', open: 11.3, high: 11.4, low: 10.8, close: 10.9 },
      { time: '2025-01-27', open: 10.9, high: 11.0, low: 10.5, close: 10.6 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1200000 },
      { time: '2025-01-07', value: 2000000 },
      { time: '2025-01-08', value: 2500000 },
      { time: '2025-01-16', value: 3500000 },
      { time: '2025-01-23', value: 2200000 },
      { time: '2025-01-27', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-08', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '左肩' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '头' },
        { time: '2025-01-23', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '右肩' },
      ],
    },
  },

  // 头肩底案例
  'case-inverse-head-shoulders-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.2, low: 11.5, close: 11.6 },
      { time: '2025-01-03', open: 11.6, high: 11.7, low: 11.0, close: 11.2 },
      { time: '2025-01-06', open: 11.2, high: 11.3, low: 10.5, close: 10.6 }, // 左肩
      { time: '2025-01-07', open: 10.6, high: 10.7, low: 10.2, close: 10.4 },
      { time: '2025-01-08', open: 10.4, high: 10.5, low: 9.8, close: 10.0 },
      { time: '2025-01-09', open: 10.0, high: 10.2, low: 9.5, close: 9.6 }, // 头
      { time: '2025-01-10', open: 9.6, high: 9.8, low: 9.5, close: 9.7 },
      { time: '2025-01-13', open: 9.7, high: 10.0, low: 9.6, close: 9.9 },
      { time: '2025-01-14', open: 9.9, high: 10.1, low: 9.8, close: 10.0 },
      { time: '2025-01-15', open: 10.0, high: 10.2, low: 9.7, close: 9.8 },
      { time: '2025-01-16', open: 9.8, high: 9.9, low: 9.6, close: 9.7 }, // 右肩
      { time: '2025-01-17', open: 9.7, high: 10.3, low: 9.6, close: 10.2 },
      { time: '2025-01-20', open: 10.2, high: 10.8, low: 10.1, close: 10.6 },
    ],
    volumes: [
      { time: '2025-01-06', value: 3000000 },
      { time: '2025-01-09', value: 3500000 },
      { time: '2025-01-16', value: 2200000 },
      { time: '2025-01-20', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-06', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '左肩' },
        { time: '2025-01-09', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '头' },
        { time: '2025-01-16', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '右肩' },
      ],
    },
  },

  // 三重顶案例
  'case-triple-top-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 11.0, low: 9.9, close: 10.8 },
      { time: '2025-01-03', open: 10.8, high: 11.2, low: 10.7, close: 11.0 },
      { time: '2025-01-06', open: 11.0, high: 11.5, low: 10.9, close: 11.3 }, // 顶1
      { time: '2025-01-07', open: 11.3, high: 11.4, low: 10.8, close: 10.9 },
      { time: '2025-01-08', open: 10.9, high: 11.0, low: 10.5, close: 10.6 },
      { time: '2025-01-09', open: 10.6, high: 10.7, low: 10.2, close: 10.3 },
      { time: '2025-01-10', open: 10.3, high: 10.8, low: 10.2, close: 10.7 },
      { time: '2025-01-13', open: 10.7, high: 11.4, low: 10.6, close: 11.2 }, // 顶2
      { time: '2025-01-14', open: 11.2, high: 11.3, low: 10.8, close: 10.9 },
      { time: '2025-01-15', open: 10.9, high: 11.0, low: 10.5, close: 10.6 },
      { time: '2025-01-16', open: 10.6, high: 10.7, low: 10.2, close: 10.4 },
      { time: '2025-01-17', open: 10.4, high: 11.3, low: 10.3, close: 11.1 }, // 顶3
      { time: '2025-01-20', open: 11.1, high: 11.2, low: 10.6, close: 10.7 },
      { time: '2025-01-21', open: 10.7, high: 10.8, low: 10.3, close: 10.4 },
    ],
    volumes: [
      { time: '2025-01-06', value: 2500000 },
      { time: '2025-01-13', value: 2300000 },
      { time: '2025-01-17', value: 2400000 },
      { time: '2025-01-21', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-06', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '顶1' },
        { time: '2025-01-13', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '顶2' },
        { time: '2025-01-17', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '顶3' },
      ],
    },
  },

  // 圆底案例
  'case-rounding-bottom-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.1, low: 11.8, close: 11.9 },
      { time: '2025-01-03', open: 11.9, high: 12.0, low: 11.5, close: 11.6 },
      { time: '2025-01-06', open: 11.6, high: 11.7, low: 11.2, close: 11.3 },
      { time: '2025-01-07', open: 11.3, high: 11.4, low: 10.8, close: 10.9 },
      { time: '2025-01-08', open: 10.9, high: 11.0, low: 10.5, close: 10.6 },
      { time: '2025-01-09', open: 10.6, high: 10.7, low: 10.2, close: 10.3 },
      { time: '2025-01-10', open: 10.3, high: 10.4, low: 10.0, close: 10.1 },
      { time: '2025-01-13', open: 10.1, high: 10.2, low: 9.8, close: 9.9 },
      { time: '2025-01-14', open: 9.9, high: 10.0, low: 9.7, close: 9.8 },
      { time: '2025-01-15', open: 9.8, high: 9.9, low: 9.6, close: 9.7 }, // 最低点
      { time: '2025-01-16', open: 9.7, high: 9.9, low: 9.7, close: 9.8 },
      { time: '2025-01-17', open: 9.8, high: 10.0, low: 9.8, close: 9.9 },
      { time: '2025-01-20', open: 9.9, high: 10.2, low: 9.9, close: 10.1 },
      { time: '2025-01-21', open: 10.1, high: 10.4, low: 10.0, close: 10.3 },
      { time: '2025-01-22', open: 10.3, high: 10.6, low: 10.2, close: 10.5 },
      { time: '2025-01-23', open: 10.5, high: 10.9, low: 10.4, close: 10.8 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1500000 },
      { time: '2025-01-10', value: 800000 },
      { time: '2025-01-15', value: 600000 },
      { time: '2025-01-23', value: 2000000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '底部' },
        { time: '2025-01-23', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 上升三角形案例
  'case-ascending-triangle-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.5, low: 9.9, close: 10.3 },
      { time: '2025-01-03', open: 10.3, high: 10.4, low: 10.0, close: 10.1 },
      { time: '2025-01-06', open: 10.1, high: 10.3, low: 9.9, close: 10.2 },
      { time: '2025-01-07', open: 10.2, high: 10.5, low: 10.1, close: 10.4 },
      { time: '2025-01-08', open: 10.4, high: 10.5, low: 10.2, close: 10.3 },
      { time: '2025-01-09', open: 10.3, high: 10.4, low: 10.0, close: 10.1 },
      { time: '2025-01-10', open: 10.1, high: 10.3, low: 10.0, close: 10.2 },
      { time: '2025-01-13', open: 10.2, high: 10.5, low: 10.1, close: 10.4 },
      { time: '2025-01-14', open: 10.4, high: 10.5, low: 10.2, close: 10.3 },
      { time: '2025-01-15', open: 10.3, high: 10.4, low: 9.9, close: 10.0 },
      { time: '2025-01-16', open: 10.0, high: 10.2, low: 9.9, close: 10.1 },
      { time: '2025-01-17', open: 10.1, high: 10.6, low: 10.0, close: 10.5 }, // 突破
    ],
    volumes: [
      { time: '2025-01-02', value: 1000000 },
      { time: '2025-01-07', value: 800000 },
      { time: '2025-01-14', value: 900000 },
      { time: '2025-01-17', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-07', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '阻力' },
        { time: '2025-01-17', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 上升旗形案例
  'case-bull-flag-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.5, low: 9.9, close: 10.4 },
      { time: '2025-01-03', open: 10.4, high: 11.0, low: 10.3, close: 10.9 }, // 旗杆开始
      { time: '2025-01-06', open: 10.9, high: 11.5, low: 10.8, close: 11.3 },
      { time: '2025-01-07', open: 11.3, high: 12.0, low: 11.2, close: 11.8 },
      { time: '2025-01-08', open: 11.8, high: 12.5, low: 11.7, close: 12.3 }, // 旗杆结束
      { time: '2025-01-09', open: 12.3, high: 12.4, low: 12.0, close: 12.2 }, // 旗面开始
      { time: '2025-01-10', open: 12.2, high: 12.3, low: 12.0, close: 12.1 },
      { time: '2025-01-13', open: 12.1, high: 12.2, low: 11.9, close: 12.0 },
      { time: '2025-01-14', open: 12.0, high: 12.1, low: 11.8, close: 11.9 },
      { time: '2025-01-15', open: 11.9, high: 12.0, low: 11.7, close: 11.8 },
      { time: '2025-01-16', open: 11.8, high: 12.8, low: 11.7, close: 12.6 }, // 突破
    ],
    volumes: [
      { time: '2025-01-03', value: 2000000 },
      { time: '2025-01-08', value: 3500000 },
      { time: '2025-01-14', value: 800000 },
      { time: '2025-01-16', value: 3000000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-08', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '旗杆' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 下降楔形案例
  'case-falling-wedge-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.2, low: 11.5, close: 11.6 },
      { time: '2025-01-03', open: 11.6, high: 11.8, low: 11.0, close: 11.2 },
      { time: '2025-01-06', open: 11.2, high: 11.4, low: 10.6, close: 10.7 },
      { time: '2025-01-07', open: 10.7, high: 10.9, low: 10.3, close: 10.4 },
      { time: '2025-01-08', open: 10.4, high: 10.6, low: 10.0, close: 10.1 },
      { time: '2025-01-09', open: 10.1, high: 10.3, low: 9.8, close: 9.9 },
      { time: '2025-01-10', open: 9.9, high: 10.1, low: 9.6, close: 9.7 },
      { time: '2025-01-13', open: 9.7, high: 9.9, low: 9.5, close: 9.6 },
      { time: '2025-01-14', open: 9.6, high: 9.8, low: 9.4, close: 9.5 },
      { time: '2025-01-15', open: 9.5, high: 9.7, low: 9.3, close: 9.4 },
      { time: '2025-01-16', open: 9.4, high: 10.2, low: 9.3, close: 10.0 }, // 突破
    ],
    volumes: [
      { time: '2025-01-02', value: 2000000 },
      { time: '2025-01-08', value: 1800000 },
      { time: '2025-01-14', value: 600000 },
      { time: '2025-01-16', value: 2200000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'square', text: '楔形' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 矩形整理案例
  'case-rectangle-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.5, low: 9.9, close: 10.3 },
      { time: '2025-01-03', open: 10.3, high: 10.4, low: 9.9, close: 10.0 },
      { time: '2025-01-06', open: 10.0, high: 10.5, low: 9.9, close: 10.4 },
      { time: '2025-01-07', open: 10.4, high: 10.5, low: 10.0, close: 10.1 },
      { time: '2025-01-08', open: 10.1, high: 10.4, low: 10.0, close: 10.3 },
      { time: '2025-01-09', open: 10.3, high: 10.5, low: 10.2, close: 10.4 },
      { time: '2025-01-10', open: 10.4, high: 10.5, low: 10.1, close: 10.2 },
      { time: '2025-01-13', open: 10.2, high: 10.4, low: 10.1, close: 10.3 },
      { time: '2025-01-14', open: 10.3, high: 10.5, low: 10.2, close: 10.4 },
      { time: '2025-01-15', open: 10.4, high: 10.5, low: 10.0, close: 10.1 },
      { time: '2025-01-16', open: 10.1, high: 10.6, low: 10.0, close: 10.5 }, // 向上突破
    ],
    volumes: [
      { time: '2025-01-02', value: 1200000 },
      { time: '2025-01-08', value: 1000000 },
      { time: '2025-01-14', value: 1100000 },
      { time: '2025-01-16', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-03', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '上轨' },
        { time: '2025-01-10', position: 'belowBar', color: '#26a69a', shape: 'square', text: '下轨' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 杯柄形态案例
  'case-cup-handle-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.2, low: 9.8, close: 10.1 },
      { time: '2025-01-03', open: 10.1, high: 10.3, low: 9.7, close: 9.8 },
      { time: '2025-01-06', open: 9.8, high: 9.9, low: 9.3, close: 9.4 },
      { time: '2025-01-07', open: 9.4, high: 9.5, low: 9.0, close: 9.1 },
      { time: '2025-01-08', open: 9.1, high: 9.2, low: 8.8, close: 8.9 }, // 杯底
      { time: '2025-01-09', open: 8.9, high: 9.0, low: 8.7, close: 8.8 },
      { time: '2025-01-10', open: 8.8, high: 9.0, low: 8.8, close: 8.9 },
      { time: '2025-01-13', open: 8.9, high: 9.2, low: 8.9, close: 9.1 },
      { time: '2025-01-14', open: 9.1, high: 9.4, low: 9.0, close: 9.3 },
      { time: '2025-01-15', open: 9.3, high: 9.6, low: 9.2, close: 9.5 },
      { time: '2025-01-16', open: 9.5, high: 9.8, low: 9.4, close: 9.7 }, // 杯身右沿
      { time: '2025-01-17', open: 9.7, high: 9.8, low: 9.5, close: 9.6 }, // 柄开始
      { time: '2025-01-20', open: 9.6, high: 9.7, low: 9.5, close: 9.55 },
      { time: '2025-01-21', open: 9.55, high: 10.0, low: 9.5, close: 9.9 }, // 突破
    ],
    volumes: [
      { time: '2025-01-02', value: 1000000 },
      { time: '2025-01-08', value: 2500000 },
      { time: '2025-01-17', value: 800000 },
      { time: '2025-01-21', value: 2200000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-08', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '杯底' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '杯沿' },
        { time: '2025-01-21', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // V型底案例
  'case-v-bottom-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.5, low: 11.8, close: 12.3 },
      { time: '2025-01-03', open: 12.3, high: 12.8, low: 12.0, close: 12.5 },
      { time: '2025-01-06', open: 12.5, high: 13.0, low: 12.2, close: 12.4 },
      { time: '2025-01-07', open: 12.4, high: 12.6, low: 11.5, close: 11.6 },
      { time: '2025-01-08', open: 11.6, high: 11.8, low: 10.8, close: 10.9 },
      { time: '2025-01-09', open: 10.9, high: 11.0, low: 10.0, close: 10.2 },
      { time: '2025-01-10', open: 10.2, high: 10.5, low: 9.5, close: 9.6 }, // V底
      { time: '2025-01-13', open: 9.6, high: 10.2, low: 9.5, close: 10.0 },
      { time: '2025-01-14', open: 10.0, high: 10.8, low: 9.9, close: 10.6 },
      { time: '2025-01-15', open: 10.6, high: 11.2, low: 10.5, close: 11.0 },
      { time: '2025-01-16', open: 11.0, high: 11.5, low: 10.9, close: 11.3 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1800000 },
      { time: '2025-01-10', value: 3500000 },
      { time: '2025-01-14', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-10', position: 'belowBar', color: '#26a69a', shape: 'circle', text: 'V底' },
        { time: '2025-01-16', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '反弹' },
      ],
    },
  },

  // 下降三角形案例
  'case-descending-triangle-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.5, low: 11.9, close: 12.3 },
      { time: '2025-01-03', open: 12.3, high: 12.8, low: 12.0, close: 12.5 },
      { time: '2025-01-06', open: 12.5, high: 13.0, low: 12.4, close: 12.8 },
      { time: '2025-01-07', open: 12.8, high: 13.2, low: 12.7, close: 13.0 },
      { time: '2025-01-08', open: 13.0, high: 13.3, low: 12.9, close: 13.1 },
      { time: '2025-01-09', open: 13.1, high: 13.2, low: 12.5, close: 12.6 },
      { time: '2025-01-10', open: 12.6, high: 12.7, low: 12.0, close: 12.1 },
      { time: '2025-01-13', open: 12.1, high: 12.2, low: 11.5, close: 11.6 },
      { time: '2025-01-14', open: 11.6, high: 11.7, low: 11.0, close: 11.1 },
      { time: '2025-01-15', open: 11.1, high: 11.2, low: 10.5, close: 10.6 }, // 跌破
    ],
    volumes: [
      { time: '2025-01-02', value: 1500000 },
      { time: '2025-01-07', value: 2000000 },
      { time: '2025-01-14', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-10', position: 'belowBar', color: '#26a69a', shape: 'square', text: '支撑' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' },
      ],
    },
  },

  // 对称三角形案例
  'case-symmetrical-triangle-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.8, low: 9.9, close: 10.6 },
      { time: '2025-01-03', open: 10.6, high: 10.7, low: 10.0, close: 10.2 },
      { time: '2025-01-06', open: 10.2, high: 10.6, low: 10.1, close: 10.4 },
      { time: '2025-01-07', open: 10.4, high: 10.5, low: 10.0, close: 10.1 },
      { time: '2025-01-08', open: 10.1, high: 10.4, low: 10.0, close: 10.3 },
      { time: '2025-01-09', open: 10.3, high: 10.4, low: 10.0, close: 10.1 },
      { time: '2025-01-10', open: 10.1, high: 10.3, low: 9.9, close: 10.0 },
      { time: '2025-01-13', open: 10.0, high: 10.2, low: 9.9, close: 10.1 },
      { time: '2025-01-14', open: 10.1, high: 10.2, low: 9.8, close: 9.9 },
      { time: '2025-01-15', open: 9.9, high: 10.5, low: 9.8, close: 10.4 }, // 向上突破
    ],
    volumes: [
      { time: '2025-01-02', value: 2000000 },
      { time: '2025-01-08', value: 1000000 },
      { time: '2025-01-14', value: 800000 },
      { time: '2025-01-15', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-02', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '上压' },
        { time: '2025-01-10', position: 'belowBar', color: '#26a69a', shape: 'square', text: '下支' },
        { time: '2025-01-15', position: 'aboveBar', color: '#ef5350', shape: 'arrowUp', text: '突破' },
      ],
    },
  },

  // 上升楔形案例
  'case-rising-wedge-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.3, low: 9.9, close: 10.2 },
      { time: '2025-01-03', open: 10.2, high: 10.6, low: 10.1, close: 10.5 },
      { time: '2025-01-06', open: 10.5, high: 10.9, low: 10.4, close: 10.8 },
      { time: '2025-01-07', open: 10.8, high: 11.2, low: 10.7, close: 11.0 },
      { time: '2025-01-08', open: 11.0, high: 11.3, low: 10.9, close: 11.2 },
      { time: '2025-01-09', open: 11.2, high: 11.5, low: 11.1, close: 11.3 },
      { time: '2025-01-10', open: 11.3, high: 11.6, low: 11.2, close: 11.4 },
      { time: '2025-01-13', open: 11.4, high: 11.6, low: 11.3, close: 11.5 },
      { time: '2025-01-14', open: 11.5, high: 11.7, low: 11.4, close: 11.55 },
      { time: '2025-01-15', open: 11.55, high: 11.6, low: 11.0, close: 11.1 }, // 跌破
    ],
    volumes: [
      { time: '2025-01-02', value: 1000000 },
      { time: '2025-01-07', value: 1800000 },
      { time: '2025-01-14', value: 600000 },
      { time: '2025-01-15', value: 2500000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-07', position: 'aboveBar', color: '#ef5350', shape: 'square', text: '上轨' },
        { time: '2025-01-10', position: 'belowBar', color: '#26a69a', shape: 'square', text: '下轨' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' },
      ],
    },
  },

  // 下降旗形案例
  'case-bear-flag-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.1, low: 11.5, close: 11.6 },
      { time: '2025-01-03', open: 11.6, high: 11.7, low: 11.0, close: 11.1 }, // 旗杆开始
      { time: '2025-01-06', open: 11.1, high: 11.2, low: 10.5, close: 10.6 },
      { time: '2025-01-07', open: 10.6, high: 10.7, low: 10.0, close: 10.1 },
      { time: '2025-01-08', open: 10.1, high: 10.2, low: 9.5, close: 9.6 }, // 旗杆结束
      { time: '2025-01-09', open: 9.6, high: 9.8, low: 9.5, close: 9.7 }, // 旗面开始
      { time: '2025-01-10', open: 9.7, high: 9.9, low: 9.6, close: 9.8 },
      { time: '2025-01-13', open: 9.8, high: 10.0, low: 9.7, close: 9.9 },
      { time: '2025-01-14', open: 9.9, high: 10.1, low: 9.8, close: 10.0 },
      { time: '2025-01-15', open: 10.0, high: 10.1, low: 9.4, close: 9.5 }, // 跌破
    ],
    volumes: [
      { time: '2025-01-03', value: 2500000 },
      { time: '2025-01-08', value: 3500000 },
      { time: '2025-01-14', value: 800000 },
      { time: '2025-01-15', value: 3000000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-08', position: 'belowBar', color: '#26a69a', shape: 'square', text: '旗杆' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' },
      ],
    },
  },

  // 三重底案例
  'case-triple-bottom-1': {
    candles: [
      { time: '2025-01-02', open: 12.0, high: 12.1, low: 11.5, close: 11.6 },
      { time: '2025-01-03', open: 11.6, high: 11.7, low: 11.0, close: 11.2 },
      { time: '2025-01-06', open: 11.2, high: 11.3, low: 10.5, close: 10.6 }, // 底1
      { time: '2025-01-07', open: 10.6, high: 10.7, low: 10.2, close: 10.4 },
      { time: '2025-01-08', open: 10.4, high: 10.5, low: 10.0, close: 10.2 },
      { time: '2025-01-09', open: 10.2, high: 10.3, low: 10.5, close: 10.6 },
      { time: '2025-01-10', open: 10.6, high: 10.7, low: 10.3, close: 10.4 },
      { time: '2025-01-13', open: 10.4, high: 10.5, low: 10.6, close: 10.6 }, // 底2
      { time: '2025-01-14', open: 10.6, high: 10.7, low: 10.2, close: 10.3 },
      { time: '2025-01-15', open: 10.3, high: 10.4, low: 9.8, close: 9.9 },
      { time: '2025-01-16', open: 9.9, high: 10.0, low: 10.5, close: 10.6 }, // 底3
      { time: '2025-01-17', open: 10.6, high: 11.2, low: 10.5, close: 11.0 },
    ],
    volumes: [
      { time: '2025-01-06', value: 2500000 },
      { time: '2025-01-13', value: 1800000 },
      { time: '2025-01-16', value: 2000000 },
      { time: '2025-01-17', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-06', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '底1' },
        { time: '2025-01-13', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '底2' },
        { time: '2025-01-16', position: 'belowBar', color: '#26a69a', shape: 'circle', text: '底3' },
      ],
    },
  },

  // 圆顶案例
  'case-rounding-top-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.2, low: 9.9, close: 10.1 },
      { time: '2025-01-03', open: 10.1, high: 10.3, low: 10.0, close: 10.2 },
      { time: '2025-01-06', open: 10.2, high: 10.4, low: 10.1, close: 10.3 },
      { time: '2025-01-07', open: 10.3, high: 10.4, low: 10.2, close: 10.3 },
      { time: '2025-01-08', open: 10.3, high: 10.4, low: 10.2, close: 10.3 },
      { time: '2025-01-09', open: 10.3, high: 10.35, low: 10.2, close: 10.25 },
      { time: '2025-01-10', open: 10.25, high: 10.3, low: 10.15, close: 10.2 },
      { time: '2025-01-13', open: 10.2, high: 10.25, low: 10.1, close: 10.15 },
      { time: '2025-01-14', open: 10.15, high: 10.2, low: 10.0, close: 10.1 },
      { time: '2025-01-15', open: 10.1, high: 10.15, low: 9.9, close: 10.0 },
      { time: '2025-01-16', open: 10.0, high: 10.05, low: 9.7, close: 9.8 },
      { time: '2025-01-17', open: 9.8, high: 9.85, low: 9.5, close: 9.6 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1500000 },
      { time: '2025-01-08', value: 800000 },
      { time: '2025-01-14', value: 1000000 },
      { time: '2025-01-17', value: 2000000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-08', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: '圆顶' },
        { time: '2025-01-17', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '跌破' },
      ],
    },
  },

  // V型顶案例
  'case-v-top-1': {
    candles: [
      { time: '2025-01-02', open: 10.0, high: 10.2, low: 9.9, close: 10.1 },
      { time: '2025-01-03', open: 10.1, high: 10.5, low: 10.0, close: 10.4 },
      { time: '2025-01-06', open: 10.4, high: 10.8, low: 10.3, close: 10.7 },
      { time: '2025-01-07', open: 10.7, high: 11.2, low: 10.6, close: 11.0 },
      { time: '2025-01-08', open: 11.0, high: 11.5, low: 10.9, close: 11.4 },
      { time: '2025-01-09', open: 11.4, high: 12.0, low: 11.3, close: 11.8 }, // V顶
      { time: '2025-01-10', open: 11.8, high: 11.9, low: 11.2, close: 11.3 },
      { time: '2025-01-13', open: 11.3, high: 11.5, low: 10.8, close: 10.9 },
      { time: '2025-01-14', open: 10.9, high: 11.0, low: 10.3, close: 10.5 },
      { time: '2025-01-15', open: 10.5, high: 10.6, low: 9.8, close: 9.9 },
    ],
    volumes: [
      { time: '2025-01-02', value: 1000000 },
      { time: '2025-01-09', value: 3500000 },
      { time: '2025-01-14', value: 2800000 },
    ],
    spec: {
      markers: [
        { time: '2025-01-09', position: 'aboveBar', color: '#ef5350', shape: 'circle', text: 'V顶' },
        { time: '2025-01-15', position: 'belowBar', color: '#26a69a', shape: 'arrowDown', text: '下跌' },
      ],
    },
  },
};
