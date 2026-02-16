import { SkeletonCard } from '@/components/ui';

export default function Loading() {
  return (
    <main className="noise-bg min-h-dvh dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-10 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex flex-col gap-8">
            {/* 标题区域 */}
            <div className="flex flex-col gap-4">
              <SkeletonCard className="w-24" title={false} description={false} />
              <div className="space-y-3">
                <SkeletonCard className="w-4/5" title={false} description={false} />
                <SkeletonCard className="w-3/5" title={false} description={false} />
              </div>
              <SkeletonCard className="w-full" title={false} description={false} />
            </div>

            {/* 按钮区域 */}
            <div className="flex gap-4">
              <SkeletonCard className="w-40 h-12" title={false} description={false} />
              <SkeletonCard className="w-64" title={false} description={false} />
            </div>

            {/* 特性卡片 */}
            <div className="grid gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} title={false} description={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
