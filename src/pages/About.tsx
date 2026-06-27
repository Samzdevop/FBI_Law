import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaBalanceScale,
  FaHandshake,
  FaAward,
  FaUsers,
  FaBriefcase,
  FaUniversity,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
// import legacyImage from "../assets/images/justice.png";
// import partner1 from "../assets/images/partner.jpeg";
// import partner2 from "../assets/images/partner2.jpeg";
// import partner3 from "../assets/images/lawyer2.jpeg";
import lagosImg from "../assets/images/lagos.jpg";
import calabarImg from "../assets/images/calabar.jpg";
import { partners } from "../utility/partners";

// // Partners data
// const partners = [
//   {
//     name: "F. Baba Isa",
//     role: "Doctoral Scholar | LLM | MBA | FIMC | CMC | Author | Conference Speaker | Managing Partner at FBI Legal | Leading Legal Innovations.",
//     image: partner3,
//     bio: "F. Baba Isa is the Founder and Managing Partner of FBI Legal, with extensive experience in litigation, public interest law, and legal advisory. He holds an LL.M and LL.B from the University of Jos, an MBA from Nexford University, USA, and is a Certified Management Consultant. Known for his strong litigation practice and thought leadership, he is also recognized for leveraging digital platforms for legal education and client engagement.",
//   },
//   {
//     name: "Confidence Mbang, Esq.",
//     role: "Dispute Resolution Lawyer",
//     image: partner2,
//     bio: "Confidence Mbang, Esq. is a dispute resolution lawyer with strong interests in constitutional law, digital law, legal research, and public-interest advocacy. He holds an LL.M with Distinction in ICT Law from Nile University of Nigeria, Abuja, and is a member of the Citizens' Liberties Committee of the Nigerian Bar Association and the Pro Bono Committee of the Young Lawyers Forum. He is also an awardee of the Centre for Socio-Legal Studies and founder of MoreLaw, a legal advisory platform.",
//   },
//   {
//     name: "Odumegwu Amarachukwu Matthew, Esq",
//     role: "Legal Practitioner",
//     image: partner1,
//     bio: "Odumegwu Amarachukwu Matthew, Esq. is a legal practitioner with a broad general law practice covering civil, criminal, corporate, and administrative matters. He provides practical, client-focused legal solutions to individuals, businesses, and organizations, helping clients navigate legal and regulatory issues with confidence. At FBI Legal, he contributes to litigation support, general legal advisory, corporate and administrative matters, and dispute resolution with professionalism and discipline.",
//   },
// ];

export default function About() {
  const navigate = useNavigate();
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: valuesRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const coreValues = [
    {
      title: "Integrity",
      side: "right",
      description: "We uphold the highest ethical standards in all our engagement, ensuring transparency, honesty, confidentiality, and trust in every client relationship and legal matter we handle.",
    },
    {
      title: "Excellence",
      side: "left",
      description: "We are committed to delivering exceptional legal services through meticulous preparation, continuous learning, and a relentless pursuit of the best outcomes for our clients.",
    },
    {
      title: "Timeliness & Responsiveness",
      side: "right",
      description: "We prioritize prompt communication and efficient service delivery, ensuring that clients recieve timely updates and solutions.",
    },
    {
      title: "Innovation",
      side: "left",
      description: "We embrace modern legal technology and forward-thinking approaches to improve efficiency, enhance service delivery, and stay ahead in a rapidly evolving legal landscape.",
    },
    {
      title: "Client-Centredness",
      side: "right",
      description: "We place our clients at the core of everything we do, providing clear, practical and tailored solutions that align with their goal and realities.",
    },
  ];

  const locations = [
    {
      title: "Abuja (Headquarters)",
      image: "https://images.unsplash.com/photo-1542382257-80dedb725088",
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
      number: "300+",
      title: "Cases Handled",
    },
    {
      icon: <FaUsers />,
      number: "300+",
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

  return (
    <div className="bg-[#F8F8FA] overflow-x-hidden">
      {/* HERO */}
      <section className="bg-[#050B2B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 text-xs rounded-full border border-[#d9b25f]/30 text-[#d9b25f] mb-5"
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
            Our approach combines professionalism, responsiveness, strategic thinking and a deep commitment to excellence.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={() => navigate('/contact')} 
              className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-6 py-3 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Speak to a Lawyer
            </button>

            <button
              onClick={() => navigate('/practice-areas')}  
              className="border border-white text-white px-6 py-3 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Explore Practice Areas
            </button>
          </div>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
              className="rounded-xl w-full"
            />
          </div>
          <div>
            <span className="text-[#d9b25f] text-sm font-semibold uppercase tracking-wider">
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

      {/* CORE FOUNDATION - Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#d9b25f] text-sm uppercase tracking-wider font-semibold">
            FOUNDATION
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Our Core Foundation
          </h2>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-[#d9b25f] text-3xl mb-5">
              <FaBalanceScale />
            </div>
            <h3 className="text-black font-bold text-2xl mb-4">OUR MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver exceptional legal solutions through strategic advocacy, commecial intelligence, technology-driven systems, an unwavering commitment to client success.
            </p>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-[#d9b25f] text-3xl mb-5">
              <FaHandshake />
            </div>
            <h3 className="text-black font-bold text-2xl mb-4">OUR VISION</h3>
            <p className="text-gray-600 leading-relaxed">
             To become Africa's benchmark for modern excellence in legal practice.
            </p>
          </div>
        </div>
        {/* Core Values with Timeline */}
        <div ref={valuesRef} className="mt-20 relative">
          <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">
            OUR CORE VALUES
          </h3>

          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          
          {/* Animated Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#d9b25f]"
            style={{
              height: lineHeight,
            }}
          />

          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                value.side === "right" ? "justify-start" : "justify-end"
              }`}
            >
              {/* Content */}
              <div className={`w-[42%] ${value.side === "right" ? "text-right pr-2" : "text-left pl-2"}`}>
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-1.5">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Dot on the line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#d9b25f] border-3 border-white shadow-md z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="text-center mb-14">
          <span className="text-[#d9b25f] text-sm uppercase tracking-wider font-semibold">
            OUR TEAM
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A dedicated team of legal professionals committed to delivering excellence in every engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-94 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-[#d9b25f] text-sm font-medium mt-1">
                  {partner.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {partner.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="text-[#d9b25f] text-sm uppercase tracking-wider font-semibold">
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
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={item.image}
                className="w-full h-52 object-cover"
                alt={item.title}
              />
              <div className="p-6">
                <h3 className="text-black font-bold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {item.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#050B2B] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-14">
            A Recognized Authority In Law
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl text-[#d9b25f] flex justify-center mb-4">
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

      {/* CTA */}
      <section className="bg-[#d9b25f] py-16 text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to secure your strategic legal partner?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[#050B2B] hover:bg-[#0a1a4a] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Schedule a Consultation
            </button>
            <button 
              onClick={() => navigate('/team')}
              className="border-2 border-[#050B2B] text-[#050B2B] px-8 py-3.5 rounded-sm font-semibold hover:bg-[#050B2B] hover:text-white transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}