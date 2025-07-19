
'use client';

import React, { useEffect, useState } from 'react';

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

    const element = document.getElementById('acknowledgements');
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
      name: "Sarah Chen",
      role: "Senior Technology Research Analyst",
      department: "Innovation & Technology Strategy",
      contribution: "Provided exceptional mentorship and guidance throughout my research projects, helping me develop critical analytical skills and understand the strategic implications of technology trends.",
      image: "👩‍💼",
      color: "from-bmo-blue to-bmo-dark-blue"
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Technology Research",
      department: "Digital Innovation Lab",
      contribution: "Offered valuable insights into the fintech industry and helped me understand how research translates into business strategy. His open-door policy and willingness to share knowledge were invaluable.",
      image: "👨‍💼",
      color: "from-bmo-red to-red-600"
    },
    {
      name: "Dr. Emily Thompson",
      role: "Chief Technology Officer",
      department: "BMO Technology & Operations",
      contribution: "Inspired me with her vision for the future of banking technology and provided strategic perspectives that broadened my understanding of the industry.",
      image: "👩‍🔬",
      color: "from-bmo-dark-blue to-blue-700"
    }
  ];

  const teammates = [
    {
      name: "Alex Kim",
      role: "Junior Research Analyst",
      contribution: "Great collaboration partner on multiple projects and always willing to share insights and brainstorm solutions."
    },
    {
      name: "Jessica Park",
      role: "Technology Research Intern",
      contribution: "Provided fresh perspectives and was an excellent teammate for tackling challenging research questions together."
    },
    {
      name: "David Liu",
      role: "Data Analyst",
      contribution: "Helped me navigate complex datasets and taught me advanced analytical techniques that improved my research quality."
    }
  ];

  return (
    <section id="acknowledgements" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Gratitude & Appreciation
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            The People Who Made It
            <span className="gradient-text"> Possible</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My success at BMO would not have been possible without the incredible support, mentorship, and collaboration 
            from the amazing people I had the privilege to work with.
          </p>
        </div>

        {/* Mentors Section */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Exceptional Mentors</h3>
          <div className="space-y-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg card-hover">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className={`w-24 h-24 bg-gradient-to-br ${mentor.color} rounded-3xl flex items-center justify-center text-4xl mx-auto lg:mx-0 mb-4`}>
                      {mentor.image}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h4>
                    <p className="text-bmo-blue font-semibold text-sm mb-1">{mentor.role}</p>
                    <p className="text-gray-500 text-sm">{mentor.department}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-gray-600 leading-relaxed text-lg">{mentor.contribution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Amazing Teammates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teammates.map((teammate, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  👥
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{teammate.name}</h4>
                <p className="text-bmo-blue font-semibold text-sm mb-3">{teammate.role}</p>
                <p className="text-gray-600 leading-relaxed">{teammate.contribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organizational Thanks */}
        <div className={`mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Institutional Gratitude</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BMO</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">BMO Financial Group</h4>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for providing an exceptional work environment that fosters innovation, learning, and 
                  professional growth. The opportunity to contribute to meaningful research at one of Canada&apos;s 
                  leading financial institutions has been invaluable.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">UG</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">University of Guelph</h4>
                <p className="text-gray-600 leading-relaxed">
                  Grateful for the Co-operative Education program that made this opportunity possible and for 
                  the academic foundation that prepared me for this challenging and rewarding experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-gradient-to-br from-bmo-red to-bmo-blue rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">A Heartfelt Thank You</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
              To everyone who contributed to my growth and success during this work term - your support, 
              guidance, and friendship have made this experience truly unforgettable. I look forward to 
              maintaining these relationships and continuing to learn from each of you.
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
