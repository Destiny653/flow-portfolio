 'use client';
import React, { useState } from 'react';
import { Send, Loader2, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  // ... [Previous state management code remains the same]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5000/contacts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Map */}
      <div className="relative h-[500px]">
        {/* Map Background */}
        <div className="absolute inset-0">
          <iframe 
            title="location"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.1234567890123!2d10.15167!3d5.96139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d1234567890!2sBamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/75" />

        {/* Content */}
        <div className="relative flex items-center h-full">
          <div className="mx-auto px-6 container">
            <div className="max-w-3xl">
              <div className="inline-block bg-white/10 backdrop-blur-sm mb-4 px-4 py-2 rounded-full font-medium text-white text-sm">
                GET IN TOUCH
              </div>
              <h1 className="mb-6 font-bold text-white text-5xl">
                Let's Start a Conversation
              </h1>
              <p className="text-gray-200 text-xl">
                Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="right-0 bottom-0 left-0 absolute">
          <svg
            className="fill-current w-full h-24 text-gray-100"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C 20 0 50 0 100 100 Z" />
          </svg>
        </div>
      </div>

      {/* Contact Section */}
      <div className="z-10 relative mx-auto -mt-20 px-6 py-16 container">
        <div className="gap-12 grid grid-cols-1 lg:grid-cols-3">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-xl p-10 rounded-lg">
              <h2 className="mb-8 font-semibold text-gray-900 text-3xl">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="mt-1 w-8 h-8 text-gray-900" />
                  <div className="ml-6">
                    <h3 className="font-semibold text-gray-900 text-xl">Our Location</h3>
                    <p className="mt-2 text-gray-600">Akwa Palace</p>
                    <p className="text-gray-600">Douala Cameroon</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mt-1 w-8 h-8 text-gray-900" />
                  <div className="ml-6">
                    <h3 className="font-semibold text-gray-900 text-xl">Call Us</h3>
                    <p className="mt-2 text-gray-600">+237 (530) 041-355</p>
                    <p className="text-gray-500">24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mt-1 w-8 h-8 text-gray-900" />
                  <div className="ml-6">
                    <h3 className="font-semibold text-gray-900 text-xl">Email Us</h3>
                    <p className="mt-2 text-gray-600">fokundem53@gmail.com</p>
                    <p className="text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white shadow-xl p-10 rounded-lg">
              <div className="gap-x-8 gap-y-6 grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                  <label className="block mb-2 font-medium text-gray-900 text-lg">
                    Full Name
                    {errors.name && (
                      <span className="ml-2 text-red-600 text-base">({errors.name})</span>
                    )}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-gray-900 w-full text-lg transition duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block mb-2 font-medium text-gray-900 text-lg">
                    Phone Number
                    {errors.phone && (
                      <span className="ml-2 text-red-600 text-base">({errors.phone})</span>
                    )}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-gray-900 w-full text-lg transition duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 font-medium text-gray-900 text-lg">
                    Email Address
                    {errors.email && (
                      <span className="ml-2 text-red-600 text-base">({errors.email})</span>
                    )}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-gray-900 w-full text-lg transition duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 font-medium text-gray-900 text-lg">
                    Subject
                    {errors.subject && (
                      <span className="ml-2 text-red-600 text-base">({errors.subject})</span>
                    )}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-gray-900 w-full text-lg transition duration-200"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 font-medium text-gray-900 text-lg">
                    Message
                    {errors.message && (
                      <span className="ml-2 text-red-600 text-base">({errors.message})</span>
                    )}
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-gray-900 w-full text-lg transition duration-200"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center px-8 py-4 text-lg font-medium text-white 
                    rounded-lg transition duration-200 ${
                      isSuccess
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-blue-900 hover:bg-blue-800'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-3 w-6 h-6 animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-3 w-6 h-6" />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}