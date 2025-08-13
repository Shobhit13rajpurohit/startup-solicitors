import Link from "next/link"
import { CheckCircle, ArrowRight, Book, Shield, FileText, Handshake } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function CorporateLawLegalAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div
        className="text-white py-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568992688065-536aad8a12f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Corporate Law & Legal Advisory</h1>
          <p className="text-xl mt-4 opacity-90">
            Expert legal counsel to navigate the complexities of corporate law in India.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-purple-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Strategic Legal Partner</h3>
              <p className="text-sm">
                Providing strategic legal advice to protect and grow your business.
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-indigo-600 mb-8">Expert Corporate Law & Legal Advisory</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of experienced corporate lawyers provides comprehensive legal advisory services to ensure your business operates in full compliance with Indian law. From corporate governance to M&A, we are your trusted legal partners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Book className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Corporate Governance</h3>
                    <p className="text-sm text-gray-600">Ensuring legal adherence.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Handshake className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Mergers & Acquisitions</h3>
                    <p className="text-sm text-gray-600">Due diligence and documentation.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Contracts & Agreements</h3>
                    <p className="text-sm text-gray-600">Drafting, reviewing, and negotiations.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Regulatory Approvals</h3>
                    <p className="text-sm text-gray-600">Guidance on statutory clearances.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Corporate Law Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Corporate Governance & Compliance</h4>
                    <p className="text-gray-600">
                      Ensuring legal adherence for Indian and foreign entities, including board meetings, statutory filings, and compliance audits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mergers & Acquisitions</h4>
                    <p className="text-gray-600">
                      Providing end-to-end support for M&A transactions, including due diligence, structuring, and legal documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Shareholder Agreements & Joint Venture Contracts</h4>
                    <p className="text-gray-600">
                      Expert drafting, reviewing, and negotiation of shareholder agreements and joint venture contracts to protect your interests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Regulatory Approvals & Licensing</h4>
                    <p className="text-gray-600">
                      Guidance on statutory clearances and licensing from various government bodies to ensure smooth business operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Why Choose Our Legal Advisory?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Experienced team of corporate lawyers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Commercially-focused legal advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Proactive and strategic approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective legal solutions</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure Your Business with Expert Legal Counsel</h3>
                <p className="text-gray-600 mb-6">
                  Let us handle your corporate legal matters so you can focus on your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Get Legal Advisory
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
