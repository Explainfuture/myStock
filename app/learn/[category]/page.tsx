import { redirect } from 'next/navigation';
import { getDefaultCategoryPath } from '@/lib/routing';

export default async function LearnCategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  redirect(await getDefaultCategoryPath(category));
}
