import Link from "next/link"
import { CheckCircle, ArrowRight, Shield, Award, Copyright, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function IntellectualPropertyRightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="individual" />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">»</span>
          <Link href="#" className="hover:text-blue-600">
            Individual
          </Link>
          <span className="mx-2">»</span>
          <span>Intellectual Property Rights (IPR) Services</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Intellectual Property Rights (IPR) Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Comprehensive IP protection services for individuals, inventors, and creators
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-purple-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">IP Protection</h3>
              <p className="text-sm">
                Safeguard your innovations, creations, and intellectual assets with expert legal protection
              </p>
            </div>

            <div className="space-y-2">
              <Link
                href="/individual/business-setup-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Business Setup Services
              </Link>
              <Link
                href="/individual/crypto-investment-advisory"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Crypto Investment Advisory
              </Link>
              <Link
                href="/individual/expatriate-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Expatriate Services
              </Link>
              <Link
                href="/individual/immigration-services-foreign-directors"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Immigration Services
              </Link>
              <Link
                href="/individual/intellectual-property-rights"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                IPR Services
              </Link>
              <Link
                href="/individual/investment-advisory"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Investment Advisory
              </Link>
              <Link
                href="/individual/support-nris-foreign-individuals"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                NRI Support
              </Link>
              <Link
                href="/individual/tax-filing-refund-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Tax Filing Services
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Intellectual Property Rights Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In today's knowledge-driven economy, protecting your intellectual property is crucial for maintaining
                competitive advantage and securing the value of your innovations. Our comprehensive IPR services help
                individuals, inventors, artists, and creators protect their intellectual assets through proper
                registration and enforcement strategies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Trademarks</h3>
                    <p className="text-sm text-gray-600">Brand protection and registration</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Patents</h3>
                    <p className="text-sm text-gray-600">Innovation and invention protection</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Copyright className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Copyrights</h3>
                    <p className="text-sm text-gray-600">Creative work protection</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Trade Secrets</h3>
                    <p className="text-sm text-gray-600">Confidential information protection</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our IPR Services</h3>

              <div className="space-y-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-600 mb-4 flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Trademark Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Registration Services:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Trademark search and clearance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Application filing and prosecution</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Opposition and cancellation proceedings</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Renewal and maintenance</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Enforcement Services:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Infringement monitoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Cease and desist notices</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Litigation support</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Domain name disputes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                    <Lightbulb className="h-6 w-6 mr-2" />
                    Patent Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Filing and Prosecution:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Patentability assessment</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Prior art search and analysis</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Patent drafting and filing</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Examination response</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Portfolio Management:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Patent portfolio strategy</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Maintenance and renewals</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Licensing and commercialization</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Infringement analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
                    <Copyright className="h-6 w-6 mr-2" />
                    Copyright Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Registration and Protection:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Copyright registration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Work documentation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Digital content protection</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Software copyright</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Enforcement and Licensing:</h5>
                      <ul className="space-y-1">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Piracy and infringement action</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">DMCA takedown notices</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Licensing agreements</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">Royalty management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Why Choose Our IPR Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Experienced IP attorneys</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Comprehensive IP strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Global filing capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cost-effective solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Enforcement expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Technology-focused approach</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Ready to Protect Your Intellectual Property?
                </h3>
                <p className="text-gray-600 mb-6">
                  Don't let your valuable innovations and creative works go unprotected. Our IP experts will help you
                  build a comprehensive protection strategy tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Start IP Protection
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download IP Guide</Button>
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
