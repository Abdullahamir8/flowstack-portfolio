import { services, projects } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

       <Services services={services} />

      <Projects projects={projects} />

      <Contact />

      <Footer />
    </main>
  )
}

export default App