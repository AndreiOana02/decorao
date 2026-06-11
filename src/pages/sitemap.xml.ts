import site from '../data/site.json';
import { getAllPublicPaths, absoluteUrl } from '../lib/seo';

export function GET() {
  const paths = getAllPublicPaths();
  const lastmod = new Date().toISOString().slice(0, 10);
  const roomSlugs = new Set(site.rooms.map((room) => `/${room.id}`));

  const urls = paths
    .map((path) => {
      const priority = path === '/' ? '1.0' : roomSlugs.has(path) ? '0.9' : '0.8';
      return `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
