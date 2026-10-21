// Enlaces externos que vienen en HTML incrustado (vídeos, etc.): también en pestaña nueva.
import fs from 'node:fs';
import path from 'node:path';
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
for (const f of walk('dist')) {
  if (!f.endsWith('.html')) continue;
  const s = fs.readFileSync(f, 'utf8');
  const out = s.replace(/<a\s([^>]*?)href="(https?:\/\/[^"]+)"([^>]*)>/gi, (m, pre, href, post) => {
    if (/target=/i.test(m) || /^https?:\/\/(www\.)?ddsign\.es(\/|$)/i.test(href)) return m;
    return `<a ${pre}href="${href}"${post} target="_blank" rel="noopener noreferrer">`;
  });
  if (out !== s) fs.writeFileSync(f, out);
}
