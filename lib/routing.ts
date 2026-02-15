import { getNavigationTree } from '@/lib/data/navigation';

export async function getDefaultLearnPath(): Promise<string> {
  const tree = await getNavigationTree();
  const firstCat = tree.categories[0];
  const firstCh = firstCat?.chapters[0];
  const firstArt = firstCh?.articles[0];
  if (!firstCat || !firstArt) return '/';
  return `/learn/${firstCat.id}/${firstArt.slug}`;
}

export async function getDefaultCategoryPath(category: string): Promise<string> {
  const tree = await getNavigationTree();
  const cat = tree.categories.find((c) => c.id === category);
  const ch = cat?.chapters[0];
  const art = ch?.articles[0];
  if (!cat || !art) return '/learn';
  return `/learn/${cat.id}/${art.slug}`;
}

