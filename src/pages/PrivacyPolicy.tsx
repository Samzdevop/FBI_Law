import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Users, Mail, Globe, CheckCircle2 } from "lucide-react";
import Footer from "../components/footer/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="text-[#d9b25f]" size={24} />,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Professional information (Company name, job title, business address)",
        "Legal matter details you share with us",
        "Communication records and correspondence",
        "Website usage data and analytics",
        "Cookies and similar tracking technologies",
      ],
    },
    {
      icon: <Lock className="text-[#d9b25f]" size={24} />,
      title: "How We Use Your Information",
      content: [
        "To provide legal services and represent your interests",
        "To communicate with you about your legal matters",
        "To comply with legal and regulatory obligations",
        "To improve our services and client experience",
        "To send you legal updates, newsletters, and firm announcements",
        "To manage client relationships and billing",
      ],
    },
    {
      icon: <Eye className="text-[#d9b25f]" size={24} />,
      title: "Information Sharing & Disclosure",
      content: [
        "We do not sell or rent your personal information to third parties",
        "We may share information with service providers who assist us",
        "Information may be disclosed when required by law or legal process",
        "We may share information with our affiliates and subsidiaries",
        "Information is shared only to the extent necessary to provide services",
      ],
    },
    {
      icon: <FileText className="text-[#d9b25f]" size={24} />,
      title: "Data Security & Retention",
      content: [
        "We implement appropriate technical and organizational security measures",
        "Data is retained only as long as necessary for legal and business purposes",
        "Client information is protected by attorney-client privilege",
        "Regular security assessments and audits are conducted",
        "Access to personal data is restricted to authorized personnel only",
      ],
    },
    {
      icon: <Users className="text-[#d9b25f]" size={24} />,
      title: "Your Rights",
      content: [
        "Right to access your personal information",
        "Right to rectify inaccurate or incomplete data",
        "Right to request deletion of your data (subject to legal obligations)",
        "Right to restrict or object to certain processing",
        "Right to data portability where applicable",
        "Right to withdraw consent at any time",
      ],
    },
    {
      icon: <Mail className="text-[#d9b25f]" size={24} />,
      title: "Contact Information",
      content: [
        "Data Protection Officer: FBI Legal Privacy Team",
        "Email: privacy@fbilegal.com",
        "Phone: +234 801 234 5678",
        "Address: Central Business District, Abuja, Nigeria",
        "For any privacy-related inquiries, please contact our Data Protection Officer",
        "You also have the right to lodge a complaint with the relevant data protection authority",
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[350px] flex items-center overflow-hidden bg-[#050B2B]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B2B] via-[#0a1a4a] to-[#050B2B]" />
          <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-grid.png')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex bg-[#d9b25f] text-black text-xs px-4 py-1.5 rounded-sm font-semibold uppercase tracking-wider">
              Privacy & Legal
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-4 text-gray-300 max-w-2xl text-base md:text-lg">
              FBI Legal is committed to protecting your privacy and handling your personal information with transparency, security, and respect.
            </p>

            <div className="mt-6 text-sm text-gray-400">
              <span>Last Updated: </span>
              <span className="text-gray-300">June 2026</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button 
                onClick={() => window.scrollTo({ top: document.getElementById('privacy-content')?.offsetTop || 0, behavior: 'smooth' })}
                className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-6 py-2.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Read Our Policy
              </button>

              <Link 
                to="/contact"
                className="border border-white/30 text-white px-6 py-2.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Contact Privacy Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-[#d9b25f]" size={20} />
            <span className="text-sm font-semibold text-[#d9b25f] uppercase tracking-wider">Introduction</span>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At FBI Legal, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, engage our services, or interact with us. We comply with the Nigeria Data Protection Regulation (NDPR) and other applicable data protection laws.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section id="privacy-content" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#d9b25f]/10 rounded-lg p-2.5">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 size={14} className="text-[#d9b25f] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
              Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device that help us understand how you interact with our site.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              You can control cookie preferences through your browser settings. However, disabling certain cookies may affect the functionality of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our services are not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us so we can promptly remove the information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#050B2B] py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            If you have any questions or concerns about our privacy practices, please don't hesitate to reach out to our privacy team.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              to="/contact"
              className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Contact Our Privacy Team
            </Link>
            <Link 
              to="/"
              className="border border-white/30 text-white px-8 py-3.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}