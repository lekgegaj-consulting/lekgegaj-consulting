'use client'

export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Briefcase, Scale, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-600 to-navy-700 text-cream py-24 md:py-32 lg:py-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  {t('home.hero.cta1')}
                </Link>
                <Link href="/contact" className="btn-secondary">
                  {t('home.hero.cta2')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              {t('home.why.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  {t('home.why.card1.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.why.card1.desc')}
                </p>
              </div>

              {/* Card 2 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  {t('home.why.card2.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.why.card2.desc')}
                </p>
              </div>

              {/* Card 3 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  {t('home.why.card3.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.why.card3.desc')}
                </p>
              </div>

              {/* Card 4 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  {t('home.why.card4.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.why.card4.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gold-700">
              {t('home.services.title')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Legal Services */}
              <div className="bg-navy-700 p-8 rounded-lg border border-navy-500">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="text-gold-700" size={32} />
                  <h3 className="font-playfair text-3xl font-bold text-gold-700">
                    {t('home.services.legal.title')}
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item5')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.legal.item6')}</span>
                  </li>
                </ul>
                <Link href="/services#legal" className="btn-gold inline-flex items-center gap-2">
                  {t('home.services.legal.learnMore')} <ArrowRight size={18} />
                </Link>
              </div>

              {/* Business Consulting */}
              <div className="bg-navy-700 p-8 rounded-lg border border-navy-500">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-gold-700" size={32} />
                  <h3 className="font-playfair text-3xl font-bold text-gold-700">
                    {t('home.services.business.title')}
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.business.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.business.item2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.business.item3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.business.item4')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>{t('home.services.business.item5')}</span>
                  </li>
                </ul>
                <Link href="/services#business" className="btn-gold inline-flex items-center gap-2">
                  {t('home.services.business.learnMore')} <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              {t('home.process.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">01</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  {t('home.process.step1.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.process.step1.desc')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">02</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  {t('home.process.step2.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.process.step2.desc')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">03</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  {t('home.process.step3.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.process.step3.desc')}
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">04</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  {t('home.process.step4.title')}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {t('home.process.step4.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gold-700">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              {t('home.cta.button')} <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
