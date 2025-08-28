"use client";

import React, { useEffect, useState } from "react";
import BMOLogo from "./BMOLogo";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center justify-center bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Main Title */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h1 className="mb-6 sm:mb-8">
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-2 sm:mb-3 tracking-wide">
              Technology Innovation at
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-bmo-blue font-semibold tracking-tight">
              BMO Financial Group
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            My Journey as a{" "}
            <span className="font-medium text-bmo-blue">
              Technology Research Analyst
            </span>
            <br />
            <span className="text-gray-500 text-sm sm:text-base md:text-lg">
              Summer 2025 Work Term Report
            </span>
          </p>
        </div>

        {/* BMO Logo */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
            <BMOLogo size="lg" />
          </div>
        </div>

        {/* Statistics */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden mb-8 sm:mb-12">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1">
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center min-w-[200px] flex-shrink-0 snap-center">
                <div className="text-2xl sm:text-3xl font-semibold text-bmo-blue mb-2">
                  16
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Weeks of Innovation
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center min-w-[200px] flex-shrink-0 snap-center">
                <div className="text-2xl sm:text-3xl font-semibold text-bmo-red mb-2">
                  8+
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Research & Development Projects
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 text-center min-w-[200px] flex-shrink-0 snap-center">
                <div className="text-2xl sm:text-3xl font-semibold text-bmo-green mb-2">
                  ∞
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Possibilities Explored
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8 lg:mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-semibold text-bmo-blue mb-2">
                16
              </div>
              <div className="text-gray-600 text-sm">Weeks of Innovation</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-semibold text-bmo-red mb-2">8+</div>
              <div className="text-gray-600 text-sm">
                Research & Development Projects
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="text-3xl font-semibold text-bmo-green mb-2">
                ∞
              </div>
              <div className="text-gray-600 text-sm">
                Possibilities Explored
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <button
            onClick={() =>
              document
                .getElementById("introduction")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-bmo-blue hover:bg-blue-700 active:bg-blue-800 text-white text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-medium transition-colors duration-300 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-bmo-blue focus:ring-offset-2"
          >
            Explore My Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
