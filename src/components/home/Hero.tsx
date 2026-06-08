import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-serif tracking-wide"
        >
          WE ARE YOUR PROGRESSIVE <br />
          <span className="text-[#D4AF37]">LAW PARTNER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 max-w-2xl mt-6 text-sm md:text-base"
        >
          Our approach to delivering law services is different. We are laser-focused
          on results while protecting your bottom line.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-6 py-3 bg-[#D4AF37] text-black font-medium rounded-full"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}