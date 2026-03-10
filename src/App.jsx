import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SmoothScroll from './SmoothScroll'
import BlogSection from './components/BlogSection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skills from './components/Skills'
import Footer1 from './components/ui/Footer1'
// import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <SmoothScroll />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/service' element={<Projects />}/>
        <Route path='/contect' element={<Contact/>}/>
        <Route path='/project' element={<BlogSection />}/>
      </Routes>
      </BrowserRouter>
      {/* <Footer1/> */}
      {/* <Hero/> */}
      {/* <Projects />
      <Contact/>
       <BlogSection />
       <Skills/> */}
      {/* <LandingPage/> */}
    </div>
  )
}

export default App
