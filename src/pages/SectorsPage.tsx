import { ArrowRight } from "lucide-react";
import { sectors } from "../utility/sectors";
import SectorCard from "../components/SectorCard";

export default function SectorsPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium">
            Industries & Expertise
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Sectors We
            <span className="text-blue-600">
              {" "}
              Empower
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-600 leading-8">
            ASA Law Group delivers legal support tailored to the
            distinct operational realities of modern industries.
            We understand your business environment and the
            opportunities ahead.
          </p>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-medium">
                Speak to a Lawyer
              </button>

              <button className="bg-white text-slate-900 px-7 py-3 rounded-lg font-medium flex items-center gap-2">
                Book Consultation
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}