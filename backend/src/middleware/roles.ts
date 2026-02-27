import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth';

export const requireAdmin = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    if (!req.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    if (req.user.role !== 'ADMIN') {
        res.status(403).json({ error: 'Forbidden: Admin access required' });
        return;
    }
    next();
};

export const requireEditor = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
): void => {
    if (!req.user) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    if (req.user.role !== 'ADMIN' && req.user.role !== 'EDITOR') {
        res.status(403).json({ error: 'Forbidden: Editor access required' });
        return;
    }
    next();
};
