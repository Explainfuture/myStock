import type { ContentBlock } from '@/lib/types';

// 支持两种格式：{type:'p', text:'...'} 和 {type:'paragraph', content:'...'}
function getText(b: any): string {
  return b.text ?? b.content ?? '';
}

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b: any, idx) => {
        const type = b.type;
        const text = getText(b);

        if (type === 'p' || type === 'paragraph') {
          return <p key={idx}>{text}</p>;
        }
        if (type === 'h2' || type === 'heading') {
          return <h2 key={idx}>{text}</h2>;
        }
        if (type === 'ul' || type === 'list') {
          const items = b.items ?? [];
          return (
            <ul key={idx}>
              {items.map((it: string, i: number) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          );
        }
        if (type === 'callout') {
          const base =
            'rounded-xl border px-4 py-3 text-sm leading-relaxed shadow-sm not-prose';
          const cls =
            b.variant === 'tip'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-100'
              : 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-100';
          return (
            <div key={idx} className={`${base} ${cls}`}>
              {b.title && <div className="mb-1 font-semibold">{b.title}</div>}
              <div>{text}</div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

