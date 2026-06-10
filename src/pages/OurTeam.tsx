import { useState } from "react";
import teamvideo from "../assets/videos/teamvideo.mp4";
import { teamMembers } from "../utility/teamData";
import TeamCard from "../components/TeamCard";
import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";
import shuaibahmed from "../assets/images/ASPLOGO-remove.png";
export default function OurTeam() {
    const [selectedMember, setSelectedMember] = useState("all");

    const filteredMembers =
        selectedMember === "all"
            ? teamMembers
            : teamMembers.filter(
                (member) => member.name === selectedMember
            );
  return (
    <div className="text-white overflow-x-hidden bg-black/70">
        <section className="relative w-full h-[60vh] md:h-[75vh]">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
            >
                
                <source src={teamvideo} type="video/mp4" />
            </video>
        </section>
        <section className="relative z-20 -mt-20">
            <div className="max-w-6xl mx-auto">
            <div
                className="h-[60px] md:h-[80px] flex items-center px-6 md:px-10"
                style={{
                background:
                    "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                }}
            >
                <h1 className="text-black text-2xl md:text-4xl font-serif">
                Practice Areas
                </h1>
            </div>

            </div>
            <div className="max-w-6xl bg-[#313131] mx-auto px-6 md:px-10">
            <p className="text-white text-sm md:text-xl leading-relaxed max-w-6xl">
                The internal culture of our firm is unprecedented. 
                ASA Law Group's ethos of delivering the highest level of service to our clients demands we be experts in our field, 
                continually evolve, and be well rounded individuals with a healthy work life balance. 
                Our attorneys are encouraged to participate in community activities, maintain a healthy lifestyle and become empowered individuals. 
                In turn, our clients benefit from increased productivity from our energized staff and attorneys that are inspired and ready to make positive impacts on your business.
            </p>

            <h2 className="mt-10 text-[#D4AF37] text-xl md:text-3xl lg:text-5xl font-serif uppercase">
                we're ready.
            </h2>

            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="border border-[#D4AF37] p-8 lg:p-12"
          >
            <div
              className="flex flex-col lg:flex-row items-center gap-10"
            >
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={shuaibahmed}
                  alt="Shuaib Ahmed"
                  className="w-full h-full lg:w-[420px] lg:h-[520px] object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1">
                <h2 className="text-[#D4AF37] text-3xl md:text-4xl font-serif uppercase "
                >
                  ASP Law Group Founders
                </h2>

                <p className="uppercase tracking-[4px] text-white mt-2"
                >
                  Owner and President
                </p>

                {/* <a
                  href="mailto:sahmed@asalawgroup.net"
                  className="
                    text-[#D4AF37]
                    mt-3
                    block
                  "
                >
                  sahmed@asalawgroup.net
                </a> */}

                <div className="mt-8 text-gray-300 leading-8 space-y-5"
                >
                  <p>
                    As the founder of ASP Law Group, I am passionate about providing trusted legal services, building strong client relationships, and creating solutions that help individuals and businesses navigate legal challenges with confidence
                  </p>
        {/* 
                  <p>
                    Thereafter, he served as an Assistant
                    Attorney General for the State of
                    Illinois defending various state
                    departments in workers’ compensation
                    cases.
                  </p>

                  <p>
                    Mr. Ahmed formed ASA Law Group, LLC,
                    located in Oak Brook, Illinois, with a
                    mission to partner with employers in
                    not only the defense of workers
                    compensation and civil cases, but also
                    as legal consultants in advancing the
                    employer’s overall mission and
                    corporate goals.
                  </p>

                  <p>
                    Based upon client needs, Mr. Ahmed
                    scaled the firm into California,
                    forming ASA Law Group, Inc., which
                    services employers throughout the
                    state of California.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-black">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-center text-white text-xl md:text-3xl font-serif uppercase">
                The ASP Law Group Team
                </h2>

                <div className="flex justify-center mt-8">
                <select
                    value={selectedMember}
                    onChange={(e) => setSelectedMember(e.target.value)}
                    className="bg-[#313131] text-[#D4AF37] px-8 py-4 min-w-[300px] outline-none"
                >
                    <option value="all">
                    Find A Team Member
                    </option>

                    {teamMembers.map((member) => (
                    <option
                        key={member.id}
                        value={member.name}
                    >
                        {member.name}
                    </option>
                    ))}
                </select>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">

                {filteredMembers.map((member) => (
                    <TeamCard
                    key={member.id}
                    TeamMember={member}
                    />
                ))}
                </div>
            </div>
        </section>
        <Contactus />
        <Footer /> 
    </div>
  );
}