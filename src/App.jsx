import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Difference from './components/Difference'
import Steps from './components/Steps'
import Footer from './components/Footer'
import Header from "./components/Header";
import Features from "./components/Features";
import Bento from "./components/Bento";
import Mvp from "./components/Mvp";
import Treat from "./components/Treat";

function App() {
  // Scroll to top on refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Features />
              <Bento />
              <Difference />
              <Mvp />
              <Steps />
              <Treat />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
