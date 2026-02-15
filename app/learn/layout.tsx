import LearnShell from '@/components/layout/LearnShell';
import { getNavigationTree } from '@/lib/data/navigation';

export default async function LearnLayout({ children }: { children: React.ReactNode }) {
  const tree = await getNavigationTree();
  return <LearnShell tree={tree}>{children}</LearnShell>;
}

