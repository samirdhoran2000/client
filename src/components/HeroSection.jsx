import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ mediaItems = [] }) => {
  // State to track current media item
  const [currentMedia, setCurrentMedia] = useState(0);

  // Function to handle video end
  const handleVideoEnd = () => {
    setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
  };

  // Effect to handle photo timing
  useEffect(() => {
    if (!mediaItems.length) return;

    if (mediaItems[currentMedia]?.type === "image") {
      const timer = setTimeout(() => {
        setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
      }, mediaItems[currentMedia].duration);

      return () => clearTimeout(timer);
    }
  }, [currentMedia, mediaItems]);

  return (
    <section className="relative min-h-screen flex items-center justify-end">
      <div className="absolute inset-0">
        {mediaItems[currentMedia]?.type === "image" ? (
          <img
            src={mediaItems[currentMedia].src}
            alt="Hero image"
            className="w-full h-screen object-cover"
          />
        ) : (
          <video
            src={mediaItems[currentMedia].src}
            className="w-full h-screen object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/90 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          3D Printing and Manufacturing Services
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Using cutting-edge technology to rapidly engineer, prototype, and
          manufacture custom products in the United States.
        </h2>
        <a
          href="/quote-picker/"
          className="inline-flex items-center text-3xl underline bg-teal-500 hover:bg-black hover:text-white font-semibold py-5 px-6 rounded-xl"
        >
          Get A Quote
          <ArrowRight className="ml-4 w-6 h-6 text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
