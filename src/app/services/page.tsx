import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Scale, Briefcase, FileText, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Lekgegaj Consulting',
  description: 'Comprehensive legal and business consulting services in Durrës, Albania.',
}

export default function Services() {
  const legalServices = [
    {
      icon: Scale,
      title: 'Court Representation',
      description: 'Professional representation in all courts and levels of judiciary in Albania. We advocate for your interests with expertise and dedication.',
    },
    {
      icon: Shield,
      title: 'Criminal Law',
      description: 'Defense and prosecution support in criminal cases. We navigate complex criminal law with strategic expertise.',
    },
    {
      icon: FileText,
      title: 'Civil Law',
      description: 'Resolution of civil disputes, contracts, and property matters. We protect your civil rights and interests.',
    },
    {
      icon: Users,
      title: 'Administrative Law',
      description: 'Guidance through administrative procedures and disputes. We help you navigate government agencies and regulations.',
    },
    {
      icon: Briefcase,
      title: 'Family Law',
      description: 'Sensitive handling of family law issues including divorce, custody, and inheritance matters.',
    },
    {
      icon: TrendingUp,
      title: 'Immigration',
      description: 'Expert assistance with residence permits and expulsion removal cases. We help you navigate immigration matters.',
    },
  ]

  const businessServices = [
    {
      icon: TrendingUp,
      title: 'Business Development',
      description: 'Strategic planning and execution to grow your business. We identify opportunities and develop actionable strategies.',
    },
    {
      icon: Briefcase,
      title: 'Sales & Marketing',
      description: 'Comprehensive sales and marketing strategies to reach your target market and drive revenue growth.',
    },
    {
      icon: FileText,
      title: 'Commercial Contracts',
      description: 'Drafting, review, and negotiation of commercial contracts. We protect your interests in every agreement.',
    },
    {
      icon: Users,
      title: 'Business Plans',
      description: 'Professional business plan development for startups, expansion, and investor presentations.',
    },
    {
      icon: Shield,
      title: 'Business Management',
      description: 'Ongoing business management consulting to optimize operations and maximize profitability.',
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
              Comprehensive Legal & Business Solutions
            </h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              Expert services designed to protect your interests and drive your success.
            </p>
          </div>
        </section>

        {/* Legal Services Section */}
        <section id="legal" className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-6 text-navy-600">
              Legal Services
            </h2>
            <p className="text-center text-slate text-lg mb-16 max-w-3xl mx-auto">
              Our legal team provides comprehensive representation and counsel across all areas of Albanian law. With deep expertise in criminal, civil, administrative, and family matters, we protect your rights and interests with precision and professionalism.
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
                      {service.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {service.description}
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
              Business Consulting
            </h2>
            <p className="text-center text-cream/90 text-lg mb-16 max-w-3xl mx-auto">
              Strategic business consulting to help your company grow, succeed, and thrive. From startup planning to corporate strategy, we provide expert guidance tailored to your business goals.
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
                      {service.title}
                    </h3>
                    <p className="text-cream/80 text-sm leading-relaxed">
                      {service.description}
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
              Need Expert Guidance?
            </h2>
            <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team is ready to discuss your specific needs.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
