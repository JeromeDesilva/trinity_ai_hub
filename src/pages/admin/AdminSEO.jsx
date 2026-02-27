import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import api from '../../utils/api';

const PAGES = [
    { key: 'home', label: 'Homepage' },
    { key: 'solutions', label: 'Solutions Architecture' },
    { key: 'booking', label: 'Booking / Appointment' },
    { key: 'academy', label: 'Trinity Academy' },
    { key: 'blog', label: 'Blog' },
    { key: 'success-stories', label: 'Success Stories' },
    { key: 'digital-products', label: 'Digital Products Suite' },
    { key: 'partnership', label: 'Partnership Portal' },
];

const AdminSEO = () => {
    const [selectedPage, setSelectedPage] = useState('home');
    const [form, setForm] = useState({ metaTitle: '', metaDesc: '', keywords: '', canonical: '', ogImage: '' });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const fetchSEO = async (page) => {
        setLoading(true);
        setSaved(false);
        try {
            const { data } = await api.get(`/api/seo?page=${page}`);
            setForm({
                metaTitle: data.metaTitle || '',
                metaDesc: data.metaDesc || '',
                keywords: data.keywords || '',
                canonical: data.canonical || '',
                ogImage: data.ogImage || '',
            });
        } catch {
            setForm({ metaTitle: '', metaDesc: '', keywords: '', canonical: '', ogImage: '' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchSEO(selectedPage); }, [selectedPage]);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setSaved(false);
        try {
            await api.put('/api/seo', { page: selectedPage, ...form });
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch {
            alert('Could not save SEO settings.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <AdminLayout>
            <div className="max-w-3xl space-y-6">
                <div>
                    <h2 className="text-white text-xl font-bold">SEO Settings</h2>
                    <p className="text-gray-400 text-sm mt-1">Manage per-page meta tags</p>
                </div>

                {/* Page selector */}
                <div className="flex flex-wrap gap-2">
                    {PAGES.map((p) => (
                        <button
                            key={p.key}
                            onClick={() => setSelectedPage(p.key)}
                            className={`text-sm px-3 py-1.5 rounded-lg transition ${selectedPage === p.key
                                    ? 'bg-violet-600 text-white'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="text-gray-400 text-sm">Loading SEO data...</div>
                ) : (
                    <form onSubmit={handleSave} className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-5">
                        <div>
                            <label className="text-gray-400 text-xs mb-1.5 block">Meta Title *</label>
                            <input
                                value={form.metaTitle}
                                onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                                required
                                maxLength={70}
                                placeholder="Page title for search engines (max 60 chars)"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                            <p className="text-gray-600 text-xs mt-1">{form.metaTitle.length}/70 characters</p>
                        </div>

                        <div>
                            <label className="text-gray-400 text-xs mb-1.5 block">Meta Description *</label>
                            <textarea
                                value={form.metaDesc}
                                onChange={(e) => setForm({ ...form, metaDesc: e.target.value })}
                                required
                                rows={3}
                                maxLength={165}
                                placeholder="Page description for search results (max 155 chars)"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition resize-none"
                            />
                            <p className="text-gray-600 text-xs mt-1">{form.metaDesc.length}/165 characters</p>
                        </div>

                        <div>
                            <label className="text-gray-400 text-xs mb-1.5 block">Keywords (comma-separated)</label>
                            <input
                                value={form.keywords}
                                onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                                placeholder="keyword1, keyword2, keyword3"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400 text-xs mb-1.5 block">Canonical URL</label>
                            <input
                                value={form.canonical}
                                onChange={(e) => setForm({ ...form, canonical: e.target.value })}
                                placeholder="https://www.thetrinityservices.in/page"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        <div>
                            <label className="text-gray-400 text-xs mb-1.5 block">OG Image URL</label>
                            <input
                                value={form.ogImage}
                                onChange={(e) => setForm({ ...form, ogImage: e.target.value })}
                                placeholder="https://www.thetrinityservices.in/og-image.jpg"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            {saved && <span className="text-green-400 text-sm">✅ Saved successfully!</span>}
                            <div className="ml-auto">
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition"
                                >
                                    {saving ? 'Saving...' : 'Save SEO'}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminSEO;
