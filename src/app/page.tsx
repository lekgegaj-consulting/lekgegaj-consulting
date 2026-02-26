import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Briefcase, Scale, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lekgegaj Consulting | Premium Law & Business Consulting',
  description: 'Expert legal and business consulting services in Durrës, Albania. Trusted by clients across Europe.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-600 to-navy-700 text-cream py-24 md:py-32 lg:py-40">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
                Premium Legal & Business Consulting
              </h1>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed">
                Expert guidance in law and business strategy. Trusted by clients across Europe and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  Explore Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              Why Choose Lekgegaj Consulting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  Comprehensive Legal Services
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Representation across all courts and judiciary levels in Albania. Criminal, civil, administrative, and family law expertise.
                </p>
              </div>

              {/* Card 2 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  Strategic Business Consulting
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Business development, sales & marketing strategy, commercial contracts, and business planning expertise.
                </p>
              </div>

              {/* Card 3 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  International Standard
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Premium service delivery meeting international standards. Professional team with deep expertise.
                </p>
              </div>

              {/* Card 4 */}
              <div className="card-service">
                <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-cream" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3 text-navy-600">
                  Client-Focused
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Personalized attention to every case and project. We understand your unique needs and deliver results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gold-700">
              Our Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Legal Services */}
              <div className="bg-navy-700 p-8 rounded-lg border border-navy-500">
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="text-gold-700" size={32} />
                  <h3 className="font-playfair text-3xl font-bold text-gold-700">
                    Legal Services
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Representation in all courts and levels of judiciary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Criminal matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Civil matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Administrative matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Family matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Residence permits & expulsion removal</span>
                  </li>
                </ul>
                <Link href="/services#legal" className="btn-gold inline-flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>

              {/* Business Consulting */}
              <div className="bg-navy-700 p-8 rounded-lg border border-navy-500">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-gold-700" size={32} />
                  <h3 className="font-playfair text-3xl font-bold text-gold-700">
                    Business Consulting
                  </h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Business Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Sales & Marketing Strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Commercial Contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Business Plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-gold-700 flex-shrink-0 mt-1" size={20} />
                    <span>Business Management</span>
                  </li>
                </ul>
                <Link href="/services#business" className="btn-gold inline-flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">01</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  Initial Consultation
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  We listen to your needs, understand your situation, and assess how we can help.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">02</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  Strategic Planning
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Our team develops a comprehensive strategy tailored to your specific goals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">03</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  Expert Execution
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  We implement our strategy with precision and professionalism throughout.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="font-playfair text-6xl font-bold text-gold-700 mb-4">04</div>
                <h3 className="font-playfair text-2xl font-bold text-navy-600 mb-3">
                  Results & Support
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Successful resolution and ongoing support for your future needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-gold-700">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation. Our team is ready to help you achieve your goals.
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Contact Us Now <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
