import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scale,
  Users,
  Heart,
  Shield,
  Target,
  Eye,
  BookOpen,
  Handshake,
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import founderbanner from "../assets/images/foundationbanner.jpeg";

export default function FoundationPage() {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.2 });

  const focusAreas = [
    {
      icon: <Scale className="text-[#d9b25f]" size={28} />,
      title: "Access to Justice & Legal Awareness",
      description:
        "Promoting legal awareness, rights advocacy, and pro bono support initiatives to ensure everyone understands their rights and legal protections.",
    },
    {
      icon: <Shield className="text-[#d9b25f]" size={28} />,
      title: "Human Rights Advocacy",
      description:
        "Defending and promoting human rights through advocacy, education, and legal interventions for vulnerable and marginalized communities.",
    },
    {
      icon: <Users className="text-[#d9b25f]" size={28} />,
      title: "Community Development",
      description:
        "Implementing sustainable community-driven initiatives that address social challenges and foster long-term development.",
    },
    {
      icon: <GraduationCap className="text-[#d9b25f]" size={28} />,
      title: "Youth Empowerment & Leadership",
      description:
        "Developing the next generation of leaders through mentorship, training, and leadership development programs.",
    },
    {
      icon: <Briefcase className="text-[#d9b25f]" size={28} />,
      title: "Skills Acquisition & Entrepreneurship",
      description:
        "Providing vocational training and entrepreneurial support to help individuals build sustainable livelihoods.",
    },
    {
      icon: <Heart className="text-[#d9b25f]" size={28} />,
      title: "Social Welfare & Support Programs",
      description:
        "Offering support programs that address immediate needs and improve the quality of life for underprivileged populations.",
    },
    {
      icon: <BookOpen className="text-[#d9b25f]" size={28} />,
      title: "Civic Education & Public Enlightenment",
      description:
        "Educating citizens on their civic rights, responsibilities, and the importance of active participation in democratic processes.",
    },
  ];

  const coreValues = [
    {
      title: "Justice",
      description:
        "We are committed to fairness, equity, and the protection of rights for all individuals, regardless of their background or circumstances.",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical conduct in all our activities and relationships.",
    },
    {
      title: "Compassion",
      description:
        "We approach our work with genuine care and empathy for the communities we serve.",
    },
    {
      title: "Accountability",
      description:
        "We take responsibility for our actions and are committed to delivering measurable impact.",
    },
    {
      title: "Empowerment",
      description:
        "We believe in equipping individuals with the knowledge, skills, and opportunities they need to thrive.",
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Impacted" },
    { number: "50+", label: "Community Programs" },
    { number: "15+", label: "Partner Organizations" },
    { number: "10+", label: "States Reached" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Banner Image */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={founderbanner}
            alt="First Baba Isa Foundation"
            className="w-full h-full object-cover object-center"
            style={{
              minHeight: "650px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex bg-[#d9b25f] text-black text-xs px-4 py-1.5 rounded-sm font-semibold uppercase tracking-wider">
              Foundation
            </span>

            {/* <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              First Baba Isa Foundation
            </h1> */}

            <p className="mt-3 text-2xl md:text-3xl font-semibold text-[#d9b25f]">
              Justice. Empowerment. Opportunity.
            </p>

            <p className="mt-6 text-gray-200 max-w-3xl text-base md:text-lg leading-relaxed">
              FBI Foundation is a registered non-profit organization committed to 
              advancing justice, empowering vulnerable communities, and creating opportunities for 
              individuals and families across Nigeria.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Get Involved
              </Link>

              <button
                onClick={() => {
                  const section = document.getElementById('mission-section');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border border-white/30 text-white px-8 py-3.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Established to promote human dignity, social inclusion, and community development, 
            the Foundation works to ensure that every person, regardless of their background or 
            circumstances, has access to the knowledge, support, and opportunities needed to thrive.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-4">
            The Foundation focuses on promoting access to justice through legal awareness, rights advocacy, 
            pro bono support initiatives, and civic education. We believe that informed citizens are empowered 
            citizens, and we are dedicated to helping individuals understand their rights, responsibilities, 
            and available legal protections.
          </p>
        </div>
      </section>

      <section id="mission-section" ref={missionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#d9b25f]/10 flex items-center justify-center mb-6">
                <Target className="text-[#d9b25f]" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To promote justice, human rights, and community empowerment through advocacy, 
                education, legal awareness, and sustainable support programs that improve lives 
                and strengthen communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-10 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#d9b25f]/10 flex items-center justify-center mb-6">
                <Eye className="text-[#d9b25f]" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To build a society where every individual has access to justice, opportunity, 
                and the support needed to live with dignity and reach their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Our Focus Areas
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              We work across multiple areas to create meaningful and lasting impact in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#d9b25f]/10 flex items-center justify-center mb-5 group-hover:bg-[#d9b25f] transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="text-[#d9b25f] font-semibold text-sm uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Our Core Values
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              These values shape our commitment to serving communities with transparency, 
              professionalism, and genuine care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#d9b25f]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d9b25f] transition-colors duration-300">
                  <Award className="text-[#d9b25f] group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#050B2B]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#d9b25f]">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#d9b25f]/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="text-[#d9b25f]" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join Us in Making a Difference
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              At FBI Foundation, we believe that meaningful change begins when people 
              are empowered with knowledge, protected by justice, and given opportunities to succeed. 
              Together, we are building stronger communities and transforming lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide inline-flex items-center gap-2"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-sm hover:bg-gray-50 transition-colors duration-200 text-sm uppercase tracking-wide font-semibold"
              >
                Learn About FBI Legal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}