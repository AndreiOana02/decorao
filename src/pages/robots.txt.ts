import site from '../data/site.json';

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://${site.domain}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
