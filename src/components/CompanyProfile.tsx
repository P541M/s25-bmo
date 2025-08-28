
'use client';

import React, { useEffect, useState } from 'react';
import BMOLogo from './BMOLogo';

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

    const element = document.getElementById('company-profile');
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
    { number: '207', label: 'Years of Innovation', color: 'text-bmo-blue' },
    { number: '13M+', label: 'Customers Served', color: 'text-bmo-dark-blue' },
    { number: '45K+', label: 'Employees Worldwide', color: 'text-bmo-red' },
    { number: '$1T+', label: 'Assets Under Management', color: 'text-bmo-blue' },
  ];

  const highlights = [
    {
      title: 'Digital Innovation Leader',
      description: 'Pioneering the future of banking through cutting-edge technology and digital transformation initiatives.',
      icon: '💡',
      color: 'from-bmo-blue to-bmo-dark-blue'
    },
    {
      title: 'Sustainable Finance',
      description: 'Committed to sustainable finance with a $300 billion climate commitment by 2030.',
      icon: '🌱',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Technology Excellence',
      description: 'Investing heavily in AI, machine learning, enterprise tooling, and cloud technologies to drive innovation.',
      icon: '🚀',
      color: 'from-bmo-red to-red-600'
    },
    {
      title: 'Customer-Centric',
      description: 'Focused on delivering exceptional customer experiences through innovative financial solutions.',
      icon: '❤️',
      color: 'from-bmo-blue to-blue-600'
    }
  ];

  return (
    <section id="company-profile" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            About BMO Financial Group
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Innovating the Future of
            <span className="gradient-text"> Banking & Finance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BMO Financial Group is one of North America&apos;s leading financial institutions, 
            driving innovation and transformation in the financial services industry for over two centuries.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
          }`}>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-bmo-blue">BMO Financial Group</span> stands 
                as Canada&apos;s fourth-largest bank and one of the most innovative financial institutions 
                in North America. Founded in 1817 in Montreal, BMO has evolved from a regional bank 
                into a global financial powerhouse, serving over 13 million customers across Canada, 
                the United States, and internationally.
              </p>

              <p>
                What sets BMO apart is its unwavering commitment to <span className="font-semibold text-bmo-red">
                technological innovation</span> and digital transformation. The bank has consistently 
                invested in emerging technologies, artificial intelligence, and data analytics to 
                enhance customer experiences and drive operational efficiency.
              </p>

              <p>
                Guided by their purpose to <span className="font-semibold text-bmo-blue">"Boldly Grow the Good 
                in business and life,"</span> BMO creates lasting, positive change for customers, communities, 
                and employees. As a Technology Research Analyst, I had the unique opportunity to contribute to 
                BMO&apos;s innovation ecosystem, working on both the IdeaVerse platform transformation and 
                cutting-edge AI research initiatives.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-bmo-blue to-bmo-dark-blue text-white rounded-2xl font-semibold">
                <span className="mr-2">🏆</span>
                Canada&apos;s Most Innovative Bank
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
          }`}>
            <div className="relative">
              {/* Main Company Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl card-hover">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 p-3 shadow-md">
                    <BMOLogo size="md" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">BMO Financial Group</h3>
                  <p className="text-bmo-blue font-semibold">Banking for a Better World</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-semibold text-gray-900">1817</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Headquarters</span>
                    <span className="font-semibold text-gray-900">Toronto, ON</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Market Cap</span>
                    <span className="font-semibold text-gray-900">$75B+ CAD</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-600">Stock Exchange</span>
                    <span className="font-semibold text-gray-900">TSX: BMO</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-bmo-red to-red-400 rounded-2xl animate-float opacity-70 hidden lg:block"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-bmo-blue to-blue-400 rounded-2xl animate-float opacity-70 hidden lg:block" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="text-center mb-12">
            <h3 className="heading-md text-gray-900 mb-4">Why BMO Leads Innovation</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BMO&apos;s commitment to innovation and technology excellence creates an inspiring environment for growth and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
