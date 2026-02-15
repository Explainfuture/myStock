"use client";

import { useMemo, useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopNav from '@/components/layout/TopNav';
import type { NavigationTree } from '@/lib/types';

export default function LearnShell({
  tree,
  children,
}: {
  tree: NavigationTree;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredTree = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tree;

    return {
      categories: tree.categories
        .map((cat) => {
          const chapters = cat.chapters
            .map((ch) => {
              const articles = ch.articles.filter((a) => a.title.toLowerCase().includes(q));
              return { ...ch, articles };
            })
            .filter((ch) => ch.articles.length > 0);
          return { ...cat, chapters };
        })
        .filter((cat) => cat.chapters.length > 0),
    } satisfies NavigationTree;
  }, [query, tree]);

  return (
    <div className="min-h-dvh">
      <TopNav
        query={query}
        onQueryChange={setQuery}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <div className="mx-auto flex max-w-[1440px] gap-6 px-4 pb-10 pt-6">
        <Sidebar tree={filteredTree} open={sidebarOpen} onOpenChange={setSidebarOpen} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}

