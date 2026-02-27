import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import slugify from '../utils/slugify';
import prisma from '../utils/prisma';
import { authenticate, AuthRequest } from '../middleware/auth';
import { requireEditor, requireAdmin } from '../middleware/roles';

const router = Router();

// GET /api/blog — public: list published posts
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { all } = req.query;
        const where = all === 'true' ? {} : { published: true };
        const blogs = await prisma.blog.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                metaTitle: true,
                metaDesc: true,
                published: true,
                publishedAt: true,
                createdAt: true,
            },
        });
        res.json({ blogs });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET /api/blog/:slug — public
router.get('/:slug', async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await prisma.blog.findUnique({
            where: { slug: req.params.slug },
        });
        if (!post || !post.published) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.json({ post });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST /api/blog — editor/admin only
router.post(
    '/',
    authenticate,
    requireEditor,
    [
        body('title').trim().notEmpty().withMessage('Title required'),
        body('content').trim().notEmpty().withMessage('Content required'),
    ],
    async (req: AuthRequest, res: Response): Promise<void> => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { title, content, excerpt, metaTitle, metaDesc, metaKeywords, published } = req.body;
        const slug = slugify(title);

        try {
            const post = await prisma.blog.create({
                data: {
                    title,
                    slug,
                    content,
                    excerpt,
                    metaTitle,
                    metaDesc,
                    metaKeywords,
                    published: published ?? false,
                    publishedAt: published ? new Date() : null,
                },
            });
            res.status(201).json({ post });
        } catch (err: unknown) {
            const error = err as { code?: string };
            if (error.code === 'P2002') {
                res.status(409).json({ error: 'Slug already exists' });
            } else {
                res.status(500).json({ error: 'Could not create post' });
            }
        }
    }
);

// PUT /api/blog/:id — editor/admin only
router.put(
    '/:id',
    authenticate,
    requireEditor,
    async (req: AuthRequest, res: Response): Promise<void> => {
        const { title, content, excerpt, metaTitle, metaDesc, metaKeywords, published } = req.body;

        try {
            const existing = await prisma.blog.findUnique({ where: { id: req.params.id } });
            if (!existing) {
                res.status(404).json({ error: 'Post not found' });
                return;
            }

            const post = await prisma.blog.update({
                where: { id: req.params.id },
                data: {
                    title: title ?? existing.title,
                    content: content ?? existing.content,
                    excerpt: excerpt ?? existing.excerpt,
                    metaTitle: metaTitle ?? existing.metaTitle,
                    metaDesc: metaDesc ?? existing.metaDesc,
                    metaKeywords: metaKeywords ?? existing.metaKeywords,
                    published: published ?? existing.published,
                    publishedAt: published && !existing.published ? new Date() : existing.publishedAt,
                    slug: title ? slugify(title) : existing.slug,
                },
            });
            res.json({ post });
        } catch {
            res.status(500).json({ error: 'Could not update post' });
        }
    }
);

// PATCH /api/blog/:id/publish — toggle publish (admin only)
router.patch('/:id/publish', authenticate, requireAdmin, async (req: Request, res: Response): Promise<void> => {
    try {
        const existing = await prisma.blog.findUnique({ where: { id: req.params.id } });
        if (!existing) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        const post = await prisma.blog.update({
            where: { id: req.params.id },
            data: {
                published: !existing.published,
                publishedAt: !existing.published ? new Date() : null,
            },
        });
        res.json({ post });
    } catch {
        res.status(500).json({ error: 'Could not toggle publish' });
    }
});

// DELETE /api/blog/:id — admin only
router.delete('/:id', authenticate, requireAdmin, async (req: Request, res: Response): Promise<void> => {
    try {
        await prisma.blog.delete({ where: { id: req.params.id } });
        res.json({ success: true });
    } catch {
        res.status(404).json({ error: 'Post not found' });
    }
});

export default router;
