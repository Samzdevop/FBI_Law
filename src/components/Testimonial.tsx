import { useState } from "react";

const testimonials = [
  {
    image: "/images/user1.jpg",
    text: "This law firm delivered exceptional service. Their attention to detail and professionalism exceeded my expectations.",
    name: "John Doe",
  },
  {
    image: "/images/user2.jpg",
    text: "Very reliable and efficient. They handled my case with great expertise and kept me informed throughout.",
    name: "Sarah Williams",
  },
  {
    image: "/images/user3.jpg",
    text: "Outstanding legal support. I felt confident and well-represented from start to finish.",
    name: "Michael Brown",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-3xl mx-auto py-20 text-center">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl text-[#D4AF37] px-4"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-[#D4AF37] px-4"
      >
        ›
      </button>
      <div className="flex flex-col items-center px-6">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-24 h-24 rounded-full object-cover border-2 border-[#D4AF37] mb-6"
        />
        <p className="text-white text-sm md:text-lg leading-relaxed max-w-xl">
          {testimonials[current].text}
        </p>

        <h4 className="mt-4 text-[#D4AF37] font-serif text-lg">
          {testimonials[current].name}
        </h4>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === index ? "bg-[#D4AF37]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}