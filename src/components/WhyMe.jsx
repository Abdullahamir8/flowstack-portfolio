function WhyMe() {
  const reasons = [
    {
      icon: "⚛️",
      title: "Full Stack Development",
      description:
        "Building scalable MERN applications with modern frontend architecture, backend APIs, authentication systems, database integration, and production deployment.",
    },
    {
      icon: "⚙️",
      title: "Automation Engineering",
      description:
        "Designing n8n workflows that automate business operations through webhooks, CRM updates, API integrations, lead capture systems, and workflow orchestration.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description:
        "Building AI-powered systems with OpenAI APIs for intelligent automation, smart responses, lead qualification, data processing, and advanced workflow automation.",
    },
    {
      icon: "📈",
      title: "Business Focused Solutions",
      description:
        "I focus on solving practical business problems with software solutions that save time, reduce manual work, improve efficiency, and help businesses scale faster.",
    },
  ];

  return (
    <section id="why-me" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <p className="text-cyan-400 font-medium mb-3">
            Why Work With Me
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-4xl leading-tight">
            I build software systems that combine development, automation,
            and AI to solve real business challenges.
          </h2>

          <p className="text-slate-300 max-w-3xl text-lg leading-7">
            Beyond writing code, I focus on building scalable systems that
            automate operations, improve productivity, and create measurable
            business value through modern engineering solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
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