import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stockpedia - A股零基础投资百科',
  description: '不教你炒股，教你认识市场。用案例图解 + 结构化内容，把 A 股基础逻辑讲清楚。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

