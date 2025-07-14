"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";

const recommendations = [
  {
    id: 1,
    text: "Excellent service by Nipun and team. We are really happy with their dedication and support which they have provided us till now. Best service provider for the business registration, legal and accounting support.",
    author: "Quicklips Welltech Pvt Ltd",
  },
  {
    id: 2,
    text: "Nipun's insights into cross-border company expansion were invaluable. Highly recommend for international ventures.",
    author: "Global Tech Startup",
  },
  {
    id: 3,
    text: "A true expert in corporate and taxation law. Nipun helped us navigate complex regulations with ease.",
    author: "E-commerce Founder",
  },
];

export default function NipunKhannaPage() {
  const [currentRecommendationIndex, setCurrentRecommendationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecommendationIndex(
        (prevIndex) => (prevIndex + 1) % recommendations.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevRecommendation = () => {
    setCurrentRecommendationIndex(
      (prevIndex) =>
        (prevIndex - 1 + recommendations.length) % recommendations.length
    );
  };

  const handleNextRecommendation = () => {
    setCurrentRecommendationIndex(
      (prevIndex) => (prevIndex + 1) % recommendations.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
      {/* Header */}
      <Header activeTab="about" />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4 pt-8" aria-label="Breadcrumb">
        <div className="text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">»</span>
          <Link href="/our-team" className="hover:text-blue-600 transition-colors">
            Our Team
          </Link>
          <span className="mx-2">»</span>
          <span className="text-gray-800">Nipun Khanna</span>
        </div>
      </nav>

      {/* Top Section */}
      <section className="bg-yellow-600 text-white py-6 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
          <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/nipun.jpg"
                alt="Nipun Khanna"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Nipun Khanna</h1>
              <p className="text-lg">Designated Partner</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-sm">
              <a
                href="tel:+919461620002"
                className="hover:text-gray-200 transition-colors"
              >
                +91 9461620002
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:nipun@startupsolicitors.com"
                className="hover:text-gray-200 transition-colors"
              >
                nipun@startupsolicitors.com
              </a>
            </p>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <section className="lg:col-span-2 text-gray-700 space-y-8">
            <article className="space-y-4">
              <p>
                Mr. Nipun Khanna, co-founder of this law firm, is a
                third-generation lawyer specializing in Commercial Corporate Law,
                Taxation, and IPR Practice. His expertise lies in assisting
                international clients with business setup in India and abroad,
                particularly in Information Technology, e-commerce, jewelry, and
                immigration.
              </p>
              <p>
                With extensive knowledge, Nipun counsels major technology
                multinationals on legal, financial, and technological challenges.
                As an experienced contracts negotiator, he guides clients through
                complex technology projects and global outsourcing arrangements.
              </p>
              <p>
                A recognized thought leader, Nipun is a frequent conference speaker
                and provides expert commentary for leading media. He also coaches
                organizations on negotiating IT and software contracts.
              </p>
            </article>

            {/* Representative Matters */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Representative Matters
              </h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  Represented a Forbes-listed client in a multi-million dollar ECB
                  deal in the healthcare sector.
                </li>
                <li>Represented Apple Europe as an auditor for Apple India.</li>
                <li>
                  Advised technology companies on resolving disputes among core IT
                  personnel.
                </li>
                <li>Assisted clients with export and import issues.</li>
                <li>Helped IT companies establish offshore units in India.</li>
              </ul>
            </section>

            {/* Recommendations */}
            <section aria-label="Client Recommendations">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Recommendations
              </h2>
              <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-opacity duration-500">
                <p className="text-gray-700 italic mb-3 text-lg">
                  "{recommendations[currentRecommendationIndex].text}"
                </p>
                <p className="text-right text-sm text-gray-600 font-semibold">
                  - {recommendations[currentRecommendationIndex].author}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrevRecommendation}
                    className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Previous recommendation"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={handleNextRecommendation}
                    className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Next recommendation"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </section>

            {/* Engagement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Engagement
              </h2>
              <p className="text-gray-700">
                Speaker at StartupGrind Jaipur events
              </p>
            </section>

            {/* Authorship */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Authorship
              </h2>
              <p className="text-gray-700">
                Contributor to articles on technology law and corporate compliance
              </p>
            </section>
          </section>

          {/* Right Column */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Specialties */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Specialties
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cross-border company expansion</li>
                <li>Corporate Compliance</li>
                <li>E-commerce and Online Sales</li>
                <li>Cryptocurrency & AI Licenses</li>
                <li>IT Companies</li>
                <li>EXIM - Jewellery & Stones</li>
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>International Company Formation</li>
                <li>Tax Law</li>
                <li>Foreign Direct Investment</li>
                <li>External Commercial Borrowings</li>
                <li>Taxation Law</li>
                <li>GST Law</li>
                <li>IPR</li>
                <li>Tax Litigation</li>
                <li>Corporate Compliance</li>
                <li>NRI Legal Services</li>
                <li>Entity Management</li>
                <li>Immigration</li>
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Professional Memberships
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Rajasthan Bar Association</li>
                <li>Startupgrind Jaipur Chapter</li>
                <li>IPR Attorneys Association</li>
                <li>Jaipur Lawyers Club</li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Education
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>University Law College, UoR</li>
                <li>ABST UoR</li>
                <li>Commerce College, B.Com(H)</li>
                <li>Institute of Chartered Accountants of India</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <ChatWidgets />
    </div>
  );
}