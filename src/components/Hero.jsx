import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "/images/slider/slider1.png",
  "/images/slider/slider2.png",
  "/images/slider/slider3.png",
  "/images/slider/slider4.png",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full aspect-[1942/809] overflow-hidden">

      {/* Banner Image */}
      <img
        src={slides[current]}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6">

          <h1 className="text-4xl md:text-6xl font-bold">
            Sri Murugan Agency
          </h1>

          <p className="mt-5 text-xl md:text-2xl">
            உங்கள் நம்பிக்கைக்குரிய கட்டுமானப் பொருட்கள் விற்பனை நிலையம்
          </p>

          <p className="mt-4 text-lg">
            Hollow Blocks • Cement • Asian Paints • Astral Pipes
          </p>

        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index
                ? "bg-orange-500"
                : "bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;