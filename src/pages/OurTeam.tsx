import { ArrowRight } from "lucide-react";
import PartnerCard from "../components/PartnerCard";
import {featuredPartner,  partners } from "../utility/partners";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";

export default function OurTeam() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-[20%] bg-[#132A8E]" />

        <div className="bg-[#071028]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Expertise Driven by Experience.
              </h1>

              <p className="text-slate-300 mt-6 text-lg leading-8 max-w-2xl">
                Our multidisciplinary team combines deep legal knowledge
                with international standards to deliver bespoke legal
                solutions for the most ambitious enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PARTNER */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={featuredPartner.image}
                alt={featuredPartner.name}
                className="w-full max-w-xl rounded-xl shadow-2xl
                "
              />
            </div>

            <div>
              <span className="inline-flex px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
                Leadership
              </span>

              <h2 className="mt-5 text-5xl font-bold text-slate-900">
                {featuredPartner.name}
              </h2>

              <p className="text-xl text-slate-500 mt-2">
                {featuredPartner.role}
              </p>

              <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 italic text-slate-600 text-lg leading-8">
                "{featuredPartner.quote}"
              </blockquote>

              <p className="mt-8 text-slate-600 leading-8">
                {featuredPartner.bio}
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-medium">
                  Meet Our People
                </button> */}

                <button 
                  onClick={()=>navigate('/contact')}
                  className="border border-slate-300 px-7 py-3 rounded-lg font-medium text-slate-700">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Teams
            </h2>
            <p className="mt-3 text-slate-600">
              Strategic leaders across our core practice areas.
            </p>
            <div className="h-px bg-slate-200 mt-8" />
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                {...partner}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07103A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready to engage our expertise?
            </h2>

            <p className="text-blue-100 mt-5 max-w-2xl mx-auto">
              Our team is prepared to navigate your most complex
              legal challenges with precision and authority.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button
                onClick={()=>navigate('/contact')}
                className="bg-white text-[#2341d8] px-7 py-3 rounded-lg font-semibold">
                Contact Our Team
              </button>

              <button 
                onClick={()=>navigate('/practice-areas')}
                className="bg-transparent border border-white text-white px-7 py-3 rounded-lg flex items-center gap-2">
                Explore Practice Areas
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}