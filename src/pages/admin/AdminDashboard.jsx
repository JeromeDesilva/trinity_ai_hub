import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import api from '../../utils/api';

const StatCard = ({ label, value, icon, color }) => (
    <div className={`bg-gray-900 border ${color} rounded-xl p-6`}>
        <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">{label}</span>
            <span className="text-2xl">{icon}</span>
        </div>
        <p className="text-white text-3xl font-bold">{value}</p>
    </div>
);

const AdminDashboard = () => {
    const [stats, setStats] = useState({ leads: 0, blogs: 0, published: 0 });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [leadsRes, blogsRes] = await Promise.all([
                    api.get('/api/leads'),
                    api.get('/api/blog?all=true'),
                ]);
                const leads = leadsRes.data.leads || [];
                const blogs = blogsRes.data.blogs || [];
                setStats({
                    leads: leads.length,
                    blogs: blogs.length,
                    published: blogs.filter((b) => b.published).length,
                });
                setRecentLeads(leads.slice(0, 5));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-white text-xl font-bold">Dashboard</h2>
                    <p className="text-gray-400 text-sm mt-1">Trinity CMS overview</p>
                </div>

                {loading ? (
                    <div className="text-gray-400 text-sm">Loading stats...</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <StatCard label="Total Leads" value={stats.leads} icon="👥" color="border-blue-700/30" />
                            <StatCard label="Blog Posts" value={stats.blogs} icon="📝" color="border-violet-700/30" />
                            <StatCard label="Published" value={stats.published} icon="✅" color="border-green-700/30" />
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-white font-semibold mb-4">Recent Leads</h3>
                            {recentLeads.length === 0 ? (
                                <p className="text-gray-500 text-sm">No leads yet.</p>
                            ) : (
                                <div className="space-y-3">
                                    {recentLeads.map((lead) => (
                                        <div key={lead.id} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                                            <div>
                                                <p className="text-white text-sm font-medium">{lead.name}</p>
                                                <p className="text-gray-400 text-xs">{lead.email}</p>
                                            </div>
                                            <span className="text-gray-500 text-xs">
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
                            <div className="flex flex-wrap gap-3">
                                <a href="/admin/blog/new" className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 rounded-lg transition">
                                    + New Blog Post
                                </a>
                                <a href="/admin/leads" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition">
                                    View All Leads
                                </a>
                                <a href="/admin/seo" className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-lg transition">
                                    Edit SEO Settings
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
