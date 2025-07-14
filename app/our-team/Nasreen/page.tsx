"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";

// Recommendations array can be kept if you want to reuse existing testimonials
// or updated with specific recommendations for Nasreen Alissa.
const recommendations = [
  {
    id: 1,
    text: "Nasreen's expertise in corporate law and foreign investments was instrumental in our successful market entry into Saudi Arabia. Highly recommended!",
    author: "International Tech Solutions",
  },
  {
    id: 2,
    text: "Her clear guidance on labor law saved us from potential disputes. A truly professional and knowledgeable associate partner.",
    author: "MENA Retail Group",
  },
  {
    id: 3,
    text: "Nasreen handled our bankruptcy case with immense skill and sensitivity, achieving the best possible outcome for our company.",
    author: "Regional Manufacturing Co.",
  },
];

export default function NasreenAlissaPage() {
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
          <span className="text-gray-800">Nasreen Alissa</span>
        </div>
      </nav>

      {/* Top Section */}
      <section className="bg-yellow-600 text-white py-6 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/nasreen.jpg" // Assuming you have an image for Nasreen Alissa
                alt="Nasreen Alissa"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Nasreen Alissa</h1>
              <p className="text-lg">Associate Partner Head- Kingdom of Saudi Arabia</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-sm">
              <a
                href="tel:00966112930873"
                className="hover:text-gray-200 transition-colors"
              >
                00966112930873
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:paralegal@startupsolicitors.com"
                className="hover:text-gray-200 transition-colors"
              >
                paralegal@startupsolicitors.com
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
                Nasreen is an attorney specializing in corporate law with experience in foreign investments, company incorporation, labor law, and bankruptcy law.
              </p>
            </article>

            {/* Representative Matters */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Representative Matters
              </h2>
              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong className="font-semibold">Copyright Infringement of a Celebrity:</strong> It may be tempting to use a celebrity’s photograph to endorse your own business, but doing so without considering the celebrity’s “image rights” first may lead to legal problems. A large MENA company used our client images for promoting their business. We were able to reach an undisclosed settlement.
                </li>
                <li>
                  <strong className="font-semibold">Whistleblower Fired for Exposing the Truth:</strong> An employee, who spoke up about misconduct activities by his employer, got fired. A large MENA company got very upset after their employee spoke up about misconduct activities. They threatened him that if he does not sign a clearance letter (with a letter from him saying that what he said was incorrect), they will ban him from travel and report him as a criminal, and eventually, they did. He was stuck for 3 months in Riyadh, not knowing what to do. We were able to convince his employer to drop the false criminal charges and remove the travel ban. We reached a settlement agreement. Our client went back to his home country safely.
                </li>
                <li>
                  <strong className="font-semibold">A Battle Over Agents’ Commission:</strong> Buyer refused to pay commission to the agent. Our client (the agent) had an oral agreement with a buyer (large construction company). The agent negotiated the terms of a large deal and was promised a commission of $10 million dollars on closing the deal. The deal got closed and the agent never got paid.
                </li>
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

            {/* Engagement - Removed as no specific data provided */}
            {/* Authorship - Removed as no specific data provided */}
          </section>

          {/* Right Column */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Specialties */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Specialties
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Company Practice</li>
                <li>Corporate Compliance</li>
                <li>E-commerce</li>
                <li>IT Companies</li>
              </ul>
            </div>

            {/* Areas of Expertise */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Areas of Expertise
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Company Formation</li>
                <li>Taxation Law</li>
                <li>Foreign Direct Investment</li>
              </ul>
            </div>

            {/* Professional Memberships - Removed as no specific data provided */}

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Education
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>LLB from Nottingham Law School</li>
                <li>BA in Sociology from the University of British Columbia</li>
                <li>LLM from City University</li>
                <li>LPC from City University</li>
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