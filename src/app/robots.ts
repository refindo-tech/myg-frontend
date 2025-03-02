import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/listAdmin', '/listEvent'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/listAdmin', '/listEvent'],
      },
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}