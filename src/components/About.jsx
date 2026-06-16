function About() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "n8n Automation",
    "OpenAI Integration",
  ];

  return (
    <section id="about" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-3">About Me</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building software and automation systems that solve real business
            problems.
          </h2>

          <div className="max-w-4xl space-y-5 text-slate-300 text-lg leading-8">
            <p>
              I’m <span className="text-white font-semibold">Abdullah Amir</span>,
              a developer focused on building modern full-stack web applications
              and intelligent workflow automation systems.
            </p>

            <p>
              My core expertise is in{" "}
              <span className="text-cyan-400">
                MERN Stack Development
              </span>{" "}
              where I build responsive frontend interfaces, backend APIs,
              database-driven applications, admin dashboards, and scalable web
              solutions using modern JavaScript technologies.
            </p>

            <p>
              I also specialize in{" "}
              <span className="text-cyan-400">
                workflow automation using n8n and AI integration
              </span>
              , helping businesses automate repetitive tasks such as lead
              capture, CRM updates, email automation, API connections, data
              processing, and intelligent AI-powered workflows.
            </p>

            <p>
              My focus is not simply writing code — I build systems that save
              time, reduce manual work, improve efficiency, and solve practical
              business problems through software engineering and automation.
            </p>

            <p>
              I continuously work on real-world projects to strengthen my
              expertise in full-stack development, backend architecture,
              automation engineering, and AI-powered business solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-12">
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
    </section>
  );
}

export default About;