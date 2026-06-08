import bannerImage from "../assets/images/practiceareas.jpg";
import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";

const practiceAreas = [
  "Workers' Compensation Defense",
  "Subrogation",
  "Commercial Litigation",
  "Dispute Resolution",
  "Insurance Non-Compliance",
  "Civil Litigation",
  "Business Formations",
];

export default function PracticeArea() {
  return (
    <div className="bg-black text-white">
      {/* STICKY HERO */}
      <section className="sticky top-0 h-[70vh] z-0">
        <img
          src={bannerImage}
          alt="Practice Areas"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
      </section>

     <section className="relative z-20 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div
            className="h-[60px] md:h-[80px] flex items-center px-6 md:px-10"
            style={{
              background:
                "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
            }}
          >
            <h1 className="text-black text-2xl md:text-4xl font-serif">
             Our Team
            </h1>
          </div>

        </div>
        <div className="max-w-6xl bg-[#313131] mx-auto px-6 md:px-10">
          <p className="text-white text-sm md:text-xl leading-relaxed max-w-6xl">
            Our firm is revolutionizing the legal defense industry.
            With the use of cutting edge technology, we are able to
            provide unparalleled service to our clients at competitive
            rates. In addition, given our ability to minimize costs
            through the use of industry leading technology, our attorneys
            have time to continue learning and growing their legal
            knowledge and skills.
          </p>

          <h2 className="mt-10 text-[#D4AF37] text-xl md:text-3xl lg:text-5xl font-serif">
            FOCUSED. EXPERIENCED.
          </h2>

        </div>

      </section>

      {/* PRACTICE AREAS LIST */}
      <section className="relative z-20 bg-black py-20 md:py-28">

        <div className="max-w-4xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-x-28 gap-y-8">

            {practiceAreas.map((item, index) => (
              <h3
                key={index}
                className="text-[#D4AF37] uppercase tracking-wider text-lg md:text-xl font-serif"
              >
                {item}
              </h3>
            ))}
          </div>
        </div>
      </section>
      <Contactus />
      <Footer /> 
    </div>
  );
}