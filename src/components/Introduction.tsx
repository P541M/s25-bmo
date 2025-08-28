"use client";

import React, { useEffect, useState } from "react";
import BMOLogo from "./BMOLogo";

const Introduction = () => {
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

    const element = document.getElementById("introduction");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="introduction" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Side */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "animate-fade-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
                Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Exploring the Future of
                <span className="text-bmo-blue"> Financial Technology</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                From May to August 2025, I had the incredible opportunity to
                work as a
                <span className="font-semibold text-bmo-blue">
                  {" "}
                  Technology Research Analyst
                </span>{" "}
                at BMO Financial Group, one of Canada&apos;s leading financial
                institutions. This role placed me at the intersection of
                cutting-edge technology research and practical innovation
                implementation, contributing to both BMO&apos;s internal
                platforms and strategic technology insights.
              </p>

              <p>
                My work centered around two major areas:{" "}
                <span className="font-semibold text-bmo-blue">
                  IdeaVerse development
                </span>{" "}
                and
                <span className="font-semibold text-bmo-blue">
                  {" "}
                  emerging technology research
                </span>
                . Through IdeaVerse, I transformed static SharePoint sites into
                dynamic, multilingual platforms with responsive design and
                interactive widgets. Simultaneously, I conducted comprehensive
                research on agentic AI, humanoids, and emerging tech trends,
                ultimately presenting my findings to BMO&apos;s Chief Architect
                & Innovation Officer.
              </p>

              <p>
                This experience provided me with hands-on expertise in
                enterprise tooling ecosystems, advanced research methodologies,
                and strategic technology analysis. From managing time-sensitive
                hackathon tasks to implementing French translations across
                entire websites, every project enhanced both my technical
                capabilities and business acumen in the financial technology
                sector.
              </p>
            </div>
          </div>

          {/* Photo Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-fade-in-right"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <div className="relative">
              {/* Professional Photo */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="aspect-[4/5] w-full mb-4 overflow-hidden rounded-xl">
                  <img
                    src="/images/solo_photo.jpeg"
                    alt="Professional photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Technology Research Analyst
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Summer 2025 • Toronto, ON
                  </p>
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-8 h-8  flex items-center justify-center mr-2">
                      <BMOLogo size="sm" />
                    </div>
                    <span className="text-sm text-bmo-blue font-medium">
                      BMO Financial Group
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Overview */}
        <div
          className={`mt-16 sm:mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              What You&apos;ll Discover
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              This comprehensive report covers my journey, achievements, and
              insights gained during my work term at BMO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                BMO Innovation
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Explore Canada&apos;s 4th largest bank&apos;s technology
                transformation journey
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[14px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                IdeaVerse & Research
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Discover the platform transformations and AI research
                initiatives
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Learning Outcomes
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                Explore my professional development through BMO&apos;s
                enterprise ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
