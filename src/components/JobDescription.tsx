
'use client';

import React, { useEffect, useState } from 'react';

const JobDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('responsibilities');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('job-description');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const responsibilities = [
    {
      title: 'Technology Trend Analysis',
      description: 'Conducted comprehensive research on emerging technologies including AI, blockchain, quantum computing, and cloud infrastructure to identify potential opportunities for BMO.',
      icon: '📊',
      impact: 'High'
    },
    {
      title: 'Market Research & Competitive Intelligence',
      description: 'Analyzed fintech market trends, competitor strategies, and industry developments to provide strategic insights for technology investment decisions.',
      icon: '🔍',
      impact: 'High'
    },
    {
      title: 'Strategic Technology Planning',
      description: 'Collaborated with senior analysts to develop technology roadmaps and strategic recommendations for digital transformation initiatives.',
      icon: '🎯',
      impact: 'Medium'
    },
    {
      title: 'Innovation Research',
      description: 'Explored cutting-edge technologies and their applications in financial services, contributing to BMO&apos;s innovation pipeline.',
      icon: '💡',
      impact: 'Medium'
    },
    {
      title: 'Data Analysis & Reporting',
      description: 'Collected, analyzed, and presented technology market data through comprehensive reports and presentations for stakeholders.',
      icon: '📈',
      impact: 'High'
    }
  ];

  const technologies = [
    { name: 'Python', level: 85, category: 'Programming', color: 'from-bmo-blue to-bmo-dark-blue' },
    { name: 'R', level: 75, category: 'Analytics', color: 'from-green-500 to-green-600' },
    { name: 'SQL', level: 90, category: 'Database', color: 'from-bmo-red to-red-600' },
    { name: 'Tableau', level: 80, category: 'Visualization', color: 'from-teal-500 to-teal-600' },
    { name: 'Power BI', level: 70, category: 'Visualization', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Excel', level: 95, category: 'Analytics', color: 'from-green-500 to-green-600' },
    { name: 'Bloomberg Terminal', level: 60, category: 'Financial', color: 'from-bmo-blue to-blue-600' },
    { name: 'Refinitiv', level: 65, category: 'Financial', color: 'from-purple-500 to-purple-600' },
  ];

  const projects = [
    {
      title: 'AI in Banking Analysis',
      description: 'Comprehensive study on AI applications in financial services, identifying key opportunities for automation and customer experience enhancement.',
      duration: '4 weeks',
      impact: 'Strategic recommendations adopted by senior leadership',
      technologies: ['Python', 'Machine Learning', 'Natural Language Processing']
    },
    {
      title: 'Fintech Market Landscape',
      description: 'Deep-dive analysis of emerging fintech companies and their potential impact on traditional banking models.',
      duration: '3 weeks',
      impact: 'Informed competitive intelligence strategy',
      technologies: ['Market Research', 'Data Analysis', 'Competitive Intelligence']
    },
    {
      title: 'Cloud Technology Assessment',
      description: 'Evaluation of cloud computing trends and their implications for BMO&apos;s technology infrastructure strategy.',
      duration: '2 weeks',
      impact: 'Contributed to cloud migration planning',
      technologies: ['Cloud Computing', 'AWS', 'Azure', 'Security Analysis']
    }
  ];

  const tabs = [
    { id: 'responsibilities', label: 'Key Responsibilities', icon: '📋' },
    { id: 'skills', label: 'Skills & Technologies', icon: '🛠️' },
    { id: 'projects', label: 'Major Projects', icon: '🚀' }
  ];

  return (
    <section id="job-description" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            My Role at BMO
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Technology Research Analyst
            <span className="gradient-text"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diving deep into emerging technologies and market trends to shape BMO&apos;s innovative future in financial services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-bmo-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-bmo-blue'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          {/* Responsibilities Tab */}
          {activeTab === 'responsibilities' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 card-hover">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-xl">{responsibility.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{responsibility.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            responsibility.impact === 'High' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {responsibility.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{responsibility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Skills & Proficiency</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Technologies and tools I&apos;ve mastered during my role as a Technology Research Analyst.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                        <span className="text-sm text-gray-500">{tech.category}</span>
                      </div>
                      <span className="text-lg font-bold text-bmo-blue">{tech.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill bg-gradient-to-r ${tech.color}`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Research Projects</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Key projects that contributed to BMO&apos;s technology strategy and innovation initiatives.
                </p>
              </div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 card-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-bmo-blue/10 text-bmo-blue rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Duration</h4>
                          <p className="text-gray-600">{project.duration}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Impact</h4>
                          <p className="text-green-700 text-sm">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDescription;
