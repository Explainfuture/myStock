"use client";

import { Suspense, lazy } from "react";
import type { ChartCaseData } from "@/lib/types";
import ChartSkeleton from "./ChartSkeleton";

// 使用 lazy 加载图表组件，减少首屏 JS 体积
const ChartView = lazy(() =>
  import("@/components/chart/ChartView").then((mod) => ({
    default: mod.default,
  }))
);

interface ChartWrapperProps {
  caseData: ChartCaseData | null;
  articleTitle: string;
  height?: number;
}

/**
 * 图表包装组件
 * 使用 React Suspense 实现流式加载
 * - 服务端预获取数据
 * - 客户端显示骨架屏
 * - 数据就绪后平滑切换到真实图表
 */
export default function ChartWrapper({
  caseData,
  articleTitle,
  height = 500,
}: ChartWrapperProps) {
  if (!caseData) {
    return (
      <div className="flex h-[200px] items-center justify-center text-sm text-slate-500 dark:text-slate-400">
        暂无案例图
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="rounded-lg bg-slate-50 dark:bg-slate-900">
          <ChartSkeleton height={height} />
        </div>
      }
    >
      <ChartView caseData={caseData} height={height} />
    </Suspense>
  );
}
