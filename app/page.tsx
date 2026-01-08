"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Coffee,
  BookOpen,
  Clock,
  Zap,
  Shield,
  Crown,
  MessageCircle,
  Download,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Camera,
  Navigation,
} from "lucide-react";

// Config Data
const config = {
  libraryName: "READERS LIBRARY",
  location: "BGT, Raipur",
  address: "Behind Gandhi Talkies, Raipur, Chhattisgarh",
  phone: "+91 98765 43210",
  email: "contact@readerslibrary.com",
  whatsappNumber: "919876543210",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.0!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzA1LjAiTiA4McKwMzcnNDYuNiJF!5e0!3m2!1sen!2sin!4v1234567890",
  galleryImages: [
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
      title: "Study Hall",
      description: "Quiet & Focused Environment",
    },
    {
      url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&q=80",
      title: "Reading Zones",
      description: "Comfortable Seating Areas",
    },
    {
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      title: "Premium Books",
      description: "Extensive Collection",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      title: "Discussion Rooms",
      description: "Group Study Spaces",
    },
  ],
  features: [
    { icon: Wifi, text: "High-Speed WiFi" },
    { icon: Coffee, text: "24/7 Coffee Bar" },
    { icon: BookOpen, text: "Premium Books" },
    { icon: Clock, text: "Open 24 Hours" },
  ],
  pricingPlans: [
    {
      name: "Monthly",
      price: "₹999",
      duration: "/month",
      features: ["Full Access", "AC Study Rooms", "Free Coffee", "WiFi Access"],
      popular: false,
    },
    {
      name: "Quarterly",
      price: "₹2499",
      duration: "/3 months",
      features: [
        "All Monthly Benefits",
        "Priority Seating",
        "Free Locker",
        "Study Material",
      ],
      popular: true,
      savings: "Save ₹500",
    },
    {
      name: "Annual",
      price: "₹8999",
      duration: "/year",
      features: [
        "All Quarterly Benefits",
        "Personal Mentor",
        "Mock Tests",
        "Career Guidance",
      ],
      popular: false,
      savings: "Save ₹3000",
    },
  ],
};

// ID Card Generator Component
const IDCardGenerator = () => {
  const [name, setName] = useState("");
  const [exam, setExam] = useState("");
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  const handleGenerate = () => {
    if (name && exam) {
      setShowCard(true);
    }
  };

  const handleDownload = () => {
    alert(
      "Download feature: Integrate html2canvas library to export as image!"
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-bold text-white">
            Create Your Warrior ID
          </h3>
        </div>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <input
            type="text"
            placeholder="Target Exam (e.g., UPSC, NEET, JEE)"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all"
          />
          <button
            onClick={handleGenerate}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/50"
          >
            Generate ID Card
          </button>
        </div>

        {showCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            ref={cardRef}
            className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl border-2 border-cyan-400 shadow-2xl shadow-cyan-500/30"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-cyan-400 text-xs uppercase tracking-wider mb-1">
                  Study Warrior
                </p>
                <h4 className="text-2xl font-bold text-white">{name}</h4>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
              <p className="text-gray-400 text-sm mb-1">Target Mission</p>
              <p className="text-xl font-bold text-cyan-400">{exam}</p>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>ID: #{Math.floor(Math.random() * 10000)}</span>
              <span>{config.libraryName}</span>
            </div>

            <button
              onClick={handleDownload}
              className="w-full mt-4 py-2 bg-gray-800 hover:bg-gray-700 text-cyan-400 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Download ID Card
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// Main Page Component
const Home = () => {
  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">
                Premium Study Environment
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Silence that screams
              </span>
              <br />
              <span className="text-white">Success</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Where champions are forged. India's most intense study environment
              designed for serious aspirants.
            </p>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-cyan-500/50"
            >
              Claim Free Demo
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* ID Card Generator Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Join the</span> Elite Squad
            </h2>
            <p className="text-gray-400 text-lg">
              Create your personalized warrior ID and start your journey
            </p>
          </motion.div>
          <IDCardGenerator />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Elite</span> Facilities
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to dominate your exams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {config.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white">{feature.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-cyan-400" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-cyan-400">Inside</span> The Arena
              </h2>
            </div>
            <p className="text-gray-400 text-lg">
              Take a virtual tour of our premium facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {config.galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-gray-400 mb-4">
              Want to see more? Visit us for a personal tour!
            </p>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hi! I'd like to schedule a library visit`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-cyan-400 font-semibold rounded-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule a Visit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Choose Your</span> Battle Plan
            </h2>
            <p className="text-gray-400 text-lg">
              Flexible plans for every warrior's journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {config.pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-400 shadow-2xl shadow-cyan-500/30 scale-105"
                    : "bg-gray-800/50 border-gray-700 hover:border-cyan-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  {plan.savings && (
                    <span className="inline-block bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full mb-3">
                      {plan.savings}
                    </span>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-cyan-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Shield className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/50"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Visit</span> The Arena
            </h2>
            <p className="text-gray-400 text-lg">
              Your success journey starts here
            </p>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-cyan-500/30 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Find Us on Map</h3>
              </div>
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden border border-gray-700">
                <iframe
                  src={config.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    config.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 font-semibold rounded-lg transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold text-lg mb-1">
                    {config.libraryName}
                  </p>
                  <p className="text-gray-300">{config.address}</p>
                  <p className="text-gray-400 mt-2">📍 {config.location}</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 mb-3">
                    Easy to reach from:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      BGT
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      Raipur Station
                    </span>
                    <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      City Center
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Call Us</p>
                    <a
                      href={`tel:${config.phone}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      {config.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email Us</p>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      {config.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${config.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-cyan-400 font-semibold mb-2">
                    Opening Hours
                  </p>
                  <p className="text-gray-300">24/7 - Open All Days</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Your dedication never sleeps, neither do we
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-cyan-400 font-bold text-xl mb-2">
            {config.libraryName}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            {config.location} | Where Champions Are Made
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 Readers Library. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${config.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 transition-all duration-200 hover:scale-110 z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default Home;
