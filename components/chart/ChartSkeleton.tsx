"use client";

import { SkeletonChart } from "@/components/ui";

interface ChartSkeletonProps {
  height?: number;
}

/**
 * 图表加载占位符
 * 在图表数据加载时显示骨架屏
 */
export default function ChartSkeleton({ height = 400 }: ChartSkeletonProps) {
  return <SkeletonChart height={height} />;
}
