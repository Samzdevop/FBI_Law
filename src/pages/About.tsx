import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHandshake,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaBriefcase,
  FaUniversity,
} from "react-icons/fa";

import legacyImage from "../assets/images/justice.png";
import partner1 from "../assets/images/partner.jpeg";
import partner2 from "../assets/images/partner2.jpeg";
import partner3 from "../assets/images/lawyer2.jpeg";
// import partner3 from "../assets/images/visily-image (3).png"; 
import lagosImg from "../assets/images/lagos.jpg";
import calabarImg from "../assets/images/calabar.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { SiCultura } from "react-icons/si";

export default function About() {
  const values = [
    {
      icon: <FaBalanceScale />,
      title: "OUR MISSION",
      text: "Mission	To deliver clear, strategic and practical legal solutions that protect our clients’ interests and support their growth.",
    },
    {
      icon: <FaHandshake />,
      title: "OUR VISION",
      text: "To become a trusted legal partner for businesses, institutions and individuals in Nigeria and across Africa.",
    },
    {
      icon: <FaShieldAlt />,
      title: "OUR VALUES",
      text: "Professionalism, Integrity, Excellence, Accountability and Confidentiality.",
    },
    {
      icon: <SiCultura />,
      title: "OUR CULTURE",
      text: "We respond with urgency, think strategically, take ownership and deliver excellence.",
    },
  ];

  const locations = [
    {
      title: "Abuja (Headquarters)",
      image:
        "https://images.unsplash.com/photo-1542382257-80dedb725088",
      address: "Central Business District, Abuja",
    },
    {
      title: "Lagos",
      image: lagosImg,
      address: "Victoria Island, Lagos",
    },
    {
      title: "Calabar",
      image: calabarImg,
      address: "Marian Road, Calabar",
    },
  ];

  const stats = [
    {
      icon: <FaAward />,
      number: "500+",
      title: "Cases Won",
    },
    {
      icon: <FaUsers />,
      number: "150+",
      title: "Clients Served",
    },
    {
      icon: <FaBriefcase />,
      number: "20+",
      title: "Practice Areas",
    },
    {
      icon: <FaUniversity />,
      number: "10+",
      title: "Years Experience",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-[#F8F8FA] overflow-x-hidden">

      {/* HERO */}
      <section className="bg-[#050B2B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 text-xs rounded-full border border-blue-400 text-blue-300 mb-5"
          >
            ABOUT FBI LEGAL
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
            Rooted in Tradition.
            <br />
            Driven by Strategy.
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl">
            FBI Legal is a modern law firm committed to delivering strategic, practical and client-centered legal solutions. 
            We work with businesses, institutions, individuals and public-sector clients across a range of legal and commercial matters. 
            Our approach combines professionalism, responsiveness, strategic thinking and a deep commitment to excellence
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={()=>navigate('/contact')} 
              className="bg-[#2336D6] px-6 py-3 rounded-lg">
              Speak to a Lawyer
            </button>

            <button
              onClick={()=>navigate('/practice-areas')}  
              className="border border-white px-6 py-3 rounded-lg">
              Explore Practice Areas
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={legacyImage}
              alt=""
              className="rounded-xl"
            />
            {/* <div className="absolute -bottom-6 left-10 bg-[#2336D6] text-white p-5 rounded-lg">
              <h3 className="text-2xl font-bold">15+</h3>
              <p>Years Delivering Legal Excellence</p>
            </div> */}
          </div>
          <div>
            <span className="text-blue-600 text-sm font-semibold">
              OUR LEGACY
            </span>

            <h2 className="text-4xl font-bold mt-4 text-gray-900">
              A Legacy of Strategic Legal Excellence
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Since inception, FBI Legal has consistently delivered
              strategic legal guidance to corporations, institutions,
              entrepreneurs and individuals.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
                <h4 className="font-bold text-gray-900">TRUST</h4>
                <p className="text-gray-600 text-sm">
                  Built through long-term client relationships.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900">IMPACT</h4>
                <p className="text-gray-600 text-sm">
                  Delivering measurable legal outcomes.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CORE FOUNDATION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm">
            FOUNDATION
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Our Core Foundation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border"
            >
              <div className="text-[#2336D6] text-2xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-black font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* PARTNERSHIP SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <span className="text-blue-600 text-sm">
              CLIENT APPROACH
            </span>

            <h2 className="text-4xl font-bold mt-3 text-gray-900">
              A Partnership Approach to Legal Service
            </h2>

            <p className="mt-5 text-gray-600">
              We function as an extension of your team,
              delivering practical legal solutions that
              drive business growth.
            </p>

            <ul className="space-y-4 mt-8">

              <li className="text-black flex gap-3">
                <FaBalanceScale className="text-[#2336D6]" />
                Strategic legal guidance.
              </li>

              <li className="text-black flex gap-3">
                <FaUsers className="text-[#2336D6]" />
                Client-focused engagement.
              </li>

              <li className="text-black flex gap-3">
                <FaShieldAlt className="text-[#2336D6]" />
                Risk mitigation solutions.
              </li>

            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={partner1} className="rounded-xl h-full object-cover" />
            <img src={partner2} className="rounded-xl h-full object-cover" />
            <img src={partner3} className="rounded-xl h-full object-cover col-span-2" />
          </div>

        </div>
      </section>

      {/* LOCATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center mb-14">
          <span className="text-blue-600 text-sm">
            LOCATIONS
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Strategic Hubs Across Nigeria
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {locations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={item.image}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-black font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.address}
                </p>

                {/* <div className="flex items-center gap-2 mt-4 text-[#2336D6] text-sm">
                  <FaMapMarkerAlt />
                  View Location
                </div> */}
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-[#050B2B] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-14">
            A Recognized Authority In Law
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#2336D6] flex justify-center mb-4">
                  {stat.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {stat.number}
                </h3>

                <p className="text-gray-400 mt-2">
                  {stat.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      <section className="bg-[#2336D6] py-16 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to secure your strategic legal partner?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={()=>navigate('/contact')}
              className="bg-white text-[#2336D6] px-6 py-3 rounded-lg font-semibold">
              Schedule a Consultation
            </button>
            <button 
              onClick={()=>navigate('/team')}
              className="border border-white px-6 py-3 rounded-lg">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}