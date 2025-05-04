import React, { useState } from 'react'
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
import Try from "./components/Try";
import Preloader from './components/Preloader'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Preloader onComplete={() => setIsLoaded(true)} />
        {isLoaded && (
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
                <Try />
                <Footer />
              </>
            } />
          </Routes>
        )}
      </div>
    </Router>
  )
}

export default App
