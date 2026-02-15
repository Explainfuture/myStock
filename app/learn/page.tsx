import { redirect } from 'next/navigation';
import { getDefaultLearnPath } from '@/lib/routing';

export default async function LearnIndexPage() {
  redirect(await getDefaultLearnPath());
}

