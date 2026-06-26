import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaGavel,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaScaleBalanced,
  FaHandshake,
  FaUsers,
  FaOilWell,
  FaMicrochip,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import heroImage from "../assets/images/Slider1.jpeg";
import heroImage2 from "../assets/images/Slider2.jpeg";
import heroImage3 from "../assets/images/Slider3.jpeg";
import lawyerImage from "../assets/images/bossImg.jpeg";
import industry1 from "../assets/images/Energy.png";
import industry2 from "../assets/images/litigation.png";
import industry3 from "../assets/images/c&f.png";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import identityImg from "../assets/images/backgroundImage.jpeg";
import cardimg from "../assets/images/backgroundImage2.jpeg";
import { FaBalanceScale, FaCheckCircle, FaHome, FaUniversity } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  const heroSlides = [
    {
      image: heroImage,
      title: "Strategic Legal Solutions for Businesses & Institutions",
      subtitle:
        "We provide proactive legal guidance designed to simplify challenges and drive outcomes across corporate, institutional, and private matters.",
    },
    {
      image: heroImage2,
      title: "Expert Legal Counsel You Can Trust",
      subtitle:
        "With over 15 years of experience, we deliver exceptional legal services tailored to your unique needs.",
    },
    {
      image: heroImage3,
      title: "Global Reach, Local Expertise",
      subtitle:
        "Our team of 45+ legal experts provides comprehensive legal solutions across multiple jurisdictions.",
    },
  ];

  const practiceAreas = [
    {
      title: "Corporate & Commercial",
      icon: <FaBuilding />,
      description:
        "Strategic legal solutions for corporations and growing businesses.",
      bullets: [
        "Corporate governance and compliance",
        "Mergers and acquisitions",
        "Commercial contracts and agreements",
        "Business restructuring and insolvency",
        "Intellectual property protection",
      ],
    },
    {
      title: "Litigation & Disputes",
      icon: <FaGavel />,
      description:
        "Protecting your interests through effective dispute resolution.",
      bullets: [
        "Commercial litigation",
        "Alternative dispute resolution",
        "Arbitration and mediation",
        "Employment disputes",
        "Contract enforcement",
      ],
    },
    {
      title: "Employment Law",
      icon: <FaBalanceScale />,
      description: "Practical solutions for employers and employees alike.",
      bullets: [
        "Employment contracts and policies",
        "Workplace discrimination and harassment",
        "Wrongful termination claims",
        "Employee benefits and compensation",
        "Labor relations and collective bargaining",
      ],
    },
  ];

  const industries = [
    {
      title: "Energy & Infrastructure Advisory",
      image: industry1,
      description:
        "Advised Wishnefisky Global Concept, SubSea Gas, and Waterdance international Concept on Successfully accessing over USD 150 Million in gas infrastructure funding under the Midstream and Downstream Gas Infrastructure Fund (MDGIF), established pursuant to the Petroleum Industry Act (PIA) 2021",
    },
    {
      title: "Litigation,Arbitration & Cross-Boarder Disputes",
      image: industry2,
      description:
        "Represented clients in national and cross-board dispute across aviation, admiralty, oil & gas, banking and labour & employment matters, with appearances before all levels of courts in Nigeria, including arbitration fora.",
    },
     {
      title: "Corporate Finance & Commercial Transactions",
      image: industry3,
      description:
        "Led complex commercial transactions and corporate finance deals exceeding USD 500 Million, including cross-border acquisitions, project financing, and structured trade finance for multinational corporations and financial institutions across Africa.",
    },
    // {
    //   title: "",
    //   image: industry3,
    //   description:
    //     "Specialized legal counsel for construction and financial services including project financing, construction contracts, and regulatory compliance.",
    // },
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

  const aboutPoints = [
    {
      title: "Strategic Positioned",
      description:
        "With our headquarters in Abuja and a strong presence in Lagos and Calabar, FBI Legal is strategically positioned to serve clients across Nigeria while building a foundation for regional expansion across Africa",
    },
    {
      title: "Diverse Client Base",
      description:
        "We serve a diverse client base, including corporate organizations, government institutions, small and medium-sized enterprises, startups, non-governmental organizations, and private individuals.",
    },
    {
      title: "Driven by Purpose",
      description:
        "At FBI Legal, we are driven by a clear identity: a structured, innovative, and purpose-driven law firm that bridges the gap between legal expertise and real-world impact.",
    },
  ];


  const identityCards = [
    {
      title: "Litigation & Dispute Resolution",
      icon: <FaScaleBalanced />,
      description:
        "We provide strategic and results-driven representation across a wide range of disputes, including constitutional, commercial and civil matters. Our litigation practice is defined by thorough preparation, disciplined advocacy, and a focus on achieving favourable outcomes.",
    },
    {
      title: "Corporate & Commercial Advisory",
      icon: <FaHandshake />,
      description:
        "We support businesses, institutions, and investors with clear, practical legal guidance. Form transactions and regulatory compliance to project development and risk management, our advisory services are designed to enable informed decision-making and sustainable growth.",
    },
    {
      title: "Public Interest & Community Impact",
      icon: <FaUsers />,
      description:
        "We are deeply committed to advancing justice through human rights enforcement, public interest litigation, and community-focused legal interventions. This pillar reflects our belief that the law should not only serve institutions but also empower individuals and communities. ",
    },
  ];


  const industryFocusCards = [
    {
      title: "Oil & Gas / Energy",
      icon: <FaOilWell />,
      description:
        "We advise on regularoty compliance, project development, joint ventures, and dispute resolution within the energy sector. Our approach is tailored to the complexities of licensing, host community relations, and large-scale infrastructure projects.",
    },
    {
      title: "Technology & Startups",
      icon: <FaMicrochip />,
      description:
        "We support startups and technology-driven businesses with company structuring, investment agreements, data protection, compliance, intellectual property, and regulatory, advisory. Our solutions are designed to help innovative businesses scale sustainably.",
    },
    {
      title: "Banking & Finance",
      icon: <FaUniversity />,
      description:
        "We provide legal support for financial institutions, lenders, and investors, including loan documentation, regulatory compliance, due diligence and debt recovery. We focus on risk mitigation and efficient transaction execution.",
    },
    {
      title: "Real Estate & Construction",
      icon: <FaHome />,
      description:
        "We handle land transactions, title verification, property development agreements, and construction contracts. Our services ensure secure transactions, regulartory compliance, amd protection of client investments.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const toggleCard = (index:any) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-white overflow-hidden">

      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            className="flex h-full"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {heroSlides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-200"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-200"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#d9b25f] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex bg-[#d9b25f] text-black px-6 py-2 text-xs uppercase font-bold tracking-wider rounded-sm">
              Trusted Legal Excellence
            </span>

            <h1 className="mt-8 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="mt-6 text-gray-200 max-w-xl text-base sm:text-lg leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Schedule Consultation
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border border-white text-white px-8 py-3.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    <section ref={aboutRef} className="py-20 sm:py-28 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-4 sm:pl-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              Why Global Firms Trust
              <br className="hidden sm:block" /> FBI Legal
            </h2>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              FBI Legal is a dynamic, full-service firm committed to delivering high-quality legal solutions across litigation, corporate and commercial advisory, and public interest practice. Structured as a modern mixed-practice firm, we combine strong courtroom advocacy with practical business-focused legal advice and a deep commitment to justice and community impact.
            </p>

            <div className="mt-10 relative">
              <div className="absolute left-0 top-0 w-0.5 h-full bg-gray-200" />
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#d9b25f]"
                style={{
                  height: lineHeight,
                }}
              />
              <div className="space-y-8 pl-8">
                {aboutPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#d9b25f] border-2 border-white shadow-md" />
                    
                    <h3 className="text-black font-bold text-lg">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate("/about")}
              className="mt-10 bg-[#07103A] hover:bg-[#0a1a4a] text-white px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              Learn More About Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={
              isAboutInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 120 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <motion.div
              initial={{ clipPath: "inset(0  0 0 100%)" }}
              animate={
                isAboutInView
                  ? { clipPath: "inset(0 0% 0 0)" }
                  : { clipPath: "inset(0 0 0 100% )" }
              }
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative lg:w-[140%]"
            >
              <img
                src={lawyerImage}
                alt="F. Baba Isa - Managing Partner"
                className="w-full h-[800px] object-cover rounded-l-lg shadow-2xl"
              />
              
              {/* Manager Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-l-lg">
                <h3 className="text-white text-2xl font-bold">
                  F. Baba Isa
                </h3>
                <p className="text-[#d9b25f] text-base font-medium">
                  Managing Partner
                </p>
                <p className="text-gray-300 text-sm mt-2 max-w-sm">
                  Doctoral Scholar | LLM | MBA | FIMC | CMC | Author | Conference Speaker
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Practice Areas Section */}
      <section className="py-10 sm:py-18 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-2">
                Our Practice Areas
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl">
                Specialized legal services tailored to your business needs and
                industry requirements.
              </p>
            </div>

            <button
              onClick={() => navigate("/practice-areas")}
              className="text-black border-2 border-black px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors duration-200 text-sm font-semibold flex items-center gap-2"
            >
              View All <FaArrowRight className="text-xs" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {practiceAreas.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                  expandedCard === index ? "shadow-xl" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="p-8">
                  <div className="text-[#d9b25f] text-4xl mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-black font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Click to {expandedCard === index ? "collapse" : "expand"}
                  </p>
                </div>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <FaCheckCircle className="text-[#d9b25f] mt-0.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={identityImg}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/70" /> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="uppercase text-black text-3xl sm:text-4xl lg:text-5xl font-bold">
              Our Identity & Strategic Positioning
            </h2>
            <p className="text-black mt-4 text-lg max-w-2xl mx-auto">
              FBI Legal is built on a clear and deliberate identity: a structured, modern, and purpose-driven law firm designed to deliver both legal excellence and meaningful impact. What sets us apart is our ability to combine strong advocacy, practical commercial insight, and a deep commitment to public interest within a single, coordinated practice.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {identityCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-white/20 rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#d9b25f] mx-auto flex items-center justify-center text-2xl text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={cardimg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-row-2 gap-12 items-start">
            {/* Left side - Text content */}
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" lg:pl-20 md:pl-10"
            >
              <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
                Industry Focus
              </span>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                Industry Focus
              </h2>
              <p className="text-gray-300 mt-4 text-base leading-relaxed">
                At FBI Legal, we understand that effective legal solutions require more than knowledge of the law- they demand a deep appreciation of the industries in which our clients operate. We combine legal expertise with sector-specific insight to deliver practical, commercially relevant, and results-oriented advice.
              </p>
            </motion.div>

            {/* Right side - 2x2 Grid of cards - Larger on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industryFocusCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 group lg:p-10"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#d9b25f] text-2xl mt-1 group-hover:scale-110 transition-transform duration-300 lg:text-3xl">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-2 lg:text-xl">
                        {card.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed lg:text-base">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
           <div className="text-center mt-10">
            <button
              onClick={() => navigate("/industries")}
              className="text-white font-semibold hover:text-[#d9b25f] transition-colors duration-200 inline-flex items-center gap-2"
            >
              Browse All Industries <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Industry Focus Section */}
      <section className="py-18 sm:py-18 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            {/* <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
              Industry Focus
            </span> */}
            <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Selected Representations & Key Matters
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Representative matters demonstrating our advisory strength and dispute resolution capability 
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer h-[400px] bg-black"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-[100px]">
                  <h3 className="text-white text-xl font-bold mb-0 group-hover:mb-2 transition-all duration-300">
                    {item.title}
                  </h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-300">
                    <p className="text-gray-200 text-sm leading-relaxed pt-2 border-t border-white/10">
                      {item.description}
                    </p>
                    {/* <span className="inline-block mt-3 text-[#d9b25f] text-sm font-semibold">
                      Learn More →
                    </span> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 sm:py-28 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
                Insights
              </span>
              <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                Legal Insights &amp; Updates
              </h2>
            </div>
            <button
              onClick={() => navigate("/blogs")}
              className="text-black border-2 border-black px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors duration-200 text-sm font-semibold flex items-center gap-2"
            >
              View All <FaArrowRight className="text-xs" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((item, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-lg overflow-hidden h-[440px] group bg-black"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-8 text-white">
                  <span className="inline-block px-4 py-1.5 rounded-sm text-xs font-semibold bg-[#d9b25f] text-black uppercase tracking-wider">
                    Insights
                  </span>
                  <h3 className="mt-4 font-bold text-lg sm:text-xl leading-tight line-clamp-3">
                    {item.title}
                  </h3>
                  <button className="mt-4 text-[#d9b25f] font-semibold hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-2">
                    Read More <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#07103A] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07103A] via-[#0f1b4a] to-[#07103A] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
            <div>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
                Ready to discuss your legal
                <br className="hidden sm:block" />
                requirements with our experts?
              </h2>
              <p className="text-gray-300 mt-4 text-base max-w-xl">
                Get strategic legal advice from experienced professionals who
                understand your business.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-4 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Speak To Lawyer
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 border-white text-white px-8 py-4 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide font-semibold"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}