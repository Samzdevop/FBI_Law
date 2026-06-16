import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Scale,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { insights } from "../utility/insights";
import { useNavigate } from "react-router-dom";


const tabs = [
  "All Insights",
  "Corporate Law & Business Compliance",
  "Governance & Audit",
  "Litigation & Dispute Resolution",
  "Regulatory Updates",
  "Seminars & Training",
];

const InsightsPage = () => {
  const [activeTab, setActiveTab] = useState("All Insights");
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      {/* HERO */}
      <section className="bg-[#F7F8FB] border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
          <p className="text-sm font-medium text-blue-600 mb-3">
            Insights & Publications
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] max-w-4xl leading-tight">
            Strategic Perspectives on{" "}
            <span className="text-blue-600">Nigerian Law</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl">
            Explore legal insights, regulatory updates, and expert opinions
            designed to help businesses and institutions navigate complex legal
            matters with confidence.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                className="w-full h-12 pl-12 pr-4 bg-white border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="h-12 px-5 border rounded-lg bg-white flex items-center justify-center gap-2 hover:bg-gray-50">
              <SlidersHorizontal size={16} />
              Filter Articles
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2">
            Featured Analysis
          </h2>

          <p className="text-gray-500 mb-8">
            Deep dives into the most critical legal developments shaping
            Nigeria's legal landscape.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {insights.slice(0, 2).map((item:any) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden h-[420px] group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 p-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs bg-blue-600">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="rounded-2xl bg-[#0B1736] p-8 flex flex-col justify-center text-white">
              <div className="mx-auto mb-6">
                <Scale size={45} />
              </div>

              <h3 className="text-center text-3xl font-bold">
                Stay Informed
              </h3>

              <p className="text-center text-gray-300 mt-4">
                Receive legal insights and regulatory updates directly in your
                inbox.
              </p>

              <button className="mt-8 bg-sky-500 rounded-lg py-3 font-medium">
                Subscribe Newsletter
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Join 5,000+ legal professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS LIBRARY */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-black text-2xl font-bold">
                Legal Insights Library
              </h2>

              <p className="text-gray-500 mt-2">
                Browse recent articles and expert publications.
              </p>
            </div>

            {/* <button className="text-blue-600 font-medium">
              See All
            </button> */}
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {insights.map((item:any) => (
              <article
                key={item.id}
                className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <span className="inline-flex px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                    {item.category}
                  </span>

                  <h3 className="text-black font-bold text-lg mt-4 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-3">
                    Learn more about current legal developments impacting
                    businesses and institutions across Nigeria.
                  </p>

                  <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-14 gap-2">
            <button className="w-10 h-10 border rounded-lg flex items-center justify-center">
              <ChevronLeft size={16} />
            </button>

            <button className="w-10 h-10 bg-blue-600 text-white rounded-lg">
              1
            </button>

            <button className="text-black w-10 h-10 border rounded-lg">
              2
            </button>

            <button className="text-black w-10 h-10 border rounded-lg">
              3
            </button>

            <button className="text-black  w-10 h-10 border rounded-lg flex items-center justify-center">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07142D] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
            <div>
              <h2 className="text-white text-3xl font-bold">
                Need Specific Legal Advice?
              </h2>

              <p className="text-gray-300 mt-3 max-w-2xl">
                Our experienced attorneys are ready to provide tailored legal
                guidance to help you navigate complex legal matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={()=>navigate('/contact')}
                className="bg-sky-500 text-white px-6 py-3 rounded-lg">
                Speak To An Expert
              </button>

              <button 
                onClick={()=>navigate('/contact')}
                className="bg-white px-6 py-3 rounded-lg">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;