export function navHref(id: string): string {
  if (id === 'acasa') return '/';
  return `/${id}`;
}

export function isNavActive(pathname: string, id: string): boolean {
  const href = navHref(id);
  const path = pathname.replace(/\/$/, '') || '/';
  if (href === '/') return path === '/';
  return path === href;
}

export const SITE_PAGE_IDS = ['despre', 'materiale', 'configurator', 'contact'] as const;
