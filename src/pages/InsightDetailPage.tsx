import {
  Calendar,
  Clock3,
  Share2,
} from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const relatedInsights = [
  {
    id: 1,
    title:
      "The Future of Tech Startups Under Nigeria's Evolving Regulations",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
  },
  {
    id: 2,
    title:
      "Government Litigation Trends Affecting Business Operations",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000",
  },
  {
    id: 3,
    title:
      "Real Estate Investment Strategies For Foreign Developers",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
  },
];

export default function InsightDetailPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#444444] text-white">
        <div className="max-w-4xl mx-auto px-4 py-14 text-center">
          <span className="inline-flex px-4 py-1 rounded-full bg-[#1E4ED8] text-xs font-medium">
            Regulatory Updates
          </span>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Navigating the 2024
            <br />
            Nigerian Petroleum
            <br />
            Industry Act Regulatory
            <br />
            Changes
          </h1>

          <div className="flex justify-center gap-6 mt-5 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              Oct 24, 2025
            </div>

            <div className="flex items-center gap-2">
              <Clock3 size={15} />
              8 min read
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <article className="max-w-3xl">
            <div className="flex items-center gap-4 border-b pb-8">
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-12 h-12 rounded-full"
                alt=""
              />

              <div>
                <h4 className="font-semibold">
                  Barr. Chinedu Okafor
                </h4>

                <p className="text-sm text-gray-500">
                  Regulatory & Energy Law Specialist
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-gray-700 leading-8">
              <p>
                As the Nigerian energy landscape continues to evolve,
                the Petroleum Industry Act (PIA) introduces a pivotal
                framework for regulatory modernization and enterprise
                compliance.
              </p>

              <h2 className="text-3xl font-bold text-[#2448E5]">
                The New Compliance Horizon
              </h2>

              <p>
                The 2024 amendments have significant implications for
                both upstream and downstream operators. Companies must
                now reassess internal compliance structures and
                operational reporting frameworks.
              </p>

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
                alt=""
                className="rounded-xl w-full"
              />
              <div className="text-sm italic text-gray-500 text-center">
                Regulatory reforms require strategic planning and
                institutional readiness.
              </div>

              <blockquote className="border-l-4 border-blue-600 pl-6 py-2 text-xl text-gray-800 font-medium">
                Compliance is no longer a checkbox; it is the strategic
                foundation upon which future energy infrastructure in
                Nigeria must be built.
              </blockquote>

              <h2 className="text-3xl font-bold text-[#2448E5]">
                Strategic Implications for Investors
              </h2>

              <p>
                Investors should anticipate enhanced disclosure
                requirements, stricter environmental governance
                standards, and increased oversight across petroleum
                value chains.
              </p>

              <ul className="space-y-3 list-disc pl-6">
                <li>
                  Greater transparency in licensing procedures
                </li>

                <li>
                  Stronger environmental reporting obligations
                </li>

                <li>
                  Improved dispute resolution frameworks
                </li>

                <li>
                  Regulatory clarity for foreign direct investment
                </li>
              </ul>

              <h2 className="text-2xl font-bold">
                Conclusion
              </h2>
              <p>
                Organizations operating in the energy sector should
                proactively review governance structures and compliance
                systems to align with evolving regulatory expectations.
              </p>
            </div>

            <div className="border-t mt-12 pt-8">
              <div className="flex flex-wrap items-center gap-6">
                <span className="font-semibold flex items-center gap-2">
                  <Share2 size={18} />
                  Share Article
                </span>

                <button className="flex items-center gap-2 text-sm">
                  <BsTwitter size={16} />
                  Twitter
                </button>
                <button className="flex items-center gap-2 text-sm">
                  <LiaLinkedin size={16} />
                  LinkedIn
                </button>

                <button className="flex items-center gap-2 text-sm">
                  <FaFacebook size={16} />
                  Facebook
                </button>
              </div>
            </div>
          </article>
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#09142D] rounded-xl p-6 text-white">
                <h3 className="font-bold text-xl">
                  Need Specialized Energy Guidance?
                </h3>

                <p className="text-gray-300 text-sm mt-3">
                  Speak with our legal experts about compliance,
                  licensing, and petroleum regulation.
                </p>

                <button className="w-full mt-5 bg-white text-black py-3 rounded-lg font-medium">
                  Get Consultation
                </button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Topics</h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Energy",
                    "Petroleum",
                    "Compliance",
                    "PIA",
                    "Regulations",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F8F9FC] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold">
                Related Legal Insights
              </h2>

              <p className="text-gray-500 mt-2">
                Discover more expert commentary and analysis.
              </p>
            </div>

            <button className="text-blue-600 font-medium">
              View All Insights →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedInsights.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold leading-7">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1E40FF] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">
            Securing Your Strategic Interests Today
          </h2>
          <p className="text-blue-100 mt-3">
            Our team is ready to help you navigate legal and regulatory
            complexities with confidence.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-white text-[#1E40FF] px-6 py-3 rounded-lg font-medium">
              Get Legal Advice
            </button>
            <button className="bg-white text-[#1E40FF] px-6 py-3 rounded-lg font-medium">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}