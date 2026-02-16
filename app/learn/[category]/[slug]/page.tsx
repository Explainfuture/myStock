import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { ChartWrapper } from '@/components/chart';
import ContentBlocks from '@/components/content/ContentBlocks';
import { getArticleByCategoryAndSlug } from '@/lib/data/articles';
import { getChartCaseData } from '@/lib/data/chart-cases';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const article = await getArticleByCategoryAndSlug(category, slug);
  if (!article) notFound();

  const isSplitLayout = article.layout_type === 'split';
  const caseData = article.chart_case_id ? await getChartCaseData(article.chart_case_id) : null;

  return (
    <div
      className={clsx(
        'w-full grid gap-8 relative',
        isSplitLayout ? 'lg:grid-cols-2' : 'grid-cols-1 max-w-4xl mx-auto'
      )}
    >
      <article className="prose prose-slate max-w-none dark:prose-invert">
        <h1>{article.title}</h1>
        <ContentBlocks blocks={article.content_blocks} />
      </article>

      {isSplitLayout && (
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
              案例图解：{article.title}
            </h3>
            <ChartWrapper caseData={caseData} articleTitle={article.title} />
          </div>
        </aside>
      )}
    </div>
  );
}
