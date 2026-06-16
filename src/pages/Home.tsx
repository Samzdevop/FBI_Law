import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBuilding,
  FaHandshake,
  FaGavel,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import heroImage from "../assets/images/heroimage.png";
import lawyerImage from "../assets/images/lawyer.png";

import industry1 from "../assets/images/visily-image (1).png";
import industry2 from "../assets/images/visily-image (2).png";
import industry3 from "../assets/images/visily-image (3).png";

import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function Home() {
  const practiceAreas = [
    {
      title: "Corporate & Commercial",
      icon: <FaBuilding />,
      description:
        "Strategic legal solutions for corporations and growing businesses.",
    },
    {
      title: "Litigation & Disputes",
      icon: <FaGavel />,
      description:
        "Protecting your interests through effective dispute resolution.",
    },
    {
      title: "Banking & Finance",
      icon: <FaHandshake />,
      description:
        "Advising institutions and clients on complex financial matters.",
    },
    {
      title: "Employment Law",
      icon: <FaBalanceScale />,
      description:
        "Practical solutions for employers and employees alike.",
    },
  ];

  const industries = [
    {
      title: "Manufacturing & Energy",
      image: industry1,
    },
    {
      title: "Global Aviation",
      image: industry2,
    },
    {
      title: "Building & Finance",
      image: industry3,
    },
  ];

  const blogs = [
    {
      title:
        "Navigating the New CAMA 2025 Regulations for Foreign Investors",
      image: blog1,
    },
    {
      title:
        "The Growing Role of AI in Commercial Transactions and Risk Analysis",
      image: blog2,
    },
    {
      title:
        "Demonstration Trends: Legal Requirements for Renewable Energy Projects",
      image: blog3,
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-hidden">
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Content - Centered with max-width for readability */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex bg-transparent text-[#d9b25f] border border-[#d9b25f] rounded-full px-4 py-2 text-xs uppercase font-semibold">
              Trusted Legal Excellence
            </span>

            <h2 className="mt-6 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Strategic Legal
              <br />
              Solutions for
              <br />
              Businesses,
              <br />
              Institutions and
              <br />
              Individuals
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl text-base sm:text-lg">
              We provide proactive legal guidance designed to simplify
              challenges and drive outcomes across corporate,
              institutional and private matters.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button 
                onClick={()=>navigate('/contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-200">
                Schedule Consultation
              </button>

              <button
                onClick={()=>navigate('/about')} 
                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="-mt-14 relative z-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">03</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Practice Areas</p>
            </div>

            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">15+</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Years Experience</p>
            </div>

            <div className="p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">45+</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Legal Experts</p>
            </div>

            <div className="p-6 sm:p-8 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">12</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black">
                Our Practice Areas
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">
                Specialized legal services tailored to your business.
              </p>
            </div>

            <button 
              onClick={()=> navigate('/practice-areas')}
              className="text-black border px-5 py-3 rounded-md h-fit hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              View All →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-700 text-3xl sm:text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-black font-bold mt-5 text-lg sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  {item.description}
                </p>
                <button className="mt-5 text-blue-700 flex items-center gap-2 hover:gap-3 transition-all duration-200 text-sm sm:text-base">
                  Learn More
                  <FaArrowRight className="text-xs sm:text-sm" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-black text-3xl sm:text-4xl font-bold">
              Strategic Industry Focus
            </h2>
            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Delivering tailored legal strategies across industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <h3 className="absolute bottom-6 left-6 text-white text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/industries')} 
              className="text-blue-700 font-semibold hover:underline">
              Browse All Industries →
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Responsive */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={lawyerImage}
                alt=""
                className="rounded-xl w-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-black text-3xl sm:text-4xl font-bold">
                Why Global Firms Trust
                <br className="hidden sm:block" /> FBI Legal
              </h2>
              <p className="mt-6 text-gray-600 text-sm sm:text-base">
                Delivering practical and commercially sound legal
                solutions across industries.
              </p>

              <div className="space-y-4 sm:space-y-5 mt-8">
                <div className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-black">Strategic Commercial Litigation</span>
                </div>
                <div className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-black">Global Expertise & Local Experience</span>
                </div>
                <div className="flex gap-3 items-start">
                  <FaCheckCircle className="text-blue-700 mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-black">Dedicated Partner-Led Teams</span>
                </div>
              </div>

              <button 
                onClick={()=> navigate('/about')}
                className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-200 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 sm:py-2 lg:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 sm:mb-12">
            <h2 className="text-black text-3xl sm:text-4xl font-bold">
              Legal Insights & Updates
            </h2>
            <button 
              onClick={()=>navigate('/blogs')}
              className="text-black border px-5 py-3 rounded-md hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base">
              View All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((item, index) => (
              <article
                key={index}
                className="relative rounded-2xl overflow-hidden h-[420px] group"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-600">
                    Blogs
                  </span>
                  <h3 className="mt-4 font-semibold text-base sm:text-lg leading-tight">
                    {item.title}
                  </h3>
                  <button className="mt-5 text-blue-700 hover:underline text-sm sm:text-base">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="bg-[#07103A] py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 text-center lg:text-left">
            <div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl">
                Ready to discuss your legal
                <br className="hidden sm:block" />
                requirements with our experts?
              </h2>
              <p className="text-gray-300 mt-5 text-sm sm:text-base">
                Get strategic legal advice from experienced professionals.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={()=>navigate('/contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-200 text-sm sm:text-base">
                Speak To Lawyer
              </button>
              <button 
                onClick={()=>navigate('/contact')}
                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}