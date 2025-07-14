import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="about" />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">»</span>
          <span>About</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">ABOUT</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Expert legal advice that moves your business forward in India</h3>
            </div>

            <div className="space-y-2">
              <Link href="/about" className="block bg-blue-500 text-white px-4 py-2 rounded">
                About
              </Link>
              <Link href="/history" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                History
              </Link>
              <Link href="/blockchain-partners" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Blockchain Partners
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">About Startup Solicitors</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Startup Solicitors LLP is India's premier <strong>startup law firm</strong>, dedicated to empowering
                entrepreneurs and businesses with expert legal guidance. Since our inception in 2014, we have been at
                the forefront of startup legal services, helping over 500 companies navigate India's complex regulatory
                landscape.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To democratize legal services for startups and businesses, making expert legal counsel accessible
                    and affordable while maintaining the highest standards of professional excellence.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-600 mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted legal partner for businesses entering and operating in India, fostering
                    innovation and entrepreneurship through comprehensive legal support.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Startup Solicitors?</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">500+</span>
                  </div>
                  <h4 className="font-semibold mb-2">Companies Served</h4>
                  <p className="text-sm text-gray-600">
                    Successfully registered and advised over 500 companies across various industries
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">10+</span>
                  </div>
                  <h4 className="font-semibold mb-2">Years Experience</h4>
                  <p className="text-sm text-gray-600">
                    Decade of expertise in startup law and business formation in India
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600">5</span>
                  </div>
                  <h4 className="font-semibold mb-2">Office Locations</h4>
                  <p className="text-sm text-gray-600">Pan-India presence with offices in major business hubs</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Corporate Law & Company Formation</h4>
                    <p className="text-gray-600 text-sm">
                      Expert guidance on business structure selection, incorporation, and ongoing compliance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Intellectual Property Rights</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive IP protection including trademarks, patents, and copyrights
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Taxation & Compliance</h4>
                    <p className="text-gray-600 text-sm">
                      GST registration, income tax planning, and regulatory compliance management
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Immigration & Visa Services</h4>
                    <p className="text-gray-600 text-sm">
                      Business visa assistance and immigration support for foreign entrepreneurs
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solving Present and Future Challenges</h3>

              <p className="text-gray-700 mb-6">
                At Startup Solicitors LLP, we don't just address today's legal challenges—we anticipate tomorrow's
                obstacles. Our proactive approach ensures that clients receive guidance that not only resolves immediate
                concerns but also prepares them for future regulatory changes and compliance requirements.
              </p>

              <p className="text-gray-700 mb-6">
                Our team combines deep legal expertise with practical business acumen, ensuring that our advice is
                always commercially relevant and strategically sound. We understand that legal compliance should enable
                business growth, not hinder it.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Chat Widget */}
      <Footer />
      <ChatWidgets />

    
    </div>
  )
}
