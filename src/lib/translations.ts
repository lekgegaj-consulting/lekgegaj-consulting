export type Language = 'en' | 'al'

export const translations = {
  en: {
    // Header & Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    
    // Home Page
    home: {
      hero: {
        title: 'Premium Legal & Business Consulting',
        subtitle: 'Expert guidance in law and business strategy. Trusted by clients across Europe and beyond.',
        cta1: 'Explore Our Services',
        cta2: 'Get Consultation',
      },
      why: {
        title: 'Why Choose Lekgegaj Consulting',
        card1: {
          title: 'Comprehensive Legal Services',
          desc: 'Representation across all courts and judiciary levels in Albania. Criminal, civil, administrative, and family law expertise.',
        },
        card2: {
          title: 'Strategic Business Consulting',
          desc: 'Business development, sales & marketing strategy, commercial contracts, and business planning expertise.',
        },
        card3: {
          title: 'International Standard',
          desc: 'Premium service delivery meeting international standards. Professional team with deep expertise.',
        },
        card4: {
          title: 'Client-Focused',
          desc: 'Personalized attention to every case and project. We understand your unique needs and deliver results.',
        },
      },
      services: {
        title: 'Our Services',
        legal: {
          title: 'Legal Services',
          item1: 'Representation in all courts and levels of judiciary',
          item2: 'Criminal matters',
          item3: 'Civil matters',
          item4: 'Administrative matters',
          item5: 'Family matters',
          item6: 'Residence permits & expulsion removal',
          learnMore: 'Learn More',
        },
        business: {
          title: 'Business Consulting',
          item1: 'Business Development',
          item2: 'Sales & Marketing Strategy',
          item3: 'Commercial Contracts',
          item4: 'Business Plans',
          item5: 'Business Management',
          learnMore: 'Learn More',
        },
      },
      process: {
        title: 'Our Process',
        step1: {
          title: 'Initial Consultation',
          desc: 'We listen to your needs, understand your situation, and assess how we can help.',
        },
        step2: {
          title: 'Strategic Planning',
          desc: 'Our team develops a comprehensive strategy tailored to your specific goals.',
        },
        step3: {
          title: 'Expert Execution',
          desc: 'We implement our strategy with precision and professionalism throughout.',
        },
        step4: {
          title: 'Results & Support',
          desc: 'Successful resolution and ongoing support for your future needs.',
        },
      },
      cta: {
        title: 'Ready to Get Started?',
        subtitle: 'Contact us today for a free consultation. Our team is ready to help you achieve your goals.',
        button: 'Contact Us Now',
      },
    },

    // Services Page
    services: {
      hero: {
        title: 'Our Services',
        subtitle: 'Comprehensive legal and business consulting solutions tailored to your needs.',
      },
      legal: {
        title: 'Legal Services',
        intro: 'We provide comprehensive legal representation and consulting across all areas of law in Albania.',
        criminal: {
          title: 'Criminal Law',
          desc: 'Expert representation in criminal matters at all court levels. We defend your rights with precision and professionalism.',
        },
        civil: {
          title: 'Civil Law',
          desc: 'Comprehensive civil litigation and contract services. From disputes to negotiations, we protect your interests.',
        },
        administrative: {
          title: 'Administrative Law',
          desc: 'Specialized expertise in administrative matters and government relations. We navigate complex regulatory environments.',
        },
        family: {
          title: 'Family Law',
          desc: 'Sensitive and professional handling of family matters including divorce, custody, and inheritance.',
        },
        immigration: {
          title: 'Immigration & Residence',
          desc: 'Expert assistance with residence permits, visa matters, and expulsion removal procedures.',
        },
      },
      business: {
        title: 'Business Consulting',
        intro: 'Strategic business guidance to help your company grow and succeed in competitive markets.',
        development: {
          title: 'Business Development',
          desc: 'Strategic planning and market analysis to identify growth opportunities and expansion strategies.',
        },
        marketing: {
          title: 'Sales & Marketing Strategy',
          desc: 'Comprehensive marketing strategies and sales optimization to increase revenue and market share.',
        },
        contracts: {
          title: 'Commercial Contracts',
          desc: 'Professional drafting and negotiation of commercial agreements and contracts.',
        },
        planning: {
          title: 'Business Planning',
          desc: 'Detailed business plans and financial projections for startups and established companies.',
        },
        management: {
          title: 'Business Management',
          desc: 'Operational consulting and management strategies to optimize business performance.',
        },
      },
    },

    // About Page
    about: {
      hero: {
        title: 'About Lekgegaj Consulting',
        subtitle: 'Premium legal and business consulting with a commitment to excellence and client success.',
      },
      mission: {
        title: 'Our Mission',
        desc: 'To provide premium legal and business consulting services that empower our clients to achieve their goals with confidence and clarity.',
      },
      vision: {
        title: 'Our Vision',
        desc: 'To be the leading trusted consulting firm in Albania, recognized for excellence, integrity, and delivering exceptional results.',
      },
      values: {
        title: 'Our Values',
        integrity: {
          title: 'Integrity',
          desc: 'We conduct business with the highest ethical standards and transparency.',
        },
        excellence: {
          title: 'Excellence',
          desc: 'We strive for excellence in every aspect of our work and client service.',
        },
        professionalism: {
          title: 'Professionalism',
          desc: 'Our team brings deep expertise and professional standards to every engagement.',
        },
        clientFocus: {
          title: 'Client Focus',
          desc: 'Your success is our success. We are committed to understanding and meeting your unique needs.',
        },
      },
      team: {
        title: 'Our Team',
        desc: 'Our experienced team of legal and business professionals brings decades of combined expertise to serve you.',
      },
      location: {
        title: 'Location',
        desc: 'Based in Durrës, Albania, we serve clients throughout Albania and internationally.',
      },
    },

    // Contact Page
    contact: {
      hero: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team for a consultation or to discuss your needs.',
      },
      form: {
        title: 'Send us a Message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you! We will contact you soon.',
        error: 'Error sending message. Please try again.',
      },
      info: {
        title: 'Contact Information',
        address: 'Durrës, Albania',
        phone: '+355 (0) 69 XXX XXXX',
        email: 'info@lekgegaj.al',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      },
      map: {
        title: 'Our Location',
      },
    },

    // Footer
    footer: {
      company: 'Lekgegaj Consulting',
      tagline: 'Premium Law & Business Consulting',
      quickLinks: 'Quick Links',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2026 Lekgegaj Consulting. All rights reserved.',
    },
  },

  al: {
    // Header & Navigation
    nav: {
      home: 'Shtëpia',
      services: 'Shërbime',
      about: 'Rreth Nesh',
      contact: 'Kontakt',
    },

    // Home Page
    home: {
      hero: {
        title: 'Konsultim Premium Ligjor & Biznesi',
        subtitle: 'Udhëzim ekspert në ligj dhe strategji biznesi. I besuar nga klientë në të gjithë Evropën dhe përtej.',
        cta1: 'Eksploroni Shërbimeve Tona',
        cta2: 'Merrni Konsultim',
      },
      why: {
        title: 'Pse të Zgjidhni Lekgegaj Consulting',
        card1: {
          title: 'Shërbime Ligjore Gjithëpërfshirëse',
          desc: 'Përfaqësim në të gjitha gjykatat dhe nivelet e sistemit gjyqësor në Shqipëri. Ekspertizë në ligj penal, civil, administrativ dhe familjar.',
        },
        card2: {
          title: 'Konsultim Strategjik Biznesi',
          desc: 'Zhvillim biznesi, strategji shitjesh & marketingu, kontrata tregtare dhe ekspertizë në planifikimin e biznesit.',
        },
        card3: {
          title: 'Standard Ndërkombëtar',
          desc: 'Shërbim premium që plotëson standardet ndërkombëtare. Ekip profesional me ekspertizë të thellë.',
        },
        card4: {
          title: 'I Fokusuar në Klient',
          desc: 'Vëmendje personale për çdo rast dhe projekt. Ne kuptojmë nevojat tuaja unike dhe ofrojmë rezultate.',
        },
      },
      services: {
        title: 'Shërbimeve Tona',
        legal: {
          title: 'Shërbime Ligjore',
          item1: 'Përfaqësim në të gjitha gjykatat dhe nivelet e sistemit gjyqësor',
          item2: 'Çështje penale',
          item3: 'Çështje civile',
          item4: 'Çështje administrative',
          item5: 'Çështje familjare',
          item6: 'Leje qëndrimi & heqje të dëbimit',
          learnMore: 'Mëso Më Shumë',
        },
        business: {
          title: 'Konsultim Biznesi',
          item1: 'Zhvillim Biznesi',
          item2: 'Strategji Shitjesh & Marketingu',
          item3: 'Kontrata Tregtare',
          item4: 'Plane Biznesi',
          item5: 'Menaxhim Biznesi',
          learnMore: 'Mëso Më Shumë',
        },
      },
      process: {
        title: 'Procesi Ynë',
        step1: {
          title: 'Konsultim Fillestar',
          desc: 'Ne dëgjojmë nevojat tuaja, kuptojmë situatën tuaj dhe vlerësojmë se si mund të ndihmojmë.',
        },
        step2: {
          title: 'Planifikimi Strategjik',
          desc: 'Ekipi ynë zhvillon një strategji gjithëpërfshirëse të përshtatur me qëllimet tuaja specifike.',
        },
        step3: {
          title: 'Ekzekutim Ekspert',
          desc: 'Ne zbatojmë strategjinë tonë me saktësi dhe profesionalizëm gjatë gjithë procesit.',
        },
        step4: {
          title: 'Rezultate & Mbështetje',
          desc: 'Zgjidhje e suksesshme dhe mbështetje e vazhdueshme për nevojat tuaja të ardhshme.',
        },
      },
      cta: {
        title: 'Gati të Filloni?',
        subtitle: 'Kontaktoni ne sot për një konsultim falas. Ekipi ynë është gati të ndihmojë për të arritur qëllimet tuaja.',
        button: 'Kontaktoni Ne Tani',
      },
    },

    // Services Page
    services: {
      hero: {
        title: 'Shërbimeve Tona',
        subtitle: 'Zgjidhje gjithëpërfshirëse të konsultimit ligjor dhe biznesi të përshtatura me nevojat tuaja.',
      },
      legal: {
        title: 'Shërbime Ligjore',
        intro: 'Ne ofrojmë përfaqësim ligjor gjithëpërfshirës dhe konsultim në të gjitha fushat e ligjit në Shqipëri.',
        criminal: {
          title: 'Ligj Penal',
          desc: 'Përfaqësim ekspert në çështje penale në të gjitha nivelet e gjykatave. Ne mbrojmë të drejtat tuaja me saktësi dhe profesionalizëm.',
        },
        civil: {
          title: 'Ligj Civil',
          desc: 'Shërbim gjithëpërfshirës i litigimit civil dhe kontratave. Nga mosmarrëveshjet në negociata, ne mbrojmë interesat tuaja.',
        },
        administrative: {
          title: 'Ligj Administrativ',
          desc: 'Ekspertizë e specializuar në çështje administrative dhe marrëdhënie me qeverinë. Ne navigojmë në mjedise rregullatore komplekse.',
        },
        family: {
          title: 'Ligj Familjar',
          desc: 'Trajtim i ndjeshëm dhe profesional i çështjeve familjare duke përfshirë divorcin, kujdestarinë dhe trashëgiminë.',
        },
        immigration: {
          title: 'Imigracion & Qëndrim',
          desc: 'Ndihmë ekspert me leje qëndrimi, çështje vizash dhe procedura heqjeje të dëbimit.',
        },
      },
      business: {
        title: 'Konsultim Biznesi',
        intro: 'Udhëzim strategjik i biznesit për të ndihmuar kompanisë tuaj të rritet dhe të ketë sukses në tregje konkurruese.',
        development: {
          title: 'Zhvillim Biznesi',
          desc: 'Planifikimi strategjik dhe analiza e tregut për të identifikuar mundësi rritjeje dhe strategji zgjerimi.',
        },
        marketing: {
          title: 'Strategji Shitjesh & Marketingu',
          desc: 'Strategji gjithëpërfshirëse të marketingut dhe optimizim shitjesh për të rritur të ardhurat dhe pjesën e tregut.',
        },
        contracts: {
          title: 'Kontrata Tregtare',
          desc: 'Hartim profesional dhe negocim i marrëveshjeve tregtare dhe kontratave.',
        },
        planning: {
          title: 'Planifikimi i Biznesit',
          desc: 'Plane biznesi të detajuara dhe projeksione financiare për startupe dhe kompani të vendosura.',
        },
        management: {
          title: 'Menaxhim Biznesi',
          desc: 'Konsultim operacional dhe strategji menaxhimi për të optimizuar performancën e biznesit.',
        },
      },
    },

    // About Page
    about: {
      hero: {
        title: 'Rreth Lekgegaj Consulting',
        subtitle: 'Konsultim premium ligjor dhe biznesi me angazhim për përsosmëri dhe sukses të klientit.',
      },
      mission: {
        title: 'Misioni Ynë',
        desc: 'Të ofrojmë shërbime premium të konsultimit ligjor dhe biznesi që fuqizojnë klientët tanë për të arritur qëllimet e tyre me besim dhe qartësi.',
      },
      vision: {
        title: 'Vizioni Ynë',
        desc: 'Të jemi firma e konsultimit më e besueshme në Shqipëri, e njohur për përsosmëri, integritet dhe rezultate të jashtëzakonshme.',
      },
      values: {
        title: 'Vlerat Tona',
        integrity: {
          title: 'Integritet',
          desc: 'Ne zhvillojmë biznesin me standardet më të larta etike dhe transparencë.',
        },
        excellence: {
          title: 'Përsosmëri',
          desc: 'Ne përpiqemi për përsosmëri në çdo aspekt të punës sonë dhe shërbimit të klientit.',
        },
        professionalism: {
          title: 'Profesionalizëm',
          desc: 'Ekipi ynë sjell ekspertizë të thellë dhe standarde profesionale në çdo angazhim.',
        },
        clientFocus: {
          title: 'Fokus në Klient',
          desc: 'Suksesi juaj është suksesi ynë. Ne jemi të angazhuar për të kuptuar dhe plotësuar nevojat tuaja unike.',
        },
      },
      team: {
        title: 'Ekipi Ynë',
        desc: 'Ekipi ynë me përvojë të profesionistëve ligjor dhe biznesi sjell dhjetëra vite ekspertizë të kombinuar për t\'ju shërbyer.',
      },
      location: {
        title: 'Vendndodhja',
        desc: 'Me bazë në Durrës, Shqipëri, ne shërbejnë klientë në të gjithë Shqipërinë dhe ndërkombëtarisht.',
      },
    },

    // Contact Page
    contact: {
      hero: {
        title: 'Kontaktoni Ne',
        subtitle: 'Lidhuni me ekipin tonë për një konsultim ose për të diskutuar nevojat tuaja.',
      },
      form: {
        title: 'Dërgoni ne një Mesazh',
        name: 'Emri i Plotë',
        email: 'Adresa e Email-it',
        phone: 'Numri i Telefonit',
        subject: 'Tema',
        message: 'Mesazh',
        submit: 'Dërgo Mesazhin',
        success: 'Faleminderit! Ne do të ju kontaktojmë së shpejti.',
        error: 'Gabim në dërgimin e mesazhit. Ju lutemi provoni përsëri.',
      },
      info: {
        title: 'Informacioni i Kontaktit',
        address: 'Durrës, Shqipëri',
        phone: '+355 (0) 69 XXX XXXX',
        email: 'info@lekgegaj.al',
        hours: 'E hënë - E premte: 9:00 AM - 6:00 PM',
      },
      map: {
        title: 'Vendndodhja Jonë',
      },
    },

    // Footer
    footer: {
      company: 'Lekgegaj Consulting',
      tagline: 'Konsultim Premium Ligjor & Biznesi',
      quickLinks: 'Lidhje të Shpejta',
      services: 'Shërbime',
      about: 'Rreth Nesh',
      contact: 'Kontakt',
      legal: 'Ligjor',
      privacy: 'Politika e Privatësisë',
      terms: 'Kushtet e Shërbimit',
      copyright: '© 2026 Lekgegaj Consulting. Të gjitha të drejtat e rezervuara.',
    },
  },
}

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.')
  let value: any = translations[lang]
  
  for (const key of keys) {
    value = value?.[key]
  }
  
  return value || path
}
