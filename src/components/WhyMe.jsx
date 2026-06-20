function WhyMe() {
  const reasons = [
    {
      icon: "⚛️",
      title: "Frontend Engineering",
      description:
        "Building responsive modern user interfaces using React.js, component architecture, state management, and reusable frontend systems.",
    },
    {
      icon: "🖥️",
      title: "Backend Development",
      description:
        "Building scalable backend servers using Node.js and Express.js with proper architecture, request handling, validation, and REST API development.",
    },
    {
      icon: "🗄️",
      title: "Database Architecture",
      description:
        "Designing database-driven applications using MongoDB and Mongoose including schema design, CRUD operations, relationships, and data persistence.",
    },
    {
      icon: "🚀",
      title: "Production Ready Projects",
      description:
        "I build real-world applications with deployment, GitHub version control, backend integration, database connectivity, and practical software engineering workflows.",
    },
  ];

  return (
    <section id="why-me" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-cyan-400 font-medium mb-3">
            Why Work With Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-4xl leading-tight">
            I build modern full stack web applications using production-ready engineering practices.
          </h2>

          <p className="text-slate-300 max-w-3xl text-lg leading-7">
            My focus is building scalable applications, writing clean code,
            understanding system architecture, and continuously improving as a professional software engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span>{item.icon}</span>
                {item.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyMe;