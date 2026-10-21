import { getCollection, type CollectionEntry } from 'astro:content';
import comments from '../data/comments.json';

export const SITE = {
  title: 'Ddsign',
  description: 'Blog sobre comunicación digital y experiencia de usuario. Artículos sobre diseño, investigaciones, tutoriales y recursos.',
  perPage: 15,
};

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', (p) => !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postSlug = (p: Post) => p.data.slug?.trim() || tagSlug(p.data.title);
const pad = (n: number) => String(n).padStart(2, '0');
export function postParts(p: Post) {
  const d = p.data.date;
  return { year: String(d.getUTCFullYear()), month: pad(d.getUTCMonth() + 1), day: pad(d.getUTCDate()), slug: postSlug(p) };
}
export function postUrl(p: Post) {
  const { year, month, day, slug } = postParts(p);
  return `/${year}/${month}/${day}/${slug}/`;
}

export function tagSlug(t: string) {
  return t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
export function formatDate(d: Date) {
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]}, ${d.getUTCFullYear()}`;
}

export type Comment = { id: number; parent: number; author: string; url: string; date: string; text: string };
export function getComments(slug: string): Comment[] {
  return ((comments as Record<string, Comment[]>)[slug]) ?? [];
}

export function excerpt(p: Post, words = 40) {
  if (p.data.excerpt) return p.data.excerpt;
  const text = (p.body ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\\([\\`*_{}\[\]()#+\-.!>|])/g, '$1')
    .replace(/[#>*_`|]+/g, ' ')
    .replace(/-{2,}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const w = text.split(' ');
  return w.slice(0, words).join(' ') + (w.length > words ? '…' : '');
}

export function firstImage(p: Post) {
  if (p.data.image) return p.data.image;
  const m = (p.body ?? '').match(/!\[[^\]]*\]\(([^)\s]+)\)|<img[^>]+src="([^"]+)"/);
  return m ? (m[1] || m[2]) : undefined;
}
