import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Nominee Director Services in India: Why You Might Need One",
      excerpt:
        "Understanding the role of nominee directors in Indian companies and when foreign investors should consider this option for compliance and operational efficiency.",
      date: "June 25, 2025",
      author: "Legal Team",
      category: "Corporate Law",
      readTime: "5 min read",
      slug: "nominee-director-services",
    },
    {
      id: 2,
      title: "Essential Steps for Foreigners to Set Up a Company in India",
      excerpt:
        "A comprehensive guide covering legal requirements, documentation, and regulatory compliance for international entrepreneurs entering the Indian market.",
      date: "June 24, 2025",
      author: "Startup Team",
      category: "Business Formation",
      readTime: "8 min read",
      slug: "foreigners-company-setup",
    },
    {
      id: 3,
      title: "Navigating the Decentralized Frontier: A Legal Guide for Blockchain Startups",
      excerpt:
        "Legal considerations for blockchain and cryptocurrency businesses in India, including regulatory compliance and licensing requirements.",
      date: "June 23, 2025",
      author: "Tech Law Team",
      category: "Blockchain",
      readTime: "6 min read",
      slug: "blockchain-legal-guide",
    },
    {
      id: 4,
      title: "Unpacking Arbitration: Why It's a Game-Changer for Dispute Resolution in India",
      excerpt:
        "Exploring the benefits of arbitration over traditional litigation for business disputes, including cost-effectiveness and time efficiency.",
      date: "June 20, 2025",
      author: "Dispute Resolution Team",
      category: "Arbitration",
      readTime: "7 min read",
      slug: "arbitration-dispute-resolution",
    },
    {
      id: 5,
      title: "GST Compliance for Startups: A Complete Guide",
      excerpt:
        "Everything startups need to know about GST registration, filing returns, and maintaining compliance with Indian tax regulations.",
      date: "June 18, 2025",
      author: "Tax Team",
      category: "Taxation",
      readTime: "10 min read",
      slug: "gst-compliance-startups",
    },
    {
      id: 6,
      title: "Intellectual Property Protection for Tech Startups",
      excerpt:
        "Strategies for protecting your startup's intellectual property, including patents, trademarks, and trade secrets in the digital age.",
      date: "June 15, 2025",
      author: "IP Team",
      category: "Intellectual Property",
      readTime: "9 min read",
      slug: "ip-protection-tech-startups",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header activeTab="blogs" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Legal Insights & Updates</h1>
          <p className="text-lg sm:text-xl opacity-90">
            Stay informed with the latest legal developments, startup guidance, and business insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2 mb-8">
                <Link href="#" className="block text-blue-600 hover:bg-blue-50 px-3 py-2 rounded">
                  All Posts
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Corporate Law
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Business Formation
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Taxation
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Intellectual Property
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Blockchain
                </Link>
                <Link href="#" className="block text-gray-600 hover:bg-gray-50 px-3 py-2 rounded">
                  Immigration
                </Link>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-3">Need Legal Advice?</h4>
                <p className="text-sm text-gray-700 mb-4">Get expert legal guidance tailored to your business needs.</p>
                <Link href="/contact" className="text-blue-600 text-sm font-medium hover:underline">
                  Contact Our Team →
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-600 mb-2 sm:mb-0">
                        {post.category}
                      </Badge>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-1 sm:space-x-2">
                <button className="px-3 sm:px-4 py-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded">1</button>
                <button className="px-3 sm:px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">2</button>
                <button className="px-3 sm:px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">3</button>
                <button className="px-3 sm:px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
                  Next
                </button>
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
