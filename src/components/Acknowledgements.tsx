"use client";

import React, { useEffect, useState } from "react";

const Acknowledgements = () => {
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

    const element = document.getElementById("acknowledgements");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const mentors = [
    {
      name: "Sharon O'Sullivan",
      role: "Manager & Career Mentor",
      department: "Technology Innovation Team",
      contribution:
        "Provided exceptional mentorship throughout my entire BMO journey, sharing invaluable knowledge about potential career paths and what to look for both at BMO and in future opportunities. Her comprehensive guidance and support helped shape my professional development and gave me the confidence to navigate my career with clarity and purpose.",
      image: "👩‍💼",
      color: "from-bmo-blue to-bmo-dark-blue",
    },
    {
      name: "Omosefe Alasa",
      role: "IdeaVerse Project Manager",
      department: "Platform Development Team",
      contribution:
        "Served as an incredibly understanding and supportive mentor throughout the IdeaVerse platform transformation. She created an environment where I could grow and learn from mistakes while consistently challenging me to reach new heights. Her balanced approach of encouragement and accountability was instrumental in my professional growth.",
      image: "👨‍💼",
      color: "from-bmo-red to-red-600",
    },
    {
      name: "Marc St. Aubin",
      role: "Research Lead",
      department: "Emerging Technologies Research",
      contribution:
        "Opened the door to exploring cutting-edge technologies, allowing me to dive deep into agentic AI research and other emerging tech areas. His encouragement to push boundaries and explore new technological frontiers was transformational, giving me the freedom to grow while providing the guidance needed to produce meaningful research outcomes.",
      image: "👨‍🔬",
      color: "from-bmo-dark-blue to-blue-700",
    },
  ];

  const teammates = [
    {
      name: "Tomas Penney",
      role: "Research Team Colleague",
      contribution:
        "Marc's collaborative partner who played a crucial role in my early onboarding experience. His mentorship during my first days at BMO helped me navigate the research environment with confidence and provided the foundation I needed to succeed in both IdeaVerse development and emerging technology research.",
    },
    {
      name: "Taha Yar Khan",
      role: "Fellow Intern & Peer",
      contribution:
        "My fellow intern who became not just a colleague but a true friend throughout our BMO journey. We bonded over shared experiences, supported each other through challenges, and created lasting memories. Having someone to share the intern experience with made the entire work term more meaningful and enjoyable.",
    },
  ];

  return (
    <section
      id="acknowledgements"
      className="section-padding bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Gratitude & Appreciation
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            The People Who Made It
            <span className="gradient-text"> Possible</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My success at BMO would not have been possible without the
            incredible support, mentorship, and collaboration from the amazing
            people I had the privilege to work with.
          </p>
        </div>

        {/* Mentors Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Exceptional Mentors
          </h3>
          <div className="space-y-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${mentor.color} rounded-3xl flex items-center justify-center text-4xl mx-auto lg:mx-0 mb-4`}
                    >
                      {mentor.image}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {mentor.name}
                    </h4>
                    <p className="text-bmo-blue font-semibold text-sm mb-1">
                      {mentor.role}
                    </p>
                    <p className="text-gray-500 text-sm">{mentor.department}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {mentor.contribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Colleagues & Friends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teammates.map((teammate, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  👥
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {teammate.name}
                </h4>
                <p className="text-bmo-blue font-semibold text-sm mb-3">
                  {teammate.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {teammate.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Recognition Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Special Recognition
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center text-4xl mx-auto lg:mx-0 mb-4">
                    🤝
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Emma Connell
                  </h4>
                  <p className="text-bmo-blue font-semibold text-sm mb-1">
                    BMO Recruiter
                  </p>
                  <p className="text-gray-500 text-sm">Talent Acquisition</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    The person who made it all possible! Emma reached out to me
                    with this incredible opportunity and made the entire process
                    of joining BMO absolutely delightful. Her professionalism,
                    warmth, and attention to detail set the perfect tone for
                    what would become a transformational work experience. Thank
                    you for believing in me and opening the door to this amazing
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Thanks */}
        <div
          className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Institutional Gratitude
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BMO</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  BMO Financial Group
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for providing an exceptional work environment that
                  fosters innovation, learning, and professional growth. The
                  opportunity to contribute to both IdeaVerse platform
                  transformation and cutting-edge AI research at one of
                  Canada&apos;s leading financial institutions has been
                  invaluable.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">UG</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  University of Guelph
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Grateful for the Co-operative Education program that made this
                  opportunity possible and for the academic foundation that
                  prepared me for this challenging and rewarding experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="bg-gradient-to-br from-bmo-red to-bmo-blue rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">A Heartfelt Thank You</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
              To Sharon, Omosefe, Marc, Tomas, Taha, and Emma—each of you
              contributed uniquely to my growth and success during this
              transformational work term at BMO. From career guidance and
              project mentorship to research opportunities and lasting
              friendships, your support has shaped not just my professional
              development but also my personal journey. The relationships
              we&apos;ve built and the lessons I&apos;ve learned will continue
              to guide my path in technology and innovation for years to come.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-2xl font-semibold">
              <span className="mr-2">🙏</span>
              Forever Grateful
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgements;
