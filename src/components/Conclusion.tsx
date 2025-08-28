
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
      description: "of Platform Development & Research",
      icon: "📅"
    },
    {
      metric: "15+ Projects",
      description: "IdeaVerse & Research Initiatives",
      icon: "🚀"
    },
    {
      metric: "100%",
      description: "Learning Goal Achievement Rate",
      icon: "🎯"
    },
    {
      metric: "C-Suite",
      description: "Executive Presentations Delivered",
      icon: "💼"
    }
  ];

  const futureGoals = [
    {
      title: "Enterprise Technology Expertise",
      description: "Build upon my Microsoft 365 and Power Platform skills to become a leader in enterprise technology solutions.",
      icon: "⚙️"
    },
    {
      title: "AI Research & Implementation",
      description: "Continue exploring agentic AI and emerging technologies to drive innovation in financial services.",
      icon: "🤖"
    },
    {
      title: "Strategic Technology Leadership",
      description: "Leverage my research and presentation experience to influence technology decisions in future roles.",
      icon: "🎯"
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
                My experience as a Technology Research Analyst at BMO has been transformational, providing hands-on 
                expertise in both <span className="font-semibold text-bmo-blue">enterprise platform development</span> and 
                <span className="font-semibold text-bmo-red"> cutting-edge AI research</span>. Through the IdeaVerse 
                platform transformation and comprehensive agentic AI studies, I gained invaluable experience in 
                translating complex technical concepts into strategic business solutions.
              </p>

              <p>
                The opportunity to master BMO&apos;s enterprise tooling ecosystem—including Microsoft 365, Power Apps, 
                and Power Automate—while simultaneously conducting research that informed executive decision-making has 
                enhanced both my technical capabilities and strategic thinking skills. Presenting findings to the 
                Chief Architect & Innovation Officer demonstrated the real-world impact of thorough research methodology.
              </p>

              <p>
                Perhaps most importantly, this experience reinforced my adaptability and resilience when managing 
                competing priorities, from time-sensitive hackathon tasks to comprehensive multilingual platform 
                implementations. The combination of <span className="font-semibold text-bmo-dark-blue">enterprise tooling mastery</span> and 
                <span className="font-semibold text-bmo-blue"> strategic research capabilities</span> has prepared me 
                to contribute meaningfully to technology-driven financial services innovation.
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
              This work term at BMO has provided me with a comprehensive foundation in enterprise technology solutions, 
              strategic research methodologies, and executive-level communication. From mastering Microsoft 365 
              ecosystems to presenting AI research to C-Suite leadership, I&apos;m excited to apply these skills as I 
              continue my academic journey and pursue opportunities at the intersection of technology and business innovation.
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
