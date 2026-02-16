import Link from 'next/link';
import type { NavArticle } from '@/lib/types';

interface ArticleCardProps {
  article: NavArticle;
  categorySlug: string;
}

/**
 * 文章卡片组件
 * 用于导航列表中的文章链接
 */
export function ArticleCard({ article, categorySlug }: ArticleCardProps) {
  const href = `/learn/${categorySlug}/${article.slug}`;

  return (
    <Link
      href={href}
      className="block rounded-md px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
    >
      {article.title}
    </Link>
  );
}

interface ArticleCardSkeletonProps {
  className?: string;
}

/**
 * 文章卡片骨架屏
 */
export function ArticleCardSkeleton({ className }: ArticleCardSkeletonProps) {
  return (
    <div className={className}>
      <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}
