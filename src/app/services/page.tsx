"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "./data";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  // Grid layout does not require open/close state

  return (
    <div className="flex flex-col min-h-screen">
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
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 text-white drop-shadow-2xl leading-[1.05] tracking-tight">
            Our <span className="text-accent italic font-light">Services</span>
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
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">Our Expertise</span>
            <h2 className="text-primary text-4xl md:text-5xl font-black mb-6 tracking-tight">How We Can Help You</h2>
            <div className="h-1.5 w-20 bg-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
              Explore our comprehensive suite of professional services tailored to elevate your enterprise. We bring meticulous attention to every aspect of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-accent/30 transition-all duration-500 relative flex flex-col overflow-hidden"
              >
                {/* Subtle top border accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative background element */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-accent/5 rounded-full group-hover:scale-[1.3] group-hover:bg-accent/10 transition-all duration-700 ease-in-out z-0"></div>
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-primary mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] group-hover:shadow-accent/40 group-hover:-translate-y-1">
                  {service.icon}
                </div>
                
                <h3 className="relative z-10 text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="relative z-10 text-gray-600 leading-relaxed font-medium flex-grow mb-6">
                  {service.description}
                </p>
                
                <div className="relative z-10 mt-auto pt-4 border-t border-gray-100/50 group-hover:border-accent/20 transition-colors">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors py-2"
                  >
                    View Details
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Number Watermark */}
                <div className="absolute -bottom-6 -right-6 text-9xl font-black text-gray-50 opacity-0 group-hover:opacity-100 group-hover:text-accent/[0.03] transition-all duration-500 select-none z-0">
                  {String(index + 1).padStart(2, '0')}
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
