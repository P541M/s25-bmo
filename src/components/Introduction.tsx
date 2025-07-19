
'use client';

import React, { useEffect, useState } from 'react';
import BMOLogo from './BMOLogo';

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

    const element = document.getElementById('introduction');
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
                Summer 2025 Work Term
              </span>
              <h2 className="heading-lg text-gray-900 mb-6">
                Exploring the Future of
                <span className="gradient-text"> Financial Technology</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                From May to August 2025, I had the incredible opportunity to work as a 
                <span className="font-semibold text-bmo-blue"> Technology Research Analyst</span> at 
                BMO Financial Group, one of Canada&apos;s leading financial institutions. This role placed me 
                at the intersection of cutting-edge technology and financial services, where innovation 
                drives the future of banking.
              </p>

              <p>
                Throughout this 16-week journey, I delved deep into emerging technologies, 
                analyzed market trends, and contributed to research initiatives that could shape 
                BMO&apos;s technological roadmap. This report chronicles my experiences, learnings, 
                and contributions during this transformative work term.
              </p>

              <p>
                The insights I&apos;ve gained and the projects I&apos;ve worked on have not only expanded 
                my technical expertise but also provided me with a comprehensive understanding 
                of how technology can revolutionize the financial services industry.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-sm text-gray-600">Weeks of Deep Research</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-teal-600 mb-2">∞</div>
                <div className="text-sm text-gray-600">Insights Discovered</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-bmo-blue to-bmo-dark-blue rounded-3xl p-8 text-white card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 p-2">
                    <BMOLogo size="sm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Technology Research Analyst</h3>
                    <p className="text-blue-200">Summer 2025 • Toronto, ON</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span>Emerging Technology Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span>Market Research & Insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span>Strategic Technology Planning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                    <span>Innovation Research</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-bmo-red to-red-400 rounded-2xl animate-float opacity-60 hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-bmo-green to-green-400 rounded-2xl animate-float opacity-60 hidden lg:block" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Report Overview */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">What You&apos;ll Discover</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This comprehensive report covers my journey, achievements, and insights gained during my work term at BMO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🏢</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">BMO Overview</h4>
              <p className="text-gray-600">Learn about BMO&apos;s innovation culture and technology landscape</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-teal-600 text-xl">🔬</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Research Projects</h4>
              <p className="text-gray-600">Explore the cutting-edge research and analysis I conducted</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Goals & Growth</h4>
              <p className="text-gray-600">Discover the skills I developed and objectives I achieved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
