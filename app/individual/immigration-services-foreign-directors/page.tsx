import Link from "next/link"
import { CheckCircle, ArrowRight, Plane, FileCheck, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function ImmigrationServicesForeignDirectorsPage() {
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
          <span>Immigration Services for Foreign Directors</span>
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
          <h1 className="text-4xl font-bold">Immigration Services for Foreign Directors</h1>
          <p className="text-xl mt-4 opacity-90">
            Specialized immigration support for foreign nationals serving as company directors in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-indigo-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Director Immigration</h3>
              <p className="text-sm">
                Complete immigration solutions for foreign directors and key management personnel
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Immigration Services for Foreign Directors</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Foreign directors play a crucial role in Indian companies, bringing international expertise and
                facilitating global business operations. Our specialized immigration services ensure that foreign
                directors can legally serve on Indian company boards while maintaining compliance with all immigration
                and corporate regulations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-indigo-600 flex items-center">
                      <Plane className="h-5 w-5 mr-2" />
                      Business Visa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Multiple entry facility</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Up to 5 years validity</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Board meeting attendance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Strategic planning activities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Employment Visa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Executive positions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Long-term stay</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Family visa eligibility</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Renewable annually</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Immigration Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Visa Category Assessment</h4>
                    <p className="text-gray-600">
                      Comprehensive evaluation to determine the most appropriate visa category based on the director's
                      role, responsibilities, and duration of stay in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Document Preparation and Review</h4>
                    <p className="text-gray-600">
                      Complete assistance with preparing and reviewing all required documents including board
                      resolutions, company certificates, and personal documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Application Processing</h4>
                    <p className="text-gray-600">
                      End-to-end visa application processing including form filling, document submission, and liaison
                      with Indian missions abroad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compliance and Renewals</h4>
                    <p className="text-gray-600">
                      Ongoing compliance monitoring and timely renewal applications to ensure continuous legal status
                      for foreign directors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Emergency and Expedited Services</h4>
                    <p className="text-gray-600">
                      Fast-track processing for urgent business requirements and emergency travel needs of foreign
                      directors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Document Verification</h3>
                    <p className="text-sm text-gray-600">Complete document verification and attestation services</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Fast Processing</h3>
                    <p className="text-sm text-gray-600">Expedited processing for urgent business requirements</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Family Support</h3>
                    <p className="text-sm text-gray-600">Dependent visa assistance for director's family members</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">Required Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Company Documents:</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Certificate of Incorporation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Board Resolution</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Memorandum of Association</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Financial Statements</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Personal Documents:</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Valid Passport</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Educational Certificates</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Professional Experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">Medical Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Ready to Bring International Expertise to Your Board?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our immigration specialists ensure smooth visa processing for foreign directors, enabling seamless
                  international business operations and governance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Start Application Process
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download Requirements Checklist</Button>
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
