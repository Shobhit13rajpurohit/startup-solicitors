import Link from "next/link"
import { CheckCircle, ArrowRight, Home, FileText, Landmark, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function EstateSuccessionPlanningPage() {
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
          <h1 className="text-4xl font-bold">Estate & Succession Planning</h1>
          <p className="text-xl mt-4 opacity-90">
            Secure your legacy and ensure a smooth transfer of your assets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-lime-600 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Plan Your Future</h3>
              <p className="text-sm">
                Comprehensive estate and succession planning services for individuals and families.
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
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
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
                className="block bg-blue-500 text-white px-4 py-2 rounded"
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
            <h2 className="text-3xl font-bold text-green-600 mb-8">Expert Estate & Succession Planning</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our estate and succession planning services are designed to help you protect your wealth and ensure a seamless transfer of assets to your beneficiaries. We provide personalized solutions for will drafting, trust formation, and estate management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <FileText className="h-12 w-12 text-lime-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Will Drafting</h3>
                    <p className="text-sm text-gray-600">Legally compliant estate plans.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Landmark className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Inheritance & Probate</h3>
                    <p className="text-sm text-gray-600">Smooth execution of succession.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Home className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Estate Management for NRIs</h3>
                    <p className="text-sm text-gray-600">Property and asset management.</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Trust Formation</h3>
                    <p className="text-sm text-gray-600">For family wealth and charity.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Estate & Succession Planning Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Will Drafting & Registration</h4>
                    <p className="text-gray-600">
                      Creating legally compliant wills and ensuring their proper registration to secure your estate transfer plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Inheritance & Probate Assistance</h4>
                    <p className="text-gray-600">
                      Providing guidance and support for the smooth execution of succession matters, including obtaining probate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Estate Management for NRIs</h4>
                    <p className="text-gray-600">
                      Comprehensive property and asset management services in India for Non-Resident Indians (NRIs).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Trust Formation & Administration</h4>
                    <p className="text-gray-600">
                      Assistance with the formation and administration of trusts for family wealth management and charitable purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Why Choose Our Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Personalized and confidential advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Expertise in Indian succession laws</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Holistic approach to wealth preservation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Support for international clients</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secure Your Legacy for Future Generations</h3>
                <p className="text-gray-600 mb-6">
                  Let us help you create a comprehensive estate plan that reflects your wishes and protects your loved ones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Start Your Estate Plan
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
