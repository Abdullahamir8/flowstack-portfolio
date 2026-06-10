function Services({ services }) {
  return (
    <section id="services" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 font-medium mb-3">
            Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I can build for clients
          </h2>

          <p className="text-slate-300 max-w-2xl">
            I focus on practical automation and web development solutions that help businesses
            save time, manage leads, and improve their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-4">
                {service.description}
              </p>

              <span className="text-cyan-400 text-sm font-medium">
                {service.tools}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services