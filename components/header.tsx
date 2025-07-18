"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

interface HeaderProps {
  activeTab?: string;
}

export default function Header({ activeTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndividualMenuOpen, setIsIndividualMenuOpen] = useState(false);
  const [isBusinessMenuOpen, setIsBusinessMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      {/* Individual Menu Item */}
      <li
        className="relative"
        onMouseEnter={() => setIsIndividualMenuOpen(true)}
        onMouseLeave={() => setIsIndividualMenuOpen(false)}
      >
        <div
          className={`border-l border-blue-400 text-blue-600 px-3 py-2 cursor-pointer ${
            activeTab === "individual" ? "bg-blue-50" : ""
          }`}
        >
          Individual
        </div>
        {isIndividualMenuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-[#0073aa]/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-md min-w-max z-20 p-4 space-y-2">
            <Link
              href="/individual/business-setup-services"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Business Setup Services for Individuals
            </Link>
            <Link
              href="/individual/crypto-investment-advisory"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Crypto Investment Advisory
            </Link>
            <Link
              href="/individual/expatriate-services"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Expatriate Services
            </Link>
            <Link
              href="/individual/immigration-services-foreign-directors"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Immigration Services for Foreign Directors
            </Link>
            <Link
              href="/individual/intellectual-property-rights"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Intellectual Property Rights (IPR) Services
            </Link>
            <Link
              href="/individual/investment-advisory"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Investment Advisory
            </Link>
            <Link
              href="/individual/support-nris-foreign-individuals"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Support for NRIs and Foreign Individuals
            </Link>
            <Link
              href="/individual/tax-filing-refund-services"
              className="block px-3 py-2 hover:bg-blue-600 rounded text-white"
            >
              Tax Filing and Refund Services
            </Link>
          </div>
        )}
      </li>

      {/* Business Menu Item */}
      <li
        className="relative"
        onMouseEnter={() => setIsBusinessMenuOpen(true)}
        onMouseLeave={() => setIsBusinessMenuOpen(false)}
      >
        <div
          className={`border-l border-blue-400 text-blue-600 px-3 py-2 cursor-pointer ${
            activeTab === "business" ? "bg-blue-50" : ""
          }`}
        >
          Business
        </div>
        {isBusinessMenuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-[#0073aa]/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-md min-w-max max-h-96 overflow-y-auto z-20 p-4 space-y-2">
            <Link href="/business/accounting-tax-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Accounting and Tax Services</Link>
            <Link href="/business/accounting-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Accounting Services</Link>
            <Link href="/business/arbitration" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Arbitration</Link>
            <Link href="/business/auditing-assurance" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Auditing and Assurance</Link>
            <Link href="/business/blockchain-cryptocurrency" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Blockchain and Cryptocurrency</Link>
            <Link href="/business/company-formation-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Company Formation Services in India</Link>
            <Link href="/business/corporate-secretarial-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Corporate Secretarial Services in India</Link>
            <Link href="/business/cross-border-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Cross-Border Services in India</Link>
            <Link href="/business/crypto-investment-advisory-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Crypto Investment Advisory Services in India</Link>
            <Link href="/business/file-tax-returns" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">File Tax Returns</Link>
            <Link href="/business/immigration" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Immigration</Link>
            <Link href="/business/investment-advisory-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Investment Advisory Services in India</Link>
            <Link href="/business/legal-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Legal Services in India</Link>
            <Link href="/business/regulatory-approvals-compliance" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Regulatory Approvals & Compliance Services in India</Link>
            <Link href="/business/start-your-business" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Start Your Business</Link>
            <Link href="/business/startup-business-advisory" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Startup and Business Advisory Services in India</Link>
            <Link href="/business/virtual-cfo-services" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Virtual CFO Services in India</Link>
            <Link href="/business/white-collar-crimes" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">White Collar Crimes</Link>
          </div>
        )}
      </li>

      {/* Other Links */}
      <li><Link href="/blogs" className={`border-l border-blue-400 text-blue-600 px-3 py-2 ${activeTab === "blogs" ? "bg-blue-50" : ""}`}>Blogs</Link></li>
      <li className="relative" onMouseEnter={() => setIsAboutMenuOpen(true)} onMouseLeave={() => setIsAboutMenuOpen(false)}>
        <Link href="/about" className={`border-l border-blue-400 text-blue-600 px-3 py-2 ${activeTab === "about" ? "bg-blue-50" : ""}`}>About</Link>
        {isAboutMenuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 bg-[#0073aa]/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-md min-w-max z-20 p-4 space-y-2">
            <Link href="/our-team" className="block px-3 py-2 hover:bg-blue-600 rounded text-white">Our Team</Link>
          </div>
        )}
      </li>
      <li><Link href="/careers" className={`border-l border-blue-400 text-blue-600 px-3 py-2 ${activeTab === "careers" ? "bg-blue-50" : ""}`}>Careers</Link></li>
      <li><Link href="/business-setup-india" className={`border-l border-blue-400 text-blue-600 px-3 py-2 ${activeTab === "business-setup-india" ? "bg-blue-50" : ""}`}>Business Setup-India</Link></li>
      <li><Link href="/contact" className={`border-l border-blue-400 text-blue-600 px-3 py-2 ${activeTab === "contact" ? "bg-blue-50" : ""}`}>Contact Us</Link></li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logostart.jpg"
              alt="Startup Solicitors Logo"
              width={200}
              height={40}
              priority
              className="h-auto"
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Input type="search" placeholder="Search Site" className="w-64 pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex border-b border-blue-400">
          <ul className="flex space-x-8 py-4 items-center w-full max-w-none">
            {navLinks}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full h-screen bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="relative mb-4">
              <Input type="search" placeholder="Search Site" className="w-full pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <ul className="flex flex-col space-y-4">
              {navLinks}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}