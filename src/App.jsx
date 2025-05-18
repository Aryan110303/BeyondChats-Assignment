import React, { useState } from 'react'
import Header from "./components/Header";
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import AiGrid from './components/AiGrid';
import Banner from './components/Banner';
import Build from './components/Build';
import Book from './components/Book';
import Faq from './components/Faq';
import Footer from './components/Footer';



function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Marquee/>
      <AiGrid/>
      <Banner/>
      <Build/>
      <Book/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
