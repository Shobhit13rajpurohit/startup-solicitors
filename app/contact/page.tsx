"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] =useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3ff50d20-f9ef-4991-a9e8-331049d87d67", // Your Web3Forms API Key
          ...formData,
          subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmissionStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setFormErrors({});
      } else {
        console.error("Submission Error:", result);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Network Error:", error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (formErrors[id]) {
      setFormErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (formErrors.service) {
      setFormErrors((prev) => ({ ...prev, service: null }));
    }
  };

  const officeLocations = [
    {
      city: "Jaipur (Head Office)",
      address: "47 B, Shipra Path, SMS Colony, Mansarovar, Jaipur, Rajasthan 302020",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.529893475251!2d75.75590357521019!3d26.854438362621085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d134a41c99%3A0x2897ac1a0d33e70!2sShipra%20Path%2C%20Heera%20Nagar%2C%20Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1722869037803!5m2!1sen!2sin",
    },
    {
      city: "New Delhi",
      address: "9 AVA Apartments, Golflinks, New Delhi 110003",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.731763131065!2d77.22851897527636!3d28.607808385311027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e496350e95%3A0x8efa36c1780f2427!2sGolf%20Links%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1722869123281!5m2!1sen!2sin",
    },
    {
      city: "Mumbai",
      address: "52 Alpha Apartments, Nariman Point Mumbai, Maharashtra 400021",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.847525547535!2d72.82200337500397!3d18.93809295679549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e30a571717%3A0x749c06313b3a3254!2sNariman%20Point%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1722869158580!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header activeTab="contact" />

      {/* Hero Section */}
      <div
        className="relative text-white py-16 sm:py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487014679447-9f8336841d58?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3QlMjB1cyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Let's Connect</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl">
            Ready to navigate your business journey in India? Our expert legal team is here to guide you every step of
            the way.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`mt-1 ${formErrors.firstName ? "border-red-500" : ""}`}
                      disabled={isSubmitting}
                    />
                    {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`mt-1 ${formErrors.lastName ? "border-red-500" : ""}`}
                      disabled={isSubmitting}
                    />
                    {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.email ? "border-red-500" : ""}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-1" disabled={isSubmitting} />
                </div>

                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Select onValueChange={handleSelectChange} value={formData.service} disabled={isSubmitting}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="company-formation">Company Formation</SelectItem>
                      <SelectItem value="trademark">Trademark Registration</SelectItem>
                      <SelectItem value="gst">GST Registration</SelectItem>
                      <SelectItem value="immigration">Immigration Services</SelectItem>
                      <SelectItem value="compliance">Legal Compliance</SelectItem>
                      <SelectItem value="ip">Intellectual Property</SelectItem>
                      <SelectItem value="taxation">Taxation Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`mt-1 ${formErrors.message ? "border-red-500" : ""}`}
                    rows={5}
                    placeholder="Please describe your requirements in detail..."
                    disabled={isSubmitting}
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submissionStatus === 'success' && (
                    <p className="text-green-600 text-center font-semibold mt-4">
                      Thank you! Your message has been sent successfully.
                    </p>
                )}
                {submissionStatus === 'error' && (
                    <p className="text-red-600 text-center font-semibold mt-4">
                      Sorry, there was an error sending your message. Please try again later.
                    </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91-9461620002</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@startupsolicitors.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Our Offices</h3>
            <div className="space-y-6">
              {officeLocations.map((office, index) => (
                <Card key={index} className="shadow-md border-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-600">{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        {office.address.split(", ").map((line, i) => (
                          <p key={i} className="text-gray-700">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        title={`${office.city} Office Location`}
                        src={office.mapUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer and Chat Widget */}
      <Footer />
      <ChatWidgets />
    </div>
  );
}