import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[600px] px-4 overflow-hidden flex items-center justify-center border-b-[8px] border-accent">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-top bg-fixed"></div>
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
        
        <div className="container mx-auto relative z-20 text-center max-w-5xl mt-12">
          <div className="inline-block bg-accent/20 border border-accent/50 px-6 py-2.5 rounded-full mb-8 backdrop-blur-md shadow-lg shadow-accent/10">
            <span className="text-white font-bold tracking-[0.25em] text-sm md:text-base uppercase drop-shadow-md">The Vigilant Difference</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black mb-6 text-white drop-shadow-2xl leading-[1.05] tracking-tight">
            Beyond <span className="text-accent italic font-light">Accounting.</span>
          </h1>
          <div className="w-24 h-[3px] bg-accent mx-auto my-8 rounded-full shadow-lg shadow-accent/50"></div>
          <p className="text-2xl md:text-4xl text-white font-serif font-medium leading-relaxed drop-shadow-xl max-w-4xl mx-auto italic mb-6 mt-4">
            "We transform complex financial data into actionable, visionary strategy."
          </p>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed drop-shadow-md max-w-2xl mx-auto mb-10">
            Elevating modern businesses through precision, regulatory compliance, and forward-thinking advisory services. We are here to build your financial legacy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-28 px-4 bg-gray-50 relative border-b border-gray-200">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 w-full relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-12 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-extrabold mb-3">Our Mission</h3>
                <div className="h-1.5 w-16 bg-accent mb-6 rounded-full"></div>
                <p className="text-gray-200 text-xl font-medium leading-relaxed">
                  To provide unwavering financial clarity that empowers business leaders to make bold, informed, and profitable decisions.
                </p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent rounded-full -z-10 blur-3xl opacity-30"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary rounded-full -z-10 blur-3xl opacity-20"></div>
          </div>

          <div className="flex-1 lg:pl-4">
            <span className="text-accent font-extrabold uppercase tracking-[0.15em] text-sm mb-4 block">Who We Are</span>
            <h2 className="text-primary text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Your Trusted<br/><span className="text-gray-800">Financial Partners</span></h2>
            <div className="h-2 w-24 bg-accent mb-10 rounded-full"></div>
            
            <p className="text-gray-800 mb-6 text-xl font-semibold leading-relaxed border-l-4 border-accent pl-6">
              Vigilant Accounting Solutions was founded on a simple premise: businesses deserve better than reactive, backward-looking accounting. They deserve forward-looking strategy.
            </p>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed font-medium">
              For over a decade, we have been more than just number-crunchers; we are business advisors. From structuring tax-efficient entities for start-ups to providing virtual CFO services for rapidly scaling enterprises, our comprehensive approach ensures that every facet of your financial life is optimized for growth. We bring Wall Street-level rigor to Main Street businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <Target size={32} strokeWidth={2.5}/>
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-lg">Precision Focus</h4>
                </div>
              </div>
              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <Award size={32} strokeWidth={2.5}/>
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-lg">Certified Experts</h4>
                </div>
              </div>
              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <Users size={32} strokeWidth={2.5}/>
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-lg">Dedicated Teams</h4>
                </div>
              </div>
              <div className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-xl text-accent">
                  <TrendingUp size={32} strokeWidth={2.5}/>
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-lg">Growth Driven</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-28 px-4 relative overflow-hidden border-b-[6px] border-accent">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Let's Build Your<br/>Financial Future Together</h2>
          <p className="text-2xl text-gray-300 mb-12 font-medium">We are ready to become the financial extension of your enterprise.</p>
          <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white px-12 py-5 rounded-lg font-extrabold text-xl transition-all shadow-2xl shadow-accent/40 inline-flex items-center justify-center gap-3 mx-auto w-full md:w-auto">
            Schedule a Free Consultation <TrendingUp size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
