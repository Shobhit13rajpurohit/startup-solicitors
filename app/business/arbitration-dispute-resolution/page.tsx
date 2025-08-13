import Link from "next/link"
import { CheckCircle, ArrowRight, Scale, Users, Shield, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function ArbitrationDisputeResolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Arbitration & Dispute Resolution</h1>
          <p className="text-xl mt-4 opacity-90">
            Resolving commercial and contractual disputes effectively and efficiently.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-600 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Effective Resolution</h3>
              <p className="text-sm">
                Expert handling of domestic and international disputes to protect your business interests.
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-gray-700 mb-8">Expert Arbitration & Dispute Resolution</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our dispute resolution team is adept at handling complex domestic and international arbitration, mediation, and commercial disputes. We focus on providing strategic advice and effective representation to achieve the best possible outcomes for our clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">International Arbitration</h3>
                    <p className="text-sm text-gray-600">Cross-border dispute resolution.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Scale className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Domestic Arbitration</h3>
                    <p className="text-sm text-gray-600">Representation and case management.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-gray-800 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Mediation & Negotiation</h3>
                    <p className="text-sm text-gray-600">Alternative dispute resolution.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-gray-900 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Commercial Disputes</h3>
                    <p className="text-sm text-gray-600">Expert handling of contract matters.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Dispute Resolution Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Domestic & International Arbitration</h4>
                    <p className="text-gray-600">
                      Representation and case management in arbitration proceedings, both in India and internationally, across various institutional rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Mediation & Negotiation Services</h4>
                    <p className="text-gray-600">
                      Utilizing alternative dispute resolution mechanisms to find amicable and commercially viable solutions for our clients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Commercial & Contractual Disputes</h4>
                    <p className="text-gray-600">
                      Expert handling of a wide range of commercial and contractual disputes, both cross-border and domestic, to protect your business interests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Why Choose Our Dispute Resolution Team?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Strong advocacy and representation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Strategic and commercially-minded approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Expertise in various industries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective and timely resolution</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protect Your Business from Disputes</h3>
                <p className="text-gray-600 mb-6">
                  Let our experienced team handle your disputes, so you can focus on your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gray-700 hover:bg-gray-800">
                    Get Dispute Resolution Support
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
