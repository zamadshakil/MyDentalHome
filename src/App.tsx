import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialist from './components/Specialist'
import Services from './components/Services'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import WhatsAppWidget from './components/WhatsAppWidget'

/* Scroll to top on route change for sub-pages */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Specialist />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="bg-bg-light text-slate-900 font-display antialiased overflow-x-hidden">
      <ScrollToTop />
      <WhatsAppWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </div>
  )
}

export default App
