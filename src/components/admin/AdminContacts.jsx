import { useEffect, useState } from 'react';
import { Trash2, Mail } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { token } = useAuth();
  const limit = 10;

  const fetchContacts = async (pageNum) => {
    try {
      const response = await fetch(`/api/admin/contacts?page=${pageNum}&limit=${limit}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchContacts(page);
  }, [token, page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact?')) return;

    try {
      const response = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setContacts(contacts.filter((c) => c._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-slate-400">Loading contacts...</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Contact Messages</h2>

      {contacts.length > 0 ? (
        <>
          <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800 border-b border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-slate-300">Name</th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-300">Email</th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-300">Service</th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-300">Date</th>
                    <th className="text-left px-6 py-4 font-semibold text-slate-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="border-b border-slate-800 hover:bg-slate-800 transition"
                    >
                      <td className="px-6 py-4 text-white">{contact.name}</td>
                      <td className="px-6 py-4 text-slate-400 text-sm flex items-center gap-2">
                        <Mail size={16} className="text-cyan-400" />
                        {contact.email}
                      </td>
                      <td className="px-6 py-4 text-slate-400 text-sm">{contact.service}</td>
                      <td className="px-6 py-4 text-slate-400 text-sm">
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(contact._id)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition text-sm"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-4 py-2 rounded-lg transition ${
                    page === p
                      ? 'bg-cyan-400 text-slate-950 font-semibold'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center">
          <Mail size={48} className="mx-auto text-slate-600 mb-4" />
          <p className="text-slate-400">No contact messages yet</p>
        </div>
      )}
    </div>
  );
}

export default AdminContacts;
