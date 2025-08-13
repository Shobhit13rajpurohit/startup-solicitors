import Link from "next/link"
import { CheckCircle, ArrowRight, Shield, Zap, Globe, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BlockchainCryptocurrencyPage() {
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
          <h1 className="text-4xl font-bold">Blockchain and Cryptocurrency Legal Services</h1>
          <p className="text-xl mt-4 opacity-90">
            Expert legal guidance for blockchain businesses and cryptocurrency ventures in India
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-purple-500 text-white p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Blockchain Legal</h3>
              <p className="text-sm">
                Specialized legal services for emerging blockchain and cryptocurrency businesses
              </p>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              <Link
                href="/business/blockchain-cryptocurrency"
                className="block bg-blue-500 text-white px-4 py-2 rounded"
              >
                Blockchain and Cryptocurrency
              </Link>
              <Link
                href="/business/crypto-investment-advisory-services"
                className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded"
              >
                Crypto Investment Advisory
              </Link>
              <Link href="/business/legal-services" className="block text-blue-600 px-4 py-2 hover:bg-gray-100 rounded">
                Legal Services
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <Alert className="mb-8 border-amber-200 bg-amber-50">
              <Shield className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Important:</strong> Cryptocurrency and blockchain regulations in India are evolving. Stay
                compliant with current laws and emerging regulatory frameworks.
              </AlertDescription>
            </Alert>

            <h2 className="text-3xl font-bold text-blue-600 mb-8">Blockchain and Cryptocurrency Legal Services</h2>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The blockchain and cryptocurrency industry in India is rapidly evolving with new regulations and
                opportunities. Our specialized legal services help blockchain businesses, cryptocurrency exchanges, and
                fintech companies navigate the complex regulatory landscape while building compliant and innovative
                solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
                    <p className="text-sm text-gray-600">Navigate evolving crypto regulations</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Smart Contracts</h3>
                    <p className="text-sm text-gray-600">Legal framework for smart contracts</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Global Compliance</h3>
                    <p className="text-sm text-gray-600">International blockchain regulations</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Token Economics</h3>
                    <p className="text-sm text-gray-600">Legal structuring for tokenization</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Blockchain Legal Services</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cryptocurrency Exchange Compliance</h4>
                    <p className="text-gray-600">
                      Comprehensive legal support for cryptocurrency exchanges including regulatory compliance,
                      licensing requirements, KYC/AML procedures, and ongoing regulatory monitoring to ensure compliant
                      operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Blockchain Business Setup</h4>
                    <p className="text-gray-600">
                      Legal guidance for establishing blockchain-based businesses including business structure
                      selection, regulatory approvals, intellectual property protection, and compliance framework
                      development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Smart Contract Development and Audit</h4>
                    <p className="text-gray-600">
                      Legal framework development for smart contracts, contract auditing for legal compliance, and
                      dispute resolution mechanisms for blockchain-based agreements and transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Token Launch and ICO/IEO Legal Support</h4>
                    <p className="text-gray-600">
                      Complete legal support for token launches including token classification, regulatory compliance,
                      whitepaper review, investor protection measures, and ongoing compliance management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">DeFi and NFT Legal Framework</h4>
                    <p className="text-gray-600">
                      Specialized legal services for decentralized finance (DeFi) protocols and non-fungible token (NFT)
                      platforms including regulatory compliance, intellectual property rights, and platform governance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Blockchain Intellectual Property</h4>
                    <p className="text-gray-600">
                      Protection of blockchain innovations through patents, trademarks, and copyrights. We help secure
                      intellectual property rights for blockchain technologies and digital assets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-purple-600 mb-4">Current Regulatory Landscape in India</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">30% tax on cryptocurrency gains (Finance Act 2022)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">1% TDS on cryptocurrency transactions above ₹10,000</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">RBI guidelines on virtual digital assets</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Proposed CBDC (Central Bank Digital Currency) framework</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span className="text-gray-700">Anti-money laundering (AML) compliance requirements</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Navigate Blockchain Regulations?</h3>
                <p className="text-gray-600 mb-6">
                  Stay ahead of the regulatory curve with expert legal guidance for your blockchain and cryptocurrency
                  business. Our team specializes in emerging technology law and compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Consult Blockchain Lawyers
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline">Download Crypto Compliance Guide</Button>
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
