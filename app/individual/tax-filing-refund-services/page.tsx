import Link from "next/link"
import { CheckCircle, ArrowRight, Calculator, FileText, RefreshCw, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function TaxFilingRefundServicesPage() {
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
          <span>Tax Filing and Refund Services</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Tax Filing and Refund Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Professional tax preparation, filing, and refund services for individuals
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-amber-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Tax Services</h3>
              <p className="text-sm">
                Complete tax preparation, filing, and refund services for individuals and professionals
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
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                NRI Support
              </Link>
              <Link
                href="/individual/tax-filing-refund-services"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Tax Filing Services
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Tax Filing and Refund Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Navigating India's complex tax system can be challenging for individuals, especially with frequent
                changes in tax laws and regulations. Our comprehensive tax services ensure accurate filing, maximum
                refunds, and full compliance with all applicable tax laws while minimizing your tax liability through
                strategic planning.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Calculator className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Tax Calculation</h3>
                    <p className="text-sm text-gray-600">Accurate tax computation and planning</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Return Filing</h3>
                    <p className="text-sm text-gray-600">Professional tax return preparation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <RefreshCw className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Refund Processing</h3>
                    <p className="text-sm text-gray-600">Fast refund claim and processing</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Tax Planning</h3>
                    <p className="text-sm text-gray-600">Strategic tax optimization</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Tax Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Income Tax Return Filing</h4>
                    <p className="text-gray-600">
                      Complete preparation and filing of income tax returns for individuals including salaried
                      employees, professionals, business owners, and NRIs with various income sources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tax Planning and Advisory</h4>
                    <p className="text-gray-600">
                      Strategic tax planning to minimize tax liability through legal deductions, exemptions, and
                      investment planning under various sections of the Income Tax Act.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Refund Claims and Processing</h4>
                    <p className="text-gray-600">
                      Expert assistance with tax refund claims, including rectification applications, refund status
                      tracking, and resolution of refund-related issues with tax authorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Tax Notice Response and Compliance</h4>
                    <p className="text-gray-600">
                      Professional handling of tax notices, assessments, and compliance requirements including response
                      preparation and representation before tax authorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Advance Tax and TDS Services</h4>
                    <p className="text-gray-600">
                      Calculation and payment of advance tax, TDS compliance, and quarterly tax planning to avoid
                      penalties and interest charges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-amber-600">Individual Tax Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Salary income (ITR-1)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Multiple income sources (ITR-2)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Business/Professional income (ITR-3/4)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Capital gains and investments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">NRI tax returns</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-600">Tax Saving Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Section 80C investments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Health insurance (80D)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Home loan benefits</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Education loan interest</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Charitable donations (80G)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Tax Filing Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-amber-600 font-bold">Jul 31</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Individual Returns</h4>
                    <p className="text-sm text-gray-600">Due date for individual tax returns (non-audit cases)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold">Oct 31</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Audit Cases</h4>
                    <p className="text-sm text-gray-600">Due date for returns requiring tax audit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">Dec 31</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Belated Returns</h4>
                    <p className="text-sm text-gray-600">Last date for filing belated returns</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to File Your Tax Returns?</h3>
                <p className="text-gray-600 mb-6">
                  Let our tax experts handle your tax filing while you focus on what matters most. We ensure accurate
                  filing, maximum refunds, and complete compliance with tax laws.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-amber-600 hover:bg-amber-700">
                    Start Tax Filing
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download Tax Checklist</Button>
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
