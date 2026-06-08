import bannerImage from "../assets/images/AboutImage.jpg";
import team1 from "../assets/images/team1.gif";
import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO BANNER */}
      <section className="relative h-[450px] md:h-[520px]">
        <img
          src={bannerImage}
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* ABOUT FLOATING CARD */}
      <section className="relative z-20">
          <div className="relative">
          <div className="w-[90%] md:w-[500px] lg:w-[550px] absolute left-1/2 lg:left-[55%] -translate-x-1/2 -top-52">

          {/* GOLD HEADER */}
          <div
            className="h-[55px] flex items-center px-6"
            style={{
              background:
                "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
            }}
          >
            <h2 className="text-black font-semibold text-xl">
              About
            </h2>
          </div>

          {/* CONTENT */}
          <div className="bg-black p-6">
            <div className="grid md:grid-cols-2 gap-6 text-[13px] leading-6 text-gray-300">
              <p>
                ASA Law Group was founded for one simple, yet very important
                reason: to put the interests of our clients first. Period.
                While many firms preach this same message, the interests of
                the firm and the interests of the client are not always aligned.
              </p>

              <p>
                Our firm's internal structure is predicated upon truly
                understanding the business model, corporate culture,
                organizational challenges and how we may become part of our
                client's team.
              </p>

              <p>
                We are not a billable centered practice; rather, we are a
                client centered practice and can prove it.
              </p>

              <p>
                We formulate litigation strategies not only based upon the
                law and facts of each case, but also with the vision to
                advance our client's overall organizational goals.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* DEMAND MORE SECTION */}
      <section className="flex px-6 mt-84 md:mt-54 lg:mt-60 md:px-20 ">
        <div className="ml-auto  mr-[-50px] bg-[#2d2d2d] p-8 md:p-12">
          <h2 className="text-[#D4AF37] text-3xl font-serif uppercase">
            Demand More.
          </h2>

          <p className="mt-3 text-white text-md">
            Simply put, client goals include minimizing litigation costs,
            mitigating exposure, securing<br/> an amicable yet successful
            resolution, and ensuring prompt case disposition.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="px-6 md:px-20 py-16">
        <div className="border border-[#D4AF37] relative p-8 md:p-12">

          <h2 className="uppercase text-lg md:text-2xl font-serif max-w-3xl">
            How Do We Deliver On Our Promises?
            <br />
            By Hiring, Training And Continually Developing The Best Team.
          </h2>
            <div className="flex justify-center mt-12">
                <img
                    src={team1}
                    alt="Team"
                    className="w-[500px] md:w-[650px] object-contain"
                />
            </div>

          {/* CTA BUTTON */}
          <div className="absolute -bottom-5 right-4">
            <button
              className="text-black px-6 py-3 rounded-full text-sm font-semibold"
              style={{
                background:
                  "linear-gradient(272deg, #fbaf19 1%, #fff1a3 24%, #c9812a 44%, #f3c45e 70%, #fff1a3)",
              }}
            >
              Read About Our Team
            </button>
          </div>

        </div>
      </section>
      <Contactus />
      
      <Footer />  
    </div>
  );
}