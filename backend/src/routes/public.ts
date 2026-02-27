import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma';

const router = Router();

const DOMAIN = 'https://www.thetrinityservices.in';

// GET /api/health
router.get('/health', (_req: Request, res: Response): void => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'Trinity Backend API',
        version: '1.0.0',
    });
});

// GET /api/sitemap
router.get('/sitemap', async (_req: Request, res: Response): Promise<void> => {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true },
            select: { slug: true, updatedAt: true },
            orderBy: { updatedAt: 'desc' },
        });

        const staticPages = [
            { url: '/', changefreq: 'weekly', priority: '1.0' },
            { url: '/solutions-architecture', changefreq: 'monthly', priority: '0.8' },
            { url: '/partnership-portal', changefreq: 'monthly', priority: '0.8' },
            { url: '/trinity-academy', changefreq: 'monthly', priority: '0.8' },
            { url: '/trinity-cluster-explorer', changefreq: 'monthly', priority: '0.7' },
            { url: '/success-stories', changefreq: 'monthly', priority: '0.8' },
            { url: '/digital-products-suite', changefreq: 'monthly', priority: '0.8' },
            { url: '/appointment-booking-system', changefreq: 'weekly', priority: '0.9' },
        ];

        const today = new Date().toISOString().split('T')[0];

        const urls = [
            ...staticPages.map(
                (p) => `
  <url>
    <loc>${DOMAIN}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
            ),
            ...blogs.map(
                (b) => `
  <url>
    <loc>${DOMAIN}/blog/${b.slug}</loc>
    <lastmod>${b.updatedAt.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
            ),
        ].join('');

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

        res.setHeader('Content-Type', 'application/xml');
        res.send(xml);
    } catch {
        res.status(500).json({ error: 'Could not generate sitemap' });
    }
});

// GET /api/robots.txt
router.get('/robots.txt', (_req: Request, res: Response): void => {
    const content = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/api/sitemap

Disallow: /admin
Disallow: /api/auth
`;
    res.setHeader('Content-Type', 'text/plain');
    res.send(content);
});

export default router;
