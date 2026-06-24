import { useEffect, useState } from 'react';
import { BarChart3, Mail, FolderOpen, TrendingUp } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

function AdminAnalytics() {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalProjects: 0,
    recentContacts: [],
  });
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, projectsRes] = await Promise.all([
          fetch('/api/admin/contacts?limit=100', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch('/api/admin/projects', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const contactsData = await contactsRes.json();
        const projectsData = await projectsRes.json();

        setStats({
          totalContacts: contactsData.pagination?.total || 0,
          totalProjects: projectsData.data?.length || 0,
          recentContacts: contactsData.data?.slice(0, 5) || [],
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchStats();
  }, [token]);

  const StatCard = ({ icon: Icon, label, value }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm mb-1">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className="p-3 bg-slate-800 rounded-lg">
          <Icon size={24} className="text-cyan-400" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-slate-400">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <StatCard icon={Mail} label="Total Contacts" value={stats.totalContacts} />
        <StatCard icon={FolderOpen} label="Total Projects" value={stats.totalProjects} />
        <StatCard icon={TrendingUp} label="Engagement" value="100%" />
      </div>

      {/* Recent Contacts */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6">Recent Contact Submissions</h3>
        {stats.recentContacts.length > 0 ? (
          <div className="space-y-4">
            {stats.recentContacts.map((contact) => (
              <div key={contact._id} className="border-l-2 border-cyan-400 pl-4 py-2">
                <p className="font-semibold text-white">{contact.name}</p>
                <p className="text-sm text-slate-400">{contact.email}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-400">No contacts yet</p>
        )}
      </div>
    </div>
  );
}

export default AdminAnalytics;
