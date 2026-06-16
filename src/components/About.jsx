function About() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "n8n Automation",
    "OpenAI API",
  ];

  const stats = [
    "2+ Full Stack Projects",
    "Live Production Deployment",
    "AI + Automation Workflows",
    "Backend API Integration",
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* About Content */}
        <div className="mb-14">
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl leading-tight">
            Building software and automation solutions that help businesses work
            smarter and scale faster.
          </h2>

          <div className="max-w-4xl space-y-6 text-slate-300 text-lg leading-8">
            <p>
              I’m{" "}
              <span className="text-white font-semibold">
                Abdullah Amir
              </span>
              , a developer focused on building modern web applications and
              intelligent automation systems for real business use cases.
            </p>

            <p>
              I specialize in{" "}
              <span className="text-cyan-400">
                MERN stack development, backend APIs, database architecture,
                workflow automation, and AI-powered integrations
              </span>{" "}
              using modern technologies and scalable engineering practices.
            </p>

            <p>
              My focus is building systems that automate repetitive work,
              improve operational efficiency, and solve practical business
              problems through clean software development and automation.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center hover:border-cyan-400 transition"
            >
              <p className="text-white font-medium">{stat}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <p className="text-cyan-400 font-medium mb-5">Core Technologies</p>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-center hover:border-cyan-400 transition"
              >
                <p className="text-slate-200 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;