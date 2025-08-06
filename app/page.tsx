import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, Globe, Shield, Clock, Star, TrendingUp, Award, Zap, Calculator, BookOpen, User, Quote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";
import YouTubeVideo from "@/components/YouTubeVideo";

export default function HomePage() {
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
      popular: true,
      gradient: "from-blue-500 to-blue-600"
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
      gradient: "from-purple-500 to-purple-600"
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
      gradient: "from-green-500 to-green-600"
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
      gradient: "from-orange-500 to-orange-600"
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
      gradient: "from-indigo-500 to-indigo-600"
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
      gradient: "from-teal-500 to-teal-600"
    },
  ]

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Company Registration",
      description: "Complete incorporation services for all business types",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Legal Compliance",
      description: "Ongoing compliance management and regulatory support",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Setup",
      description: "Specialized services for foreign companies entering India",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Track Service",
      description: "Expedited processing for urgent business requirements",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
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
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Project Office",
      description: "For executing specific projects in India",
      features: [
        "Temporary establishment",
        "Project-specific activities only",
        "General permission available",
        "Limited duration",
        "Subject to specified conditions",
      ],
      timeframe: "15-30 days",
      suitableFor: "Infrastructure Projects, Specific Contracts",
      gradient: "from-emerald-500 to-emerald-600"
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
      gradient: "from-rose-500 to-rose-600"
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
      gradient: "from-violet-500 to-violet-600"
    },
  ]

  const stats = [
    { icon: <Award className="h-6 w-6" />, number: "500+", label: "Companies Registered" },
    { icon: <Users className="h-6 w-6" />, number: "98%", label: "Client Satisfaction" },
    { icon: <Clock className="h-6 w-6" />, number: "15", label: "Days Average Setup" },
    { icon: <Globe className="h-6 w-6" />, number: "25+", label: "Cities Covered" },
  ]

  return (
    <>
      <Head>
        <title>Online Legal Support for Business in India | Startup Solicitors</title>
        <meta
          name="description"
          content="Comprehensive online legal support for startups and businesses in India. Expert services in business incorporation, taxation, IPR, and immigration."
        />
        <meta name="keywords" content="legal support, business incorporation, taxation, IPR, immigration, startups, India" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.startupsolicitors.com/" />
        <meta property="og:title" content="Online Legal Support for Business in India | Startup Solicitors" />
        <meta
          property="og:description"
          content="Expert legal services for startups and businesses in India, including incorporation, taxation, IPR, and immigration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.startupsolicitors.com/" />
        <meta property="og:image" content="https://www.startupsolicitors.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Startup Solicitors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Legal Support for Business in India | Startup Solicitors" />
        <meta
          name="twitter:description"
          content="Expert legal services for startups and businesses in India, including incorporation, taxation, IPR, and immigration."
        />
        <meta name="twitter:image" content="https://www.startupsolicitors.com/images/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Startup Solicitors",
            url: "https://www.startupsolicitors.com/",
            logo: "https://www.startupsolicitors.com/images/logo.png",
            description: "Online legal support for startups and businesses in India, specializing in business incorporation, taxation, IPR, and immigration services.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "immigration@startupsolicitors.com",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://twitter.com/startupsolicitors",
              "https://www.linkedin.com/company/startupsolicitors",
            ],
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Sidebar */}
            <aside className="lg:col-span-1">
              {/* Invest India Card - Enhanced */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-6 w-6" />
                      <h2 className="text-xl font-bold">Invest in India</h2>
                    </div>
                    <p className="text-sm mb-6 flex-grow text-blue-100">
                      Navigate the complexities of setting up a business in India with our expert legal guidance.
                    </p>
                    <div className="mb-6">
                      <Image
                        src="/magnet_img.png"
                        alt="Illustration of investment opportunities in India"
                        width={120}
                        height={80}
                        className="mx-auto drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    <Link href="/invest-india" passHref>
                      <Button
                        variant="outline"
                        className="w-full text-blue-600 bg-white hover:bg-blue-50 border-0 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        aria-label="Learn more about investing in India"
                      >
                        Explore Opportunities
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="mb-8 shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Our Success
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`inline-flex p-2 rounded-lg bg-blue-100 text-blue-600 mb-2`}>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <YouTubeVideo />

             
            </aside>

            {/* Enhanced Main Content Area */}
            <div className="lg:col-span-3">
              {/* Enhanced Hero Section */}
              <section aria-labelledby="hero-heading" className="mb-16">
                <div className="text-center mb-12">
                  <h1
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight"
                  >
                    Launch Your Business in India
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Expert legal support for company incorporation, compliance, and growth. 
                    Start your entrepreneurial journey with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      Start Your Company
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                      Free Consultation
                    </Button>
                  </div>
                </div>

                {/* Article Card and Cost Calculator Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Expert Article Card */}
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold">Expert Insight</Badge>
                      </div>
                      
                      <div className="mb-6">
                        <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
                        <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
                          "The major problem that multi-million dollar companies face while entering India is choosing the wrong shareholding structure and wrong business structure for company formation..."
                        </blockquote>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">Nipun Khanna</h4>
                          <p className="text-gray-600 text-sm">Company Formation Expert & Founder</p>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Company Formation Cost Calculator */}
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50 border-0 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full -mr-12 -mt-12 opacity-50"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                          <Calculator className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Cost Calculator</h3>
                      </div>

                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Get an instant estimate for your company formation costs based on your business requirements and structure.
                      </p>

                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-700 font-medium">Private Limited</span>
                          <span className="text-green-600 font-bold">₹10,000+</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-700 font-medium">LLP Formation</span>
                          <span className="text-green-600 font-bold">₹8,000+</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-700 font-medium">OPC Registration</span>
                          <span className="text-green-600 font-bold">₹9,000+</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                        Calculate Your Cost
                        <Calculator className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                
              </section>
            </div>
          </div>

          {/* Enhanced Services Overview */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl  shadow-inner">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-100 text-blue-700 px-4 py-2 text-sm">Our Expertise</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Comprehensive Business Setup Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  End-to-end legal and regulatory support for establishing and growing your business in India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="group text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Business Types */}
          <section className="py-10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-700 px-4 py-2 text-sm">Business Structures</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Choose Your Perfect Business Structure</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Select the ideal business structure based on your goals, investment plans, and growth strategy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessTypes.map((type, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden relative bg-white">
                    {type.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <div className={`h-2 bg-gradient-to-r ${type.gradient}`}></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">{type.title}</CardTitle>
                        <Badge variant="outline" className="font-semibold">{type.timeframe}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{type.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-xl">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Minimum Capital:</span>
                          <span className="text-sm font-semibold text-gray-800">{type.minCapital}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-500">Suitable For:</span>
                          <span className="text-sm font-semibold text-gray-800 text-right">{type.suitableFor}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Starting from</p>
                          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{type.cost}</p>
                        </div>
                        <Button className={`bg-gradient-to-r ${type.gradient} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0`}>
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

          {/* Enhanced Foreign Investor Options */}
          <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl mb-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 px-4 py-2 text-sm">International Business</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Foreign Investment Options</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Specialized business structures designed for foreign companies entering the Indian market
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {foreignInvestorOptions.map((option, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden bg-white">
                    <div className={`h-2 bg-gradient-to-r ${option.gradient}`}></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-gray-800 group-hover:text-indigo-600 transition-colors leading-tight">{option.title}</CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Processing Time</p>
                          <p className="text-lg font-bold text-gray-800">{option.timeframe}</p>
                        </div>
                        <Button className={`bg-gradient-to-r ${option.gradient} hover:scale-105 transition-all duration-300 shadow-lg text-white border-0`}>
                          <Globe className="h-4 w-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Incorporation Process */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 text-sm">Step-by-Step Process</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Complete Incorporation Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Transparent step-by-step process with clear timelines for company formation
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      step: 1,
                      title: "Obtain Director Identification Number (DIN)",
                      duration: "1 day",
                      description: "All proposed directors must obtain DIN from MCA",
                      icon: <Users className="h-6 w-6" />,
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      step: 2,
                      title: "Digital Signature Certificate (DSC)",
                      duration: "2 days",
                      description: "Required for all directors to sign documents electronically",
                      icon: <Shield className="h-6 w-6" />,
                      color: "from-green-500 to-green-600"
                    },
                    {
                      step: 3,
                      title: "Name Approval",
                      duration: "2 days",
                      description: "File proposed company name with Registrar of Companies",
                      icon: <CheckCircle className="h-6 w-6" />,
                      color: "from-orange-500 to-orange-600"
                    },
                    {
                      step: 4,
                      title: "Prepare Documents",
                      duration: "1 day",
                      description: "Draft Memorandum and Articles of Association",
                      icon: <Globe className="h-6 w-6" />,
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      step: 5,
                      title: "Pay Stamp Duties",
                      duration: "1 day",
                      description: "Online payment of applicable stamp duties",
                      icon: <Clock className="h-6 w-6" />,
                      color: "from-indigo-500 to-indigo-600"
                    },
                    {
                      step: 6,
                      title: "File Incorporation Forms",
                      duration: "2 days",
                      description: "Submit all documents online to ROC",
                      icon: <Zap className="h-6 w-6" />,
                      color: "from-teal-500 to-teal-600"
                    },
                    {
                      step: 7,
                      title: "Certificate of Incorporation",
                      duration: "2 days",
                      description: "Receive certificate from ROC",
                      icon: <Award className="h-6 w-6" />,
                      color: "from-rose-500 to-rose-600"
                    },
                    {
                      step: 8,
                      title: "Post-Incorporation Setup",
                      duration: "15 days",
                      description: "PAN, TAN, Bank Account, and other registrations",
                      icon: <TrendingUp className="h-6 w-6" />,
                      color: "from-cyan-500 to-cyan-600"
                    },
                  ].map((process, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-14 h-14 bg-gradient-to-r ${process.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            {process.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{process.title}</h3>
                              <Badge variant="outline" className="font-semibold bg-gray-50">{process.duration}</Badge>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-3">{process.description}</p>
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${process.color} text-white text-sm font-medium`}>
                              {process.icon}
                              Step {process.step}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Requirements Section */}
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl mb-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-red-100 text-red-700 px-4 py-2 text-sm">Essential Requirements</Badge>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Private Limited Company Requirements</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Essential requirements and documentation needed for incorporating a private limited company
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Registered Business Name",
                    description: "Must end with 'Limited' or 'Ltd'. Cannot be identical to existing company names.",
                    icon: <Users className="h-8 w-8" />,
                    color: "text-blue-600",
                    bgColor: "bg-blue-50",
                    borderColor: "border-blue-200"
                  },
                  {
                    title: "Registered Office",
                    description: "Physical address in India for official correspondence and legal notices.",
                    icon: <Globe className="h-8 w-8" />,
                    color: "text-green-600",
                    bgColor: "bg-green-50",
                    borderColor: "border-green-200"
                  },
                  {
                    title: "Shareholders",
                    description: "Minimum 2, maximum 200 shareholders. Can include foreign investors.",
                    icon: <Users className="h-8 w-8" />,
                    color: "text-orange-600",
                    bgColor: "bg-orange-50",
                    borderColor: "border-orange-200"
                  },
                  {
                    title: "Share Capital",
                    description: "Minimum authorized capital of ₹1,00,000 divided into shares of fixed amounts.",
                    icon: <Shield className="h-8 w-8" />,
                    color: "text-purple-600",
                    bgColor: "bg-purple-50",
                    borderColor: "border-purple-200"
                  },
                  {
                    title: "Directors",
                    description: "Minimum 2 directors required. At least one must be resident in India.",
                    icon: <Users className="h-8 w-8" />,
                    color: "text-red-600",
                    bgColor: "bg-red-50",
                    borderColor: "border-red-200"
                  },
                  {
                    title: "Statutory Auditor",
                    description: "Qualified chartered accountant must be appointed as company auditor.",
                    icon: <Clock className="h-8 w-8" />,
                    color: "text-indigo-600",
                    bgColor: "bg-indigo-50",
                    borderColor: "border-indigo-200"
                  },
                ].map((requirement, index) => (
                  <Card key={index} className={`group text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${requirement.borderColor} bg-white overflow-hidden`}>
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl ${requirement.bgColor} ${requirement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {requirement.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{requirement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Why Choose Us */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <Badge className="mb-4 bg-yellow-100 text-yellow-700 px-4 py-2 text-sm">Why Choose Us</Badge>
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Startup Solicitors?</h2>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Expert Legal Team</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Experienced lawyers specializing in Indian corporate law and business formation with 10+ years expertise
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">500+ Companies Registered</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Proven track record of successful business incorporations across industries with 98% client satisfaction
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Pan-India Presence</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Offices in 25+ major cities with local expertise and strong government connections
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">End-to-End Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                          From incorporation to ongoing compliance - complete business support with dedicated account managers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full -mr-20 -mt-20"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ready to Start?</h3>
                    </div>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      Get your business registered in India with our expert legal team. Free consultation available with transparent pricing.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700 font-medium">Free consultation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700 font-medium">Transparent pricing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700 font-medium">Fast processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700 font-medium">Ongoing support</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        Start Your Business Today
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                        Schedule Free Consultation
                        <Clock className="h-5 w-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <ChatWidgets />
      </div>
    </>
  );
}