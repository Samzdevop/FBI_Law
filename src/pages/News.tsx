import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import img1 from "../assets/images/ASP_cons.jpg";
import Testimonial from "../components/Testimonial";
import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";

export default function News() {

const newsData = [
  {
    id: 1,
    date: "April 16, 2025",
    title: "ASA Law Group Achieves Minority Business Enterprise (MBE) Certification",
  },
  {
    id: 2,
    date: "April 3, 2025",
    title:
      "Is pain alone sufficient to prove an aggravation of a pre-existing condition? The Appellate Court seems to think so…. So, what does this mean for Employers?",
  },
  {
    id: 3,
    date: "April 20, 2024",
    title: "Shuaib Ahmed Explores Authenticity in an Article in Addicted2Success",
  },
];


const archiveNews = [
  {
    date: "March 16, 2020",
    title:
      "California Workers Compensation – COVID-19 – Industrial Cases and liability?",
  },
  {
    date: "March 16, 2020",
    title:
      "California Workers’ Compensation – Hearing Guidelines in Response to COVID-19",
  },
  {
    date: "March 19, 2020",
    title:
      "Potential Impact of COVID-19 on Illinois Workers’ Compensation",
  },
  {
    date: "March 20, 2020",
    title:
      "Topic: Fact v Fiction of COVID-19 & Potential Impact on IL WC.",
  },
  {
    date: "March 23, 2020",
    title:
      "IWCC Suspending Regular Operations for Month of April",
  },
  {
    date: "March 30, 2020",
    title:
      "DWC and WCAB Announce Updated Hearing and Filing Procedures",
  },
];


const newsletters = [
  "October 2021",
  "July 2021",
  "April 2021",
  "January 2021",
  "October 2020",
  "July 2020",
  "April 2020",
  "January 2020",
  "November 2019",
  "September 2019",
  "July 2018",
  "April 2018",
  "February 2018",
];

    return (
       <div className="text-white overflow-x-hidden bg-black/70">
        <section className="py-50 px-6 md:px-20">
            <h2 className="text-center tracking-widest text-3xl mb-10 font-semibold">
            NEWS
            </h2>
            <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 relative overflow-hidden">
                <img src={img1} className="w-full h-[650px] object-cover" />
                <div
                className="absolute top-0 left-0 w-[80%] h-24"
                style={{
                    background:
                    "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                }}
                />
                <div className="absolute top-10 left-0 bg-[#313131] p-6 w-[80%]">
                <p className="text-[#e5bb69] uppercase">Featured</p>
                <p className="text-white uppercase">August 16, 2025</p>
                <h3 className="text-white text-lg mt-2">
                    Changes and Updates at the IWCC
                </h3>
                <button className="mt-4 text-[#D4AF37] text-sm">Read More</button>
                </div>
                <div className="absolute bottom-0 left-0 bg-[#313131] p-6 w-[80%]">
                <button className="text-[#D4AF37] text-sm uppercase">
                    More News
                </button>
                </div>
            </div>
            <div className="md:col-span-5 pl-0 md:pl-6">
                <div className="space-y-10">
                {newsData.map((item) => (
                    <div key={item.id}>
                    <p className="text-[#e5bb69] text-xl uppercase leading-snug">
                        Featured <br />
                        <span className="text-white text-base">{item.date}</span>
                    </p>
                    <h3 className="text-white text-md mt-2 leading-relaxed">
                        {item.title}
                    </h3>
                    <button className="text-[#e5bb69] text-xl mt-2">
                        Read More
                    </button>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
        <section className="mx-auto px-6 py-20 bg-[#313131] mb-10 w-full">
            <div className="max-w-7xl mx-auto border border-[#D4AF37] p-8 lg:p-12"
            >
                <div
                className="flex flex-col lg:flex-row items-center gap-10"
                >
                {/* LEFT IMAGE */}
                <div className="flex justify-center">
                    <a href="https://x.com/ASALawGroup?ref_src=twsrc%5Etfw"                    target="_blank"
                    rel="noopener noreferrer"
                    >Tweets by ASPLawGroup</a>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1">
                    <div className="flex gap-5">
                      <FaLinkedin className="text-[#D4AF37] text-xl" />
                      <FaTwitter className="text-[#D4AF37] text-xl" />
                      <FaFacebookF className="text-[#D4AF37] text-xl" />
                    </div>

                    <p className="uppercase text-white mt-2"
                    >
                     stay informed
                    </p>
                    <div className="mt-4 text-gray-300 leading-8 space-y-5"
                    >
                    <p>
                        Our commitment to staying on top of the trends, advancements and legal decisions that have the potential to affect our clients'<br/> 
                        businesses makes us the golden standard for legal. Follow us to stay up to date.
                    </p>
                    </div>
                </div>
                </div>
            </div>
         </section>

         <Testimonial />

         {/* Add more sections as needed for additional news or content */}
         <section className="max-w-[1800px] mx-auto px-6 md:px-10 pb-24">
                <div className="grid lg:grid-cols-[2.3fr_1fr] gap-0">

                    {/* LEFT CONTENT */}
                    <div className="bg-[#333333]">

                    {/* GOLD TOP BAR */}
                    <div
                        className="h-5"
                        style={{
                        background:
                            "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                        }}
                    />

                    <div className="p-8 md:p-10">

                        <h2 className="text-white text-4xl font-serif mb-10">
                        2020 NEWS
                        </h2>

                        <div className="space-y-10">
                        {archiveNews.map((item, index) => (
                            <div key={index}>
                            <p className="text-white uppercase tracking-[3px] text-xs font-bold">
                                {item.date}
                            </p>

                            <h3 className="text-white text-xl mt-2 leading-relaxed">
                                {item.title}
                            </h3>

                            <button
                                className="mt-3 uppercase text-sm"
                                style={{
                                background:
                                    "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                }}
                            >
                                Read More
                            </button>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="bg-black px-8 py-12 md:px-12">

                    <h2 className="text-white text-4xl font-serif mb-8">
                        NEWSLETTERS
                    </h2>

                    <div className="space-y-4">
                        {newsletters.map((month) => (
                        <button
                            key={month}
                            className="block text-left uppercase tracking-[2px] font-semibold"
                            style={{
                            background:
                                "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            }}
                        >
                            {month}
                        </button>
                        ))}
                    </div>

                    <button
                        className="mt-16 px-8 py-3 rounded-full text-black font-semibold"
                        style={{
                        background:
                            "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                        }}
                    >
                        News Archives
                    </button>
                    </div>
                </div>
            </section>
        <Contactus />
        <Footer /> 
       </div> 
    )
}