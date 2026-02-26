'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

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
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#legal" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('services.legal.title')}
                </Link>
              </li>
              <li>
                <Link href="/services#business" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('services.business.title')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/80 hover:text-gold-700 transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4 text-gold-700">{t('footer.legal')}</h4>
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
              © {currentYear} {t('footer.company')}. {t('footer.copyright')}
            </div>
            <div className="md:text-right space-x-4">
              <Link href="#" className="hover:text-gold-700 transition-colors">
                {t('footer.privacy')}
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-gold-700 transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
