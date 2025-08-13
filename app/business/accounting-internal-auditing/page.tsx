import Link from "next/link"
import { CheckCircle, ArrowRight, Book, Search, Clipboard, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function AccountingInternalAuditingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Accounting & Internal Auditing</h1>
          <p className="text-xl mt-4 opacity-90">
            Reliable accounting and internal audit services to ensure financial accuracy and operational efficiency.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-teal-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Financial Integrity</h3>
              <p className="text-sm">
                Expert accounting and auditing services to strengthen your financial controls.
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
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Taxation & Compliance Services
              </Link>
              <Link
                href="/business/accounting-internal-auditing"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Accounting & Internal Auditing
              </Link>
              {/* Add other links as pages are created */}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-cyan-600 mb-8">Expert Accounting & Internal Auditing</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our accounting and internal auditing services are designed to provide you with accurate financial information and robust internal controls. We help you maintain financial discipline and improve operational efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Book className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Outsourced Accounting</h3>
                    <p className="text-sm text-gray-600">For startups and foreign subsidiaries.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Search className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Internal Auditing</h3>
                    <p className="text-sm text-gray-600">Risk assessment and process improvement.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Payroll Management</h3>
                    <p className="text-sm text-gray-600">Compliant with Indian labour laws.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clipboard className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Financial Reporting</h3>
                    <p className="text-sm text-gray-600">IFRS and Indian standards.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Accounting & Auditing Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Outsourced Accounting Services</h4>
                    <p className="text-gray-600">
                      Comprehensive accounting services for startups and foreign subsidiaries, including bookkeeping, financial statement preparation, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Internal Auditing Services</h4>
                    <p className="text-gray-600">
                      Our internal audit services help you assess risks, strengthen internal controls, and improve business processes for greater efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Payroll Management</h4>
                    <p className="text-gray-600">
                      End-to-end payroll management services, ensuring compliance with Indian labour laws and timely payment of salaries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Financial Reporting</h4>
                    <p className="text-gray-600">
                      Preparation of financial reports in compliance with both IFRS and Indian accounting standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Audit Support</h4>
                    <p className="text-gray-600">
                      Providing support for statutory, internal, and management audits to ensure a smooth and efficient audit process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-cyan-600 mb-4">Why Choose Our Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Experienced team of accountants and auditors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Focus on accuracy and compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Actionable insights for business improvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective and scalable solutions</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strengthen Your Financial Foundation</h3>
                <p className="text-gray-600 mb-6">
                  Let us handle your accounting and auditing needs, so you can focus on your core business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">
                    Get Accounting & Auditing Support
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
