"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Mail, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          service: formData.service || null,
          message: formData.message,
          status: 'new'
        }
      ]);

      if (error) {
        throw new Error(error.message);
      }

      setIsSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'An error occurred while submitting your form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] px-4 overflow-hidden flex items-center justify-center border-b-[8px] border-accent">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-top bg-fixed"></div>
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
        
        <div className="container mx-auto relative z-20 text-center max-w-5xl mt-8">
          <div className="inline-block bg-accent/20 border border-accent/50 px-6 py-2.5 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-accent/10">
            <span className="text-white font-bold tracking-[0.25em] text-sm md:text-base uppercase drop-shadow-md">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 text-white drop-shadow-2xl leading-[1.05] tracking-tight">
            Contact <span className="text-accent italic font-light">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed drop-shadow-md max-w-2xl mx-auto">
            Ready to elevate your financial strategy? Reach out to our team of experts to secure your future today.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-4 relative z-20 -mt-16">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left Box: Contact Info */}
            <div className="flex-1 bg-primary text-white p-12 lg:p-16 relative overflow-hidden">
              {/* Background Accents */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold mb-4 font-serif">Contact Information</h3>
                <div className="h-1.5 w-16 bg-accent mb-10 rounded-full"></div>
                <p className="text-gray-300 mb-12 text-lg font-medium leading-relaxed max-w-md">
                  Whether you have questions about our services, pricing, or want to schedule a consultation, our team is ready to assist you.
                </p>

                <div className="space-y-10">


                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Call Us</h4>
                      <p className="text-gray-300 leading-relaxed font-light">
                        (601) 493-9816<br />
                        Mon-Fri, 9am to 6pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email Us</h4>
                      <p className="text-gray-300 leading-relaxed font-light">
                        infovasbpo@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Business Hours</h4>
                      <p className="text-gray-300 leading-relaxed font-light">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Weekend: By Appointment Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Contact Form */}
            <div className="flex-[1.5] bg-white p-12 lg:p-16">
              {isSuccess ? (
                <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10 md:p-14 text-center flex flex-col items-center justify-center min-h-[450px] shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-tr-full pointer-events-none"></div>
                  
                  <div className="w-24 h-24 bg-accent/10 border border-accent/20 text-accent rounded-full flex items-center justify-center mb-8 relative z-10 shadow-lg shadow-accent/5">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-[0.15] duration-1000"></div>
                    <CheckCircle2 size={48} strokeWidth={2} />
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-black text-primary mb-4 font-serif relative z-10 tracking-tight">Inquiry Submitted Successfully</h4>
                  <div className="h-1.5 w-16 bg-accent mb-6 rounded-full relative z-10"></div>
                  
                  <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed max-w-lg relative z-10">
                    Thank you for trusting Vigilant Accounting Solutions. Your message has been securely transmitted to our administrative team. 
                  </p>
                  <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed max-w-lg mt-4 relative z-10 border-t border-gray-200/60 pt-4">
                    A dedicated specialist will review your request and contact you within <span className="text-primary font-black uppercase tracking-wider text-sm bg-accent/10 px-3 py-1 rounded-md ml-1">24 business hours</span> to assist you further.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-extrabold text-primary mb-2">Send us a Message</h3>
                  <p className="text-gray-500 mb-10 font-medium">Fill out the form below and we will get back to you immediately.</p>
                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                  {errorMsg && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl font-medium border border-red-100">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">First Name <span className="text-accent">*</span></label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium" 
                      />
                    </div>
                    
                    {/* Last Name */}
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">Last Name <span className="text-accent">*</span></label>
                      <input 
                        type="text" 
                        id="lastName"
                        required 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium" 
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address <span className="text-accent">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium" 
                    />
                  </div>
                  
                  {/* Phone Number & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-bold text-gray-700">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium" 
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700">Service Inquiry</label>
                    <div className="relative">
                      <select 
                        id="service" 
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all font-medium"
                      >
                        <option value="" disabled>Select a service you're interested in...</option>
                        <option value="Accounting Services">Accounting Services</option>
                        <option value="Payroll Management & Reporting">Payroll Management & Reporting</option>
                        <option value="Tax Management & Reporting">Tax Management & Reporting</option>
                        <option value="Daily Sales Reconciliation">Daily Sales Reconciliation</option>
                        <option value="Vendor Management">Vendor Management</option>
                        <option value="Financials and Reporting">Financials and Reporting</option>
                        <option value="Virtual Monitoring & Surveillance">Virtual Monitoring & Surveillance</option>
                        <option value="Financial Consultancy & Loan Advisory">Financial Consultancy & Loan Advisory</option>
                        <option value="Fraud Protection Department">Fraud Protection Department</option>
                        <option value="Customer Service Department">Customer Service Department</option>
                        <option value="Data Handling and Archiving">Data Handling and Archiving</option>
                        <option value="Additional Value Added Services">Additional Value Added Services</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                      {/* Custom Arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700">Your Message <span className="text-accent">*</span></label>
                    <textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-400 font-medium resize-none" 
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover disabled:bg-gray-400 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 group mt-4 overflow-hidden relative"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Confirm Application Submission'}
                    {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
