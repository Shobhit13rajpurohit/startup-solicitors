"use client"
import Link from "next/link";
import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";
import { motion } from "framer-motion"; // Import motion

export default function OurTeamPage() {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const teamMembers = {
    partners: [
      {
        name: "Anil Khanna",
        title: "Designated Partner",
        image: "/anil.jpg",
        link: "/our-team/anil",
      },
      {
        name: "Nilanshu Khanna",
        title: "Designated Partner",
        image: "/nilanshu.jpg",
        link: "/our-team/Nilanshu",
      },
      {
        name: "Nipun Khanna",
        title: "Designated Partner",
        image: "/nipun.jpg",
        link: "/our-team/nipun-khanna",
      },
    ],
    internationalAssociates: [
      {
        name: "Nasreen Alissa",
        title: "Associate Partner Head - Kingdom of Saudi Arabia",
        image: "/nasreen.png",
        link: "/our-team/Nasreen",
      },
    ],
    associates: [
      {
        name: "Rahul Saini",
        title: "Associates",
        image: "/rahul.jpg",
        link: "/our-team/rahul",
      },
    ],
    advisors: [
      {
        name: "Anshu Khanna",
        title: "Advisor",
        image: "/anshu.jpg",
        link: "/our-team/anshu",
      },
    ],
  };

  const renderTeamSection = (title, members) => (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6" // Adjust grid columns as needed
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animate when element is in view
        viewport={{ once: true, amount: 0.3 }} // Only animate once and when 30% in view
      >
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="text-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover border-4 border-blue-300"
            />
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{member.title}</p>
            <Link
              href={member.link}
              className="text-blue-600 hover:underline font-medium"
            >
              View Profile
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

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
          <span>Our Team</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">OUR TEAM</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {renderTeamSection("PARTNERS", teamMembers.partners)}
          {renderTeamSection(
            "INTERNATIONAL ASSOCIATES",
            teamMembers.internationalAssociates
          )}
          {renderTeamSection("ASSOCIATES", teamMembers.associates)}
          {renderTeamSection("ADVISORS", teamMembers.advisors)}
        </div>
      </main>

      <Footer />
      <ChatWidgets />
    </div>
  );
}