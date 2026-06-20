import { ArrowRight } from "lucide-react";
import { sectors } from "../utility/sectors";
import SectorCard from "../components/SectorCard";
import sectorbgimg from '../assets/images/SectorBg.jpeg';
import Footer from "../components/footer/Footer";

export default function SectorsPage() {
  return (
    <div className="bg-white">
      {/* HERO with Background Image */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={sectorbgimg}
            alt="Sectors We Empower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full py-24">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#d9b25f]/10 border border-[#d9b25f]/30 text-[#d9b25f] text-sm font-medium">
            Industries & Expertise
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Sectors We
            <span className="text-[#d9b25f]">
              {" "}
              Empower
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-200 leading-8 text-base sm:text-lg">
            FBI Legal delivers legal support tailored to the
            distinct operational realities of modern industries.
            We understand your business environment and the
            opportunities ahead.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-8 py-3.5 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide">
              Explore Our Sectors
            </button>
            <button className="border border-white text-white px-8 py-3.5 rounded-sm hover:bg-white hover:text-black transition-colors duration-200 text-sm uppercase tracking-wide">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="border-t border-slate-200 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Our Specialized Focus
            </h2>

            <p className="mt-3 text-slate-600 max-w-3xl">
              Dedicated legal services for key sectors and
              industries that shape your business and contribute
              to growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-14">
            {sectors.map((sector, index) => (
              <SectorCard
                key={index}
                {...sector}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071531] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Ready to navigate your sector's
                legal complexities?
              </h2>

              <p className="text-slate-300 mt-5 max-w-xl">
                Our industry specialists are standing by to
                provide the strategic partnership your
                organization deserves.
              </p>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-4">
              <button className="bg-[#d9b25f] hover:bg-[#c4a04e] text-black px-7 py-3 rounded-sm font-semibold transition-colors duration-200 text-sm uppercase tracking-wide">
                Speak to a Lawyer
              </button>

              <button className="bg-white text-slate-900 px-7 py-3 rounded-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
                Book Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}