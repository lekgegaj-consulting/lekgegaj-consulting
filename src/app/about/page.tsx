import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Heart, Target, Zap, Award, Users, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Lekgegaj Consulting',
  description: 'Learn about Lekgegaj Consulting, our team, values, and commitment to excellence.',
}

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practice and honest counsel. Your trust is our most valuable asset.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Pursuit of the highest standards in every aspect of our work. Attention to detail and commitment to quality.',
    },
    {
      icon: Target,
      title: 'Client Focus',
      description: 'Your success is our success. We prioritize your goals and work tirelessly to achieve them.',
    },
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Deep knowledge and continuous learning. Our team stays current with legal and business developments.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Professional yet approachable. We communicate clearly and remain available when you need us.',
    },
    {
      icon: Zap,
      title: 'Results',
      description: 'Measurable outcomes and tangible success. We focus on delivering results that matter.',
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
              About Lekgegaj Consulting
            </h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              Premium legal and business consulting with a commitment to excellence and client success.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12 text-navy-600">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-slate text-lg leading-relaxed mb-6">
                Lekgegaj Consulting was founded on the principle that exceptional legal and business expertise should be accessible to clients who demand the highest standards. Based in Durrës, Albania, we combine deep knowledge of Albanian law and business practices with international standards of professionalism and service excellence.
              </p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Our team brings together experienced attorneys and business consultants with proven track records of success. We understand the complexities of Albanian law and the challenges of doing business in the region. More importantly, we understand that every client has unique needs and deserves personalized attention.
              </p>
              <p className="text-slate text-lg leading-relaxed">
                We are committed to delivering results that exceed expectations, building long-term relationships based on trust, and contributing to the success of our clients' most important endeavors.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gold-700">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-navy-700 border border-navy-500 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-cream" size={24} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3 text-gold-700">
                      {value.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {value.description}
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              Our Team
            </h2>
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

        {/* CTA Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gold-700">
              Work With Our Team
            </h2>
            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Experience the difference that expertise, dedication, and personalized attention can make.
            </p>
            <Link href="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
