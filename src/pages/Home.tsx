import { motion } from "framer-motion";
import HeroVideo from "../assets/videos/ASP Law Group-transcode.mp4";
import img1 from "../assets/images/ASP_cons.jpg";
import openquote from "../assets/images/openquote.png";
import closequote from "../assets/images/closingquote.png";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";
import managerImage from "../assets/images/manager.png";
import Footer from "../components/footer/Footer";
import Contactus from "../components/Contactus";


export default function Home() {

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

return (
<div className="text-white overflow-x-hidden bg-black/70">
<section className="relative w-full h-[60vh] md:h-[75vh]">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
  >
    
    <source src={HeroVideo} type="video/mp4" />
  </video>
</section>

<section className="text-center px-6 md:px-20 py-16 flex flex-col items-center gap-6">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-xl md:text-4xl font-serif tracking-wide text-[#D4AF37]"
  >
    WE ARE YOUR PROGRESSIVE<br />
    LAW PARTNER
  </motion.h1>

  <p className="max-w-3xl text-white text-sm md:text-base">
    Our approach to delivering law services is different. We are laser-focused
    on meeting your need to get results while managing your bottom line.
  </p>

   <button
        className="text-black px-6 py-3 mt-4 font-medium rounded-xl"
        style={{
            background:
            "linear-gradient(272deg, #fbaf19 1%, #fff1a3 24%, #c9812a 44%, #f3c45e 70%, #fff1a3)",
        }}
    >
        Learn More
    </button>
</section>

<section className="py-10 px-6 md:px-20">

<h2 className="text-center tracking-widest text-3xl mb-10 font-semibold">
  NEWS | ANNOUNCEMENTS | EVENTS
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

  {/* RIGHT LIST */}
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

<section className="border-y border-[#D4AF37] py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">

<div className="flex gap-5">
  <FaLinkedin className="text-[#D4AF37] text-xl" />
  <FaTwitter className="text-[#D4AF37] text-xl" />
  <FaFacebookF className="text-[#D4AF37] text-xl" />
</div>

<div className="max-w-2xl text-center md:text-justify">
  <p className="text-sm tracking-widest mb-2">STAY INFORMED</p>

  <p className="text-gray-300 text-xs leading-relaxed">
    Our approach to delivering law services is different. We are laser-focused
    on meeting your need to get results while managing your bottom line. Our
    modern, streamlined, and tech enabled structure is client-focused. Because
    your business is our business.
  </p>
</div>

<div className="hidden md:block w-[80px]" />
</section>

<section className="py-20 px-6 md:px-20">

<h2 className="text-center text-[#D4AF37] mb-12 text-xl uppercase tracking-wider">
  OUR COVID-19 RESPONSE
</h2>

<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="space-y-6 text-gray-300 text-sm leading-relaxed">
  <p>
    ASA Law Group has made it a priority to be very active in helping the community.
    Notably, we are committing to provide 750 meals per month to the Chicagoland area
    for families that are unable to access food due to shortages.
  </p>

  <p>
    Also, ASA is supporting Illinois Million Mask Mayday by way of donations which will
    allow the organization to create fabric masks for distribution.
  </p>
</div>

<div className="relative bg-[#313131] p-8 border border-gray-800">
  <img src={openquote} className="w-6 absolute top-4 left-4 opacity-70" />
  <p className="text-[#e5bb69] italic text-sm px-6 leading-relaxed">
    As I have always maintained, while we are attorneys by profession,
    we are human beings first. Our responsibility is to each other.
  </p>

  <img src={closequote} className="w-6 absolute bottom-16 right-4 opacity-70" />

  <div className="mt-8 flex items-center gap-4 px-6">
    <img src={managerImage} className="w-12 h-12 rounded-full" />
    <div>
      <p className="text-white text-sm">Shuaib Ahmed</p>
      <p className="text-gray-400 text-xs">Founder</p>
    </div>
  </div>

</div>

</div>
</section>

<Contactus />

<Footer />  
</div>
);
}