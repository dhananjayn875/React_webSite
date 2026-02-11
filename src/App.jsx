import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Features from "./components/Features"
import Header from "./components/Header"
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'

export default function App() {
  return (<div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Footer />
    <Pricing />
    <Testimonials />
    <Features />
    <Header />
  </div>
  )
}
