import { Link } from "react-router-dom";

function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-3">Projects</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Practical MERN development projects
          </h2>

          <p className="text-slate-300 max-w-2xl">
            These projects demonstrate my practical experience building frontend interfaces,
            backend APIs, database-driven applications, and deploying production-ready web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
            >
              <div className="h-40 bg-slate-800 relative overflow-hidden">
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-400">
                    Project Preview
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-cyan-400 text-sm font-medium mb-3">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-slate-300 mb-5">{project.description}</p>

                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-cyan-400 font-medium"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;