import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import About from './components/About'
import Features from './components/Features'
import Downloads from './components/Downloads'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <Screenshots />
      <About />
      <Features />
      <Downloads />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
