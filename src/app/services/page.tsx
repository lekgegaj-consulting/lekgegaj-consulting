'use client'

export const dynamic = 'force-dynamic'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Scale, Briefcase, FileText, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Services() {
  const { t } = useTranslation()

  const legalServices = [
    {
      icon: Scale,
      titleKey: 'services.legal.criminal.title',
      descKey: 'services.legal.criminal.desc',
    },
    {
      icon: Shield,
      titleKey: 'services.legal.civil.title',
      descKey: 'services.legal.civil.desc',
    },
    {
      icon: FileText,
      titleKey: 'services.legal.administrative.title',
      descKey: 'services.legal.administrative.desc',
    },
    {
      icon: Users,
      titleKey: 'services.legal.family.title',
      descKey: 'services.legal.family.desc',
    },
    {
      icon: Briefcase,
      titleKey: 'services.legal.immigration.title',
      descKey: 'services.legal.immigration.desc',
    },
  ]

  const businessServices = [
    {
      icon: TrendingUp,
      titleKey: 'services.business.development.title',
      descKey: 'services.business.development.desc',
    },
    {
      icon: Briefcase,
      titleKey: 'services.business.marketing.title',
      descKey: 'services.business.marketing.desc',
    },
    {
      icon: FileText,
      titleKey: 'services.business.contracts.title',
      descKey: 'services.business.contracts.desc',
    },
    {
      icon: Users,
      titleKey: 'services.business.planning.title',
      descKey: 'services.business.planning.desc',
    },
    {
      icon: Shield,
      titleKey: 'services.business.management.title',
      descKey: 'services.business.management.desc',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-600 to-navy-700 text-cream py-24 md:py-32">
          <div className="container-custom text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
              {t('services.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Legal Services Section */}
        <section id="legal" className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-navy-600">
              {t('services.legal.title')}
            </h2>
            <p className="text-center text-slate text-lg mb-16 max-w-3xl mx-auto">
              {t('services.legal.intro')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="card-service">
                    <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cream" size={24} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Business Consulting Section */}
        <section id="business" className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-gold-700">
              {t('services.business.title')}
            </h2>
            <p className="text-center text-cream/90 text-lg mb-16 max-w-3xl mx-auto">
              {t('services.business.intro')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={index} className="bg-navy-700 border border-navy-500 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cream" size={24} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3 text-gold-700">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-navy-600">
              {t('services.hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              {t('nav.contact')} <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
