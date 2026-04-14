"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "./data";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  // Grid layout does not require open/close state

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://vasbpo.net/services/${service.slug}`
      }
    }))
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[72vh] min-h-[550px] px-4 overflow-hidden flex items-center justify-center border-b-[8px] border-accent">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-top bg-fixed"></div>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        
        <div className="container mx-auto relative z-20 text-center max-w-5xl mt-8">
          <div className="inline-block bg-accent/20 border border-accent/50 px-6 py-2.5 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-accent/10">
            <span className="text-white font-bold tracking-[0.25em] text-sm md:text-base uppercase drop-shadow-md">Comprehensive Solutions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-2xl leading-[1.05] tracking-tight">
            Corporate <span className="text-accent">Services Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md max-w-2xl mx-auto">
            From meticulous bookkeeping to high-level strategic advisory, explore our full suite of professional services tailored to elevate your enterprise.
          </p>
        </div>
      </section>

      {/* Services Grid Layout */}
      <section className="py-24 px-4 bg-gray-50 relative overflow-hidden flex-1">
        <div className="container mx-auto max-w-7xl relative z-20">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">Core Competencies</span>
            <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Strategic Financial Advantages</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              We engineer comprehensive financial strategies specifically tailored to elevate enterprise operations. Our firm leverages state-of-the-art cloud architecture and elite accounting personnel to provide unprecedented oversight over your corporate infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group relative`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative z-10">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-700">
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-accent/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl transform origin-bottom-left group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Decorative background element behind image */}
                  <div className={`absolute -z-10 w-full h-full rounded-3xl bg-accent/10 top-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} transform group-hover:translate-x-2 transition-transform duration-700`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <span className="text-accent font-black text-2xl lg:text-3xl opacity-40 font-serif tracking-widest">
                       {String(index + 1).padStart(2, '0')}.
                    </span>
                    <div className="h-[2px] w-12 bg-accent/40"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-black text-primary mb-6 group-hover:text-accent transition-colors duration-500 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl">
                    {service.description}
                  </p>
                  
                  <div>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-4 text-primary font-bold hover:text-accent transition-colors text-lg group/btn"
                    >
                      <span className="relative">
                        Explore This Service
                        <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/btn:w-full"></span>
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-colors duration-300 border border-gray-100">
                        <ArrowRight size={20} />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Faint Background Number for depth */}
                <div className={`absolute pointer-events-none top-1/2 -translate-y-1/2 ${index % 2 !== 0 ? '-right-20' : '-left-20'} text-[250px] font-black text-gray-900 opacity-[0.02] z-0 select-none`}>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative blobs - explicitly behind and non-interactive */}
        <div className="absolute top-40 -left-10 w-72 h-72 bg-accent rounded-full opacity-[0.03] blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-40 -right-10 w-96 h-96 bg-primary rounded-full opacity-[0.02] blur-[100px] pointer-events-none z-0"></div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 px-4 relative overflow-hidden border-b-[6px] border-accent">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Need a Customized Strategy?</h2>
          <p className="text-xl text-gray-300 mb-10 font-medium">Reach out today to discuss a tailored suite of services built specifically for your enterprise.</p>
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-lg font-bold text-xl transition-all shadow-xl shadow-accent/40 inline-flex items-center justify-center mx-auto">
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
