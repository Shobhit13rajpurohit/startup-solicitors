"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Mail, X, Send, User, AtSign } from "lucide-react";

export default function ChatWidgets() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);
  const [showContactTooltip, setShowContactTooltip] = useState(false); // New state for contact tooltip

  // Ref for the contact form container to detect clicks outside
  const contactFormRef = useRef(null);

  // Constants for reusability and easier modification
  const WHATSAPP_NUMBER = "9461620002";
  const WHATSAPP_PREFILLED_MESSAGE = "Hello there!";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILLED_MESSAGE)}`;

  const handleChatClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  const handleContactClick = () => {
    setShowContactForm((prev) => !prev);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real application, you would send formData to your backend
      console.log("Form submitted:", formData);
      alert("Your message has been sent successfully!"); // User feedback

      // Reset form and close
      setFormData({ name: "", email: "", message: "" });
      setShowContactForm(false);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send your message. Please try again later."); // User feedback on error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Close form when clicking outside or pressing Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showContactForm &&
        contactFormRef.current &&
        !contactFormRef.current.contains(event.target) &&
        !event.target.closest('.contact-button-container') // Ensure clicking the contact button itself doesn't close it immediately
      ) {
        setShowContactForm(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowContactForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showContactForm]);

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="relative group"
          onMouseEnter={() => setShowWhatsAppTooltip(true)}
          onMouseLeave={() => setShowWhatsAppTooltip(false)}
        >
         

          {/* WhatsApp Button */}
          <button
            type="button" // Use type="button" for non-form submission buttons
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95 group-hover:from-green-600 group-hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
            onClick={handleChatClick}
            aria-label="Chat with us on WhatsApp"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.487z"/>
            </svg>

            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
          </button>
        </div>
      </div>

      {/* Contact Button */}
      <div className="fixed bottom-20 right-6 z-40 contact-button-container">
        <div
          className="relative group"
          onMouseEnter={() => setShowContactTooltip(true)} // Use new state
          onMouseLeave={() => setShowContactTooltip(false)} // Use new state
        >
          {/* Tooltip for Contact */}
          {showContactTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-200 opacity-100 translate-y-0 pointer-events-none">
              Send us a message
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}

          {/* Contact Button */}
          <button
            type="button"
            className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-3xl active:scale-95 group-hover:from-blue-700 group-hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 ${
              showContactForm ? 'from-blue-700 to-blue-800 scale-110' : ''
            }`}
            onClick={handleContactClick}
            aria-label={showContactForm ? "Close contact form" : "Open contact form"}
          >
            <Mail className="h-6 w-6" />

            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping"></div>
          </button>
        </div>

        {/* Contact Form Popup */}
        {showContactForm && (
          <div className="absolute bottom-full right-0 mb-1 w-80 contact-form-container" ref={contactFormRef}>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform transition-all duration-300 animate-in slide-in-from-bottom">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Get in Touch</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
                  aria-label="Close contact form"
                >
                  <X className="h-3 w-5" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="Your name"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="you@example.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
                    placeholder="Tell us how we can help you..."
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Backdrop for mobile and desktop when contact form is open */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-30" onClick={() => setShowContactForm(false)}></div>
      )}
    </>
  );
}