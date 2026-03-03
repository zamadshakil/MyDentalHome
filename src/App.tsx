import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialist from './components/Specialist'
import Services from './components/Services'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="bg-bg-light text-slate-900 font-display">
      <Navbar />
      <Hero />
      <Services />
      <Specialist />
      <Results />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
