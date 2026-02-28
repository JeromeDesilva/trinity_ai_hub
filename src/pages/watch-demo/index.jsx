import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

const demos = [
    {
        id: 'automation',
        title: 'AI Workflow Automation',
        duration: '4:32',
        thumbnail: 'from-purple-600 to-blue-600',
        icon: 'Zap',
        description: 'See how Trinity\'s AI agents automate complex multi-step business workflows — from lead capture to CRM updates to email sequences, all without code.',
        highlights: ['Zero-code workflow builder', 'Multi-system integrations', 'Real-time error handling'],
    },
    {
        id: 'analytics',
        title: 'AI Performance Dashboard',
        duration: '3:18',
        thumbnail: 'from-blue-600 to-pink-600',
        icon: 'BarChart2',
        description: 'Explore the live AI Performance Dashboard — track automation rates, cost savings, time saved, and ROI growth across all your active AI agents.',
        highlights: ['Live metrics & KPIs', 'ROI calculation engine', 'Custom reporting'],
    },
    {
        id: 'products',
        title: 'Digital Products Suite',
        duration: '5:10',
        thumbnail: 'from-pink-500 to-purple-600',
        icon: 'Package',
        description: 'Full walkthrough of Trinity\'s SaaS product ecosystem — from the Cluster Explorer to the Partnership Portal and beyond.',
        highlights: ['SaaS product demos', 'Partner integrations', 'White-label options'],
    },
    {
        id: 'academy',
        title: 'Trinity Academy Tour',
        duration: '2:55',
        thumbnail: 'from-purple-500 to-pink-500',
        icon: 'GraduationCap',
        description: 'Go inside Trinity Academy — interactive AI courses, certifications, and cohort-based programs designed for business professionals ready to upskill.',
        highlights: ['Self-paced learning', 'AI certifications', 'Live cohort sessions'],
    },
];

const stats = [
    { label: 'Businesses Transformed', value: '10,000+', icon: 'Users' },
    { label: 'Hours Saved Monthly', value: '15,000h', icon: 'Clock' },
    { label: 'Avg. ROI Delivered', value: '340%', icon: 'TrendingUp' },
    { label: 'AI Agents Deployed', value: '50,000+', icon: 'Bot' },
];

const WatchDemo = () => {
    const [active, setActive] = useState('automation');
    const current = demos.find(d => d.id === active);

    return (
        <>
            <Helmet>
                <title>Watch Demo | Trinity Creative Services</title>
                <meta name="description" content="See Trinity's AI-powered platform in action. Watch product demos covering automation, analytics, digital products, and Academy — no sign-up required." />
                <link rel="canonical" href="https://www.thetrinityservices.in/watch-demo" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden pt-24 pb-12">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm mb-6">
                            <Icon name="Play" size={16} color="#6B46C1" />
                            <span className="text-sm font-medium text-purple-700">No sign-up needed · Watch instantly</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            See Trinity in{' '}
                            <span className="gradient-text">Action</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore how Trinity's AI platform delivers real results for real businesses — watch any demo below and see exactly what's possible.
                        </p>
                    </div>
                </section>

                {/* Demo Player */}
                <section className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Sidebar — demo list */}
                        <div className="space-y-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Choose a Demo</p>
                            {demos.map((demo) => (
                                <button
                                    key={demo.id}
                                    onClick={() => setActive(demo.id)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${active === demo.id
                                            ? 'bg-white border-purple-400 shadow-lg'
                                            : 'bg-white/60 border-gray-200 hover:bg-white hover:shadow'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${demo.thumbnail} flex items-center justify-center shrink-0`}>
                                            <Icon name={demo.icon} size={18} color="white" />
                                        </div>
                                        <span className={`text-sm font-semibold ${active === demo.id ? 'text-purple-700' : 'text-gray-700'}`}>
                                            {demo.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 pl-12">
                                        <Icon name="Clock" size={12} color="#9CA3AF" />
                                        <span className="text-xs text-gray-400">{demo.duration}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Main player area */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Video placeholder */}
                            <div className={`relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br ${current.thumbnail} shadow-2xl flex items-center justify-center group cursor-pointer`}>
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="relative text-center">
                                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                        <Icon name="Play" size={32} color="#6B46C1" />
                                    </div>
                                    <p className="text-white text-lg font-semibold">{current.title}</p>
                                    <p className="text-white/80 text-sm mt-1">Duration: {current.duration}</p>
                                </div>
                                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/40 rounded-full px-3 py-1">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    <span className="text-white text-xs">Preview Available</span>
                                </div>
                            </div>

                            {/* Info card */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{current.title}</h2>
                                        <p className="text-gray-500 text-sm mt-1">{current.description}</p>
                                    </div>
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.thumbnail} flex items-center justify-center shrink-0 ml-4`}>
                                        <Icon name={current.icon} size={22} color="white" />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-gray-700 mb-3">What you'll learn:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {current.highlights.map((h, i) => (
                                            <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-100">
                                                <Icon name="CheckCircle" size={13} color="#6B46C1" />
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link to="/appointment-booking-system">
                                        <Button variant="default" size="lg" iconName="Calendar" iconPosition="left">
                                            Book Free Consultation
                                        </Button>
                                    </Link>
                                    <Link to="/get-started">
                                        <Button variant="outline" size="lg" iconName="ArrowRight" iconPosition="right">
                                            Get Started Free
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats bar */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon name={stat.icon} size={26} color="white" />
                                    </div>
                                    <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-br from-purple-700 via-blue-700 to-purple-700">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Convinced? Let's Get You Started.</h2>
                        <p className="text-xl text-purple-100 mb-10">
                            Start free. No credit card. Full access to the Starter plan immediately.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/get-started">
                                <Button variant="default" size="xl" iconName="Rocket" iconPosition="left" className="bg-white text-purple-700 hover:bg-gray-100">
                                    Get Started Free
                                </Button>
                            </Link>
                            <Link to="/appointment-booking-system">
                                <Button variant="outline" size="xl" iconName="Phone" iconPosition="left" className="border-white text-white hover:bg-white/10">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default WatchDemo;
