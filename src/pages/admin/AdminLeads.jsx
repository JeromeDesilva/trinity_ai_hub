import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import api from '../../utils/api';

const AdminLeads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(null);

    const fetchLeads = async () => {
        try {
            const { data } = await api.get('/api/leads');
            setLeads(data.leads || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchLeads(); }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this lead?')) return;
        setDeleting(id);
        try {
            await api.delete(`/api/leads/${id}`);
            setLeads((prev) => prev.filter((l) => l.id !== id));
        } catch {
            alert('Could not delete lead.');
        } finally {
            setDeleting(null);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div>
                    <h2 className="text-white text-xl font-bold">Leads</h2>
                    <p className="text-gray-400 text-sm mt-1">All form submissions and enquiries</p>
                </div>

                {loading ? (
                    <div className="text-gray-400 text-sm">Loading leads...</div>
                ) : leads.length === 0 ? (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center text-gray-500">
                        No leads yet. They'll appear here when someone fills the contact form!
                    </div>
                ) : (
                    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-800">
                                        <th className="text-left text-gray-400 font-medium px-5 py-3">Name</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-3">Email</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-3">Phone</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-3">Message</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-3">Date</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map((lead) => (
                                        <tr key={lead.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition">
                                            <td className="px-5 py-3 text-white font-medium">{lead.name}</td>
                                            <td className="px-5 py-3 text-gray-300">
                                                <a href={`mailto:${lead.email}`} className="hover:text-violet-400 transition">{lead.email}</a>
                                            </td>
                                            <td className="px-5 py-3 text-gray-400">{lead.phone || '—'}</td>
                                            <td className="px-5 py-3 text-gray-400 max-w-xs truncate">{lead.message}</td>
                                            <td className="px-5 py-3 text-gray-500 whitespace-nowrap">
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-5 py-3">
                                                <button
                                                    onClick={() => handleDelete(lead.id)}
                                                    disabled={deleting === lead.id}
                                                    className="text-red-400 hover:text-red-300 disabled:opacity-50 text-xs transition"
                                                >
                                                    {deleting === lead.id ? 'Deleting...' : 'Delete'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminLeads;
