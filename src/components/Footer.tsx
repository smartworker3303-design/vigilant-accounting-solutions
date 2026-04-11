import Link from "next/link";
import { Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center bg-white px-6 rounded-2xl drop-shadow-xl border-4 border-white/10 h-20 md:h-24 w-[220px] md:w-[260px] overflow-hidden">
            <img src="/logo.jpg" alt="Vigilant Accounting Solutions" className="w-[110%] max-w-none h-auto object-contain mix-blend-darken -my-6" />
          </div>
          <p className="text-gray-400 font-light mt-2">
            Transforming accounting from a compliance necessity into a strategic advantage for your business.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/company/113085087/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors" aria-label="Visit our LinkedIn page">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about-us" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> About Us</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Our Services</Link></li>
            <li><Link href="/services/tax" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Tax Planning</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/accounting-services" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Corporate Accounting</Link></li>
            <li><Link href="/services/payroll" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Payroll Services</Link></li>
            <li><Link href="/services/consultancy" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> CFO Advisory</Link></li>
            <li><Link href="/services/fraud" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Fraud Protection</Link></li>
            <li><Link href="/services/financials" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Business Valuation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
          <div className="flex flex-col gap-5 text-gray-400">

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-2 text-accent rounded-md">
                <Phone size={20} />
              </div>
              <p>(601) 493-9816</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-white/10 p-2 text-accent rounded-md">
                <Mail size={20} />
              </div>
              <p>infovasbpo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl pt-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Vigilant Accounting Solutions. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide text-xs">
          <Link href="#" className="hover:text-accent transition-colors uppercase">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors uppercase">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
