"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heroImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2426&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2426&auto=format&fit=crop"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center isolate overflow-hidden border-b-[8px] border-accent">
        
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 bg-cover bg-top transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}

        {/* Dark Background Overlay - to make images appear dark, as requested */}
        <div className="absolute inset-0 z-10 bg-black/50"></div>

        {/* Left/Right controls */}
        <button onClick={prevImage} className="absolute left-2 sm:left-4 md:left-8 z-20 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] hover:text-accent transition-colors">
          <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1.5} />
        </button>
        <button onClick={nextImage} className="absolute right-2 sm:right-4 md:right-8 z-20 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] hover:text-accent transition-colors">
          <ChevronRight className="w-10 h-10 md:w-16 md:h-16" strokeWidth={1.5} />
        </button>
        
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center mt-12 max-w-5xl">
          <div className="inline-block bg-accent/20 border border-accent/50 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-accent font-bold tracking-wider text-sm uppercase drop-shadow-md">Empowering Your Financial Future</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 max-w-5xl leading-[1.15] text-white drop-shadow-lg">
            Precision Accounting For <span className="text-accent">Modern Business</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl text-gray-200 font-medium drop-shadow-md px-2">
            Expert financial management, tax strategies, and bookkeeping from Vigilant Accounting Services, designed to help your enterprise scale efficiently with expert oversight over your vigilant accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/services" className="bg-accent text-white px-9 py-4 rounded-md font-bold text-lg hover:bg-accent-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30">
              Explore Services <ArrowRight size={20} />
            </Link>
            <Link href="/contact" className="bg-gray-800 text-white px-9 py-4 rounded-md font-bold text-lg hover:bg-gray-900 transition-all shadow-lg text-center">
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3.5 h-3.5 rounded-full shadow-lg transition-colors border border-white/50 ${
                index === currentImageIndex ? 'bg-accent scale-110' : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-gray-50 relative border-b border-gray-200">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <span className="text-gray-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block drop-shadow-sm">About Our Firm</span>
          <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-6">Welcome to Vigilant Accounting Solutions</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto mb-10 rounded-full shadow-md"></div>
          <p className="text-gray-900 text-xl leading-relaxed font-medium">
            We are a leading Vigilant accounting firm committed to delivering comprehensive financial solutions tailored to the needs of modern businesses. 
            Our Vigilant Accounting services range from precise bookkeeping and financial management to strategic corporate tax planning and advisory. 
            Backed by a team of experienced professionals, we operate as a trusted extension of your organization—ensuring full 
            regulatory compliance, optimizing financial performance, and maintaining your Vigilant Accounts for sustainable business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-primary-dark border-y border-primary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="text-white text-4xl font-extrabold mt-3">Our Core Services</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Service 1 - Bookkeeping */}
            <div className="group bg-primary border border-gray-700/50 rounded-[2rem] p-8 md:p-10 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 relative flex flex-col h-full z-10 overflow-hidden transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-gray-800/80 rounded-2xl flex items-center justify-center mb-8 border border-gray-700/50 shadow-inner group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500">
                <span className="text-3xl drop-shadow-md">📊</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">Bookkeeping</h3>
              
              <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-grow text-lg">
                We maintain pristine financial records, from AP/AR to general ledger maintenance, giving you clear visibility into your financial health at all times.
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-800">
                <Link href="/services" className="inline-flex items-center gap-3 text-white font-bold group-hover:text-accent transition-colors duration-300 text-[1.05rem]">
                  View All Services 
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 2 - Tax Preparation */}
            <div className="group bg-primary border border-gray-700/50 rounded-[2rem] p-8 md:p-10 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 relative flex flex-col h-full z-10 overflow-hidden transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-gray-800/80 rounded-2xl flex items-center justify-center mb-8 border border-gray-700/50 shadow-inner group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500">
                <span className="text-3xl drop-shadow-md">📄</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">Tax Preparation</h3>
              
              <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-grow text-lg">
                Minimize liabilities and maximize returns with our expert tax strategies. We stay ahead of shifting tax codes so you don't have to.
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-800">
                <Link href="/services" className="inline-flex items-center gap-3 text-white font-bold group-hover:text-accent transition-colors duration-300 text-[1.05rem]">
                  View All Services 
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              </div>
            </div>

            {/* Service 3 - CFO Services */}
            <div className="group bg-primary border border-gray-700/50 rounded-[2rem] p-8 md:p-10 hover:border-accent/40 shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 relative flex flex-col h-full z-10 overflow-hidden transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="w-16 h-16 bg-gray-800/80 rounded-2xl flex items-center justify-center mb-8 border border-gray-700/50 shadow-inner group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500">
                <span className="text-3xl drop-shadow-md">💼</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">CFO Services</h3>
              
              <p className="text-gray-400 font-medium leading-relaxed mb-10 flex-grow text-lg">
                Gain high-level financial oversight without the full-time executive cost. Budgeting, forecasting, and strategic advisory.
              </p>
              
              <div className="mt-auto pt-6 border-t border-gray-800">
                <Link href="/services" className="inline-flex items-center gap-3 text-white font-bold group-hover:text-accent transition-colors duration-300 text-[1.05rem]">
                  View All Services 
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 lg:pr-8">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-3 block">Why Choose Us</span>
            <h2 className="text-primary text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Why Choose Vigilant Accounting Services?</h2>
            <div className="h-1.5 w-20 bg-accent mb-8 rounded-full"></div>
            <p className="text-gray-900 mb-10 text-xl font-medium leading-relaxed">
              We don't just crunch numbers; we interpret them. Our highly vigilant approach means we are always looking out for your bottom line. We use modern cloud-based technologies to provide seamless, real-time insights into your business metrics.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Decades of Expertise</h4>
                  <p className="text-gray-900 font-medium text-sm mt-1">Seasoned professionals handling your books.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Proactive Strategies</h4>
                  <p className="text-gray-900 font-medium text-sm mt-1">We plan ahead for your tax savings.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Secure Tech</h4>
                  <p className="text-gray-900 font-medium text-sm mt-1">Your data is secured with enterprise tech.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-accent/10 p-2 rounded-lg text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Dedicated Support</h4>
                  <p className="text-gray-900 font-medium text-sm mt-1">We are always available when you need us.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end">
                 <div className="text-6xl text-accent font-serif mb-2 leading-none">"</div>
                 <p className="text-white text-2xl font-light leading-relaxed italic border-l-4 border-accent pl-6">
                   Vigilance is the price of financial freedom. 
                   We keep watch over your books so you can focus on building your empire.
                 </p>
                 <div className="mt-8 flex items-center gap-4 pl-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">V</div>
                    <div>
                      <p className="text-white font-bold">The Vigilant Team</p>
                      <p className="text-gray-400 text-sm">Founders</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-full -z-10 blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Stats/Call To Action Strip */}
      <section className="bg-accent py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Ready to streamline your accounting?</h2>
              <p className="text-white/90 text-lg">Schedule your free consultation with our experts today.</p>
            </div>
            <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-xl shadow-primary-dark/20 flex items-center justify-center gap-2 w-full lg:w-auto">
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
