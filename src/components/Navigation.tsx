'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${isScrolled
      ? 'bg-black/95 backdrop-blur-lg  shadow-lg'
      : 'bg-black/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none'
      }`}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="logo">
            <h2 className="text-primary-green font-extrabold text-2xl">FitCouple</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white font-medium transition-colors duration-300 hover:text-primary-green">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white font-medium transition-colors duration-300 hover:text-primary-green">About</button>
            <button onClick={() => scrollToSection('services')} className="text-white font-medium transition-colors duration-300 hover:text-primary-green">Services</button>
            <button onClick={() => scrollToSection('trainers')} className="text-white font-medium transition-colors duration-300 hover:text-primary-green">Trainers</button>
            <button onClick={() => scrollToSection('contact')} className="text-white font-medium transition-colors duration-300 hover:text-primary-green">Contact</button>
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-primary-green text-black px-6 py-3 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-dark-green hover:-translate-y-0.5">
            JOIN NOW
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="pt-4 pb-2 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-3 px-4 text-white font-medium transition-colors duration-300 hover:text-primary-green hover:bg-white/5 rounded-md">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 px-4 text-white font-medium transition-colors duration-300 hover:text-primary-green hover:bg-white/5 rounded-md">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 px-4 text-white font-medium transition-colors duration-300 hover:text-primary-green hover:bg-white/5 rounded-md">Services</button>
            <button onClick={() => scrollToSection('trainers')} className="block w-full text-left py-3 px-4 text-white font-medium transition-colors duration-300 hover:text-primary-green hover:bg-white/5 rounded-md">Trainers</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 px-4 text-white font-medium transition-colors duration-300 hover:text-primary-green hover:bg-white/5 rounded-md">Contact</button>

            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-primary-green text-black py-3 px-4 rounded-md font-semibold text-sm cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-dark-green">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}