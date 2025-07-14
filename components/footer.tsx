import Link from "next/link";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaBalanceScale,
  FaShieldAlt
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 relative overflow-hidden">
      {/* Decorative Background Elements (Removed for plain white as requested) */}
      {/*
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 transform rotate-12">
          <FaGavel className="text-6xl" />
        </div>
        <div className="absolute top-20 right-20 transform -rotate-12">
          <FaBalanceScale className="text-8xl" />
        </div>
        <div className="absolute bottom-20 left-1/3 transform rotate-45">
          <FaShieldAlt className="text-5xl" />
        </div>
      </div>
      */}

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Legal Excellence Worldwide
            </h3>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-16">
          {/* Domestic Offices */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-center mb-8 text-blue-700 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-xl" />
              Domestic Offices
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Jaipur Office */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  JAIPUR
                </h5>
                <div className="space-y-3 text-sm">
                  <a href="tel:+919461620002" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaPhone className="text-xs" />
                    +91-9461620002
                  </a>
                  <a href="mailto:info@startupsolicitors.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                    info@startupsolicitors.com
                  </a>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    47 B, Shipra Path, SMS Colony,<br />
                    Mansarovar, Jaipur,<br />
                    Rajasthan 302020
                  </address>
                </div>
              </div>

              {/* Dehradun Office */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  DEHRADUN
                </h5>
                <div className="space-y-3 text-sm">
                  <a href="tel:+919461620002" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaPhone className="text-xs" />
                    +91-9461620002
                  </a>
                  <a href="mailto:info@startupsolicitors.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                    info@startupsolicitors.com
                  </a>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    40 A Sewak Ashram Road,<br />
                    Dehradun,<br />
                    UK 248001
                  </address>
                </div>
              </div>

              {/* New Delhi Office */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  NEW DELHI
                </h5>
                <div className="space-y-3 text-sm">
                  <a href="tel:+919461620002" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaPhone className="text-xs" />
                    +91-9461620002
                  </a>
                  <a href="mailto:info@startupsolicitors.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                    info@startupsolicitors.com
                  </a>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    9 AVA Apartments,<br />
                    Golflinks,<br />
                    New Delhi 110003
                  </address>
                </div>
              </div>

              {/* Mumbai Office */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
                <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  MUMBAI
                </h5>
                <div className="space-y-3 text-sm">
                  <a href="tel:+919461620002" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaPhone className="text-xs" />
                    +91-9461620002
                  </a>
                  <a href="mailto:info@startupsolicitors.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                    info@startupsolicitors.com
                  </a>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    52 Alpha Apartments,<br />
                    Nariman Point, Mumbai,<br />
                    Maharashtra 400021
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* International Office */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-center mb-8 text-blue-700 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-xl" />
              International Office
            </h4>
            <div className="flex justify-center">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105 max-w-sm">
                <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sm" />
                  SAUDI ARABIA
                </h5>
                <div className="space-y-3 text-sm">
                  <a href="tel:+966112930873" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaPhone className="text-xs" />
                    +966 11 293 0873
                  </a>
                  <a href="mailto:info@startupsolicitors.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                    <FaEnvelope className="text-xs" />
                    info@startupsolicitors.com
                  </a>
                  <address className="text-gray-700 not-italic leading-relaxed">
                    Al Urubah Rd, Sulemania area,<br />
                    Riyadh 12245,<br />
                    Saudi Arabia
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Footer Section */}
        <div className="border-t border-b border-gray-200 pt-2 pb-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-700 text-sm">
              © {currentYear} Startupsolicitors.com - All Rights Reserved
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/sitemap" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Sitemap
              </Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Disclaimer
              </Link>
              <Link href="/accessibility" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Accessibility
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/startupsolicitors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 hover:transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="https://twitter.com/startupsolicitors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaTwitter size={16} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/startupsolicitors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 hover:transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RSS Feed"
                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaRss size={16} />
              </Link>
            </div>
          </div>
        </div>
        {/* Services Links Section */}
        <div className=" pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-6 text-lg flex items-center gap-2">
                LAWYERS IN INDIA
              </h4>
              <div className="space-y-3 text-sm">
                <Link href="/services/private-limited-company-registration" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Private Limited Company Registration
                </Link>
                <Link href="/services/company-incorporation" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Company Incorporation
                </Link>
                <Link href="/services/partnership" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Partnership
                </Link>
                <Link href="/services/limited-liability-partnership" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Limited Liability Partnership
                </Link>
                <Link href="/services/proprietorship" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Proprietorship
                </Link>
                <Link href="/services/one-person-company" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  One Person Company
                </Link>
                <Link href="/services/subsidiary-company" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Subsidiary Company
                </Link>
                <Link href="/services/section-8-company" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Section 8 Company
                </Link>
                <Link href="/lawyers/supreme-court" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Supreme Court Lawyers
                </Link>
                <Link href="/lawyers" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  VIEW All →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-6 text-lg flex items-center gap-2">
                LAW FIRMS IN INDIA
              </h4>
              <div className="space-y-3 text-sm">
                <Link href="/law-firms/delhi/ipr" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  IPR Law Firm in Delhi
                </Link>
                <Link href="/law-firms/delhi/corporate" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Corporate Law Firm in Delhi
                </Link>
                <Link href="/law-firms/delhi/taxation" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Taxation Law Firm in Delhi
                </Link>
                <Link href="/law-firms/jaipur/ipr" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  IPR Law Firm in Jaipur
                </Link>
                <Link href="/law-firms/jaipur/corporate" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Corporate Law Firm in Jaipur
                </Link>
                <Link href="/law-firms/jaipur/taxation" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Taxation Law Firm in Jaipur
                </Link>
                <Link href="/law-firms/mumbai/corporate" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Corporate Law Firm in Mumbai
                </Link>
                <Link href="/law-firms/mumbai/taxation" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Taxation Law Firm in Mumbai
                </Link>
                <Link href="/law-firms/mumbai/ipr" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  IPR Law Firm in Mumbai
                </Link>
                <Link href="/lawyers/bangalore" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Bangalore
                </Link>
                <Link href="/lawyers/mumbai" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Mumbai
                </Link>
                <Link href="/lawyers/gurgaon" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Gurgaon
                </Link>
                <Link href="/lawyers/noida" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Noida
                </Link>
                <Link href="/lawyers/jaipur" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Jaipur
                </Link>
                <Link href="/lawyers/chandigarh" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Chandigarh
                </Link>
                <Link href="/lawyers/pune" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Lawyers in Pune
                </Link>
                <Link href="/law-firms" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  VIEW All →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-6 text-lg flex items-center gap-2">
                LEGAL ADVICE
              </h4>
              <div className="space-y-3 text-sm">
                <Link href="/legal-advice/startup-registration" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Registration
                </Link>
                <Link href="/legal-advice/startup-recognition" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Recognition
                </Link>
                <Link href="/legal-advice/startup-services" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Services
                </Link>
                <Link href="/legal-advice/startup-investments" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Investments
                </Link>
                <Link href="/legal-advice/startup-lawyers" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Lawyers
                </Link>
                <Link href="/legal-advice/trademark-registration" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Trademark Registration
                </Link>
                <Link href="/legal-advice/trademark-objection" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Trademark Objection
                </Link>
                <Link href="/legal-advice/trademark-reply-hearing" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Trademark Reply Hearing
                </Link>
                <Link href="/legal-advice/startup-chartered-accountant" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Chartered Accountant
                </Link>
                <Link href="/legal-advice/startup-company-secretary" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Startup Company Secretary
                </Link>
                <Link href="/legal-advice/legal-help-center" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Legal Help Center
                </Link>
                <Link href="/legal-advice" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  VIEW All →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-blue-700 mb-6 text-lg flex items-center gap-2">
                LAW GUIDES
              </h4>
              <div className="space-y-3 text-sm">
                <Link href="/law-guides/best-law-firm" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Best Law Firm
                </Link>
                <Link href="/law-guides/best-chartered-accountant" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Best Chartered Accountant
                </Link>
                <Link href="/law-guides/income-tax-act" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Income Tax Act
                </Link>
                <Link href="/law-guides/gst-act" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  GST Act
                </Link>
                <Link href="/law-guides/ipr" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  IPR
                </Link>
                <Link href="/law-guides/property-law" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Property Law
                </Link>
                <Link href="/law-guides/criminal-law" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Criminal Law
                </Link>
                <Link href="/law-guides/cheque-bounce-law" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Cheque Bounce Law
                </Link>
                <Link href="/law-guides" className="block text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                  VIEW All →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}