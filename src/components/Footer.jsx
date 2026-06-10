function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>
          © 2026 FlowStack. Built by Abdullah Amir.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer