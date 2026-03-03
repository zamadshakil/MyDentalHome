import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialist from './components/Specialist'
import Services from './components/Services'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Specialist />
      <Results />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="bg-bg-light text-slate-900 font-display">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  )
}

export default App
