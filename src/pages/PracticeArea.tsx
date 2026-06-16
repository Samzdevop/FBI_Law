import {
  ArrowRight,
  Briefcase,
  Building2,
  Scale,
  Landmark,
  ShieldCheck,
  Globe,
  Factory,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Corporate & Commercial Advisory",
    description:
      "Strategic legal counsel for business operations, corporate governance, and commercial matters.",
    services: [
      "Business Registration",
      "Corporate Governance",
      "Commercial Contracts",
      "Company Restructuring",
    ],
  },
  {
    icon: Scale,
    title: "Litigation & Dispute Resolution",
    description:
      "Representation in commercial litigation, arbitration, and dispute resolution matters.",
    services: [
      "Civil Litigation",
      "Alternative Dispute Resolution",
      "Commercial Arbitration",
      "Appellate Practice",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "Helping businesses navigate complex regulatory requirements and compliance frameworks.",
    services: [
      "Regulatory Advisory",
      "Compliance Audits",
      "Risk Assessment",
      "Licensing Support",
    ],
  },
  {
    icon: Building2,
    title: "Business Formation & Governance",
    description:
      "Building strong legal foundations for sustainable business growth and management.",
    services: [
      "Business Registration",
      "Governance Framework",
      "Board Advisory",
      "Compliance Setup",
    ],
  },
  {
    icon: Landmark,
    title: "Real Estate & Construction",
    description:
      "Advising property developers, investors and construction stakeholders.",
    services: [
      "Property Acquisition",
      "Land Transactions",
      "Joint Ventures",
      "Development Agreements",
    ],
  },
  {
    icon: Factory,
    title: "Oil, Gas & Energy",
    description:
      "Comprehensive legal support across the energy and natural resources sector.",
    services: [
      "Energy Regulation",
      "Licensing",
      "Project Financing",
      "Risk Management",
    ],
  },
  {
    icon: Globe,
    title: "Technology & Startups",
    description:
      "Supporting innovation through technology transactions and startup advisory.",
    services: [
      "Technology Contracts",
      "IP Protection",
      "Data Privacy",
      "Startup Advisory",
    ],
  },
  {
    icon: Gavel,
    title: "Public Interest & Social Impact",
    description:
      "Legal support for NGOs, social enterprises, and public-interest initiatives.",
    services: [
      "Policy Development",
      "Nonprofit Advisory",
      "Public Advocacy",
      "Social Enterprise",
    ],
  },
];

export default function PracticeAreas() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
            Practice Areas
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Strategic Legal Solutions for a
            <span className="text-blue-600"> Complex World.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            ASA Law Group delivers legal knowledge with international
            standards to provide authoritative legal counsel across multiple
            practice areas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button 
              onClick={()=>navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Speak to an Expert
            </button>

            {/* <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50">
              View Practice Areas
            </button> */}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Practice Areas
              </h2>

              <p className="mt-3 text-slate-600 max-w-2xl">
                Comprehensive legal services tailored to the needs of
                businesses, institutions and high-net-worth individuals.
              </p>
            </div>

            <button className="text-blue-600 font-medium flex items-center gap-2">
              Need custom strategy?
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="text-blue-600" size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {area.services.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-amber-500"
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* <button className="mt-8 w-full border border-slate-200 rounded-lg py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 transition">
                    Learn More
                  </button> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Service Depth
          </h2>
          <p className="mt-3 text-slate-600">
            A closer look into our expertise within our core practice.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-200">
            <div>
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                alt="Law"
                className="w-full h-full object-cover min-h-[500px]"
              />
            </div>

            <div className="bg-slate-50 p-10 lg:p-14 flex flex-col justify-center">
              <span className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium w-fit">
                Featured Service
              </span>

              <h3 className="text-4xl font-bold text-slate-900 mt-6">
                Corporate & Commercial Advisory
              </h3>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Our commercial practice serves as the strategic backbone
                for market leaders and emerging enterprises. We navigate
                the complexities of the Nigerian regulatory landscape
                while preserving commercial flexibility and growth.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Risk Management
                  </h4>

                  <p className="text-sm text-slate-600 mt-2">
                    Identifying and mitigating legal and commercial risks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    M&A Transactions
                  </h4>

                  <p className="text-sm text-slate-600 mt-2">
                    Structuring acquisitions and mergers with confidence.
                  </p>
                </div>
              </div>

              {/* <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg w-fit hover:bg-blue-700">
                Explore Practice Area
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08132b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Ready to secure your strategic legal partner?
              </h2>

              <p className="mt-4 text-slate-300 max-w-xl">
                Join hundreds of successful businesses who trust ASA Law
                Group for their legal operations and growth initiatives.
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-4">
              <button 
                onClick={()=>navigate('/contact')}
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium">
                Book Consultation
              </button>
{/*                 
              <button className="border border-slate-600 text-white px-6 py-3 rounded-lg">
                Explore Services
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}