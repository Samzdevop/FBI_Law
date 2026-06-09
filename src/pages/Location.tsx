import location from "../assets/images/asplaw grouplocations.png";
import Contactus from "../components/Contactus";
import Footer from "../components/footer/Footer";

const locations = [
  {
    title: "ASA Law Group Servicing Employers in Illinois",
    heading: "OUR ILLINOIS LOCATION",
    address: [
      "1301 W 22ND ST",
      "SUITE 201",
      "OAK BROOK, IL 60523",
    ],
    phone: "630.819.8344",
    fax: "630.214.0077",
    description: `ASA Law Group, LLC was founded in Oak Brook, Illinois with the mission to partner with employers in not only the defense of workers compensation and civil cases, but also as legal consultants in advancing the employer's overall mission and corporate goals. We work closely with employers throughout the state of Illinois in handling of cases by using multifaceted metrics that serve as not only performance measures but also to detect algorithms that help identify mitigation opportunities, cost control and case closures. We fully service employers that are self-insured, mid-size as well as small businesses. We are proud to continue to service employers throughout the state in an unparalleled fashion!`,
  },
  {
    title: "ASA Law Group Servicing Employers in California",
    heading: "OUR CALIFORNIA LOCATION",
    address: [
      "4510 EAST PACIFIC",
      "COAST HIGHWAY",
      "SUITE 595",
      "LONG BEACH, CA 90804",
    ],
    phone: "310.793.6598",
    fax: "562.684.0378",
    description: `Based upon client demand, ASA Law Group, Inc. also services employers in northern and southern California in defense of workers compensation and civil litigation. We are able to successfully implement our unique approach to case handling within the legal and business environment in California. Notably, we use multifaceted metrics that are specific to California and partner with employers to not only handle legal matters but also serve as consultants in advising employers in a competitive business market. We look forward in becoming your legal partners!`,
  },
];

export default function Location() {
        return (
        <div className="text-white overflow-x-hidden bg-black/70">
             
            <section className="flex flex-col items-center justify-center py-40 px-6 md:px-20">
                 <h2 className="text-center tracking-widest text-3xl mt-10 font-semibold">
                    LOCATION
                </h2>
                <img
                    className="inset-0 w-200 h-full object-contain" 
                    src={location}
                    alt="Location"

                />  
            </section>

            <section className="bg-black py-24 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="grid md:grid-cols-2 gap-10">

                    {locations.map((location, index) => (
                        <div key={index}>

                        {/* Header Card */}
                        <div className="bg-[#353535]">
                            <div
                            className="h-4"
                            style={{
                                background:
                                "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                            }}
                            />

                            <div className="p-4 md:p-5">
                            <h3 className="text-white text-3xl font-serif leading-tight">
                                {location.title}
                            </h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-12">

                            <h4
                            className="text-lg font-semibold tracking-[2px] mb-6"
                            style={{
                                background:
                                "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            >
                            {location.heading}
                            </h4>

                            <div className="grid grid-cols-2 gap-8 text-gray-400 text-sm uppercase">

                            <div className="space-y-2">
                                {location.address.map((line, idx) => (
                                <p key={idx}>{line}</p>
                                ))}
                            </div>

                            <div className="space-y-2">
                                {/* <p>P {location.phone}</p> */}
                                {/* <p>F {location.fax}</p> */}
                            </div>

                            </div>

                            <p className="mt-10 text-white leading-9 text-lg">
                            {location.description}
                            </p>

                        </div>

                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <Contactus />
            <Footer /> 
        </div>
    );
}
