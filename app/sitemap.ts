import type { MetadataRoute } from 'next';
import { publicRoutes } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spurs.gov';
  return publicRoutes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
