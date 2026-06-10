import cert from "../assets/images/CertifiedAsset.png";
import bgMap from "../assets/images/mapAsset.png";


export default function Contactus() {
  return (
    <section className="relative py-20 px-6 md:px-20 text-white bg-black">
            <img
                src={bgMap}
                className="absolute left-0 top-0 h-full w-full md:w-1/2 opacity-20 bg-no-repeat bg-contain"
                alt="certification"
            />

        <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-10 text-sm text-gray-300">
            <div className="space-y-2">
            <h2 className="text-lg text-[#fbaf19]">Canada</h2>
                <div className="flex items-start gap-6">
                <p className="min-w-[180px]">3525 Platinum Dr. Mississauga ON L5M 2R9</p>
                {/* <p>P 630.819.8344</p> */}
                </div>

                {/* <div className="flex items-start gap-6">
                <p className="min-w-[180px]">Suite 201</p>
                <p>F 630.214.0077</p>
                </div>

                <div className="flex items-start gap-6">
                <p className="min-w-[180px]">Oakbrook, IL 60523</p>
                <p></p>
                </div> */}
                <div className="pt-4">
                <img
                    src={cert}
                    className="w-24"
                    alt="certification"
                />
                </div>
            </div>
            {/* <div className="space-y-2">
                    <h2 className="text-lg text-[#fbaf19]">california</h2>
                <div className="flex items-start gap-6">
                <p className="min-w-[180px]">1590 ADAMS AVE</p>
                <p>P 310.793.6598</p>
                </div>
                <div className="flex items-start gap-6">
                <p className="min-w-[180px]">UNIT 1198</p>
                <p>F 562.684.0378</p>
                </div>

                <div className="flex items-start gap-6">
                <p className="min-w-[180px]">COSTA MESA, CA 92628</p>
                <p></p>
                </div>
                <div className="pt-4">
                <img
                    src={cert}
                    className="w-24"
                    alt="certification"
                />
                </div>
            </div> */}

            </div>
            <div className="space-y-4 bg-[#1a1a1a] p-6 border border-gray-800 relative">
            <div className="absolute top-0 left-0 w-full h-2"
                style={{
                background:
                    "linear-gradient(264deg, #fbaf19, #fff1a3 25%, #c9812a 51%, #f3c45e 77%, #fff1a3)",
                }}
            />
            <h2 className="text-xl text-[#666464] text-center">contact</h2>
            <input className="w-full p-3 bg-black border-b border-[#fbaf19]" placeholder="Name" />
            <input className="w-full p-3 bg-black border-b border-[#fbaf19]" placeholder="Email" />
            <input className="w-full p-3 bg-black border-b border-[#fbaf19]" placeholder="Phone" />
            <textarea className="w-full p-3 bg-black border-b border-[#fbaf19]" placeholder="Message" />

            <p className="text-xs text-gray-400 leading-relaxed">
                Consent to Text Messaging (Privacy Policy Disclosure)
            </p>

            <label className="flex items-start gap-2 text-xs text-gray-300">
                <input type="checkbox" />
                I agree to receive text messages from ASA Law Group
            </label>

            <button
                className="text-black px-6 py-3 mt-4 font-medium rounded-xl"
                style={{
                    background:
                    "linear-gradient(272deg, #fbaf19 1%, #fff1a3 24%, #c9812a 44%, #f3c45e 70%, #fff1a3)",
                }}
            >
                Submit
            </button>
            </div>
        </div>
    </section>
  );
}