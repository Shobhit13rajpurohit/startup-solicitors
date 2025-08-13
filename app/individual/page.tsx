import Link from "next/link"
import { ArrowRight, User, Briefcase, TrendingUp, Shield, Handshake, Users, Globe, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

const individualServices = [
  {
    title: "Business Setup Services for Individuals",
    description: "Helping individuals start their own business with ease.",
    href: "/individual/business-setup-services",
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Crypto Investment Advisory",
    description: "Expert advice for navigating the world of cryptocurrency.",
    href: "/individual/crypto-investment-advisory",
    icon: <TrendingUp className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Expatriate Services",
    description: "Comprehensive support for expatriates living and working in India.",
    href: "/individual/expatriate-services",
    icon: <Users className="h-8 w-8 text-orange-600" />,
  },
  {
    title: "Immigration Services for Foreign Directors",
    description: "Streamlined immigration solutions for foreign directors.",
    href: "/individual/immigration-services-foreign-directors",
    icon: <Globe className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Intellectual Property Rights (IPR) Services",
    description: "Protecting your creative and intellectual assets.",
    href: "/individual/intellectual-property-rights",
    icon: <Lightbulb className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Investment Advisory",
    description: "Personalized investment advice to help you grow your wealth.",
    href: "/individual/investment-advisory",
    icon: <Handshake className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Support for NRIs and Foreign Individuals",
    description: "Dedicated support for non-resident Indians and foreign individuals.",
    href: "/individual/support-nris-foreign-individuals",
    icon: <User className="h-8 w-8 text-teal-500" />,
  },
  {
    title: "Tax Filing and Refund Services",
    description: "Hassle-free tax filing and refund assistance.",
    href: "/individual/tax-filing-refund-services",
    icon: <Shield className="h-8 w-8 text-cyan-600" />,
  },
];

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="individual" />

      {/* Hero Banner */}
      <div
        className="text-white py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaXZpZHVhbCUyMHByb2Zlc3Npb25hbCUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Individual Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Personalized solutions to meet your individual legal and financial needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {individualServices.map((service) => (
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
