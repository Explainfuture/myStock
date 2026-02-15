import { NextResponse } from 'next/server';
import { getChartCaseData } from '@/lib/data/chart-cases';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ caseId: string }> }
) {
  const { caseId } = await params;

  if (!caseId) {
    return NextResponse.json({ error: 'Missing caseId' }, { status: 400 });
  }

  const data = await getChartCaseData(caseId);

  if (!data) {
    return NextResponse.json({ error: 'Chart case not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}
