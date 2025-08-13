import Link from "next/link"
import { ArrowRight, Briefcase, Building, FileText, Award, DollarSign, Gift, TrendingUp, Book, Shield, Handshake, Scale, Users, Globe, Lightbulb, Copyright, Home, Landmark, Percent, Search, Clipboard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

const businessServices = [
  {
    title: "VISA & Immigration Services",
    description: "End-to-end support for foreign directors and professionals in India.",
    href: "/business/visa-immigration-services",
    icon: <Briefcase className="h-8 w-8 text-cyan-600" />,
  },
  {
    title: "Business Setup in India for Foreign Nationals",
    description: "Seamlessly establish your business presence in India.",
    href: "/business/business-setup-india-foreign-nationals",
    icon: <Building className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Licenses & Regulatory Approvals",
    description: "Navigate the complex landscape of industrial licensing in India.",
    href: "/business/licenses-regulatory-approvals",
    icon: <FileText className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Government Funding & Subsidies",
    description: "Unlock government incentives and funding to accelerate your growth.",
    href: "/business/government-funding-subsidies",
    icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Corporate Law & Legal Advisory",
    description: "Expert legal counsel to navigate the complexities of corporate law.",
    href: "/business/corporate-law-legal-advisory",
    icon: <Book className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Arbitration & Dispute Resolution",
    description: "Resolving commercial and contractual disputes effectively.",
    href: "/business/arbitration-dispute-resolution",
    icon: <Scale className="h-8 w-8 text-gray-700" />,
  },
  {
    title: "Intellectual Property Rights (IPR) Services",
    description: "Protecting your most valuable assets - your ideas and innovations.",
    href: "/business/intellectual-property-rights-services",
    icon: <Lightbulb className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Estate & Succession Planning",
    description: "Secure your legacy and ensure a smooth transfer of your assets.",
    href: "/business/estate-succession-planning",
    icon: <Home className="h-8 w-8 text-lime-600" />,
  },
  {
    title: "Taxation & Compliance Services",
    description: "Navigating the complexities of Indian taxation and compliance.",
    href: "/business/taxation-compliance-services",
    icon: <Percent className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Accounting & Internal Auditing",
    description: "Ensuring financial accuracy and operational efficiency.",
    href: "/business/accounting-internal-auditing",
    icon: <Search className="h-8 w-8 text-teal-500" />,
  },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Business Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Comprehensive solutions to support your business in India.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessServices.map((service) => (
            <Link href={service.href} key={service.title} className="group">
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <div className="mt-4 text-blue-600 font-semibold flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <ChatWidgets />
    </div>
  )
}
