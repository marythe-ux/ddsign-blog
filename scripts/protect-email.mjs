// Codifica las direcciones @ddsign.es como entidades HTML para que los robots de spam no las lean.
import fs from 'node:fs';
import path from 'node:path';
const enc = (s) => [...s].map((c) => `&#${c.codePointAt(0)};`).join('');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);
for (const f of walk('dist')) {
  const s = fs.readFileSync(f, 'utf8');
  const out = s.replace(/(mailto:)?[a-z0-9._-]+@ddsign\.es/gi, (m) => enc(m));
  if (out !== s) fs.writeFileSync(f, out);
}
