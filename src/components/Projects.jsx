import { Link } from "react-router-dom";

function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-3">Projects</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured portfolio projects
          </h2>

          <p className="text-slate-300 max-w-2xl">
            These projects show my practical skills in automation, AI workflows,
            and full-stack web development.
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
                  <div className="h-full flex items-center justify-center px-6 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-slate-950"></div>

                    <div className="relative border border-slate-700 bg-slate-950/70 rounded-xl px-5 py-4">
                      <p className="text-slate-300 font-semibold">
                        {project.image}
                      </p>
                      <p className="text-slate-500 text-xs mt-2">
                        Screenshot placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-cyan-400 text-sm font-medium">
                    {project.category}
                  </p>

                  <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-slate-300 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-950 border border-slate-700 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-cyan-400 font-medium hover:text-cyan-300"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 font-medium hover:text-cyan-400"
                  >
                    Live Demo
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 font-medium hover:text-cyan-400"
                    >
                      GitHub
                    </a>
                  )}
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
