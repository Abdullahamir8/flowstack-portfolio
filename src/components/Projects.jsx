function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-3">
            Projects
          </p>

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
              <div className="h-40 bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400">
                  {project.label}
                </span>
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

                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-5">
                  {project.description}
                </p>

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
                  <a
                    href={project.demoLink}
                    className="text-cyan-400 font-medium hover:text-cyan-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    className="text-slate-300 font-medium hover:text-cyan-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects