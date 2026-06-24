import { useEffect, useState } from 'react';
import { Trash2, Edit2, Plus } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import ProjectForm from './ProjectForm';

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const { token } = useAuth();

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setProjects(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchProjects();
  }, [token]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(`/api/admin/projects?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setProjects(projects.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingProject(null);
    fetchProjects();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-slate-400">Loading projects...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      {showForm && (
        <ProjectForm
          project={editingProject}
          token={token}
          onClose={handleFormClose}
        />
      )}

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.category}</p>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setEditingProject(project);
                    setShowForm(true);
                  }}
                  className="flex items-center gap-2 flex-1 bg-slate-800 text-white px-3 py-2 rounded-lg hover:bg-slate-700 transition text-sm"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="flex items-center gap-2 flex-1 bg-red-900 text-red-200 px-3 py-2 rounded-lg hover:bg-red-800 transition text-sm"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center">
          <p className="text-slate-400 mb-4">No projects yet</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Create First Project
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminProjects;
