import Link from "next/link"
import { CheckCircle, ArrowRight, Building, Clock, Users, FileCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function CompanyFormationServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business" />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Company Formation Services in India</h1>
          <p className="text-xl mt-4 opacity-90">
            Complete business incorporation solutions for all types of companies in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Company Formation</h3>
              <p className="text-sm">Expert guidance for incorporating your business with full legal compliance</p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              <Link
                href="/business/company-formation-services"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Company Formation Services
              </Link>
              <Link
                href="/business/corporate-secretarial-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Corporate Secretarial Services
              </Link>
              <Link
                href="/business/start-your-business"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Start Your Business
              </Link>
              <Link href="/business/legal-services" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Legal Services
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Company Formation Services in India</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Starting a company in India requires navigating complex regulatory requirements and compliance
                procedures. Our comprehensive company formation services provide end-to-end support for incorporating
                various types of business entities, ensuring full legal compliance and optimal structure for your
                business goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Business Setup</h3>
                    <p className="text-sm text-gray-600">Complete business entity formation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Fast Processing</h3>
                    <p className="text-sm text-gray-600">Quick incorporation with all approvals</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Expert Team</h3>
                    <p className="text-sm text-gray-600">Experienced company formation specialists</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileCheck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Full Compliance</h3>
                    <p className="text-sm text-gray-600">Complete regulatory compliance</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Companies We Help Incorporate</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-blue-600">Private Limited Company</CardTitle>
                      <Badge variant="outline">Most Popular</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Limited liability protection</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Easy to raise funds</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Minimum 2 directors, 2 shareholders</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Perpetual succession</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Processing Time:</strong> 15-20 days
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">One Person Company (OPC)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Single member company</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Limited liability</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Only Indian residents eligible</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Easy conversion to Pvt Ltd</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Processing Time:</strong> 12-18 days
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-orange-600">Public Limited Company</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Can raise funds from public</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Minimum 7 shareholders</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Can list on stock exchanges</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Higher compliance requirements</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Processing Time:</strong> 25-30 days
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Limited Liability Partnership (LLP)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Flexible management structure</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Lower compliance costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Tax advantages</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Ideal for professionals</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Processing Time:</strong> 10-15 days
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Company Formation Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Structure Consultation</h4>
                    <p className="text-gray-600">
                      Initial consultation to understand your business goals and recommend the most suitable company
                      structure based on your requirements, investment plans, and growth objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Name Reservation and Approval</h4>
                    <p className="text-gray-600">
                      Assistance with company name search, availability check, and filing for name approval with the
                      Ministry of Corporate Affairs (MCA) to ensure your desired company name is available and
                      compliant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Document Preparation and Filing</h4>
                    <p className="text-gray-600">
                      Complete preparation of incorporation documents including Memorandum of Association, Articles of
                      Association, and other required forms. We handle all documentation and filing procedures with
                      relevant authorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Statutory Registrations</h4>
                    <p className="text-gray-600">
                      Assistance with obtaining necessary registrations including PAN, TAN, GST registration, ESIC, and
                      other statutory registrations required for your business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Post-Incorporation Support</h4>
                    <p className="text-gray-600">
                      Ongoing support for bank account opening, board resolutions, appointment of directors, and other
                      post-incorporation requirements to ensure your company is ready for business operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">What's Included in Our Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Name availability search and reservation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Digital Signature Certificate (DSC)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Director Identification Number (DIN)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Incorporation certificate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">PAN and TAN registration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Current bank account opening support</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Company?</h3>
                <p className="text-gray-600 mb-6">
                  Take the first step towards establishing your business in India. Our expert team will guide you
                  through the entire incorporation process with full legal compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Start Company Formation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Get Free Consultation</Button>
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
