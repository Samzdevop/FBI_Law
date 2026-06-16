import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import fbi_logo from '../../assets/images/FBI_Legal.png'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Our Team", path: "/team" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#020B2C] text-white text-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="min-h-[36px] flex flex-col sm:flex-row items-center justify-between gap-2 py-2 sm:py-0">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <FiPhone size={12} />
                <span>+234 000 000 0000</span>
              </div>

              <div className="flex items-center gap-2">
                <FiMail size={12} />
                <span>contact@fbilegal.com</span>
              </div>

            </div>

            <div className="text-center sm:text-right">
              Offices: Abuja | Lagos | Calabar
            </div>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="h-[80px] flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center flex-shrink-0"
            >
              <img
                src={fbi_logo}
                alt="FBI Legal"
                className="
                  h-18
                  sm:h-20
                  md:h-25
                  lg:h-35
                  xl:h-45
                  w-auto
                  object-contain
                "
              />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition duration-300 ${
                      isActive
                        ? "text-[#2143D7] border-b-2 border-[#2143D7] pb-1"
                        : "text-gray-600 hover:text-[#2143D7]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={()=>navigate('/contact')}
                className="border border-[#2143D7] text-[#2143D7] px-5 xl:px-6 py-2 rounded-md font-medium text-sm hover:bg-blue-50 transition">
                Book Consultation
              </button>

              <button className="bg-[#2143D7] text-white px-5 xl:px-6 py-2 rounded-md font-medium text-sm hover:bg-[#1734B2] transition">
                Speak to a Lawyer
              </button>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-black"
            >
              {mobileMenu ? (
                <FiX size={28} />
              ) : (
                <FiMenu size={28} />
              )}
            </button>

          </div>

        </div>

        {/* ===================================== */}
        {/* MOBILE MENU */}
        {/* ===================================== */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu
              ? "max-h-[600px] border-t"
              : "max-h-0"
          }`}
        >
          <div className="bg-white">

            <div className="px-6 py-5">

              <div className="flex flex-col">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `py-4 border-b text-sm ${
                        isActive
                          ? "text-[#2143D7] font-semibold"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

              </div>


              <div className="mt-6 flex flex-col gap-3">

                <button className="w-full border border-[#2143D7] text-[#2143D7] py-3 rounded-md font-medium">
                  Book Consultation
                </button>

                {/* <button className="w-full bg-[#2143D7] text-white py-3 rounded-md font-medium">
                  Speak to a Lawyer
                </button> */}

              </div>

            </div>

          </div>
        </div>

      </header>
    </>
  );
}