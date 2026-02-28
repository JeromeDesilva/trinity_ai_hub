import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

const plans = [
    {
        name: 'Starter',
        price: 'Free',
        period: 'forever',
        description: 'Perfect for exploring Trinity\'s AI capabilities',
        icon: 'Sparkles',
        color: 'from-purple-500 to-blue-500',
        features: [
            '5 AI automation workflows',
            'Basic analytics dashboard',
            'Community support',
            'Up to 3 team members',
            '1,000 AI credits/month',
        ],
        cta: 'Get Started Free',
        ctaVariant: 'default',
        link: '/appointment-booking-system',
        badge: null,
    },
    {
        name: 'Growth',
        price: '₹49,999',
        period: '/month',
        description: 'For growing businesses ready to scale with AI',
        icon: 'TrendingUp',
        color: 'from-blue-600 to-purple-600',
        features: [
            'Unlimited AI workflows',
            'Advanced analytics & ROI tracking',
            'Priority support (24/7)',
            'Up to 25 team members',
            '50,000 AI credits/month',
            'Custom integrations',
            'Dedicated account manager',
        ],
        cta: 'Start Growth Plan',
        ctaVariant: 'default',
        link: '/appointment-booking-system',
        badge: 'Most Popular',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'pricing',
        description: 'Full-scale AI transformation for large organisations',
        icon: 'Building2',
        color: 'from-pink-500 to-purple-600',
        features: [
            'Everything in Growth',
            'Unlimited team members',
            'Unlimited AI credits',
            'White-label solutions',
            'On-premise deployment',
            'SLA guarantees',
            'AI strategy consulting',
        ],
        cta: 'Talk to Sales',
        ctaVariant: 'outline',
        link: '/appointment-booking-system',
        badge: null,
    },
];

const steps = [
    { step: '01', title: 'Create Your Account', description: 'Sign up in under 2 minutes. No credit card required for the free plan.', icon: 'UserPlus' },
    { step: '02', title: 'Tell Us Your Goals', description: 'Our AI analyses your business needs and recommends the right automation strategy.', icon: 'Target' },
    { step: '03', title: 'Deploy Your First Agent', description: 'Launch your first AI agent within minutes using our no-code workflow builder.', icon: 'Rocket' },
    { step: '04', title: 'Measure & Scale', description: 'Track ROI in real time and scale across your entire organisation.', icon: 'BarChart2' },
];

const GetStarted = () => {
    const [annual, setAnnual] = useState(false);

    return (
        <>
            <Helmet>
                <title>Get Started Free | Trinity Creative Services</title>
                <meta name="description" content="Start your AI transformation journey with Trinity. Choose from Starter, Growth, or Enterprise plans. No credit card required." />
                <link rel="canonical" href="https://www.thetrinityservices.in/get-started" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
                <Header />

                {/* Hero */}
                <section className="relative overflow-hidden pt-24 pb-16">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm mb-6">
                            <Icon name="Rocket" size={16} color="#6B46C1" />
                            <span className="text-sm font-medium text-purple-700">No credit card required · Cancel anytime</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Start Your AI Journey{' '}
                            <span className="gradient-text">Today</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                            Join 10,000+ businesses already transforming with Trinity's agentic AI platform. Pick a plan that fits your stage and scale as you grow.
                        </p>

                        {/* Billing toggle */}
                        <div className="inline-flex items-center gap-3 bg-white rounded-full px-2 py-1 border border-gray-200 shadow-sm mb-12">
                            <button
                                onClick={() => setAnnual(false)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!annual ? 'bg-purple-600 text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
                            >Monthly</button>
                            <button
                                onClick={() => setAnnual(true)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${annual ? 'bg-purple-600 text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
                            >Annual <span className="text-green-500 font-semibold">−20%</span></button>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <div
                                key={i}
                                className={`relative bg-white rounded-2xl border ${i === 1 ? 'border-purple-400 shadow-2xl scale-105' : 'border-gray-200 shadow-lg hover:shadow-xl'} p-8 transition-all duration-500 group`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon name={plan.icon} size={26} color="white" />
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

                                <div className="flex items-end gap-1 mb-6">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 text-sm pb-1">{plan.period}</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f, fi) => (
                                        <li key={fi} className="flex items-start gap-3">
                                            <Icon name="CheckCircle" size={18} color="#6B46C1" className="mt-0.5 shrink-0" />
                                            <span className="text-gray-600 text-sm">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={plan.link}>
                                    <Button variant={plan.ctaVariant} size="lg" iconName="ArrowRight" iconPosition="right" fullWidth>
                                        {plan.cta}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How it Works */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-100 mb-6">
                                <Icon name="Map" size={16} color="#6B46C1" />
                                <span className="text-sm font-medium text-purple-700">Simple 4-Step Onboarding</span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                From Signup to{' '}
                                <span className="gradient-text">Results in Hours</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Our guided onboarding gets your first AI agent live before your coffee gets cold.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {steps.map((s, i) => (
                                <div key={i} className="relative text-center group">
                                    {i < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300" />
                                    )}
                                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Icon name={s.icon} size={32} color="white" />
                                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple-700 text-white text-xs font-bold flex items-center justify-center">{s.step}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-gradient-to-br from-purple-700 via-blue-700 to-purple-700">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-purple-100 mb-10">
                            Start free today. Upgrade when you're ready to scale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/appointment-booking-system">
                                <Button variant="default" size="xl" iconName="Rocket" iconPosition="left" className="bg-white text-purple-700 hover:bg-gray-100">
                                    Book a Free Consultation
                                </Button>
                            </Link>
                            <Link to="/watch-demo">
                                <Button variant="outline" size="xl" iconName="Play" iconPosition="left" className="border-white text-white hover:bg-white/10">
                                    Watch Demo First
                                </Button>
                            </Link>
                        </div>
                        <p className="text-purple-300 text-sm mt-6">No credit card · No commitment · Full access to Starter plan</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default function GetStarted() {
  return (
    <div>
      <h1 style={{ color: "red" }}>THIS IS WORKING</h1>
    </div>
  );
}