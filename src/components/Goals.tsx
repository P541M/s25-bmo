
'use client';

import React, { useEffect, useState } from 'react';

const Goals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedGoals, setExpandedGoals] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('goals');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleGoal = (index: number) => {
    setExpandedGoals(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const goals = [
    {
      title: "Master Financial Technology Research Methodologies",
      description: "Develop comprehensive skills in financial technology research, including market analysis techniques, competitive intelligence gathering, and technology trend forecasting to become a proficient analyst in the fintech space.",
      challenges: [
        "Learning complex financial instruments and their technological applications",
        "Mastering various research databases and analytical tools",
        "Understanding the intersection between technology and regulatory compliance"
      ],
      skills: [
        "Financial market analysis",
        "Technology trend forecasting",
        "Competitive intelligence research",
        "Data analysis and visualization",
        "Financial modeling"
      ],
      results: "Successfully conducted 5+ comprehensive research projects, becoming proficient in Bloomberg Terminal, Refinitiv, and various analytical tools. Developed a systematic approach to technology trend analysis that was adopted by the team for future research initiatives.",
      status: "Achieved",
      icon: "🔬",
      color: "from-bmo-blue to-bmo-dark-blue"
    },
    {
      title: "Build Strong Professional Networks in Fintech",
      description: "Establish meaningful connections with professionals across BMO's technology and innovation teams, as well as external fintech industry contacts to build a robust professional network for future career growth.",
      challenges: [
        "Overcoming initial hesitation to reach out to senior professionals",
        "Finding common ground for meaningful conversations",
        "Balancing networking activities with core work responsibilities"
      ],
      skills: [
        "Professional networking",
        "Communication and relationship building",
        "Industry knowledge application",
        "Cross-functional collaboration",
        "Professional presence"
      ],
      results: "Built relationships with 15+ professionals across different departments, participated in 3 industry networking events, and established mentorship relationships with senior analysts. These connections provided valuable insights and potential future opportunities.",
      status: "Exceeded",
      icon: "🤝",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Develop Advanced Data Analysis and Visualization Skills",
      description: "Enhance technical capabilities in data analysis, statistical modeling, and data visualization to provide more impactful insights and recommendations for BMO's strategic technology decisions.",
      challenges: [
        "Learning advanced statistical analysis techniques",
        "Mastering professional-grade visualization tools",
        "Applying statistical concepts to real-world financial data"
      ],
      skills: [
        "Python programming for data analysis",
        "Advanced Excel and statistical modeling",
        "Tableau and Power BI proficiency",
        "SQL database querying",
        "Statistical analysis and interpretation"
      ],
      results: "Achieved 90% proficiency in SQL, 85% in Python, and 80% in Tableau. Created automated data analysis workflows that reduced research time by 30% and produced visually compelling reports that were well-received by stakeholders.",
      status: "Achieved",
      icon: "📊",
      color: "from-bmo-red to-red-600"
    },
    {
      title: "Contribute Meaningful Strategic Insights to BMO's Innovation Pipeline",
      description: "Move beyond basic research tasks to provide strategic recommendations and insights that could influence BMO's technology investment decisions and innovation strategies.",
      challenges: [
        "Developing business acumen to understand strategic implications",
        "Learning to present complex technical concepts to non-technical stakeholders",
        "Building confidence to share recommendations with senior leadership"
      ],
      skills: [
        "Strategic thinking and analysis",
        "Business communication",
        "Presentation and storytelling",
        "Technology-business alignment",
        "Executive summary writing"
      ],
      results: "Delivered 3 strategic research reports that influenced investment decisions worth $2M+. My AI in Banking analysis was cited in executive briefings and contributed to BMO's machine learning strategy roadmap.",
      status: "Exceeded",
      icon: "💡",
      color: "from-bmo-blue to-blue-600"
    },
    {
      title: "Enhance Project Management and Time Management Skills",
      description: "Develop robust project management capabilities to handle multiple research initiatives simultaneously while meeting deadlines and maintaining high-quality output standards.",
      challenges: [
        "Balancing multiple concurrent research projects",
        "Managing stakeholder expectations and changing priorities",
        "Maintaining quality standards while working under tight deadlines"
      ],
      skills: [
        "Project planning and organization",
        "Time management and prioritization",
        "Stakeholder communication",
        "Quality assurance processes",
        "Agile work methodologies"
      ],
      results: "Successfully managed 8 concurrent research projects, maintaining a 95% on-time delivery rate. Implemented a personal project management system that improved efficiency by 25% and was shared with other team members.",
      status: "Achieved",
      icon: "⏰",
      color: "from-bmo-dark-blue to-blue-700"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Exceeded':
        return 'bg-green-100 text-green-700';
      case 'Achieved':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="goals" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Learning & Development
          </span>
          <h2 className="heading-lg text-gray-900 mb-6">
            Goals, Growth, and
            <span className="gradient-text"> Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five strategic learning objectives that guided my professional development and skill enhancement during my time at BMO.
          </p>
        </div>

        {/* Goals Overview Stats */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover">
              <div className="text-3xl font-bold text-bmo-red mb-2">2</div>
              <div className="text-gray-600">Goals Exceeded</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover">
              <div className="text-3xl font-bold text-bmo-blue mb-2">3</div>
              <div className="text-gray-600">Goals Achieved</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover">
              <div className="text-3xl font-bold text-bmo-dark-blue mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Goals List */}
        <div className={`space-y-6 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          {goals.map((goal, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              {/* Goal Header */}
              <div 
                className="cursor-pointer p-6 border-b border-gray-100"
                onClick={() => toggleGoal(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${goal.color} rounded-2xl flex items-center justify-center text-white text-2xl`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(goal.status)}`}>
                          {goal.status}
                        </span>
                        <span className="text-gray-500 text-sm">Click to explore details</span>
                      </div>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${expandedGoals[index] ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                expandedGoals[index] 
                  ? 'max-h-screen opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Goal Description</h4>
                    <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h4>
                    <ul className="space-y-2">
                      {goal.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Developed */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-bmo-blue/10 text-bmo-blue rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Results & Impact</h4>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-800 leading-relaxed">{goal.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Takeaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">Setting specific, measurable goals at the beginning of the work term provided clear direction and motivation.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">Regular self-assessment and seeking feedback helped identify areas for improvement and celebrate achievements.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-red rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">Challenging myself beyond my comfort zone led to unexpected growth and exceeded expectations.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-dark-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">The integration of technical and business skills proved essential for success in financial technology research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
