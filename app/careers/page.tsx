import Link from "next/link";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="careers" />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">»</span>
          <span>Careers</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold">CAREERS</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                We are always interested in hearing from talented and experienced lawyers at all levels who are looking
                to Join us. Contact us today.
              </h3>
            </div>

            <div className="mb-8">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Upload your Resume</Button>
            </div>

            <div className="space-y-2">
              <Link href="/careers" className="block bg-blue-500 text-white px-4 py-2 rounded">
                Careers
              </Link>
              <Link href="#" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Workplace
              </Link>
              <Link href="#" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Professional Support
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-8">Join Our Growing Team</h2>

            <div className="prose max-w-none">
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Startup Solicitors LLP is an international law firm that's ambitious, skilled, and driven by the acumen
                and intelligence of our growing team. We're looking for talented legal professionals who share our
                passion for innovation and excellence.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Competitive compensation packages</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Professional development opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Flexible working arrangements</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">International exposure</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Collaborative work environment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Cutting-edge legal technology</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">What We're Looking For</h3>

              <p className="text-gray-700 mb-6">
                Having the right qualifications and expertise is essential, but we also value candidates who possess
                commercial drive and the desire to be part of a fast-growing global business. We want team members who
                are:
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Passionate about startup and corporate law</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Client-focused and solution-oriented</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Adaptable to changing legal landscapes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Committed to professional excellence</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Current Openings</h3>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Senior Corporate Lawyer</h4>
                  <p className="text-gray-600 mb-3">Mumbai | Full-time | 5-8 years experience</p>
                  <p className="text-gray-700 mb-4">
                    Lead corporate transactions, M&A deals, and provide strategic legal advice to high-growth startups
                    and established companies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Corporate Law</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">M&A</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">Compliance</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">IP Attorney</h4>
                  <p className="text-gray-600 mb-3">Delhi | Full-time | 3-5 years experience</p>
                  <p className="text-gray-700 mb-4">
                    Handle trademark registrations, patent applications, and IP litigation matters for technology and
                    startup clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
                      Intellectual Property
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Patents</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">Trademarks</span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Tax Consultant</h4>
                  <p className="text-gray-600 mb-3">Jaipur | Full-time | 2-4 years experience</p>
                  <p className="text-gray-700 mb-4">
                    Provide tax planning advice, handle GST compliance, and assist with international tax structuring
                    for clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">Taxation</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">GST</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                      International Tax
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ready to Join Us?</h3>
                <p className="text-gray-700 mb-4">
                  If you have the drive and determination to succeed and want to be part of our growing team, we'd love
                  to hear from you. Send your resume and cover letter to{" "}
                  <Link href="mailto:careers@startupsolicitors.com" className="text-blue-600 hover:underline">
                    careers@startupsolicitors.com
                  </Link>
                </p>
                <p className="text-sm text-gray-600">
                  We are an equal opportunity employer committed to diversity and inclusion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <Footer />
      <ChatWidgets />
    </div>
  );
}
