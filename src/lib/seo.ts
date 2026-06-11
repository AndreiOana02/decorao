import site from '../data/site.json';
import { SITE_PAGE_IDS } from './nav';

export type BreadcrumbItem = { label: string; href: string };

const BASE = `https://${site.domain}`;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized === '/' ? `${BASE}/` : `${BASE}${normalized}`;
}

export function buildPageTitle(title?: string, isHome = false): string {
  if (isHome) return site.seo.homeTitle;
  if (title) return `${title} | ${site.brand}`;
  return `${site.brand} — ${site.tagline}`;
}

export function buildPageDescription(description?: string, isHome = false): string {
  if (description) return description;
  if (isHome) return site.seo.homeDescription;
  return site.seo.homeDescription;
}

export function buildOgImage(imagePath?: string): string {
  const path = imagePath ?? site.seo.defaultImage;
  return absoluteUrl(path);
}

export function getRoomSeo(roomId: string) {
  const room = site.rooms.find((r) => r.id === roomId);
  if (!room) return null;
  const custom = site.seo.rooms[roomId as keyof typeof site.seo.rooms];
  return {
    title: custom?.title ?? `${room.title} — mobilă la comandă`,
    description: custom?.description ?? `${room.intro} Fabrică Decorao în Târgoviște, Dâmbovița.`,
  };
}

export function getPageSeo(slug: string) {
  const custom = site.seo.pages[slug as keyof typeof site.seo.pages];
  if (!custom) return null;
  return custom;
}

export function getAllPublicPaths(): string[] {
  return ['/', ...SITE_PAGE_IDS.map((id) => `/${id}`), ...site.rooms.map((r) => `/${r.id}`)];
}

export function getServiceAreaJsonLd() {
  return site.seo.serviceArea.counties.flatMap((county) => [
    { '@type': 'AdministrativeArea', name: county.name },
    ...county.cities.map((city) => ({ '@type': 'City', name: city })),
  ]);
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.brand,
    alternateName: ['Decorao Târgoviște', site.domain, 'decorao.ro'],
    url: `${BASE}/`,
    logo: `${BASE}/sigla.svg`,
    email: site.email,
    telephone: site.phoneTel,
    sameAs: site.social.map((s) => s.url),
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: site.brand,
    description: site.seo.homeDescription,
    url: `${BASE}/`,
    image: buildOgImage(),
    telephone: site.phoneTel,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Târgoviște',
      addressRegion: 'Dâmbovița',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.925,
      longitude: 25.456,
    },
    areaServed: getServiceAreaJsonLd(),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: site.social.map((s) => s.url),
    knowsAbout: [
      'Mobilă la comandă',
      'Bucătării la comandă',
      'Mobilier din lemn masiv',
      'MDF vopsit',
      'PAL Egger',
      'Uși interioare',
      'Scări interioare',
    ],
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    alternateName: site.domain,
    url: `${BASE}/`,
    description: site.seo.homeDescription,
    inLanguage: 'ro-RO',
    publisher: {
      '@type': 'Organization',
      name: site.brand,
      url: `${BASE}/`,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(Array.isArray(data) ? data : data);
}
