import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";
import Footer from "../components/Footer";

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project not found</h1>

            <Link to="/" className="text-cyan-400 hover:text-cyan-300">
              Back to Home
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </Link>

          <div className="mt-8">
            <p className="text-cyan-400 font-medium mb-3">{project.category}</p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                {project.status}
              </span>

              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-slate-900 border border-slate-700 text-slate-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-slate-300 text-lg mb-10">
              {project.description}
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
              <div className="h-64 bg-slate-800 relative overflow-hidden rounded-xl">
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-contain bg-slate-950"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center px-6 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-slate-950"></div>

                    <div className="relative border border-slate-700 bg-slate-950/70 rounded-xl px-6 py-5">
                      <p className="text-slate-300 text-xl font-semibold">
                        {project.image}
                      </p>
                      <p className="text-slate-500 text-sm mt-2">
                        Project screenshot placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-3">Problem</h2>
              <p className="text-slate-300">
                {project.problem ||
                  "This section will explain the problem this project solves for users or businesses."}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-3">Solution</h2>
              <p className="text-slate-300">
                {project.solution ||
                  "This section will explain how the project solves the problem using the selected tools and technologies."}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-3">What I Learned</h2>
              <p className="text-slate-300">
                {project.learned ||
                  "This section will describe the technical and practical lessons learned while building the project."}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
              >
                Live Demo
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="border border-slate-600 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProjectDetail;