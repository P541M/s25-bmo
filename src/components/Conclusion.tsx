"use client";

import React, { useEffect, useState } from "react";

const Conclusion = () => {
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

    const element = document.getElementById("conclusion");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const achievements = [
    {
      metric: "16 Weeks",
      description: "of Platform Development & Research",
      iconType: "square",
    },
    {
      metric: "8+ Projects",
      description: "IdeaVerse & Research Initiatives",
      iconType: "triangle",
    },
    {
      metric: "100%",
      description: "Learning Goal Achievement Rate",
      iconType: "circle",
    },
    {
      metric: "C-Suite",
      description: "Executive Presentations Delivered",
      iconType: "diamond",
    },
  ];

  const futureGoals = [
    {
      title: "Enterprise Technology Expertise",
      description:
        "Build upon my Microsoft 365 and Power Platform skills to become a leader in enterprise technology solutions.",
      iconType: "square",
    },
    {
      title: "AI Research & Implementation",
      description:
        "Continue exploring agentic AI and emerging technologies to drive innovation in financial services.",
      iconType: "triangle",
    },
    {
      title: "Strategic Technology Leadership",
      description:
        "Leverage my research and presentation experience to influence technology decisions in future roles.",
      iconType: "circle",
    },
  ];

  return (
    <section id="conclusion" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Reflections & Future
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            A Journey of
            <span className="text-bmo-blue"> Growth & Discovery</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reflecting on my transformative experience as a Technology Research
            Analyst at BMO and the exciting path ahead.
          </p>
        </div>

        {/* Achievement Highlights */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8 sm:mb-12">
            Work Term Highlights
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {achievement.iconType === "square" && (
                    <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>
                  )}
                  {achievement.iconType === "triangle" && (
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>
                  )}
                  {achievement.iconType === "circle" && (
                    <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>
                  )}
                  {achievement.iconType === "diamond" && (
                    <div className="w-3 h-3 bg-bmo-blue transform rotate-45"></div>
                  )}
                </div>
                <div
                  className={`text-lg sm:text-xl lg:text-2xl font-semibold mb-2 ${
                    index === 1 || index === 3
                      ? "text-bmo-red"
                      : "text-bmo-blue"
                  }`}
                >
                  {achievement.metric}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BMO Hallway Photo */}
        <div
          className={`mb-16 sm:mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow duration-300">
            <div className="aspect-[16/9] w-full mb-4 overflow-hidden rounded-xl">
              <img
                src="/images/hallway_img.JPG"
                alt="BMO First Canadian Place 4th Floor Hallway"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                BMO Place
              </h3>
              <p className="text-sm text-gray-600">
                4th Floor Innovation Hub • Toronto, Ontario
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 sm:mb-20">
          {/* Reflections */}
          <div
            className={`transition-all duration-1000 delay-700 ${
              isVisible
                ? "animate-fade-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Key Learnings & Reflections
            </h3>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                My experience as a Technology Research Analyst at BMO has been
                transformational, providing hands-on expertise in both{" "}
                <span className="font-semibold text-bmo-blue">
                  enterprise platform development
                </span>{" "}
                and
                <span className="font-semibold text-bmo-blue">
                  {" "}
                  cutting-edge AI research
                </span>
                . Through the IdeaVerse platform transformation and
                comprehensive agentic AI studies, I gained invaluable experience
                in translating complex technical concepts into strategic
                business solutions.
              </p>

              <p>
                The opportunity to master BMO&apos;s enterprise tooling
                ecosystem—including Microsoft 365, Power Apps, and Power
                Automate—while simultaneously conducting research that informed
                executive decision-making has enhanced both my technical
                capabilities and strategic thinking skills. Presenting findings
                to the Chief Architect & Innovation Officer demonstrated the
                real-world impact of thorough research methodology.
              </p>

              <p>
                Perhaps most importantly, this experience reinforced my
                adaptability and resilience when managing competing priorities,
                from time-sensitive hackathon tasks to comprehensive
                multilingual platform implementations. The combination of{" "}
                <span className="font-semibold text-bmo-blue">
                  enterprise tooling mastery
                </span>{" "}
                and
                <span className="font-semibold text-bmo-blue">
                  {" "}
                  strategic research capabilities
                </span>{" "}
                has prepared me to contribute meaningfully to technology-driven
                financial services innovation.
              </p>
            </div>
          </div>

          {/* Future Goals */}
          <div
            className={`transition-all duration-1000 delay-900 ${
              isVisible
                ? "animate-fade-in-right"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
              Looking Forward
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {futureGoals.map((goal, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      {goal.iconType === "square" && (
                        <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>
                      )}
                      {goal.iconType === "triangle" && (
                        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>
                      )}
                      {goal.iconType === "circle" && (
                        <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                        {goal.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div
          className={`transition-all duration-1000 delay-1100 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              A Foundation for the Future
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              This work term at BMO has provided me with a comprehensive
              foundation in enterprise technology solutions, strategic research
              methodologies, and executive-level communication. From mastering
              Microsoft 365 ecosystems to presenting AI research to C-Suite
              leadership, I&apos;m excited to apply these skills as I continue
              my academic journey and pursue opportunities at the intersection
              of technology and business innovation.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-bmo-blue/10 text-bmo-blue rounded-full font-medium text-sm sm:text-base mb-4">
              Ready for the Next Challenge
            </div>
            <div className="text-sm">
              <a 
                href="https://www.linkedin.com/posts/pevidena_bmo-internship-activity-7362230359742189568-LL9e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj3VtwBhGW7VMlQLd8czaQqW_7Idb6PuZ8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-bmo-blue transition-colors duration-300"
              >
                → Read my LinkedIn post
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
