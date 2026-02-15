"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDown, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { NavigationTree } from '@/lib/types';

function isActive(pathname: string, href: string) {
  return pathname === href;
}

export default function Sidebar({
  tree,
  open,
  onOpenChange,
}: {
  tree: NavigationTree;
  open: boolean;
  onOpenChange: (next: boolean) => void;
}) {
  const pathname = usePathname();

  const activeKeys = useMemo(() => {
    const m = pathname.match(/^\/learn\/([^/]+)(?:\/([^/]+))?/);
    return { category: m?.[1] ?? null, slug: m?.[2] ?? null };
  }, [pathname]);

  // 只显示当前分类的章节
  const visibleCategories = useMemo(() => {
    if (!activeKeys.category) return tree.categories;
    return tree.categories.filter((cat) => cat.id === activeKeys.category);
  }, [activeKeys.category, tree.categories]);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!activeKeys.category || !activeKeys.slug) return;
    for (const cat of visibleCategories) {
      for (const ch of cat.chapters) {
        const hit = ch.articles.some((a) => a.slug === activeKeys.slug);
        if (hit) setExpanded((prev) => ({ ...prev, [ch.id]: true }));
      }
    }
  }, [activeKeys.category, activeKeys.slug, visibleCategories]);

  const content = (
    <div className="h-full overflow-y-auto p-4">
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">目录</div>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          onClick={() => onOpenChange(false)}
          aria-label="关闭目录"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        {visibleCategories.map((cat) => (
          <section key={cat.id} className="flex flex-col gap-2">
            <div className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400">
              {cat.name}
            </div>
            <div className="flex flex-col gap-1">
              {cat.chapters.map((ch) => {
                const isOpen = expanded[ch.id] ?? false;
                return (
                  <div
                    key={ch.id}
                    className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded((prev) => ({ ...prev, [ch.id]: !isOpen }))}
                      className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm font-semibold text-slate-800 dark:text-slate-100"
                    >
                      <span className="truncate">{ch.title}</span>
                      <ChevronDown className={clsx('h-4 w-4 transition', isOpen && 'rotate-180')} />
                    </button>
                    {isOpen && (
                      <div className="flex flex-col gap-1 px-3 pb-3">
                        {ch.articles.map((a) => {
                          const href = `/learn/${cat.id}/${a.slug}`;
                          const active = isActive(pathname, href);
                          return (
                            <Link
                              key={a.slug}
                              href={href}
                              onClick={() => onOpenChange(false)}
                              className={clsx(
                                'rounded-lg px-2 py-1 text-sm transition',
                                active
                                  ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950'
                                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
                              )}
                            >
                              {a.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-80 shrink-0 lg:block">
        <div className="sticky top-20 h-[calc(100dvh-6rem)] rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
          {content}
        </div>
      </aside>

      {/* Mobile drawer */}
      <div className={clsx('lg:hidden', open ? 'block' : 'hidden')}>
        <div
          className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
        <aside className="fixed inset-y-0 left-0 z-50 w-[86vw] max-w-sm border-r border-slate-200 bg-slate-50 shadow-xl dark:border-slate-800 dark:bg-slate-950">
          <div className="h-full rounded-r-2xl bg-white dark:bg-slate-950">{content}</div>
        </aside>
      </div>
    </>
  );
}
