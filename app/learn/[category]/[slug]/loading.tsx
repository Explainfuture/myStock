import { Skeleton, SkeletonArticle, SkeletonChart } from '@/components/ui';

export default function ArticleLoading() {
  return (
    <div className="w-full grid gap-8 relative grid-cols-1 lg:grid-cols-2">
      {/* 文章内容骨架 */}
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <SkeletonArticle />
      </article>

      {/* 图表区域骨架 (仅在 split 布局时显示) */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <Skeleton variant="text" width={150} height={20} className="mb-4" />
          <SkeletonChart height={400} />
        </div>
      </aside>
    </div>
  );
}
