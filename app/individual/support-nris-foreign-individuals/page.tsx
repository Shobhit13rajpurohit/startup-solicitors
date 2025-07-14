import Link from "next/link"
import { CheckCircle, ArrowRight, Globe, Users, FileText, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function SupportNRIsForeignIndividualsPage() {
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
          <span>Support for NRIs and Foreign Individuals</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Support for NRIs and Foreign Individuals</h1>
          <p className="text-xl mt-4 opacity-90">
            Comprehensive legal services for Non-Resident Indians and foreign nationals
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-teal-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">NRI & Foreign Support</h3>
              <p className="text-sm">
                Specialized legal assistance for NRIs and foreign individuals with Indian interests
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Support for NRIs and Foreign Individuals</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Non-Resident Indians (NRIs) and foreign individuals with interests in India face unique legal and
                regulatory challenges. Our specialized services help bridge the gap between international residence and
                Indian legal requirements, ensuring compliance while maximizing opportunities for investment, business,
                and personal affairs in India.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Global Compliance</h3>
                    <p className="text-sm text-gray-600">Cross-border legal compliance</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Banking & Finance</h3>
                    <p className="text-sm text-gray-600">NRI banking and investment solutions</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
                    <p className="text-sm text-gray-600">Legal document preparation and attestation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Family Matters</h3>
                    <p className="text-sm text-gray-600">Family law and succession planning</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our NRI and Foreign Individual Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">NRI Banking and Investment Services</h4>
                    <p className="text-gray-600">
                      Complete assistance with NRI banking requirements including NRE/NRO account opening, investment
                      compliance, repatriation procedures, and FEMA compliance for financial transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Property and Real Estate Services</h4>
                    <p className="text-gray-600">
                      Legal guidance for NRI property investments, including due diligence, documentation, registration
                      procedures, and ongoing property management compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tax Planning and Compliance</h4>
                    <p className="text-gray-600">
                      Comprehensive tax advisory including residential status determination, double taxation avoidance,
                      advance tax planning, and annual compliance requirements for NRIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Business Setup and Investment</h4>
                    <p className="text-gray-600">
                      Support for NRIs and foreign individuals looking to establish businesses in India, including FDI
                      compliance, corporate structuring, and regulatory approvals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Family Law and Succession Planning</h4>
                    <p className="text-gray-600">
                      Legal assistance with family matters including marriage registration, divorce proceedings, child
                      custody, inheritance planning, and will preparation for NRIs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Document Services and Attestation</h4>
                    <p className="text-gray-600">
                      Complete document services including apostille, embassy attestation, notarization, and preparation
                      of legal documents required for various purposes in India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-teal-600">NRI Banking Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">NRE/NRO account opening</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">FCNR deposit guidance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Repatriation procedures</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Investment compliance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">FEMA compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Property Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Property due diligence</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Sale/purchase documentation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Registration procedures</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Property management</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Rental agreements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Key Areas of Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">FEMA compliance and regulations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Double taxation avoidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Residential status determination</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Investment and repatriation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Property acquisition rights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Succession and inheritance</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Ready to Navigate Your Indian Legal Matters?
                </h3>
                <p className="text-gray-600 mb-6">
                  Whether you're an NRI looking to invest in India or a foreign individual with Indian interests, our
                  specialized team provides the legal support you need to achieve your goals compliantly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    Schedule NRI Consultation
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download NRI Guide</Button>
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
