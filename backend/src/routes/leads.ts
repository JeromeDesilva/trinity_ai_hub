import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import prisma from '../utils/prisma';
import { authenticate, AuthRequest } from '../middleware/auth';
import { requireAdmin } from '../middleware/roles';

const router = Router();

// POST /api/leads — public, used by contact form
router.post(
    '/',
    [
        body('name').trim().notEmpty().withMessage('Name required'),
        body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
        body('phone').optional().trim(),
        body('message').trim().notEmpty().withMessage('Message required'),
    ],
    async (req: Request, res: Response): Promise<void> => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const { name, email, phone, message, source } = req.body;

        try {
            const lead = await prisma.lead.create({
                data: { name, email, phone, message, source: source || 'website' },
            });
            res.status(201).json({ success: true, id: lead.id });
        } catch (err) {
            console.error('Lead creation error:', err);
            res.status(500).json({ error: 'Could not save lead' });
        }
    }
);

// GET /api/leads — admin only
router.get('/', authenticate, requireAdmin, async (_req: AuthRequest, res: Response): Promise<void> => {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json({ leads });
    } catch {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE /api/leads/:id — admin only
router.delete('/:id', authenticate, requireAdmin, async (req: Request, res: Response): Promise<void> => {
    try {
        await prisma.lead.delete({ where: { id: req.params.id } });
        res.json({ success: true });
    } catch {
        res.status(404).json({ error: 'Lead not found' });
    }
});

export default router;
