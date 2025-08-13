import Link from "next/link"
import { CheckCircle, ArrowRight, Briefcase, Building, FileText, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BusinessSetupIndiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Business Setup in India for Foreign Nationals</h1>
          <p className="text-xl mt-4 opacity-90">
            Seamlessly establish your business presence in one of the world&apos;s fastest-growing economies.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-green-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Your Gateway to India</h3>
              <p className="text-sm">
                Expert guidance for foreign nationals to set up and grow their business in India.
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
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
            <h2 className="text-3xl font-bold text-emerald-600 mb-8">Streamlined Business Setup Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide end-to-end solutions for foreign nationals and entities looking to establish a business in India. Our services cover everything from incorporation to regulatory approvals, ensuring a smooth entry into the Indian market.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Company Incorporation</h3>
                    <p className="text-sm text-gray-600">Private Limited, LLP, and more.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Briefcase className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Foreign Investment</h3>
                    <p className="text-sm text-gray-600">RBI/FEMA compliance and approvals.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Office Setup</h3>
                    <p className="text-sm text-gray-600">Branch, Liaison, or Project Office.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Director Support</h3>
                    <p className="text-sm text-gray-600">DIN & DSC for foreign directors.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Business Setup Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Private Limited Company Incorporation</h4>
                    <p className="text-gray-600">
                      Ideal for 100% foreign-owned subsidiaries or joint ventures, providing limited liability protection to its shareholders.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">LLP & Partnership Formation</h4>
                    <p className="text-gray-600">
                      Structuring for operational and tax efficiency, suitable for professional services and joint ventures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Branch Office / Liaison Office Setup</h4>
                    <p className="text-gray-600">
                      A common choice for global companies entering Indian markets to represent the parent company.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">One Person Company (OPC) Setup</h4>
                    <p className="text-gray-600">
                      A simplified entry for solo entrepreneurs, combining the benefits of a sole proprietorship and a company.
                    </p>
                  </div>
                </div>

                 <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Assistance with RBI/FEMA Approvals</h4>
                    <p className="text-gray-600">
                      Ensuring compliance with foreign investment regulations for a smooth and legal infusion of capital.
                    </p>
                  </div>
                </div>

                 <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Director Identification Number (DIN) & Digital Signature Certificates (DSC)</h4>
                    <p className="text-gray-600">
                      Fast-track issuance of essential credentials for foreign directors to comply with Indian corporate law.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Why Choose Us for Your India Entry?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Deep knowledge of Indian corporate law</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Personalized service for foreign nationals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Transparent pricing and timelines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Post-setup compliance support</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Launch Your Business in India?</h3>
                <p className="text-gray-600 mb-6">
                  Let us be your trusted partner in your India market entry strategy. Contact us for a consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Start Your Business Setup
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Request a Quote</Button>
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
