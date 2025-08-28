"use client";

import React, { useEffect, useState } from "react";

const Goals = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedGoals, setExpandedGoals] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("goals");
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
    setExpandedGoals((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const goals = [
    {
      title:
        "Gain Proficiency in BMO's Enterprise Tooling Ecosystem (Microsoft 365, Power Apps, Power Automate)",
      description:
        "Master BMO's enterprise tooling ecosystem including Microsoft 365, Power Apps, and Power Automate to design and deploy automated workflows that streamline internal processes and reduce manual steps.",
      challenges: [
        "Learning complex enterprise platforms with limited prior experience",
        "Understanding workflow automation principles and business logic",
        "Integrating multiple Microsoft 365 tools into cohesive solutions",
      ],
      skills: [
        "Microsoft 365 suite proficiency",
        "Power Apps application development",
        "Power Automate workflow creation",
        "SharePoint site management",
        "Enterprise system integration",
      ],
      results:
        "Through dedicated learning and hands-on application, I developed strong proficiency with BMO's enterprise tooling ecosystem, mastering Microsoft 365, Power Apps, and Power Automate. I successfully designed and deployed two automated workflows that eliminated manual processes and improved operational efficiency. The positive feedback from colleagues and management validated both the technical quality and business impact of these solutions. This experience provided valuable insights into how strategic automation can drive measurable productivity gains across the organization.",
      iconType: "square",
    },
    {
      title:
        "Master Diverse Research Methodologies to Inform Technology Decisions",
      description:
        "Develop comprehensive research skills by applying both qualitative (stakeholder interviews, focus groups) and quantitative (survey, data analysis) methods to inform technology decisions and strategic insights.",
      challenges: [
        "Learning to balance qualitative and quantitative research approaches",
        "Synthesizing complex research findings into actionable recommendations",
        "Presenting technical research to diverse stakeholder audiences",
      ],
      skills: [
        "Qualitative research methods",
        "Quantitative data analysis",
        "Research methodology design",
        "Strategic technology assessment",
        "Stakeholder interview techniques",
      ],
      results:
        "I successfully integrated diverse research methodologies into my analytical approach, effectively combining qualitative techniques like stakeholder interviews with quantitative methods including surveys and data analysis. By actively participating in internal meetings and learning from experienced colleagues, I refined my research techniques and analytical frameworks. My research findings directly contributed to published internal reports, demonstrating the value of comprehensive, balanced analysis in informing strategic technology decisions. This experience enhanced my ability to design and execute research that delivers actionable insights for organizational decision-making.",
      iconType: "triangle",
    },
    {
      title:
        "Build Clear 'Big-Picture' Map of BMO's Organizational Structure and Decision-Making Lines",
      description:
        "Develop comprehensive understanding of BMO's organizational structure, governance processes, and decision-making hierarchies to navigate the enterprise effectively and identify key stakeholders for strategic initiatives.",
      challenges: [
        "Understanding complex organizational hierarchies in a large financial institution",
        "Mapping relationships between different Lines of Business (LOBs) and Areas",
        "Learning formal and informal decision-making processes",
      ],
      skills: [
        "Organizational analysis and mapping",
        "Stakeholder identification and engagement",
        "Corporate governance understanding",
        "Cross-functional navigation",
        "Strategic relationship building",
      ],
      results:
        "I developed a comprehensive understanding of BMO's organizational structure and decision-making processes through systematic mapping and analysis. This initiative revealed the intricate nature of inter-departmental relationships and highlighted the critical importance of understanding governance frameworks when advancing strategic initiatives. By cross-referencing my analysis with official organizational resources, I validated the accuracy of my understanding. This enhanced organizational awareness has equipped me with a strategic perspective that enables more effective stakeholder identification and cross-functional collaboration.",
      iconType: "circle",
    },
    {
      title: "Elevate Stakeholder Communication and Presentation Skills",
      description:
        "Enhance oral communication abilities by actively participating in meetings, presenting research findings to diverse audiences, and building confidence when communicating complex technical concepts to stakeholders.",
      challenges: [
        "Overcoming hesitation to speak up in meetings with senior leadership",
        "Translating technical research findings into accessible presentations",
        "Building confidence to present to C-Suite executives",
      ],
      skills: [
        "Executive presentation skills",
        "Technical communication",
        "Stakeholder engagement",
        "Public speaking confidence",
        "Meeting participation and leadership",
      ],
      results:
        "Through consistent participation in meetings and regular presentation opportunities, I developed greater confidence and articulation in stakeholder communications. My active engagement in high-stakes discussions and presentations resulted in measurable improvement in my communication effectiveness. The positive feedback received on presentation clarity and audience engagement validated the progress made in this critical professional skill area.",
      iconType: "diamond",
    },
    {
      title:
        "Enhance Adaptability and Resilience to Navigate Shifting Priorities and Tight Deadlines",
      description:
        "Develop robust adaptability skills to effectively manage changing priorities, tight deadlines, and unexpected challenges while maintaining high-quality output and supporting team objectives.",
      challenges: [
        "Managing competing priorities during hackathon events and time-sensitive tasks",
        "Adapting quickly to changing project requirements and stakeholder needs",
        "Maintaining quality standards while pivoting between different work streams",
      ],
      skills: [
        "Adaptability and flexibility",
        "Stress management under pressure",
        "Priority management and pivoting",
        "Team collaboration during crises",
        "Resilience and problem-solving",
      ],
      results:
        "Through systematic self-reflection and documentation practices, I developed enhanced self-awareness regarding my response patterns to unexpected challenges and changing circumstances. By tracking multiple instances of shifting priorities and evolving deadlines, I demonstrated consistent ability to adapt strategies while maintaining project momentum and quality standards. This experience has strengthened my resilience and reframed my perspective on change, enabling me to approach unexpected situations as opportunities for innovative problem-solving rather than obstacles.",
      iconType: "hexagon",
    },
  ];


  return (
    <section id="goals" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-bmo-blue text-white rounded-full text-sm font-semibold mb-4">
            Learning & Development
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Goals, Growth, and
            <span className="text-bmo-blue"> Achievements</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five strategic learning objectives that guided my professional
            development and skill enhancement during my time at BMO.
          </p>
        </div>


        {/* Goals List */}
        <div
          className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
            >
              {/* Goal Header */}
              <div
                className="cursor-pointer p-4 sm:p-6 border-b border-gray-100"
                onClick={() => toggleGoal(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {goal.iconType === 'square' && <div className="w-4 h-4 bg-bmo-blue rounded-sm"></div>}
                      {goal.iconType === 'triangle' && <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-bmo-blue"></div>}
                      {goal.iconType === 'circle' && <div className="w-4 h-4 bg-bmo-blue rounded-full"></div>}
                      {goal.iconType === 'diamond' && <div className="w-3 h-3 bg-bmo-blue transform rotate-45"></div>}
                      {goal.iconType === 'hexagon' && <div className="w-4 h-4 bg-bmo-blue" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 pr-2">
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`transition-transform duration-300 flex-shrink-0 ml-2 ${
                      expandedGoals[index] ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  expandedGoals[index]
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Goal Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Challenges
                    </h4>
                    <ul className="space-y-2">
                      {goal.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-bmo-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Developed */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-bmo-blue/10 text-bmo-blue rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Results & Impact
                    </h4>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <p className="text-gray-600 leading-relaxed">
                        {goal.results}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
              Key Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">
                    Mastering enterprise tooling ecosystems provided a
                    foundation for creating scalable, automated solutions.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-red rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">
                    Presenting to senior leadership built confidence and
                    demonstrated the value of thorough research methodology.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">
                    Adaptability during hackathons and shifting priorities
                    proved essential for delivering quality results.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-bmo-red rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-600">
                    Understanding organizational structure enhanced stakeholder
                    engagement and cross-functional collaboration.
                  </p>
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
