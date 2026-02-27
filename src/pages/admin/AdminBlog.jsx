import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import api from '../../utils/api';

const AdminBlog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toggling, setToggling] = useState(null);

    const fetchPosts = async () => {
        try {
            const { data } = await api.get('/api/blog?all=true');
            setPosts(data.blogs || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchPosts(); }, []);

    const handleTogglePublish = async (id) => {
        setToggling(id);
        try {
            const { data } = await api.patch(`/api/blog/${id}/publish`);
            setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, published: data.post.published } : p)));
        } catch {
            alert('Could not toggle publish status.');
        } finally {
            setToggling(null);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this post permanently?')) return;
        try {
            await api.delete(`/api/blog/${id}`);
            setPosts((prev) => prev.filter((p) => p.id !== id));
        } catch {
            alert('Could not delete post.');
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-white text-xl font-bold">Blog Posts</h2>
                        <p className="text-gray-400 text-sm mt-1">Manage your content</p>
                    </div>
                    <Link
                        to="/admin/blog/new"
                        className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                    >
                        + New Post
                    </Link>
                </div>

                {loading ? (
                    <div className="text-gray-400 text-sm">Loading posts...</div>
                ) : posts.length === 0 ? (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center text-gray-500">
                        No blog posts yet.{' '}
                        <Link to="/admin/blog/new" className="text-violet-400 hover:text-violet-300">Create your first post →</Link>
                    </div>
                ) : (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-800">
                                    <th className="text-left text-gray-400 font-medium px-5 py-3">Title</th>
                                    <th className="text-left text-gray-400 font-medium px-5 py-3">Slug</th>
                                    <th className="text-left text-gray-400 font-medium px-5 py-3">Status</th>
                                    <th className="text-left text-gray-400 font-medium px-5 py-3">Date</th>
                                    <th className="text-left text-gray-400 font-medium px-5 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition">
                                        <td className="px-5 py-3 text-white font-medium max-w-xs">
                                            <p className="truncate">{post.title}</p>
                                        </td>
                                        <td className="px-5 py-3 text-gray-500 text-xs font-mono">{post.slug}</td>
                                        <td className="px-5 py-3">
                                            <button
                                                onClick={() => handleTogglePublish(post.id)}
                                                disabled={toggling === post.id}
                                                className={`text-xs font-medium px-2.5 py-1 rounded-full transition ${post.published
                                                        ? 'bg-green-900/40 text-green-400 border border-green-700/40 hover:bg-red-900/40 hover:text-red-400 hover:border-red-700/40'
                                                        : 'bg-gray-800 text-gray-400 border border-gray-700 hover:bg-green-900/40 hover:text-green-400 hover:border-green-700/40'
                                                    }`}
                                            >
                                                {toggling === post.id ? '...' : post.published ? '✅ Published' : '⬜ Draft'}
                                            </button>
                                        </td>
                                        <td className="px-5 py-3 text-gray-500 whitespace-nowrap">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-5 py-3 flex items-center gap-3">
                                            <Link
                                                to={`/admin/blog/${post.id}`}
                                                className="text-violet-400 hover:text-violet-300 text-xs transition"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post.id)}
                                                className="text-red-400 hover:text-red-300 text-xs transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminBlog;
