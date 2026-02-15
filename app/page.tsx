import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="noise-bg min-h-dvh dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold tracking-widest text-slate-500">STOCKPEDIA</p>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
                A股零基础投资百科
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
                不教你炒股，教你认识市场。用结构化的概念讲解 + 真实 A 股案例图，把投资逻辑讲清楚、讲直观。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                开始学习 <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="text-sm text-slate-600 dark:text-slate-300">
                目标：先做到 <span className="font-semibold text-slate-900 dark:text-slate-50">能用</span>、
                <span className="font-semibold text-slate-900 dark:text-slate-50">好看</span>、
                <span className="font-semibold text-slate-900 dark:text-slate-50">可扩展</span>。
              </div>
            </div>

            <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">百科内容</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">章节目录 + 词条化阅读</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">A股案例图</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">红涨绿跌 + OHLCV 重绘</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">沉浸式学习</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">形态类支持左右分栏图文对照</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
