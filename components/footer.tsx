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
  FaShieldAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 sm:py-16 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Legal Excellence Worldwide
            </h3>
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="mb-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-blue-700 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-lg sm:text-xl" />
              Domestic Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Office Cards */}
              <OfficeCard
                city="JAIPUR"
                phone="+91-9461620002"
                email="info@startupsolicitors.com"
                address="47 B, Shipra Path, SMS Colony,<br />Mansarovar, Jaipur,<br />Rajasthan 302020"
              />
              <OfficeCard
                city="DEHRADUN"
                phone="+91-9461620002"
                email="info@startupsolicitors.com"
                address="40 A Sewak Ashram Road,<br />Dehradun,<br />UK 248001"
              />
              <OfficeCard
                city="NEW DELHI"
                phone="+91-9461620002"
                email="info@startupsolicitors.com"
                address="9 AVA Apartments,<br />Golflinks,<br />New Delhi 110003"
              />
              <OfficeCard
                city="MUMBAI"
                phone="+91-9461620002"
                email="info@startupsolicitors.com"
                address="52 Alpha Apartments,<br />Nariman Point, Mumbai,<br />Maharashtra 400021"
              />
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-xl sm:text-2xl font-semibold text-center mb-8 text-blue-700 flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-lg sm:text-xl" />
              International Office
            </h4>
            <div className="flex justify-center">
              <div className="w-full sm:max-w-sm">
                <OfficeCard
                  city="SAUDI ARABIA"
                  phone="+966 11 293 0873"
                  email="info@startupsolicitors.com"
                  address="Al Urubah Rd, Sulemania area,<br />Riyadh 12245,<br />Saudi Arabia"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-b border-gray-200 pt-4 pb-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
            <div className="text-gray-700 text-sm">
              © {currentYear} Startupsolicitors.com - All Rights Reserved
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/sitemap" className="text-gray-700 hover:text-blue-600">Sitemap</Link>
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-gray-700 hover:text-blue-600">Cookie Policy</Link>
              <Link href="/disclaimer" className="text-gray-700 hover:text-blue-600">Disclaimer</Link>
              <Link href="/accessibility" className="text-gray-700 hover:text-blue-600">Accessibility</Link>
            </div>
            <div className="flex gap-4">
              <SocialLink href="https://www.facebook.com/startupsolicitors" aria-label="Facebook" icon={<FaFacebookF size={16} />} />
              <SocialLink href="https://twitter.com/startupsolicitors" aria-label="Twitter" icon={<FaTwitter size={16} />} />
              <SocialLink href="https://www.linkedin.com/company/startupsolicitors" aria-label="LinkedIn" icon={<FaLinkedinIn size={16} />} />
              <SocialLink href="/rss.xml" aria-label="RSS Feed" icon={<FaRss size={16} />} />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceLinks title="LAWYERS IN INDIA" links={lawyersLinks} />
            <ServiceLinks title="LAW FIRMS IN INDIA" links={lawFirmsLinks} />
            <ServiceLinks title="LEGAL ADVICE" links={legalAdviceLinks} />
            <ServiceLinks title="LAW GUIDES" links={lawGuidesLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}

const OfficeCard = ({ city, phone, email, address }) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
    <h5 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
      <FaMapMarkerAlt className="text-sm" />
      {city}
    </h5>
    <div className="space-y-3 text-sm">
      <a href={`tel:${phone}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <FaPhone className="text-xs" />
        {phone}
      </a>
      <a href={`mailto:${email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
        <FaEnvelope className="text-xs" />
        {email}
      </a>
      <address className="text-gray-700 not-italic leading-relaxed" dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  </div>
);

const SocialLink = ({ href, "aria-label": ariaLabel, icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 shadow-lg">
    {icon}
  </Link>
);

const ServiceLinks = ({ title, links }) => (
  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
    <h4 className="font-bold text-blue-700 mb-6 text-lg">{title}</h4>
    <div className="space-y-3 text-sm">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={`block text-gray-700 hover:text-blue-600 ${link.isViewAll ? 'font-semibold text-blue-600 hover:text-blue-800' : ''}`}>
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

const lawyersLinks = [
 
  { href: "/services/company-incorporation", text: "Company Incorporation" },
  { href: "/services/partnership", text: "Partnership" },
  { href: "/services/limited-liability-partnership", text: "Limited Liability Partnership" },
  { href: "/services/proprietorship", text: "Proprietorship" },
  { href: "/services/one-person-company", text: "One Person Company" },
  { href: "/services/subsidiary-company", text: "Subsidiary Company" },
  { href: "/services/section-8-company", text: "Section 8 Company" },
  { href: "/lawyers/supreme-court", text: "Supreme Court Lawyers" },
  { href: "/lawyers", text: "VIEW All →", isViewAll: true },
];

const lawFirmsLinks = [
  { href: "/law-firms/delhi/ipr", text: "IPR Law Firm in Delhi" },
  { href: "/law-firms/delhi/corporate", text: "Corporate Law Firm in Delhi" },
  { href: "/law-firms/delhi/taxation", text: "Taxation Law Firm in Delhi" },
  { href: "/law-firms/jaipur/ipr", text: "IPR Law Firm in Jaipur" },
  { href: "/law-firms/jaipur/corporate", text: "Corporate Law Firm in Jaipur" },
  { href: "/law-firms/jaipur/taxation", text: "Taxation Law Firm in Jaipur" },
  { href: "/law-firms/mumbai/corporate", text: "Corporate Law Firm in Mumbai" },
  { href: "/law-firms/mumbai/taxation", text: "Taxation Law Firm in Mumbai" },
  { href: "/law-firms", text: "VIEW All →", isViewAll: true },
];

const legalAdviceLinks = [
  { href: "/legal-advice/startup-registration", text: "Startup Registration" },
  { href: "/legal-advice/startup-recognition", text: "Startup Recognition" },
  { href: "/legal-advice/startup-services", text: "Startup Services" },
  { href: "/legal-advice/startup-investments", text: "Startup Investments" },
  
  { href: "/legal-advice/trademark-registration", text: "Trademark Registration" },
  { href: "/legal-advice/trademark-objection", text: "Trademark Objection" },
  { href: "/legal-advice/trademark-reply-hearing", text: "Trademark Reply Hearing" },
  { href: "/legal-advice/startup-chartered-accountant", text: "Startup Chartered Accountant" },
 
  { href: "/legal-advice", text: "VIEW All →", isViewAll: true },
];

const lawGuidesLinks = [
  { href: "/law-guides/best-law-firm", text: "Best Law Firm" },
  { href: "/law-guides/best-chartered-accountant", text: "Best Chartered Accountant" },
  { href: "/law-guides/income-tax-act", text: "Income Tax Act" },
  { href: "/law-guides/gst-act", text: "GST Act" },
  { href: "/law-guides/ipr", text: "IPR" },
  { href: "/law-guides/property-law", text: "Property Law" },
  { href: "/law-guides/criminal-law", text: "Criminal Law" },
  { href: "/law-guides/cheque-bounce-law", text: "Cheque Bounce Law" },
  
  { href: "/law-guides", text: "VIEW All →", isViewAll: true },
];