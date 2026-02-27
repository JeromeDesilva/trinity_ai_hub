import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/leads', label: 'Leads', icon: '👥' },
    { path: '/admin/blog', label: 'Blog', icon: '📝' },
    { path: '/admin/seo', label: 'SEO Settings', icon: '🔍' },
];

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const user = JSON.parse(localStorage.getItem('trinity_admin_user') || '{}');

    const handleLogout = () => {
        localStorage.removeItem('trinity_admin_token');
        localStorage.removeItem('trinity_admin_user');
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-950 flex">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-16'
                    } bg-gray-900 border-r border-gray-800 flex flex-col transition-all duration-300`}
            >
                {/* Logo */}
                <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
                    {sidebarOpen && (
                        <span className="text-white font-bold text-lg tracking-tight">
                            Trinity <span className="text-violet-400">CMS</span>
                        </span>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-gray-400 hover:text-white p-1 rounded transition"
                    >
                        {sidebarOpen ? '◀' : '▶'}
                    </button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 py-4 space-y-1 px-2">
                    {navItems.map((item) => {
                        const isActive =
                            item.path === '/admin'
                                ? location.pathname === '/admin'
                                : location.pathname.startsWith(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                        ? 'bg-violet-600/20 text-violet-300 border border-violet-600/30'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {sidebarOpen && <span>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* User + Logout */}
                {sidebarOpen && (
                    <div className="px-4 py-4 border-t border-gray-800">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold">
                                {user.name?.[0] || 'A'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-sm font-medium truncate">{user.name || 'Admin'}</p>
                                <p className="text-gray-500 text-xs truncate">{user.role || 'ADMIN'}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full text-left text-gray-400 hover:text-red-400 text-sm py-1.5 px-2 rounded transition"
                        >
                            🚪 Logout
                        </button>
                    </div>
                )}
            </aside>

            {/* Main content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                    <h1 className="text-white font-semibold text-lg">
                        {navItems.find(
                            (n) =>
                                n.path === '/admin'
                                    ? location.pathname === '/admin'
                                    : location.pathname.startsWith(n.path)
                        )?.label || 'Admin'}
                    </h1>
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-gray-400 hover:text-violet-400 transition"
                    >
                        → View Site
                    </a>
                </header>

                <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </main>
        </div>
    );
};

export default AdminLayout;
