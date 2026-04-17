export default function sitemap() {
  const baseUrl = 'https://plade.web.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#how-it-works`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#tech`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#download`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
