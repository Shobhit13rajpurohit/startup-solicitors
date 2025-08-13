import Link from "next/link"
import { CheckCircle, ArrowRight, Scale, Clock, Users, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BusinessArbitrationPage() {
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
          <h1 className="text-4xl font-bold">Arbitration Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Efficient dispute resolution through professional arbitration services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Dispute Resolution</h3>
              <p className="text-sm">
                Alternative dispute resolution through arbitration for faster, cost-effective outcomes
              </p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              <Link
                href="/business/accounting-tax-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Accounting and Tax Services
              </Link>
              <Link
                href="/business/accounting-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Accounting Services
              </Link>
              <Link href="/business/arbitration" className="block bg-blue-500 text-white px-4 py-2 rounded">
                Arbitration
              </Link>
              <Link
                href="/business/auditing-assurance"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Auditing and Assurance
              </Link>
              <Link
                href="/business/blockchain-cryptocurrency"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Blockchain and Cryptocurrency
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Professional Arbitration Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Arbitration has emerged as the preferred method of dispute resolution for businesses seeking efficient,
                cost-effective alternatives to traditional litigation. Our arbitration services provide comprehensive
                support throughout the arbitration process, from initial consultation to final award enforcement,
                helping businesses resolve disputes quickly and confidentially.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Scale className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Fair Resolution</h3>
                    <p className="text-sm text-gray-600">Impartial dispute resolution process</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Time Efficient</h3>
                    <p className="text-sm text-gray-600">Faster resolution than court litigation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Expert Arbitrators</h3>
                    <p className="text-sm text-gray-600">Industry-specific expertise</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Confidential</h3>
                    <p className="text-sm text-gray-600">Private and confidential proceedings</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Arbitration Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Commercial Arbitration</h4>
                    <p className="text-gray-600">
                      Comprehensive arbitration services for commercial disputes including contract breaches, business
                      partnerships, joint ventures, and corporate governance issues. We handle domestic and
                      international commercial arbitrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Construction and Infrastructure Arbitration</h4>
                    <p className="text-gray-600">
                      Specialized arbitration services for construction disputes including project delays, cost
                      overruns, quality issues, and contract interpretations. Our team has extensive experience in
                      infrastructure and construction law.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">International Arbitration</h4>
                    <p className="text-gray-600">
                      Cross-border dispute resolution under various international arbitration rules including ICC, LCIA,
                      SIAC, and UNCITRAL. We represent clients in international commercial arbitrations and investment
                      disputes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Arbitration Advocacy and Representation</h4>
                    <p className="text-gray-600">
                      Expert representation before arbitral tribunals including case preparation, evidence management,
                      witness examination, and legal arguments. Our advocates have extensive experience in arbitration
                      proceedings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Arbitration Clause Drafting and Advisory</h4>
                    <p className="text-gray-600">
                      Strategic drafting of arbitration clauses in contracts and agreements to ensure effective dispute
                      resolution mechanisms. We provide advisory services on arbitration procedures and institutional
                      rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Award Enforcement and Challenge</h4>
                    <p className="text-gray-600">
                      Assistance with enforcement of arbitral awards and handling challenges to awards under Indian and
                      international law. We help clients navigate the complexities of award enforcement proceedings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-600">Advantages of Arbitration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Faster resolution than court litigation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Cost-effective dispute resolution</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Confidential proceedings</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Choice of arbitrators with expertise</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Flexible procedures and timelines</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Types of Disputes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Commercial contract disputes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Construction and infrastructure</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Joint venture disputes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Technology and IP disputes</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">International trade disputes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Our Arbitration Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Arbitration Act, 2015 expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">International arbitration rules</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Emergency arbitration procedures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Institutional arbitration experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Multi-party arbitration handling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Award enforcement specialists</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Resolve Your Business Disputes?</h3>
                <p className="text-gray-600 mb-6">
                  Choose arbitration for faster, cost-effective dispute resolution. Our expert team provides
                  comprehensive arbitration services to protect your business interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Consult Our Arbitration Team
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Learn More About Arbitration</Button>
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
