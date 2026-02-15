import { redirect } from 'next/navigation';
import { getDefaultCategoryPath } from '@/lib/routing';

export default async function LearnCategoryIndexPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  redirect(await getDefaultCategoryPath(category));
}
