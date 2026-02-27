import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import api from '../../utils/api';

const AdminBlogEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNew = id === 'new';

    const [form, setForm] = useState({
        title: '',
        content: '',
        excerpt: '',
        metaTitle: '',
        metaDesc: '',
        metaKeywords: '',
        published: false,
    });
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isNew) {
            api.get(`/api/blog/${id}`).then(({ data }) => {
                setForm({
                    title: data.post.title || '',
                    content: data.post.content || '',
                    excerpt: data.post.excerpt || '',
                    metaTitle: data.post.metaTitle || '',
                    metaDesc: data.post.metaDesc || '',
                    metaKeywords: data.post.metaKeywords || '',
                    published: data.post.published || false,
                });
            }).catch(() => setError('Post not found'))
                .finally(() => setLoading(false));
        }
    }, [id, isNew]);

    const handleSave = async (e) => {
        e.preventDefault();
        setError('');
        setSaving(true);
        try {
            if (isNew) {
                await api.post('/api/blog', form);
            } else {
                await api.put(`/api/blog/${id}`, form);
            }
            navigate('/admin/blog');
        } catch (err) {
            setError(err.response?.data?.error || 'Could not save post');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <AdminLayout><div className="text-gray-400 text-sm">Loading...</div></AdminLayout>;

    return (
        <AdminLayout>
            <div className="max-w-3xl space-y-6">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate('/admin/blog')} className="text-gray-400 hover:text-white text-sm transition">
                        ← Back
                    </button>
                    <h2 className="text-white text-xl font-bold">{isNew ? 'New Blog Post' : 'Edit Post'}</h2>
                </div>

                {error && (
                    <div className="bg-red-900/30 border border-red-700/50 text-red-400 text-sm px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSave} className="space-y-5">
                    {/* Title */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
                        <h3 className="text-white font-semibold text-sm">Content</h3>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Title *</label>
                            <input
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                required
                                placeholder="Your blog post title"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Excerpt</label>
                            <textarea
                                value={form.excerpt}
                                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                                rows={2}
                                placeholder="Short description shown in blog lists"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition resize-none"
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Content * (Markdown supported)</label>
                            <textarea
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                                required
                                rows={16}
                                placeholder="Write your blog post in Markdown..."
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:border-violet-500 transition resize-y"
                            />
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
                        <h3 className="text-white font-semibold text-sm">SEO Settings</h3>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Meta Title</label>
                            <input
                                value={form.metaTitle}
                                onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                                placeholder="SEO title (defaults to post title)"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Meta Description</label>
                            <textarea
                                value={form.metaDesc}
                                onChange={(e) => setForm({ ...form, metaDesc: e.target.value })}
                                rows={2}
                                placeholder="SEO description (150-160 chars)"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition resize-none"
                            />
                        </div>
                        <div>
                            <label className="text-gray-400 text-xs mb-1 block">Keywords (comma-separated)</label>
                            <input
                                value={form.metaKeywords}
                                onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })}
                                placeholder="AI, digital transformation, Trinity"
                                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-500 transition"
                            />
                        </div>
                    </div>

                    {/* Publish + Save */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <div
                                className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? 'bg-violet-600' : 'bg-gray-700'}`}
                                onClick={() => setForm({ ...form, published: !form.published })}
                            >
                                <span
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${form.published ? 'translate-x-5' : ''}`}
                                />
                            </div>
                            <span className="text-gray-300 text-sm">{form.published ? 'Published' : 'Draft'}</span>
                        </label>

                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition"
                        >
                            {saving ? 'Saving...' : isNew ? 'Create Post' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AdminBlogEdit;
