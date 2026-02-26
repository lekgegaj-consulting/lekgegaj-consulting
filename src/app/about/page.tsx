'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Heart, Target, Award, Lightbulb } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export default function About() {
  const { t } = useTranslation()

  const values = [
    {
      icon: Heart,
      titleKey: 'about.values.integrity.title',
      descKey: 'about.values.integrity.desc',
    },
    {
      icon: Award,
      titleKey: 'about.values.excellence.title',
      descKey: 'about.values.excellence.desc',
    },
    {
      icon: Target,
      titleKey: 'about.values.clientFocus.title',
      descKey: 'about.values.clientFocus.desc',
    },
    {
      icon: Lightbulb,
      titleKey: 'about.values.professionalism.title',
      descKey: 'about.values.professionalism.desc',
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
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              {/* Mission */}
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  {t('about.mission.title')}
                </h2>
                <p className="text-slate text-lg leading-relaxed">
                  {t('about.mission.desc')}
                </p>
              </div>

              {/* Vision */}
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  {t('about.vision.title')}
                </h2>
                <p className="text-slate text-lg leading-relaxed">
                  {t('about.vision.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gold-700">
              {t('about.values.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-navy-700 border border-navy-500 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cream" size={24} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3 text-gold-700">
                      {t(value.titleKey)}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {t(value.descKey)}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-navy-600">
              {t('about.team.title')}
            </h2>
            <p className="text-center text-slate text-lg mb-16 max-w-3xl mx-auto">
              {t('about.team.desc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Team Member 1 */}
              <div className="bg-white border border-light-gray rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-cream font-playfair text-3xl font-bold">AT</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-2">
                    Av. Tone Lekgegaj
                  </h3>
                  <p className="text-gold-700 font-semibold mb-4">Attorney at Law</p>
                  <p className="text-slate text-sm mb-4">
                    Experienced attorney with extensive expertise in criminal, civil, and administrative law. Dedicated to providing exceptional legal representation and counsel.
                  </p>
                  <div className="pt-4 border-t border-light-gray">
                    <p className="text-slate text-sm font-semibold mb-2">Specialization:</p>
                    <p className="text-slate text-sm">Criminal Law, Civil Law, Administrative Law</p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white border border-light-gray rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="h-64 bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-cream font-playfair text-3xl font-bold">PL</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-2">
                    Pjerin Lekgegaj
                  </h3>
                  <p className="text-gold-700 font-semibold mb-4">Business & Legal Consultant</p>
                  <p className="text-slate text-sm mb-4">
                    Strategic business consultant with proven expertise in business development, commercial contracts, and business management. Committed to driving client success.
                  </p>
                  <div className="pt-4 border-t border-light-gray">
                    <p className="text-slate text-sm font-semibold mb-2">Specialization:</p>
                    <p className="text-slate text-sm">Business Development, Commercial Contracts, Business Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gold-700">
              {t('about.location.title')}
            </h2>
            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              {t('about.location.desc')}
            </p>
            <Link href="/contact" className="btn-gold">
              {t('nav.contact')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
