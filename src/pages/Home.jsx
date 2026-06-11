import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home({ services, projects }) {
  return (
    <>
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home