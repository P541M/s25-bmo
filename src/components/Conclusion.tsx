
'use client';

import React, { useEffect, useState } from 'react';

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

    const element = document.getElementById('conclusion');
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
      description: "of Innovation & Learning",
      icon: "📅"
    },
    {
      metric: "5+ Projects",
      description: "Research Initiatives Completed",
      icon: "🔬"
    },
    {
      metric: "100%",
      description: "Goal Achievement Rate",
      icon: "🎯"
    },
    {
      metric: "$2M+",
      description: "Value of Influenced Decisions",
      icon: "💰"
    }
  ];

  const futureGoals = [
    {
      title: "Advanced Technology Leadership",
      description: "Pursue roles that combine deep technical expertise with strategic business leadership in fintech.",
      icon: "🚀"
    },
    {
      title: "Continued Learning",
      description: "Stay at the forefront of emerging technologies through continuous professional development.",
      icon: "📚"
    },
    {
      title: "Industry Impact",
      description: "Contribute to transformative innovations that shape the future of financial services.",
      icon: "🌟"
    }
  ];

  return (
    <section id="conclusion" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Reflections & Future
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            A Journey of
            <span className="gradient-text"> Growth & Discovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reflecting on my transformative experience as a Technology Research Analyst at BMO and the exciting path ahead.
          </p>
        </div>

        {/* Achievement Highlights */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Work Term Highlights</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-bmo-blue/10 to-bmo-blue/20 rounded-2xl p-6 card-hover">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <div className="text-2xl font-bold text-bmo-blue mb-2">{achievement.metric}</div>
                <div className="text-gray-600 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Reflections */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Learnings & Reflections</h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                My experience as a Technology Research Analyst at BMO has been nothing short of transformational. 
                Working at the intersection of <span className="font-semibold text-bmo-blue">cutting-edge technology</span> and 
                <span className="font-semibold text-bmo-red"> financial innovation</span> has provided me with 
                invaluable insights into how emerging technologies are reshaping the banking industry.
              </p>

              <p>
                The opportunity to contribute to strategic research initiatives worth millions of dollars has 
                not only enhanced my technical capabilities but also developed my business acumen and strategic 
                thinking skills. I&apos;ve learned that successful technology research requires both deep technical 
                understanding and the ability to translate complex concepts into actionable business insights.
              </p>

              <p>
                Perhaps most importantly, this experience has reinforced my passion for 
                <span className="font-semibold text-bmo-dark-blue"> financial technology</span> and confirmed my 
                desire to pursue a career at the forefront of banking innovation. The mentorship I received 
                and the professional relationships I built will continue to guide my future career decisions.
              </p>
            </div>
          </div>

          {/* Future Goals */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Looking Forward</h3>
            <div className="space-y-6">
              {futureGoals.map((goal, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 card-hover">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                      <span className="text-xl">{goal.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{goal.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">A Foundation for the Future</h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              This work term at BMO has provided me with a solid foundation in financial technology research, 
              strategic analysis, and professional development. I&apos;m excited to apply these skills and insights 
              as I continue my academic journey and pursue opportunities in the dynamic world of fintech innovation.
            </p>
            <div className="mt-8 inline-flex items-center px-6 py-3 bg-white/20 rounded-2xl font-semibold">
              <span className="mr-2">🚀</span>
              Ready for the Next Challenge
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
