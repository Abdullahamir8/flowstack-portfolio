function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <p>© 2026 FlowStack. Built by Abdullah Amir.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Abdullahamir8"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abdullah-amir-0bb824301?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://www.fiverr.com/s/jjNPg07"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
