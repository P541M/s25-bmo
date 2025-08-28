"use client";

import React, { useEffect, useState } from "react";
import BMOLogo from "./BMOLogo";

const CompanyProfile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("company-profile");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { number: "207", label: "Years of Innovation", color: "text-bmo-blue" },
    { number: "13M+", label: "Customers Served", color: "text-bmo-dark-blue" },
    { number: "45K+", label: "Employees Worldwide", color: "text-bmo-red" },
    {
      number: "$1T+",
      label: "Assets Under Management",
      color: "text-bmo-blue",
    },
  ];

  return (
    <section id="company-profile" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            About BMO Financial Group
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Innovating the Future of
            <span className="text-bmo-blue"> Banking & Finance</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BMO Financial Group is one of North America&apos;s leading financial
            institutions, driving innovation and transformation in the financial
            services industry for over two centuries.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-fade-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-bmo-blue">
                  BMO Financial Group
                </span>{" "}
                stands as Canada&apos;s fourth-largest bank and one of the most
                innovative financial institutions in North America. Founded in
                1817 in Montreal, BMO has evolved from a regional bank into a
                global financial powerhouse, serving over 13 million customers
                across Canada, the United States, and internationally.
              </p>

              <p>
                What sets BMO apart is its unwavering commitment to{" "}
                <span className="font-semibold text-bmo-blue">
                  technological innovation
                </span>{" "}
                and digital transformation. The bank has consistently invested
                in emerging technologies, artificial intelligence, and data
                analytics to enhance customer experiences and drive operational
                efficiency.
              </p>

              <p>
                Guided by their purpose to{" "}
                <span className="font-semibold text-bmo-blue">
                  &ldquo;Boldly Grow the Good in business and life,&rdquo;
                </span>{" "}
                BMO creates lasting, positive change for customers, communities,
                and employees. As a Technology Research Analyst, I had the
                unique opportunity to contribute to BMO&apos;s innovation
                ecosystem, working on both the IdeaVerse platform transformation
                and cutting-edge AI research initiatives.
              </p>
            </div>
          </div>

          {/* BMO Headquarters Photo */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "animate-fade-in-right"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="aspect-[4/3] w-full mb-4 overflow-hidden rounded-xl">
                <img
                  src="/images/bmo_hq_photo.jpeg"
                  alt="BMO Financial Group Headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  BMO Financial Group
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Headquarters • Toronto, Ontario
                </p>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-2">
                    <BMOLogo size="sm" />
                  </div>
                  <span className="text-sm text-bmo-blue font-medium">
                    Banking for a Better World
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="font-semibold text-gray-900">1817</div>
                    <div>Founded</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="font-semibold text-gray-900">$75B+</div>
                    <div>Market Cap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden mb-8 sm:mb-12">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-center min-w-[160px] flex-shrink-0 snap-center"
                >
                  <div className="text-2xl sm:text-3xl font-semibold text-bmo-blue mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow duration-300"
              >
                <div className="text-3xl font-semibold text-bmo-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Why BMO Leads Innovation
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              BMO&apos;s commitment to innovation and technology excellence
              creates an inspiring environment for growth and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Digital Innovation Leader
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Pioneering the future of banking through cutting-edge technology
                and digital transformation initiatives.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Sustainable Finance
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Committed to sustainable finance with a $300 billion climate
                commitment by 2030.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Technology Excellence
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Investing heavily in AI, machine learning, enterprise tooling,
                and cloud technologies to drive innovation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-3 h-3 bg-bmo-blue transform rotate-45"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Customer-Centric
              </h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Focused on delivering exceptional customer experiences through
                innovative financial solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
