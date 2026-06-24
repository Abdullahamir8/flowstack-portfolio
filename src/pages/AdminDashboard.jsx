import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminProjects from '../components/admin/AdminProjects';
import AdminContacts from '../components/admin/AdminContacts';
import AdminAnalytics from '../components/admin/AdminAnalytics';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          <div className="p-6 md:p-8">
            {activeTab === 'dashboard' && <AdminAnalytics />}
            {activeTab === 'projects' && <AdminProjects />}
            {activeTab === 'contacts' && <AdminContacts />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
