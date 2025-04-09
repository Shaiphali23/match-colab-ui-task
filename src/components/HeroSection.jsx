import React from "react";
import { Carousel } from "flowbite-react";
import hero1 from "../assets/Bg-1.jpg";
import hero2 from "../assets/bg-3.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-900">
      <div className="h-[600px] bg-[#F8F8F8] px-10 py-4">
        <Carousel
          slideInterval={4000}
          indicators={false}
          className="rounded-none [&_.carousel-indicators]:hidden"
        >
          {/* Slide 1: Full background image */}
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${hero1})`,
              backgroundSize: "cover",
            }}
          ></div>

          {/* Slide 2: Headline and subheadline */}
          <div className="flex flex-col items-center justify-center h-full text-center px-4 text-white bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover the Unknown
            </h2>
            <p className="text-lg md:text-xl max-w-2xl">
              Explore places you've never been before, with stories waiting to
              be told.
            </p>
          </div>

          {/* Slide 3: Text + Image side by side */}
          <div className="flex flex-col md:flex-row items-center justify-center min-h-full bg-white text-gray-800 px-6">
            <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">Adventure Awaits</h3>
              <p className="text-lg">
                Gear up for your next journey with top-rated equipment and
                expert guides.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={hero2}
                alt="Adventure"
                className="rounded-lg shadow-lg max-h-[400px] object-contain"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
