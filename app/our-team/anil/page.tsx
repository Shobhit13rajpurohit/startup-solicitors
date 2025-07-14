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

export default function AnilKhannaPage() { // Changed component name to AnilKhannaPage
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
          <span className="text-gray-800">Anil Khanna</span> {/* Changed name */}
        </div>
      </nav>

      {/* Top Section */}
      <section className="bg-yellow-600 text-white py-6 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/anil.jpg"
                alt="Anil Khanna"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Anil Khanna</h1> {/* Changed name */}
              <p className="text-lg">Designated Partner</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-sm">
              <a
                href="tel:+919461620008" 
                className="hover:text-gray-200 transition-colors"
              >
                +91 9461620008
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:anil@startupsolicitors.com" 
                className="hover:text-gray-200 transition-colors"
              >
                anil@startupsolicitors.com
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
                Mr. Anil Khanna being a second generation lawyer having vast experience of 41 years in almost all the fields of law, willing to support the growing demand specially by the Forbes listed clients helped Mr. Nipun Khanna and Mr. Nilanshu Khanna establishing this firm exclusively for Company Setup, Corporate Compliance, Tax Advisory and other similar issues enabling the Foreigner abroad to setup their base in India.
              </p>
              <p>
                Since the Pandemic, it is also been seen that various international conglomerate companies have moved their base from China preferring India and making India their home for production.
              </p>
            </article>

            {/* Representative Matters */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Representative Matters
              </h2>
              <ul className="list-disc list-inside space-y-3">
                {/* No specific representative matters provided for Anil Khanna, so keeping Nipun's for now or remove if not applicable */}
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
            {/* If you have specific recommendations for Anil Khanna, replace the 'recommendations' array data at the top of the file */}
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

            {/* Engagement - No specific engagement provided for Anil Khanna, so removed for now */}
            {/* Authorship - No specific authorship provided for Anil Khanna, so removed for now */}
          </section>

          {/* Right Column */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Specialties */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Specialties
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Corporate Litigation</li> {/* Added new specialty */}
                <li>E-commerce and Online sales</li>
                <li>Cryptocurrency & Artificial Intelligence Licenses</li>
                <li>IT Companies.</li>
                <li>Taxation Litigation</li> {/* Added new specialty */}
                {/* Removed Cross-border company expansion, Corporate Compliance, EXIM - Jewellery & Stones */}
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Company Formation</li> {/* Changed from International Company Formation */}
                <li>Taxation Law</li>
                <li>Foreign Direct Investment</li>
                <li>External Commercial Borrowings</li>
                <li>GST Law</li>
                <li>IPR</li>
                <li>Tax Litigation</li>
                <li>Corporate Compliance</li>
                {/* Removed NRI Legal Services, Entity Management, Immigration */}
              </ul>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Professional Memberships
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Rajasthan Bar Association</li>
                {/* Removed Startupgrind Jaipur Chapter, IPR Attorneys Association, Jaipur Lawyers Club */}
              </ul>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Education
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>DAV Law College, University Of Garhwal, Srinagar</li> {/* Changed education */}
                <li>University Maharaja College, B.Sc, UoR</li> {/* Changed education */}
                {/* Removed University Law College, UoR, ABST UoR, Commerce College, B.Com(H), Institute of Chartered Accountants of India */}
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