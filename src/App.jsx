import { Routes, Route } from 'react-router-dom'
import { services, projects } from './data/portfolioData'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home services={services} projects={projects} />}
        />

        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </main>
  )
}

export default App