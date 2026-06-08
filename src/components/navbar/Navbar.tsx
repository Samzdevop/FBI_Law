import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/images/ASPLOGO-remove.png";
import { Link } from "react-router-dom";

const links = [
  // { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Practice Areas", path: "/practice-areas" },
  { name: "Our Team", path: "/the-asa-team" },
  { name: "News", path: "/news" },
  { name: "Location", path: "/location" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-6 left-0 w-full z-50 text-white">
      <div className="hidden md:block relative mt-6">
        <div
          className="h-[50px] w-full"
          style={{
            background:
              "linear-gradient(266deg, #fbaf19, #fff1a3 24%, #c9812a 50%, #f3c45e 78%, #fff1a3)",
          }}
        />

        <Link to="/">
          <img
            src={logo}
            alt="ASP Logo"
            className="absolute left-[15%] lg:left-[17%] -translate-x-1/2 -top-10 w-40 lg:w-48"
          />
        </Link>

        <nav className="absolute inset-0 flex items-center justify-center gap-8 lg:gap-12 uppercase tracking-widest text-xs">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-black font-bold hover:text-gray-700 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div
        className="md:hidden flex items-center justify-between px-4 py-2"
        style={{
          background:
            "linear-gradient(266deg, #fbaf19, #fff1a3 24%, #c9812a 50%, #f3c45e 78%, #fff1a3)",
        }}
      >
        <img
          src={logo}
          alt="ASP Logo"
          className="w-20 h-auto"
        />

        <button
          onClick={() => setOpen(!open)}
          className="text-black"
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="py-4 border-b border-gray-800 uppercase tracking-widest text-sm hover:text-[#D4AF37]"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}