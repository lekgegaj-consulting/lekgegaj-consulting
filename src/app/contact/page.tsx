'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, Scale, Briefcase, Send } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: 'general',
      })
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-600 to-navy-700 text-cream py-24 md:py-32">
          <div className="container-custom text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
              {t('contact.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              {t('contact.info.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Legal Services Card */}
              <div className="card-contact">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center">
                    <Scale className="text-navy-600" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">Attorney at Law</h3>
                </div>
                <p className="text-cream/90 font-semibold mb-2">Av. Tone Lekgegaj</p>
                <a href="tel:+355692082624" className="text-gold-700 hover:text-gold-500 transition-colors font-semibold mb-4 block">
                  +355 69 208 2624
                </a>
                <div className="flex gap-2">
                  <a href="tel:+355692082624" className="btn-ghost flex-1 text-center">
                    Call
                  </a>
                  <a href="https://wa.me/355692082624" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 text-center">
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Business Consulting Card */}
              <div className="card-contact">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-navy-600" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">Business Consultant</h3>
                </div>
                <p className="text-cream/90 font-semibold mb-2">Pjerin Lekgegaj</p>
                <a href="tel:+355682082624" className="text-gold-700 hover:text-gold-500 transition-colors font-semibold mb-4 block">
                  +355 68 208 2624
                </a>
                <div className="flex gap-2">
                  <a href="tel:+355682082624" className="btn-ghost flex-1 text-center">
                    Call
                  </a>
                  <a href="https://wa.me/355682082624" target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 text-center">
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="card-contact">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gold-700 rounded-lg flex items-center justify-center">
                    <Mail className="text-navy-600" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold">Email</h3>
                </div>
                <p className="text-cream/90 font-semibold mb-2">General Inquiries</p>
                <a href="mailto:info@lekgegaj-consulting.com" className="text-gold-700 hover:text-gold-500 transition-colors font-semibold mb-4 block break-all">
                  info@lekgegaj-consulting.com
                </a>
                <a href="mailto:info@lekgegaj-consulting.com" className="btn-ghost w-full text-center">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="section-padding bg-navy-600 text-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-gold-700">
              {t('contact.map.title')}
            </h2>
            
            {/* Office Photo */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src="/uploads/IMG_20260225_211215.jpg"
                  alt="Lekgegaj Consulting – Office Premises in Durrës, Albania"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-navy-700 p-4 text-center">
                <p className="text-gold-700 font-semibold">
                  Lekgegaj Consulting – Office Premises in Durrës, Albania
                </p>
              </div>
            </div>

            {/* Address Info */}
            <div className="bg-navy-700 border border-navy-500 p-8 rounded-lg mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold-700 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gold-700 mb-3">
                    {t('contact.info.title')}
                  </h3>
                  <p className="text-cream/90 text-lg leading-relaxed">
                    Lagjia nr.11<br />
                    Rr. "Aleksander Goga"<br />
                    Pazari Bizantin<br />
                    Durrës, Albania
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8234567890123!2d19.4567!3d41.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzAwLjEiTiAxOcKwMjcnMjQuMiJF!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 text-navy-600">
              {t('contact.form.title')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-navy-600 font-semibold mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors"
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-navy-600 font-semibold mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-navy-600 font-semibold mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors"
                      placeholder="+355 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-navy-600 font-semibold mb-2">
                      {t('contact.form.subject')} *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="legal">Legal Services</option>
                      <option value="business">Business Consulting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-navy-600 font-semibold mb-2">
                    {t('contact.form.subject')} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors"
                    placeholder={t('contact.form.subject')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy-600 font-semibold mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-light-gray rounded-sm focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-700 transition-colors resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t('contact.form.submit')}
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-sm">
                    {t('contact.form.success')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
