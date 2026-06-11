import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(fs.readFileSync(path.join(root, 'src/data/site.json'), 'utf-8'));
const domain = site.domain;
const base = `https://${domain}`;
const lastmod = new Date().toISOString().slice(0, 10);

const staticPages = ['despre', 'materiale', 'configurator', 'contact'];
const roomPages = site.rooms.map((room) => room.id);
const paths = ['/', ...staticPages.map((p) => `/${p}`), ...roomPages.map((p) => `/${p}`)];
const roomSet = new Set(roomPages.map((p) => `/${p}`));

const urls = paths
  .map((pagePath) => {
    const priority = pagePath === '/' ? '1.0' : roomSet.has(pagePath) ? '0.9' : '0.8';
    const changefreq = pagePath === '/' ? 'weekly' : 'monthly';
    const loc = pagePath === '/' ? `${base}/` : `${base}${pagePath}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;

const publicDir = path.join(root, 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf-8');

console.log('Generated public/sitemap.xml and public/robots.txt');
