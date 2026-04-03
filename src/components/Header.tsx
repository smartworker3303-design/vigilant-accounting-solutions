"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the menu automatically when navigating
  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        <Link href="/" onClick={handleNavClick} className="flex items-center justify-center cursor-pointer overflow-hidden h-[3rem] md:h-[3.5rem] lg:h-[4rem] w-[180px] md:w-[220px] lg:w-[260px]">
          <img src="/logo.jpg" alt="Vigilant Accounting Solutions" className="w-[115%] max-w-none h-auto object-contain mix-blend-darken" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-900 text-[0.95rem]">
          <Link href="/" className={pathname === '/' ? 'text-accent border-b-2 border-accent pb-1' : 'hover:text-accent transition-colors'}>Home</Link>
          <Link href="/about-us" className={pathname === '/about-us' ? 'text-accent border-b-2 border-accent pb-1' : 'hover:text-accent transition-colors'}>About Us</Link>
          <Link href="/services" className={pathname === '/services' ? 'text-accent border-b-2 border-accent pb-1' : 'hover:text-accent transition-colors'}>Services</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-accent border-b-2 border-accent pb-1' : 'hover:text-accent transition-colors'}>Contact</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 visible h-auto border-b" : "opacity-0 scale-y-0 invisible h-0"
        }`}
      >
        <nav className="flex flex-col font-bold text-gray-800 p-4 gap-4">
          <Link href="/" onClick={handleNavClick} className={`px-4 py-3 rounded-xl transition-colors ${pathname === '/' ? 'bg-accent/10 text-accent' : 'hover:bg-gray-50'}`}>Home</Link>
          <Link href="/about-us" onClick={handleNavClick} className={`px-4 py-3 rounded-xl transition-colors ${pathname === '/about-us' ? 'bg-accent/10 text-accent' : 'hover:bg-gray-50'}`}>About Us</Link>
          <Link href="/services" onClick={handleNavClick} className={`px-4 py-3 rounded-xl transition-colors ${pathname === '/services' ? 'bg-accent/10 text-accent' : 'hover:bg-gray-50'}`}>Services</Link>
          <Link href="/contact" onClick={handleNavClick} className={`px-4 py-3 rounded-xl transition-colors ${pathname === '/contact' ? 'bg-accent/10 text-accent' : 'hover:bg-gray-50'}`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
