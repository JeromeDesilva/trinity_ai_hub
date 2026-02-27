import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import authRoutes from './routes/auth';
import leadRoutes from './routes/leads';
import blogRoutes from './routes/blog';
import seoRoutes from './routes/seo';
import publicRoutes from './routes/public';

const app = express();

// ── Security Middleware ──────────────────────────────────────────────
app.use(helmet());

const allowedOrigins = [
    'https://www.thetrinityservices.in',
    'https://thetrinityservices.in',
    // Allow localhost during development
    'http://localhost:4028',
    'http://localhost:3000',
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

// ── Rate Limiting ────────────────────────────────────────────────────
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try again later.' },
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many login attempts, please try again later.' },
});

app.use(globalLimiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
}

// ── Routes ──────────────────────────────────────────────────────────
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/seo', seoRoutes);
app.use('/api', publicRoutes);

// ── 404 Handler ──────────────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// ── Global Error Handler ─────────────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Unhandled error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
});

export default app;
