function WorkflowShowcase() {
  const workflows = [
    {
      title: "AI Lead Qualification Workflow",
      subtitle: "Automated lead capture and AI-powered qualification system",
      steps: [
        "Lead Form Submission",
        "Webhook Trigger",
        "OpenAI Lead Analysis",
        "Lead Score Generation",
        "Google Sheets Storage",
        "CRM Update",
        "Automated Email Response",
      ],
    },
    {
      title: "Portfolio Contact Automation",
      subtitle: "Backend contact processing and database storage workflow",
      steps: [
        "Portfolio Contact Form",
        "API Route Request",
        "Backend Validation",
        "MongoDB Database Storage",
        "Server Processing",
        "Submission Confirmation",
      ],
    },
  ];

  return (
    <section
      id="workflow-showcase"
      className="py-24 px-6 border-t border-slate-800"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 font-medium mb-3">
            Workflow Architecture
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-4xl leading-tight">
            Designing systems that automate processes and connect multiple technologies together.
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl leading-7">
            These workflow architectures demonstrate how I build automation systems
            that connect APIs, AI services, databases, web applications, and business operations.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {workflow.title}
              </h3>

              <p className="text-slate-400 mb-8">
                {workflow.subtitle}
              </p>

              <div className="space-y-3">
                {workflow.steps.map((step, index) => (
                  <div key={step}>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>

                      <p className="text-slate-300">{step}</p>
                    </div>

                    {index !== workflow.steps.length - 1 && (
                      <div className="ml-4 h-6 border-l border-cyan-400/40 mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkflowShowcase;