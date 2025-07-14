import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BusinessSetupServicesPage() {
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
          <span>Business Setup Services for Individuals</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Business Setup Services for Individuals</h1>
          <p className="text-xl mt-4 opacity-90">
            Comprehensive business formation services tailored for individual entrepreneurs
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Individual Services</h3>
              <p className="text-sm">
                Specialized legal services designed for individual entrepreneurs and professionals
              </p>
            </div>

            <div className="space-y-2">
              <Link
                href="/individual/business-setup-services"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Business Setup Services for Individuals</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Starting a business as an individual entrepreneur requires careful planning and proper legal structure.
                Our comprehensive business setup services are designed to help individual entrepreneurs establish their
                businesses efficiently and compliantly in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-600">Sole Proprietorship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Simplest business structure</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Complete control over business</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Minimal compliance requirements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Direct tax benefits</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-600">One Person Company (OPC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Limited liability protection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Single member company</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Perpetual succession</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Easy conversion to Pvt Ltd</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Services Include</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Structure Consultation</h4>
                    <p className="text-gray-600">
                      Expert advice on choosing the right business structure based on your goals, investment capacity,
                      and growth plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Registration & Documentation</h4>
                    <p className="text-gray-600">
                      Complete registration process including name reservation, document preparation, and filing with
                      relevant authorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compliance Setup</h4>
                    <p className="text-gray-600">
                      Setting up necessary registrations including PAN, TAN, GST, and other statutory requirements based
                      on your business type.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Banking & Financial Setup</h4>
                    <p className="text-gray-600">
                      Assistance with opening business bank accounts and setting up financial systems for your new
                      business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Why Choose Our Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Expert legal guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Fast processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Transparent pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">End-to-end support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Post-incorporation assistance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Ongoing compliance support</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Business?</h3>
                <p className="text-gray-600 mb-6">
                  Get expert guidance on setting up your business structure. Our team is ready to help you make the
                  right choice for your entrepreneurial journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started Today
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Schedule Consultation</Button>
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
