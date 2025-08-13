import Link from "next/link"
import { CheckCircle, ArrowRight, Calculator, BarChart, FileText, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BusinessAccountingServicesPage() {
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
          <h1 className="text-4xl font-bold">Professional Accounting Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Complete accounting solutions to maintain accurate financial records and drive business growth
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-emerald-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Accounting Excellence</h3>
              <p className="text-sm">
                Professional accounting services to keep your business financially organized and compliant
              </p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              <Link
                href="/business/accounting-tax-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Accounting and Tax Services
              </Link>
              <Link href="/business/accounting-services" className="block bg-blue-500 text-white px-4 py-2 rounded">
                Accounting Services
              </Link>
              <Link href="/business/arbitration" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
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
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Professional Accounting Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Accurate accounting is the foundation of successful business operations. Our comprehensive accounting
                services provide businesses with reliable financial record-keeping, insightful reporting, and strategic
                financial guidance to help you make informed decisions and achieve sustainable growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Calculator className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Bookkeeping</h3>
                    <p className="text-sm text-gray-600">Daily transaction recording and management</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <BarChart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Financial Reports</h3>
                    <p className="text-sm text-gray-600">Comprehensive financial statement preparation</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Compliance</h3>
                    <p className="text-sm text-gray-600">Regulatory compliance and record maintenance</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Data Management</h3>
                    <p className="text-sm text-gray-600">Secure financial data storage and backup</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Accounting Service Portfolio</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Daily Bookkeeping and Transaction Recording</h4>
                    <p className="text-gray-600">
                      Complete management of daily financial transactions including sales, purchases, receipts, and
                      payments. We maintain accurate records using modern accounting software to ensure your financial
                      data is always up-to-date and accessible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Financial Statement Preparation</h4>
                    <p className="text-gray-600">
                      Preparation of comprehensive financial statements including profit & loss statements, balance
                      sheets, and cash flow statements. Our reports provide clear insights into your business
                      performance and financial position.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Accounts Payable and Receivable Management</h4>
                    <p className="text-gray-600">
                      Efficient management of vendor payments and customer collections, including invoice processing,
                      payment scheduling, aging analysis, and follow-up on outstanding receivables to optimize cash
                      flow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bank Reconciliation and Cash Management</h4>
                    <p className="text-gray-600">
                      Regular bank reconciliation to ensure accuracy between bank statements and accounting records,
                      along with cash flow monitoring and management to maintain optimal liquidity levels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Payroll Processing and Management</h4>
                    <p className="text-gray-600">
                      Complete payroll services including salary calculations, statutory deductions, tax compliance, and
                      generation of payslips and related reports. We ensure timely payment and full compliance with
                      labor laws.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Fixed Asset Accounting and Depreciation</h4>
                    <p className="text-gray-600">
                      Management of fixed asset registers, depreciation calculations using appropriate methods, and
                      ensuring compliance with accounting standards for asset valuation and reporting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Technology and Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Cloud-based accounting software</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Automated data entry and processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Real-time financial dashboards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Secure data backup and storage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Integration with banking systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Mobile access and reporting</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Organize Your Business Finances?</h3>
                <p className="text-gray-600 mb-6">
                  Professional accounting services that provide accuracy, insights, and peace of mind. Let us handle
                  your books while you focus on growing your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Start Accounting Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Request Quote</Button>
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
