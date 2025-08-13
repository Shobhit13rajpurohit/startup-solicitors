import Link from "next/link"
import { CheckCircle, ArrowRight, Globe, FileText, Users, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function ExpatriateServicesPage() {
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
          <span>Expatriate Services</span>
        </div>
      </div>

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
          <h1 className="text-4xl font-bold">Expatriate Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Comprehensive legal support for expatriates living and working in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-green-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Expatriate Support</h3>
              <p className="text-sm">Specialized legal services for foreign nationals living and working in India</p>
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
              <Link href="/individual/expatriate-services" className="block bg-blue-500 text-white px-4 py-2 rounded">
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
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Comprehensive Expatriate Legal Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Moving to India as an expatriate involves navigating complex legal, regulatory, and administrative
                requirements. Our specialized expatriate services are designed to help foreign nationals establish
                themselves legally and compliantly in India, whether for employment, business, or long-term residence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Visa & Immigration</h3>
                    <p className="text-sm text-gray-600">Complete visa processing and immigration support</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Legal Documentation</h3>
                    <p className="text-sm text-gray-600">Essential document preparation and attestation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Employment Support</h3>
                    <p className="text-sm text-gray-600">Work permit and employment compliance assistance</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Tax Compliance</h3>
                    <p className="text-sm text-gray-600">Expatriate tax planning and filing services</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Expatriate Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Visa and Immigration Services</h4>
                    <p className="text-gray-600">
                      Complete assistance with employment visas, business visas, dependent visas, and long-term
                      residence permits. We handle the entire application process from documentation to approval.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Work Permit and Employment Compliance</h4>
                    <p className="text-gray-600">
                      Assistance with work permit applications, employment contract reviews, and ensuring compliance
                      with Indian labor laws and regulations for foreign employees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tax Planning and Compliance</h4>
                    <p className="text-gray-600">
                      Specialized tax advisory for expatriates including residential status determination, double
                      taxation avoidance, and annual tax filing requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Banking and Financial Services</h4>
                    <p className="text-gray-600">
                      Assistance with opening bank accounts, investment compliance, foreign exchange regulations, and
                      remittance procedures for expatriates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Property and Real Estate</h4>
                    <p className="text-gray-600">
                      Legal guidance on property purchases, rental agreements, and real estate investments for foreign
                      nationals in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Family and Dependent Services</h4>
                    <p className="text-gray-600">
                      Support for dependent visas, school admissions, healthcare registration, and other family-related
                      legal requirements for expatriate families.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Key Documents We Help With</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Employment Visa Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Residential Registration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">PAN Card Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Bank Account Opening</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Work Permit Extensions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Exit Permit Processing</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Journey in India?</h3>
                <p className="text-gray-600 mb-6">
                  Let our experienced team guide you through the complexities of living and working in India. We provide
                  end-to-end support for all your expatriate legal needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download Expatriate Guide</Button>
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
