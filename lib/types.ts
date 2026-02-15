import type { CandlestickData, HistogramData, LineData, SeriesMarker, Time } from 'lightweight-charts';

export type LayoutType = 'standard' | 'split';

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'callout'; variant: 'tip' | 'warn'; title?: string; text: string };

export type Article = {
  id: string;
  category_id: string;
  chapter_id: string;
  slug: string;
  title: string;
  content_blocks: ContentBlock[];
  layout_type: LayoutType;
  chart_case_id?: string | null;
};

export type NavArticle = Pick<Article, 'slug' | 'title' | 'layout_type'>;
export type NavChapter = { id: string; title: string; articles: NavArticle[] };
export type NavCategory = { id: string; name: string; chapters: NavChapter[] };
export type NavigationTree = { categories: NavCategory[] };

export type ChartCaseSpec = {
  markers?: SeriesMarker<Time>[];
};

export type IndicatorLine = {
  data: LineData<Time>[];
  color: string;
  lineWidth?: number;
  lineStyle?: 0 | 1 | 2 | 3; // Solid, Dotted, Dashed, LargeDashed
  title?: string;
};

export type ChartCaseData = {
  candles: CandlestickData<Time>[];
  volumes: HistogramData<Time>[];
  spec?: ChartCaseSpec;
  indicators?: IndicatorLine[];
};

