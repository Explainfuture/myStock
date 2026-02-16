import { clsx, type ClassValue } from 'clsx';

/**
 * 合并 className 的工具函数
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Skeleton 变体类型
 */
type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

/**
 * Skeleton 组件属性
 */
interface SkeletonProps {
  /** 自定义类名 */
  className?: string;
  /** 变体样式 */
  variant?: SkeletonVariant;
  /** 宽度 */
  width?: string | number;
  /** 高度 */
  height?: string | number;
  /** 是否显示动画 */
  animated?: boolean;
}

/**
 * Skeleton 加载占位符组件
 * 提供多种变体以适应不同场景
 */
export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  animated = true,
}: SkeletonProps) {
  const baseStyles = cn(
    'bg-slate-200 dark:bg-slate-800',
    animated && 'animate-pulse',
    variant === 'circular' && 'rounded-full',
    variant === 'rectangular' && 'rounded-none',
    variant === 'rounded' && 'rounded-lg',
    variant === 'text' && 'rounded',
    className
  );

  const style: React.CSSProperties = {
    width: width ?? (variant === 'circular' ? 40 : '100%'),
    height: height ?? (variant === 'text' ? 16 : variant === 'circular' ? 40 : '100%'),
  };

  return <div className={baseStyles} style={style} />;
}

/**
 * 文本段落骨架 - 模拟多行文本
 */
export function SkeletonParagraph({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '60%' : '100%'}
          height={16}
        />
      ))}
    </div>
  );
}

/**
 * 卡片骨架 - 模拟内容卡片
 */
export function SkeletonCard({
  title = true,
  description = true,
  image = false,
  className,
}: {
  title?: boolean;
  description?: boolean;
  image?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900', className)}>
      {image && (
        <Skeleton
          variant="rounded"
          width="100%"
          height={160}
          className="mb-4"
        />
      )}
      {title && (
        <Skeleton
          variant="text"
          width="60%"
          height={24}
          className="mb-3"
        />
      )}
      {description && <SkeletonParagraph lines={2} />}
    </div>
  );
}

/**
 * 列表骨架 - 模拟导航列表
 */
export function SkeletonList({
  items = 5,
  className,
}: {
  items?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={`${70 - i * 5}%`} height={16} />
        </div>
      ))}
    </div>
  );
}

/**
 * 表格骨架 - 模拟数据表格
 */
export function SkeletonTable({
  rows = 5,
  columns = 4,
  className,
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {/* 表头 */}
      <div className="flex gap-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} variant="text" height={20} className="flex-1" />
        ))}
      </div>
      {/* 表格行 */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              variant="text"
              height={16}
              className="flex-1"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * 图表骨架 - 模拟 K 线图
 */
export function SkeletonChart({
  height = 400,
  className,
}: {
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950',
        className
      )}
      style={{ height }}
    >
      {/* 图表标题 */}
      <div className="mb-4 flex items-center justify-between">
        <Skeleton variant="text" width={120} height={20} />
        <Skeleton variant="rounded" width={60} height={24} />
      </div>

      {/* 图表区域 */}
      <div className="relative h-[calc(100%-40px)] w-full">
        {/* Y 轴刻度 */}
        <div className="absolute left-0 top-0 h-full w-8 space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="text" width={24} height={12} />
          ))}
        </div>

        {/* 图表内容 */}
        <div className="ml-10 h-full w-[calc(100%-40px)]">
          {/* 模拟 K 线 */}
          <div className="relative h-[70%] w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-2 rounded-sm"
                style={{
                  left: `${i * 5}%`,
                  height: `${30 + Math.random() * 40}%`,
                  backgroundColor: Math.random() > 0.5
                    ? 'var(--chart-up, #ef5350)'
                    : 'var(--chart-down, #26a69a)',
                  opacity: 0.3,
                }}
              />
            ))}
          </div>

          {/* 成交量柱状图 */}
          <div className="relative h-[30%] w-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 w-2 rounded-sm bg-slate-300 dark:bg-slate-700"
                style={{
                  left: `${i * 5}%`,
                  height: `${20 + Math.random() * 50}%`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* X 轴标签 */}
      <div className="mt-2 flex justify-between pl-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="text" width={40} height={12} />
        ))}
      </div>
    </div>
  );
}

/**
 * 侧边栏骨架
 */
export function SkeletonSidebar({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('space-y-6', className)}>
      {Array.from({ length: 3 }).map((_, categoryIndex) => (
        <div key={categoryIndex} className="space-y-3">
          <Skeleton variant="text" width="60%" height={20} />
          <div className="space-y-2 pl-4">
            {Array.from({ length: 2 + categoryIndex }).map((_, chapterIndex) => (
              <div key={chapterIndex} className="space-y-2">
                <Skeleton variant="text" width="50%" height={16} />
                <div className="space-y-1 pl-2">
                  {Array.from({ length: 2 + chapterIndex }).map((_, articleIndex) => (
                    <Skeleton
                      key={articleIndex}
                      variant="text"
                      width={`${70 - articleIndex * 10}%`}
                      height={14}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * 文章内容骨架
 */
export function SkeletonArticle({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('space-y-6', className)}>
      {/* 标题 */}
      <Skeleton variant="text" width="80%" height={40} />

      {/* 内容段落 */}
      <div className="space-y-4">
        <SkeletonParagraph lines={4} />
        <SkeletonParagraph lines={3} />
        <SkeletonParagraph lines={4} />
      </div>

      {/* 列表 */}
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-start gap-2">
            <Skeleton variant="circular" width={6} height={6} className="mt-1.5" />
            <Skeleton variant="text" width={`${85 - i * 5}%`} height={16} />
          </div>
        ))}
      </div>

      <SkeletonParagraph lines={3} />
    </div>
  );
}
