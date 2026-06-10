function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-cyan-400 font-medium mb-3">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s build something useful
          </h2>

          <p className="text-slate-300 mb-6">
            Have an automation idea, website project, or business workflow you want to improve?
            Send me a message and I’ll get back to you.
          </p>

          <div className="space-y-3 text-slate-300">
            <p>
              <span className="text-white font-semibold">Email:</span> abd08amir@gmail.com
            </p>
            <p>
              <span className="text-white font-semibold">Services:</span> n8n Automation, AI Automation, MERN Development
            </p>
            <p>
              <span className="text-white font-semibold">Availability:</span> Open for freelance projects
            </p>
          </div>
        </div>

        <form className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Service Interested In
            </label>
            <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400">
              <option>n8n Automation</option>
              <option>AI Automation</option>
              <option>MERN Web Development</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 resize-none"
            ></textarea>
          </div>

          <button
            type="button"
            className="w-full bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact