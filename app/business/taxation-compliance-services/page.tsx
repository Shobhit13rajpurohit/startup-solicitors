import Link from "next/link"
import { CheckCircle, ArrowRight, Percent, FileText, Globe, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function TaxationComplianceServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Taxation & Compliance Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Navigating the complexities of Indian taxation and regulatory compliance with ease.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-red-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Your Compliance Partner</h3>
              <p className="text-sm">
                Expert taxation and compliance services for domestic and international businesses.
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-orange-500 mb-8">Expert Taxation & Compliance Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team of tax experts provides comprehensive taxation and compliance services to help your business navigate the complex Indian tax landscape. We offer strategic advice and hands-on support to ensure you remain compliant and tax-efficient.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">International Tax Advisory</h3>
                    <p className="text-sm text-gray-600">For NRIs and global companies.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Transfer Pricing</h3>
                    <p className="text-sm text-gray-600">Documentation and reporting.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Percent className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Corporate Tax & GST</h3>
                    <p className="text-sm text-gray-600">Domestic and cross-border.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">FEMA & RBI Compliance</h3>
                    <p className="text-sm text-gray-600">Foreign exchange regulations.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Taxation & Compliance Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">International Tax Advisory</h4>
                    <p className="text-gray-600">
                      Expert tax advisory for NRIs, foreign directors, and global companies to navigate the complexities of international taxation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Transfer Pricing Compliance</h4>
                    <p className="text-gray-600">
                      Comprehensive transfer pricing documentation and reporting services to ensure compliance with Indian regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Corporate Tax Filing & GST Advisory</h4>
                    <p className="text-gray-600">
                      End-to-end corporate tax filing and GST advisory services for domestic and cross-border compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">FEMA & RBI Compliance</h4>
                    <p className="text-gray-600">
                      Expert guidance on foreign exchange and investment regulations to ensure full compliance with FEMA and RBI guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Due Diligence & Compliance Audits</h4>
                    <p className="text-gray-600">
                      Comprehensive due diligence and compliance audits for mergers, acquisitions, and expansions to identify and mitigate risks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Why Choose Our Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Experienced team of tax professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Strategic and commercially-focused advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Proactive approach to compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective and timely solutions</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay Compliant and Tax-Efficient</h3>
                <p className="text-gray-600 mb-6">
                  Let us handle your taxation and compliance needs, so you can focus on growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Get Tax & Compliance Support
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
