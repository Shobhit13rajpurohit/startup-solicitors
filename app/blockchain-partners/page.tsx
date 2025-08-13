import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BlockchainPartnersPage() {
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
          <span>Blockchain Partners</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">BLOCKCHAIN PARTNERS</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Our Blockchain Partners</h3>
            </div>

            <div className="space-y-2">
              <Link href="/about" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                About
              </Link>
              <Link href="/history" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                History
              </Link>
              <Link href="/blockchain-partners" className="block bg-blue-500 text-white px-4 py-2 rounded">
                Blockchain Partners
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Blockchain Partners</h2>

            <div className="space-y-8">
              <div className="bg-black p-8 rounded-lg">
                <Image
                  src="/placeholder.svg?height=100&width=300"
                  alt="Laxmicoin"
                  width={300}
                  height={100}
                  className="mx-auto"
                />
              </div>

              <div className="bg-black p-8 rounded-lg">
                <Image
                  src="/placeholder.svg?height=100&width=300"
                  alt="Rover Network"
                  width={300}
                  height={100}
                  className="mx-auto"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Laxmicoin & Rover Network</h3>
                <p className="text-gray-700">
                  Laxmicoin and the &quot;Rover Network&quot; – A decentralized platform for consumers
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
  )
}
