import type { LayoutType, NavigationTree } from '@/lib/types';
import { getSupabaseClientCached } from '@/lib/supabase/client';
import { mockNavigationTree } from '@/lib/data/mock';
import { unstable_cache } from 'next/cache';

function normalizeLayoutType(v: unknown): LayoutType {
  return v === 'split' ? 'split' : 'standard';
}

async function fetchNavigationTree(): Promise<NavigationTree> {
  const sb = getSupabaseClientCached();
  if (!sb) return mockNavigationTree;

  const { data: categories, error: catErr } = await sb
    .from('categories')
    .select('id,name,order')
    .order('order', { ascending: true });
  if (catErr || !categories) return mockNavigationTree;

  const { data: chapters, error: chErr } = await sb
    .from('chapters')
    .select('id,category_id,title,order')
    .order('order', { ascending: true });
  if (chErr || !chapters) return mockNavigationTree;

  const { data: articles, error: aErr } = await sb
    .from('articles')
    .select('id,chapter_id,slug,title,layout_type')
    .order('title', { ascending: true });
  if (aErr || !articles) return mockNavigationTree;

  const chaptersByCategory = new Map<string, { id: string; title: string; order: number }[]>();
  for (const ch of chapters) {
    const list = chaptersByCategory.get(ch.category_id) ?? [];
    list.push({ id: ch.id, title: ch.title, order: ch.order });
    chaptersByCategory.set(ch.category_id, list);
  }

  const articlesByChapter = new Map<
    string,
    { slug: string; title: string; layout_type: LayoutType }[]
  >();
  for (const a of articles) {
    const list = articlesByChapter.get(a.chapter_id) ?? [];
    list.push({ slug: a.slug, title: a.title, layout_type: normalizeLayoutType(a.layout_type) });
    articlesByChapter.set(a.chapter_id, list);
  }

  const tree: NavigationTree = {
    categories: categories
      .map((cat) => {
        const chs = (chaptersByCategory.get(cat.id) ?? [])
          .sort((x, y) => x.order - y.order)
          .map((ch) => ({
            id: ch.id,
            title: ch.title,
            articles: (articlesByChapter.get(ch.id) ?? []).map((a) => ({
              slug: a.slug,
              title: a.title,
              layout_type: a.layout_type,
            })),
          }))
          .filter((c) => c.articles.length > 0);

        return { id: cat.id, name: cat.name, chapters: chs };
      })
      .filter((c) => c.chapters.length > 0),
  };

  return tree.categories.length ? tree : mockNavigationTree;
}

// Cache for 60 seconds, tag for on-demand revalidation
export const getNavigationTree = unstable_cache(
  fetchNavigationTree,
  ['navigation-tree'],
  { revalidate: 60, tags: ['navigation'] }
);
