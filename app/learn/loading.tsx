import { SkeletonSidebar } from '@/components/ui';

export default function LearnLoading() {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-6 px-4 pb-10 pt-6">
      {/* 侧边栏骨架 */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <SkeletonSidebar />
      </aside>

      {/* 主内容区骨架 */}
      <main className="min-w-0 flex-1">
        <div className="rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <SkeletonSidebar />
        </div>
      </main>
    </div>
  );
}
