'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-cream border-b border-light-gray sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-navy-600 font-playfair text-2xl font-bold">
              Lekgegaj<span className="text-gold-700">.</span>
            </div>
            <div className="text-gold-700 text-xs font-semibold tracking-widest">
              CONSULTING
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              Services
            </Link>
            <Link href="/about" className="text-charcoal hover:text-gold-700 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-light-gray rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-light-gray pt-4 space-y-3">
            <Link
              href="/"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-charcoal hover:text-gold-700 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm block text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
