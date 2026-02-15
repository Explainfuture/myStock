import { NextResponse } from 'next/server';
import { getNavigationTree } from '@/lib/data/navigation';

export async function GET() {
  const tree = await getNavigationTree();
  return NextResponse.json(tree);
}

