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
import ServicesSection from './components/ui/ServicesSection'
import Footer from './components/Footer'
import GetInTouch from './components/ui/Getintouch'
import ErrorPage from './Pages/ErrorPage'

const App = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      <SmoothScroll />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<ServicesSection/>}/>
        <Route path='/service' element={<Projects />}/>
        <Route path='/contect' element={<Contact/>}/>
        <Route path='/projects' element={<BlogSection />}/>
        <Route path='/getintouch' element={<GetInTouch />}/>
        
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Footer1/> */}
      {/* <Hero/> */}
      {/* <Projects />
      <Contact/>
       <BlogSection />
       <Skills/> */}
      {/* <LandingPage/> */}
      <Footer/>
    </div>
  )
}

export default App
