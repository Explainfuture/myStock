"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Moon, Search, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const TABS = [
  { id: 'origins', label: '股票起源' },
  { id: 'patterns', label: '股票形态' },
  { id: 'indicators', label: '常见指标' },
];

function getActiveCategory(pathname: string): string | null {
  const m = pathname.match(/^\/learn\/([^/]+)/);
  return m?.[1] ?? null;
}

export default function TopNav({
  query,
  onQueryChange,
  onOpenSidebar,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  onOpenSidebar: () => void;
}) {
  const pathname = usePathname();
  const active = getActiveCategory(pathname);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Sync with the class set by the inline script in layout.tsx
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-4 py-3">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 lg:hidden"
          onClick={onOpenSidebar}
          aria-label="打开目录"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Stockpedia
          </span>
          <span className="hidden text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400 sm:inline">
            A股零基础投资百科
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <Link
                key={t.id}
                href={`/learn/${t.id}`}
                className={clsx(
                  'rounded-lg px-3 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-950'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900'
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <label className="relative hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 sm:flex">
            <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="搜索词条（标题）"
            />
          </label>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            aria-label="切换暗黑模式"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
