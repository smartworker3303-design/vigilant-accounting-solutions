import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from "lucide-react";

import { services } from "../data";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.id);
  
  if (!service) {
    return {
      title: 'Service Not Found | Vigilant Accounting Solutions',
    };
  }

  return {
    title: `${service.title} | Vigilant Accounting Solutions`,
    description: service.description,
    keywords: [service.title, "Accounting Service", ...service.features, "Vigilant Accounting Solutions"],
    openGraph: {
      title: `${service.title} | Vigilant Accounting Solutions`,
      description: service.description,
      url: `https://vasbpo.net/services/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 800,
          alt: service.title,
        }
      ],
      type: "article",
    },
    alternates: {
      canonical: `https://vasbpo.net/services/${service.slug}`,
    }
  };
}

export default async function ServiceDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.id);

  if (!service) {
    notFound();
  }

  // Find next service for bottom navigation
  const currentIndex = services.findIndex(s => s.slug === resolvedParams.id);
  const nextService = services[(currentIndex + 1) % services.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "AccountingService",
      "name": "Vigilant Accounting Solutions",
      "image": "https://vasbpo.net/icon.png",
      "url": "https://vasbpo.net"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Service Features",
      "itemListElement": service.features.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        },
        "position": index + 1
      }))
    },
    "image": service.image,
    "url": `https://vasbpo.net/services/${service.slug}`
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[400px] px-4 overflow-hidden flex items-center justify-center border-b-[8px] border-accent">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-top bg-fixed"></div>
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        
        <div className="container mx-auto relative z-20 mt-12 max-w-6xl">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold mb-8 text-sm uppercase tracking-wider bg-black/30 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm w-max">
            <ArrowLeft size={16} /> Back to All Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-accent/40 flex-shrink-0">
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white drop-shadow-xl tracking-tight leading-tight mb-2">
                {service.title}
              </h1>
              <p className="text-gray-300 text-xl font-light">Expert execution. Vigilant oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 -mt-24 relative z-30 flex flex-col md:flex-row">
            
            <div className="p-10 md:p-14 lg:p-20 flex-[1.2]">
               <span className="text-accent font-extrabold uppercase tracking-widest text-sm mb-4 block">Service Overview</span>
               <h2 className="text-3xl font-black text-primary mb-6 leading-snug">Precision <span className="text-accent">Strategy</span> for {service.title}</h2>
               <div className="h-1.5 w-16 bg-accent mb-8 rounded-full"></div>
               
               <div className="prose prose-lg prose-gray max-w-none text-gray-700 font-medium mb-12">
                 {service.detailedDescription.map((paragraph, idx) => (
                   <p key={idx} className="mb-6 leading-relaxed text-xl text-gray-600">{paragraph}</p>
                 ))}
               </div>

               <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 mb-12 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
                 <h3 className="text-2xl font-extrabold text-primary mb-8 font-serif">Key Outcomes & Deliverables</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                   {service.features.map((feature, idx) => (
                     <div key={idx} className="flex items-start gap-4">
                       <div className="bg-white p-2 rounded-full shadow-sm text-accent shrink-0 mt-0.5">
                         <CheckCircle2 size={24} strokeWidth={2.5}/>
                       </div>
                       <span className="text-gray-700 font-medium text-lg leading-tight">{feature}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-black text-lg px-8 py-5 rounded-xl shadow-xl shadow-accent/30 transition-all w-full sm:w-auto hover:-translate-y-1">
                 <Phone size={22} /> Inquire About This Service
               </Link>
            </div>

            {/* Side visual/banner specifically styled per user request */}
            <div className="hidden md:flex flex-1 relative overflow-hidden bg-primary items-end">
               {/* Fixed background structural image specific to the service */}
               <div 
                 className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
                 style={{ backgroundImage: `url('${service.image}')` }}
               ></div>
               
               {/* Gradient overlay for readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
               <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
               
               {/* Stylish floating text over the image */}
               <div className="relative z-10 p-12 w-full text-center">
                 <div className="w-16 h-1 bg-accent mx-auto mb-6 shadow-[0_0_15px_rgba(255,107,0,0.8)]"></div>
                 <p className="text-white font-serif font-medium text-4xl italic leading-tight drop-shadow-2xl text-shadow-lg">
                   "Precision.<br/>Accuracy.<br/><span className="text-accent not-italic font-black mt-2 block">Growth."</span>
                 </p>
               </div>
            </div>

          </div>
          
          {/* Bottom Call to action & Next Service Navigation */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-wider mb-2">Up Next</p>
              <h4 className="text-2xl font-bold text-primary">{nextService.title}</h4>
            </div>
            <Link href={`/services/${nextService.slug}`} className="shrink-0 w-16 h-16 bg-gray-50 hover:bg-accent hover:text-white text-primary rounded-full flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={32} />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
