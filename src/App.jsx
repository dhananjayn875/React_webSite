import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Header from "./components/Header"
// eslint-disable-next-line no-unused-vars

export default function App() {
  return (<div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Header />
    <Hero />
    <Projects />
    <Skills />
    <Footer />
  </div>
  )
}
