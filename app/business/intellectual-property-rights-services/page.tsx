import Link from "next/link"
import { CheckCircle, ArrowRight, Lightbulb, Trademark, Copyright, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function IntellectualPropertyRightsServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Intellectual Property Rights (IPR) Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Protecting your most valuable assets - your ideas and innovations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-400 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Your IPR Partner</h3>
              <p className="text-sm">
                Comprehensive services to register, protect, and enforce your intellectual property rights.
              </p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
               <Link
                href="/business/visa-immigration-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                VISA & Immigration Services
              </Link>
              <Link
                href="/business/business-setup-india-foreign-nationals"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Business Setup in India
              </Link>
              <Link
                href="/business/licenses-regulatory-approvals"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Licenses & Regulatory Approvals
              </Link>
              <Link
                href="/business/government-funding-subsidies"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Government Funding & Subsidies
              </Link>
              <Link
                href="/business/corporate-law-legal-advisory"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Corporate Law & Legal Advisory
              </Link>
              <Link
                href="/business/arbitration-dispute-resolution"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Arbitration & Dispute Resolution
              </Link>
              <Link
                href="/business/intellectual-property-rights-services"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Intellectual Property Rights (IPR) Services
              </Link>
              <Link
                href="/business/estate-succession-planning"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Estate & Succession Planning
              </Link>
              <Link
                href="/business/taxation-compliance-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Taxation & Compliance Services
              </Link>
              <Link
                href="/business/accounting-internal-auditing"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Accounting & Internal Auditing
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-cyan-500 mb-8">Comprehensive IPR Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In today&apos;s competitive landscape, protecting your intellectual property is crucial. Our IPR services provide end-to-end support for trademark, patent, and copyright registration, as well as enforcement and licensing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Trademark className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Trademark Registration</h3>
                    <p className="text-sm text-gray-600">In India and abroad.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Lightbulb className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Patent Filing</h3>
                    <p className="text-sm text-gray-600">Technical and legal support.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Copyright className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Copyright Registration</h3>
                    <p className="text-sm text-gray-600">For creative and business works.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">IP Due Diligence</h3>
                    <p className="text-sm text-gray-600">For commercial exploitation of IP.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our IPR Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Trademark Registration & Protection</h4>
                    <p className="text-gray-600">
                      Comprehensive services for trademark search, registration, and protection, both in India and internationally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Patent Filing & Advisory</h4>
                    <p className="text-gray-600">
                      Providing technical and legal support for patent searches, drafting, filing, and prosecution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Copyright Registration & Enforcement</h4>
                    <p className="text-gray-600">
                      Assistance with copyright registration for creative and business works, and enforcement against infringement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">IP Due Diligence & Licensing Agreements</h4>
                    <p className="text-gray-600">
                      Conducting IP due diligence for mergers, acquisitions, and investments, and drafting licensing agreements for commercial exploitation of IP.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-cyan-600 mb-4">Why Choose Our IPR Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Experienced team of IPR attorneys</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Global network for international protection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Strategic advice on IP portfolio management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective and timely services</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protect Your Intellectual Property Today</h3>
                <p className="text-gray-600 mb-6">
                  Let us help you safeguard your innovations and creative works.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-cyan-500 hover:bg-cyan-600">
                    Get IPR Protection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Request a Consultation</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatWidgets />
    </div>
  )
}
