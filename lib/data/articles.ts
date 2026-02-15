import type { Article } from '@/lib/types';
import { getSupabaseClient } from '@/lib/supabase/client';
import { mockArticles } from '@/lib/data/mock';

export async function getArticleByCategoryAndSlug(
  category: string,
  slug: string
): Promise<Article | null> {
  const sb = getSupabaseClient();
  if (!sb) {
    return mockArticles.find((a) => a.category_id === category && a.slug === slug) ?? null;
  }

  // Fetch article by slug, join chapter to verify category_id.
  const { data, error } = await sb
    .from('articles')
    .select(
      'id,chapter_id,slug,title,content_blocks,layout_type,chart_case_id,chapter:chapters(category_id)'
    )
    .eq('slug', slug)
    .single();

  if (error || !data) return null;
  const chapterCategory = (data as any).chapter?.category_id as string | undefined;
  if (!chapterCategory || chapterCategory !== category) return null;

  return {
    id: data.id,
    category_id: chapterCategory,
    chapter_id: data.chapter_id,
    slug: data.slug,
    title: data.title,
    content_blocks: data.content_blocks ?? [],
    layout_type: data.layout_type === 'split' ? 'split' : 'standard',
    chart_case_id: data.chart_case_id ?? null,
  } satisfies Article;
}

