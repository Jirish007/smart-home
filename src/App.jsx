
import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Hero = lazy(() => import('./components/Hero'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Team = lazy(() => import('./components/Team'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="text-center py-5">Loading...</div>}>
          <Hero />
          <Services />
          <About />
          <Team />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
