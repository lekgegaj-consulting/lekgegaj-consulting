'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-600 text-cream">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-gold-700 font-playfair text-2xl font-bold mb-2">
              Lekgegaj<span className="text-cream">.</span>
            </div>
            <div className="text-gold-700 text-xs font-semibold tracking-widest mb-4">
              CONSULTING
            </div>
            <p className="text-cream/80 text-sm">
              Premium law and business consulting in Durrës, Albania.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#legal" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Legal Services
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  Get Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-gold-700 mt-1 flex-shrink-0" />
                <a href="mailto:info@lekgegaj-consulting.com" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  info@lekgegaj-consulting.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-gold-700 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-cream/80 hover:text-gold-700 transition-colors">
                    <a href="tel:+355692082624">+355 69 208 2624</a>
                  </div>
                  <div className="text-cream/80 hover:text-gold-700 transition-colors">
                    <a href="tel:+355682082624">+355 68 208 2624</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-700 mt-1 flex-shrink-0" />
                <p className="text-cream/80 text-sm">
                  Durrës, Albania
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-500 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-cream/60">
            <div>
              © {currentYear} Lekgegaj Consulting. All rights reserved.
            </div>
            <div className="md:text-right space-x-4">
              <Link href="#" className="hover:text-gold-700 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-gold-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
