
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
      title: 'IdeaVerse Platform Transformation',
      description: 'Converted static SharePoint sites into dynamic, interactive platforms with multilingual support, responsive design, and dynamic code widgets for enhanced user experience.',
      iconType: 'square'
    },
    {
      title: 'Agentic AI Research & Analysis',
      description: 'Conducted comprehensive research on agentic AI in software development, analyzed capabilities and limitations, and presented findings to Chief Architect & Innovation Officer.',
      iconType: 'triangle'
    },
    {
      title: 'Enterprise Tooling Implementation',
      description: 'Mastered BMO\'s enterprise ecosystem including Microsoft 365, Power Apps, and Power Automate to create automated workflows and streamline business processes.',
      iconType: 'circle'
    },
    {
      title: 'Emerging Technology Research',
      description: 'Researched humanoids, intent-based AI tools, market sizing of emerging trends, and supported ongoing observation papers for strategic technology insights.',
      iconType: 'diamond'
    },
    {
      title: 'Data Visualization & Analysis',
      description: 'Analyzed user engagement data from news brief emails using heatmaps and visualized month-to-month trends to optimize content strategy and reader engagement.',
      iconType: 'hexagon'
    }
  ];

  const technologies = [
    { name: 'SharePoint', category: 'Enterprise Platform' },
    { name: 'Power Apps', category: 'Enterprise Platform' },
    { name: 'Power Automate', category: 'Enterprise Platform' },
    { name: 'Microsoft 365', category: 'Enterprise Platform' },
    { name: 'HTML/CSS/JavaScript', category: 'Web Development' },
    { name: 'Data Analysis', category: 'Analytics' },
    { name: 'Research Methodologies', category: 'Research' },
    { name: 'AI & Machine Learning', category: 'Emerging Tech' },
  ];

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  const projects = [
    {
      title: 'IdeaVerse Platform Transformation',
      description: 'Led the complete transformation of static SharePoint sites into dynamic, multilingual platforms. Implemented French translations website-wide, created responsive design elements, and developed interactive code widgets that adapted to all screen sizes.',
      duration: '12 weeks',
      impact: 'Transformed BMO\'s internal innovation platform, improving user engagement and accessibility',
      technologies: ['SharePoint', 'HTML/CSS/JavaScript', 'Responsive Design', 'Multilingual Implementation']
    },
    {
      title: 'Agentic AI in Software Development Research',
      description: 'Conducted comprehensive research on agentic AI capabilities in software development, analyzed use cases and limitations, and prepared detailed presentations for executive leadership including the Chief Architect & Innovation Officer.',
      duration: '6 weeks',
      impact: 'Provided strategic insights that informed BMO\'s AI development roadmap',
      technologies: ['AI Research', 'Data Analysis', 'Executive Presentations', 'Strategic Analysis']
    },
    {
      title: 'News Brief Engagement Analytics',
      description: 'Analyzed user engagement data from weekly news brief emails using heatmap technology to identify trending topics and visualized month-to-month engagement patterns to optimize content strategy and reader retention.',
      duration: '4 weeks',
      impact: 'Improved content strategy resulting in higher reader engagement rates',
      technologies: ['Data Visualization', 'Analytics', 'Heatmap Analysis', 'Content Optimization']
    }
  ];

  const tabs = [
    { id: 'responsibilities', label: 'Key Responsibilities' },
    { id: 'skills', label: 'Skills & Technologies' },
    { id: 'projects', label: 'Major Projects' }
  ];

  return (
    <section id="job-description" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            My Role at BMO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Technology Research Analyst
            <span className="text-bmo-blue"> Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Diving deep into emerging technologies and market trends to shape BMO&apos;s innovative future in financial services.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none ${
                  activeTab === tab.id
                    ? 'bg-bmo-blue text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-bmo-blue'
                }`}
              >
                <div className="w-3 h-3 mr-2 flex items-center justify-center">
                  {index === 0 && <div className="w-2.5 h-2.5 bg-current rounded-sm"></div>}
                  {index === 1 && <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-current"></div>}
                  {index === 2 && <div className="w-2.5 h-2.5 bg-current rounded-full"></div>}
                </div>
                <span className="text-sm sm:text-base">{tab.label}</span>
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
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        {responsibility.iconType === 'square' && <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>}
                        {responsibility.iconType === 'triangle' && <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>}
                        {responsibility.iconType === 'circle' && <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>}
                        {responsibility.iconType === 'diamond' && <div className="w-3 h-3 bg-bmo-blue transform rotate-45"></div>}
                        {responsibility.iconType === 'hexagon' && <div className="w-4 h-4 bg-bmo-blue" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{responsibility.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{responsibility.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Technical Skills & Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Technologies and tools I&apos;ve mastered during my role as a Technology Research Analyst.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {Object.entries(groupedTechnologies).map(([category, skills], index) => (
                  <div key={category} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-sm transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                        {category === 'Enterprise Platform' && <div className="w-3 h-3 bg-bmo-blue rounded-sm"></div>}
                        {category === 'Web Development' && <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>}
                        {category === 'Analytics' && <div className="w-3 h-3 bg-bmo-blue rounded-full"></div>}
                        {category === 'Research' && <div className="w-2.5 h-2.5 bg-bmo-blue transform rotate-45"></div>}
                        {category === 'Emerging Tech' && <div className="w-3 h-3 bg-bmo-red" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>}
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium ${
                            category === 'Emerging Tech' 
                              ? 'bg-bmo-red/10 text-bmo-red' 
                              : 'bg-bmo-blue/10 text-bmo-blue'
                          }`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Major Research Projects</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Key projects that contributed to BMO&apos;s technology strategy and innovation initiatives.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-sm transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 sm:px-3 py-1 bg-bmo-blue/10 text-bmo-blue rounded-full text-xs sm:text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Duration</h4>
                          <p className="text-sm sm:text-base text-gray-600">{project.duration}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-1">Impact</h4>
                          <p className="text-bmo-blue text-xs sm:text-sm font-medium">{project.impact}</p>
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
