function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 font-medium mb-4">
          Full Stack MERN Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          I build modern scalable web applications from frontend to backend.
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8">
          I develop full stack web applications using React, Node.js, Express,
          MongoDB, REST APIs, and modern JavaScript technologies for real-world business solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-600 px-6 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;