import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function HistoryPage() {
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
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <span className="mx-2">»</span>
          <span>History</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">HISTORY</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Law firm driven by third generation Lawyers</h3>
            </div>

            <div className="space-y-2">
              <Link href="/about" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                About
              </Link>
              <Link href="/history" className="block bg-blue-500 text-white px-4 py-2 rounded">
                History
              </Link>
              <Link href="/blockchain-partners" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Blockchain Partners
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Journey</h2>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Beginning - Summer 2014</h3>

              <p className="text-gray-700 mb-6">
                The story of Startup Solicitors begins in the summer of 2014, when our founding partners identified a
                critical gap in the Indian legal services market. Young entrepreneurs and foreign investors were
                struggling to navigate India's complex regulatory landscape, often facing significant barriers to
                business formation and compliance.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold text-blue-600 mb-3">The Problem We Solved</h4>
                <p className="text-gray-700">
                  Entrepreneurs lacked accessible, affordable legal guidance for business setup and ongoing compliance.
                  Traditional law firms were either too expensive or didn't understand the unique needs of startups and
                  growing businesses.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Evolution</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">2014</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Foundation</h4>
                    <p className="text-gray-600">
                      Startup Solicitors LLP was founded with a mission to democratize legal services for entrepreneurs
                      and startups in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2016</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Expansion</h4>
                    <p className="text-gray-600">
                      Opened offices in Delhi and Mumbai to better serve clients across major business hubs in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">2018</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Specialization</h4>
                    <p className="text-gray-600">
                      Developed specialized practices in blockchain law, cryptocurrency regulations, and fintech
                      compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2020</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Digital Transformation</h4>
                    <p className="text-gray-600">
                      Launched online legal services platform, making our expertise accessible to clients worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2022</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">International Presence</h4>
                    <p className="text-gray-600">
                      Established office in Saudi Arabia to serve Middle Eastern clients looking to invest in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2025</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Today</h4>
                    <p className="text-gray-600">
                      Serving 500+ clients with a team of expert lawyers across multiple jurisdictions, continuing to
                      innovate in legal service delivery.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-3">Accessibility</h4>
                  <p className="text-gray-700 text-sm">
                    Making expert legal services accessible and affordable for businesses of all sizes.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-3">Innovation</h4>
                  <p className="text-gray-700 text-sm">
                    Continuously evolving our service delivery to meet changing client needs and market demands.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-3">Excellence</h4>
                  <p className="text-gray-700 text-sm">
                    Maintaining the highest standards of legal expertise and professional service.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-3">Partnership</h4>
                  <p className="text-gray-700 text-sm">
                    Building long-term relationships with clients as trusted legal advisors and business partners.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Looking Forward</h3>
                <p className="text-gray-700">
                  As we continue to grow, our commitment remains unchanged: to provide exceptional legal services that
                  enable businesses to thrive in India's dynamic market. We're constantly adapting to new regulations,
                  emerging technologies, and evolving business needs to ensure our clients stay ahead of the curve.
                </p>
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
