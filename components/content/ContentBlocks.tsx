import type { ContentBlock } from '@/lib/types';

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b, idx) => {
        if (b.type === 'p') {
          return <p key={idx}>{b.text}</p>;
        }
        if (b.type === 'h2') {
          return <h2 key={idx}>{b.text}</h2>;
        }
        if (b.type === 'ul') {
          return (
            <ul key={idx}>
              {b.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          );
        }
        if (b.type === 'callout') {
          const base =
            'rounded-xl border px-4 py-3 text-sm leading-relaxed shadow-sm not-prose';
          const cls =
            b.variant === 'tip'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-100'
              : 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-100';
          return (
            <div key={idx} className={`${base} ${cls}`}>
              {b.title && <div className="mb-1 font-semibold">{b.title}</div>}
              <div>{b.text}</div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

