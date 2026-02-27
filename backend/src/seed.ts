import dotenv from 'dotenv';
dotenv.config();

import prisma from './utils/prisma';
import { hashPassword } from './utils/hash';

async function seed() {
    console.log('🌱 Seeding Trinity database...');

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@thetrinityservices.in';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Trinity@Admin2024';
    const adminName = process.env.ADMIN_NAME || 'Trinity Admin';

    // Create admin user
    const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (!existing) {
        const hashed = await hashPassword(adminPassword);
        await prisma.user.create({
            data: { name: adminName, email: adminEmail, password: hashed, role: 'ADMIN' },
        });
        console.log(`✅ Admin created: ${adminEmail}`);
    } else {
        console.log(`ℹ️  Admin already exists: ${adminEmail}`);
    }

    // Seed default homepage SEO
    await prisma.pageSEO.upsert({
        where: { page: 'home' },
        create: {
            page: 'home',
            metaTitle: 'Trinity Creative Services | AI-Powered Business Solutions',
            metaDesc: 'Transform your business with Trinity\'s AI-powered solutions. From intelligent automation to scalable digital products, we bridge complex technology and practical business outcomes.',
            keywords: 'AI automation, digital transformation, agentic AI, business intelligence, SaaS solutions, Trinity Creative Services',
            canonical: 'https://www.thetrinityservices.in/',
        },
        update: {},
    });
    console.log('✅ Homepage SEO seeded');

    // Seed sample blog post
    const blogCount = await prisma.blog.count();
    if (blogCount === 0) {
        await prisma.blog.create({
            data: {
                title: 'Welcome to Trinity AI Hub',
                slug: 'welcome-to-trinity-ai-hub',
                content: '# Welcome\n\nTrinity Creative Services is here to transform your business with AI-powered solutions.\n\nFrom intelligent automation to scalable digital products, we bridge complex technology and practical business outcomes.',
                excerpt: 'Trinity Creative Services launches its AI-powered platform to transform business operations.',
                metaTitle: 'Welcome to Trinity AI Hub | Blog',
                metaDesc: 'Learn how Trinity Creative Services is transforming businesses with AI-powered solutions.',
                metaKeywords: 'Trinity AI, digital transformation, business automation',
                published: true,
                publishedAt: new Date(),
            },
        });
        console.log('✅ Sample blog post seeded');
    }

    console.log('🎉 Seeding complete!');
}

seed()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
