import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myg.app/dashboard',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://myg.app/Myacademy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://myg.app/mya/home',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    {
      url: 'https://myg.app/myBeautica/home',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}