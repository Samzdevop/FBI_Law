import {
  Scale,
  MapPin,
} from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import fbi_logo from '../../assets/images/FBI_Legal.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020b26] text-white">
      {/* Top Border */}
      <div className="h-px w-full bg-[#24304b]" />

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-7">
               <Link
              to="/"
              className="flex items-center flex-shrink-0"
            >
              <img
                src={fbi_logo}
                alt="FBI Legal"
                className="
                  h-20
                  sm:h-25
                  md:h-30
                  lg:h-40
                  xl:h-50
                  w-auto
                  object-contain
                "
              />
            </Link>
              {/* <Scale
                size={20}
                strokeWidth={1.8}
                className="text-white"
              />

              <h2 className="text-[28px] font-bold tracking-tight">
                FBI Legal
              </h2> */}
            </div>

            <p className="text-[#b8c1d6] text-[15px] leading-8 max-w-[270px]">
              Strategic legal partner for businesses,
              institutions, and individuals. Providing
              authority and excellence in Nigerian law.
            </p>

            <div className="flex items-center gap-7 mt-10">
              <LiaLinkedin
                size={18}
                strokeWidth={1.8}
                className="text-[#b8c1d6] cursor-pointer hover:text-white transition"
              />

              <BsTwitter
                size={18}
                strokeWidth={1.8}
                className="text-[#b8c1d6] cursor-pointer hover:text-white transition"
              />

              <FaFacebook
                size={18}
                strokeWidth={1.8}
                className="text-[#b8c1d6] cursor-pointer hover:text-white transition"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase font-bold text-[15px] tracking-wide mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-[#c3cadb] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Practice Areas
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Industries
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Our Team
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="uppercase font-bold text-[15px] tracking-wide mb-8">
              Practice Areas
            </h3>

            <ul className="space-y-5 text-[#c3cadb] text-[15px]">
              <li className="hover:text-white cursor-pointer transition">
                Corporate & Commercial
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Litigation & Dispute
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Oil, Gas & Energy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Real Estate
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="uppercase font-bold text-[15px] tracking-wide mb-8">
              Our Offices
            </h3>

            <div className="space-y-7">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={2}
                  className="text-[#12b8ff] mt-1 shrink-0"
                />

                <p className="text-[#c3cadb] text-[15px] leading-7">
                  Abuja: 123 Constitution Ave,
                  Garki.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={2}
                  className="text-[#12b8ff] mt-1 shrink-0"
                />

                <p className="text-[#c3cadb] text-[15px] leading-7">
                  Lagos: 45 Marina Road,
                  Victoria Island.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  strokeWidth={2}
                  className="text-[#12b8ff] mt-1 shrink-0"
                />

                <p className="text-[#c3cadb] text-[15px] leading-7">
                  Calabar: 78 Leopard Town
                  Road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#1a2642]" />

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-[#b8c1d6] text-[14px]">
          © 2026 FBI Legal. All Rights Reserved.
        </p>

        <div className="flex items-center gap-8 text-[#b8c1d6] text-[14px]">
          <button className="hover:text-white transition">
            Privacy Policy
          </button>

          <button className="hover:text-white transition">
            Disclaimer
          </button>

          <button className="hover:text-white transition">
            Sitemap
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;