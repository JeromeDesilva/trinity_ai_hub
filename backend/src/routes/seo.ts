import { Router, Request, Response } from 'express';
import prisma from '../utils/prisma';
import { authenticate, AuthRequest } from '../middleware/auth';
import { requireAdmin } from '../middleware/roles';
import { body, validationResult } from 'express-validator';

const router = Router();

// Default SEO fallback values
const SEO_DEFAULTS: Record<string, { metaTitle: string; metaDesc: string; keywords: string }> = {
    home: {
        metaTitle: 'Trinity Creative Services | AI-Powered Business Solutions',
        metaDesc: 'Transform your business with Trinity\'s AI-powered solutions. Intelligent automation, digital transformation, and scalable growth strategies.',
        keywords: 'AI automation, digital transformation, agentic AI, business intelligence, SaaS solutions, Trinity Creative Services',
    },
    solutions: {
        metaTitle: 'Solutions Architecture | Trinity Creative Services',
        metaDesc: 'Explore Trinity\'s comprehensive solutions for business architecture, AI integration, and digital product development.',
        keywords: 'solutions architecture, AI integration, digital products, business automation',
    },
    blog: {
        metaTitle: 'Blog | Trinity Creative Services',
        metaDesc: 'Insights, guides, and thought leadership on AI, digital transformation, and business growth.',
        keywords: 'AI blog, digital transformation insights, business technology',
    },
    booking: {
        metaTitle: 'Book a Consultation | Trinity Creative Services',
        metaDesc: 'Schedule a free strategy session with Trinity\'s experts. AI implementation, market scaling, and growth strategies.',
        keywords: 'book consultation, AI strategy session, business consultation, Trinity',
    },
    academy: {
        metaTitle: 'Trinity Academy | Learn AI & Digital Skills',
        metaDesc: 'Master AI and digital transformation with Trinity Academy\'s programs designed for business professionals.',
        keywords: 'AI training, digital skills, Trinity Academy, business learning',
    },
};

// GET /api/seo?page=home — public
router.get('/', async (req: Request, res: Response): Promise<void> => {
    const page = (req.query.page as string) || 'home';

    try {
        const seo = await prisma.pageSEO.findUnique({ where: { page } });
        if (seo) {
            res.json(seo);
            return;
        }

        // Fallback to defaults
        const defaults = SEO_DEFAULTS[page] || SEO_DEFAULTS['home'];
        res.json({
            page,
            ...defaults,
            canonical: `https://www.thetrinityservices.in/${page === 'home' ? '' : page}`,
        });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/seo/all — admin only
router.get('/all', authenticate, requireAdmin, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const seoPages = await prisma.pageSEO.findMany({ orderBy: { page: 'asc' } });
        res.json({ seoPages });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST/PUT /api/seo — admin only: upsert page SEO
router.put(
    '/',
    authenticate,
    requireAdmin,
    [
        body('page').trim().notEmpty().withMessage('Page name required'),
        body('metaTitle').trim().notEmpty().withMessage('Meta title required'),
        body('metaDesc').trim().notEmpty().withMessage('Meta description required'),
    ],
    async (req: AuthRequest, res: Response): Promise<void> => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { page, metaTitle, metaDesc, keywords, canonical, ogImage } = req.body;

        try {
            const seo = await prisma.pageSEO.upsert({
                where: { page },
                create: { page, metaTitle, metaDesc, keywords, canonical, ogImage },
                update: { metaTitle, metaDesc, keywords, canonical, ogImage },
            });
            res.json({ seo });
        } catch {
            res.status(500).json({ error: 'Could not save SEO data' });
        }
    }
);

export default router;
