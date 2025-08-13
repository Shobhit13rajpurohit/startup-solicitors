import { CheckCircle, ArrowRight, Users, Globe, Shield, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidgets from "@/components/chat-widgets"

export default function BusinessSetupIndiaPage() {
  const businessTypes = [
    {
      title: "Private Limited Company",
      description: "Most popular choice for startups and foreign investors",
      features: [
        "Limited liability protection",
        "Easy to raise funds",
        "Professional credibility",
        "Minimum 2, maximum 200 shareholders",
        "Restricted share transfer rights",
      ],
      timeframe: "15-20 days",
      cost: "Starting from ₹10,000",
      minCapital: "₹1,00,000",
      suitableFor: "Startups, Foreign Investors, Growing Businesses",
    },
    {
      title: "Public Limited Company",
      description: "For large businesses planning to go public",
      features: [
        "Can raise funds from public",
        "Minimum 7 shareholders required",
        "Requires trading certificate",
        "Must publish prospectus",
        "Minimum 3 directors required",
      ],
      timeframe: "25-30 days",
      cost: "Starting from ₹25,000",
      minCapital: "₹5,00,000",
      suitableFor: "Large Enterprises, Public Fundraising",
    },
    {
      title: "Limited Liability Partnership (LLP)",
      description: "Ideal for professional services and partnerships",
      features: [
        "Limited liability protection",
        "Flexible management structure",
        "Lower compliance requirements",
        "Tax efficiency",
        "Perpetual succession",
      ],
      timeframe: "10-15 days",
      cost: "Starting from ₹8,000",
      minCapital: "No minimum capital",
      suitableFor: "Professional Services, Small Partnerships",
    },
    {
      title: "One Person Company (OPC)",
      description: "Perfect for solo entrepreneurs",
      features: [
        "Single member company",
        "Limited liability protection",
        "Perpetual succession",
        "Easy conversion to Pvt Ltd",
        "Only Indian residents eligible",
      ],
      timeframe: "12-18 days",
      cost: "Starting from ₹9,000",
      minCapital: "₹1,00,000",
      suitableFor: "Solo Entrepreneurs, Individual Businesses",
    },
    {
      title: "Partnership Firm",
      description: "Simple structure for small businesses",
      features: [
        "Easy formation process",
        "Shared responsibility",
        "Flexible profit sharing",
        "Lower compliance costs",
        "Unlimited liability",
      ],
      timeframe: "5-7 days",
      cost: "Starting from ₹5,000",
      minCapital: "No minimum capital",
      suitableFor: "Small Businesses, Family Businesses",
    },
    {
      title: "Sole Proprietorship",
      description: "Simplest form for individual business",
      features: [
        "Complete control",
        "Easy to start and close",
        "Minimal compliance",
        "Direct tax benefits",
        "Unlimited personal liability",
      ],
      timeframe: "2-3 days",
      cost: "Starting from ₹2,000",
      minCapital: "No minimum capital",
      suitableFor: "Individual Traders, Small Service Providers",
    },
  ]

  const services = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Company Registration",
      description: "Complete incorporation services for all business types",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Legal Compliance",
      description: "Ongoing compliance management and regulatory support",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "International Setup",
      description: "Specialized services for foreign companies entering India",
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Fast Track Service",
      description: "Expedited processing for urgent business requirements",
    },
  ]

  const foreignInvestorOptions = [
    {
      title: "Liaison Office / Representative Office",
      description: "For information collection and business promotion",
      features: [
        "Cannot undertake commercial activities",
        "Limited to information collection",
        "Promote exports/imports",
        "Facilitate collaborations",
        "Requires government approval",
      ],
      timeframe: "30-45 days",
      suitableFor: "Market Research, Business Promotion",
    },
    {
      title: "Project Office",
      description: "For executing specific projects in India",
      features: [
        "Temporary establishment",
        "Project-specific activities only",
        "Project-specific activities only",
        "General permission available",
        "Limited duration",
        "Subject to specified conditions",
      ],
      timeframe: "15-30 days",
      suitableFor: "Infrastructure Projects, Specific Contracts",
    },
    {
      title: "Branch Office",
      description: "For manufacturing and trading companies",
      features: [
        "Export/Import activities",
        "Professional services",
        "Research work",
        "Technical collaborations",
        "IT and software development",
      ],
      timeframe: "30-60 days",
      suitableFor: "Established Foreign Companies",
    },
    {
      title: "Subsidiary Company",
      description: "Wholly owned subsidiary of foreign company",
      features: [
        "Separate legal entity",
        "Limited liability",
        "Can be Pvt Ltd or Public Ltd",
        "Full business operations",
        "Local compliance required",
      ],
      timeframe: "20-30 days",
      suitableFor: "Long-term Business Operations",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="business-setup-india" />

      {/* Hero Section */}
      <div
        className="text-white py-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWElMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Start Your Business in India</h1>
            <p className="text-xl mb-8 opacity-90">
              Complete legal solutions for company registration, compliance, and business setup in India. Expert
              guidance from incorporation to growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Business Setup Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal and regulatory support for establishing your business in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Business Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the right business structure based on your needs, goals, and investment plans
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-blue-600">{type.title}</CardTitle>
                    <Badge variant="outline">{type.timeframe}</Badge>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Minimum Capital:</p>
                    <p className="text-gray-700">{type.minCapital}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Suitable For:</p>
                    <p className="text-gray-700">{type.suitableFor}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-sm text-gray-500">Starting from</p>
                      <p className="text-lg font-semibold text-gray-800">{type.cost}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foreign Investor Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Options for Foreign Investors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized business structures available for foreign companies entering the Indian market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {foreignInvestorOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{option.title}</CardTitle>
                  <p className="text-gray-600">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Processing Time</p>
                      <p className="text-lg font-semibold text-gray-800">{option.timeframe}</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Incorporation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Incorporation Process</h2>
            <p className="text-xl text-gray-600">Step-by-step guide with timelines for company formation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Obtain Director Identification Number (DIN)",
                  duration: "1 day",
                  description: "All proposed directors must obtain DIN from MCA",
                },
                {
                  step: 2,
                  title: "Digital Signature Certificate (DSC)",
                  duration: "2 days",
                  description: "Required for all directors to sign documents electronically",
                },
                {
                  step: 3,
                  title: "Name Approval",
                  duration: "2 days",
                  description: "File proposed company name with Registrar of Companies",
                },
                {
                  step: 4,
                  title: "Prepare Documents",
                  duration: "1 day",
                  description: "Draft Memorandum and Articles of Association",
                },
                {
                  step: 5,
                  title: "Pay Stamp Duties",
                  duration: "1 day",
                  description: "Online payment of applicable stamp duties",
                },
                {
                  step: 6,
                  title: "File Incorporation Forms",
                  duration: "2 days",
                  description: "Submit all documents online to ROC",
                },
                {
                  step: 7,
                  title: "Certificate of Incorporation",
                  duration: "2 days",
                  description: "Receive certificate from ROC",
                },
                {
                  step: 8,
                  title: "Post-Incorporation Setup",
                  duration: "15 days",
                  description: "PAN, TAN, Bank Account, and other registrations",
                },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{process.title}</h3>
                      <Badge variant="outline">{process.duration}</Badge>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Requirements for Private Limited Company</h2>
            <p className="text-xl text-gray-600">Essential requirements for incorporating a private limited company</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Registered Business Name",
                description: "Must end with 'Limited' or 'Ltd'. Cannot be identical to existing company names.",
                icon: <Users className="h-8 w-8 text-blue-600" />,
              },
              {
                title: "Registered Office",
                description: "Physical address in India for official correspondence and legal notices.",
                icon: <Globe className="h-8 w-8 text-green-600" />,
              },
              {
                title: "Shareholders",
                description: "Minimum 2, maximum 200 shareholders. Can include foreign investors.",
                icon: <Users className="h-8 w-8 text-orange-600" />,
              },
              {
                title: "Share Capital",
                description: "Minimum authorized capital of ₹1,00,000 divided into shares of fixed amounts.",
                icon: <Shield className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Directors",
                description: "Minimum 2 directors required. At least one must be resident in India.",
                icon: <Users className="h-8 w-8 text-red-600" />,
              },
              {
                title: "Statutory Auditor",
                description: "Qualified chartered accountant must be appointed as company auditor.",
                icon: <Clock className="h-8 w-8 text-indigo-600" />,
              },
            ].map((requirement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{requirement.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{requirement.title}</h3>
                  <p className="text-gray-600 text-sm">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Startup Solicitors?</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Expert Legal Team</h3>
                    <p className="text-gray-600 text-sm">
                      Experienced lawyers specializing in Indian corporate law and business formation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">500+ Companies Registered</h3>
                    <p className="text-gray-600 text-sm">
                      Proven track record of successful business incorporations across industries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pan-India Presence</h3>
                    <p className="text-gray-600 text-sm">
                      Offices in major cities with local expertise and government connections
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">End-to-End Support</h3>
                    <p className="text-gray-600 text-sm">
                      From incorporation to ongoing compliance - complete business support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Ready to Start?</h3>
              <p className="text-gray-700 mb-6">
                Get your business registered in India with our expert legal team. Free consultation available.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Transparent pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Fast processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Ongoing support</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Your Business Today</Button>
                <Button variant="outline" className="w-full">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Business in India?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ successful companies that trusted us with their business setup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Now
            </Button>
           
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidgets />
    </div>
  )
}
