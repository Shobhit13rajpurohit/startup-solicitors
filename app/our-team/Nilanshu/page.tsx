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

export default function NilanshuKhannaPage() { // Changed component name to NilanshuKhannaPage
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
          <span className="text-gray-800">Nilanshu Khanna</span> {/* Changed name */}
        </div>
      </nav>

      {/* Top Section */}
      <section className="bg-yellow-600 text-white py-6 mb-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center flex-col md:flex-row gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/nilanshu.jpg" // Changed image source to nilanshu.jpg
                alt="Nilanshu Khanna"
                width={96}
                height={96}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Nilanshu Khanna</h1> {/* Changed name */}
              <p className="text-lg">Designated Partner</p>
            </div>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p className="text-sm">
              <a
                href="tel:+919461620006" // Changed phone number
                className="hover:text-gray-200 transition-colors"
              >
                +91 9461620006
              </a>
            </p>
            <p className="text-sm">
              <a
                href="mailto:nilanshu@startupsolicitors.com" // Changed email
                className="hover:text-gray-200 transition-colors"
              >
                nilanshu@startupsolicitors.com
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
                Mr. Nilanshu Khanna had been instrumental in advising IT enabled businesses to setup their offshore unit in India.
              </p>
            </article>

            {/* Representative Matters - Removed as no specific data provided */}

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
                <li>International Alimony settlement</li>
                <li>Domestic Divorce money planner</li>
                <li>Fund assessor</li> {/* Added this as a specialty from "Last Point" */}
              </ul>
            </div>

            {/* Areas of Expertise - Removed as no specific data provided */}

            {/* Professional Memberships */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Professional Memberships
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Member of Bar Jaipur Rajasthan</li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Education
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>LLB</li>
                <li>MLM</li>
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