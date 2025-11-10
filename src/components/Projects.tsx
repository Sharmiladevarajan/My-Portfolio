export default function Projects() {
  const projects = [
    {
      title: "Agentic Workflow Automation Platform",
      company: "Impelox (Product)",
      description: "Built an AI-powered multi-agent automation platform using custom Agent SDKs with Gemini and OpenAI GPT, enabling intelligent workflow orchestration, adaptive decision-making, and a centralized admin console for real-time monitoring and configurable agent behavior.",
      features: [
        "Multi-agent system with Gemini and OpenAI GPT integration",
        "Intelligent workflow orchestration with adaptive decision-making",
        "Centralized admin console for real-time monitoring",
        "Twilio Voice and Gmail Pub/Sub integration",
        "Real-time scheduling, notifications, and communication automation",
        "Custom Agent SDKs for modular development"
      ],
      technologies: ["Agent SDK", "Gemini", "OpenAI GPT", "Next.js", "NestJS", "FastAPI", "Twilio", "Gmail Pub/Sub", "Python", "TypeScript"],
      status: "Production",
      impact: "Enhanced client efficiency by 30% through intelligent automation"
    },
    {
      title: "Internal Accelerator Platform",
      company: "AVASOFT",
      description: "Created an internal automation tool and chatbot generator that streamlined workflows and reduced development time by 70%, improving productivity and project delivery across the organization.",
      features: [
        "Automated workflow generation",
        "Intelligent chatbot creation tools",
        "Template-based development acceleration",
        "Integration with existing development tools",
        "Real-time collaboration features",
        "Performance analytics and reporting"
      ],
      technologies: ["React.js", "Node.js", "Python", "PostgreSQL", "Machine Learning", "NLP", "Docker", "CI/CD"],
      status: "Deployed",
      impact: "Reduced development time by 70% and improved team productivity"
    },
    {
      title: "AI-Based Automation Solutions",
      company: "AVASOFT (Client Projects)",
      description: "Built comprehensive AI-based automation solutions for reporting and image processing, significantly reducing manual errors and improving operational efficiency for enterprise clients.",
      features: [
        "Automated report generation with AI insights",
        "Advanced image processing and analysis",
        "Error detection and correction systems",
        "Real-time data processing pipelines",
        "Custom AI model integration",
        "Scalable cloud-based architecture"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "PostgreSQL", "AWS", "Docker", "Machine Learning"],
      status: "Multiple Deployments",
      impact: "Cut errors by 95% and reduced manual work by 50%"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Discover some of my key projects that showcase my expertise in AI-driven automation, 
            full-stack development, and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
              {/* Project Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-indigo-100 text-sm font-medium">{project.company}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {project.status}
                    </span>
                    <div className="text-white text-xs bg-white/10 px-2 py-1 rounded">
                      Production Ready
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1 text-xs">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-sm text-gray-500 dark:text-gray-500 italic flex items-center">
                        <span className="text-indigo-400 mr-2">+</span>
                        {project.features.length - 4} more advanced features implemented
                      </li>
                    )}
                  </ul>
                </div>

                {/* Impact - Made more prominent */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-lg mb-6 border-l-4 border-emerald-500">
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Business Impact:
                  </h4>
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded border border-indigo-200 dark:border-indigo-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Footer - Focus on Technologies and Impact */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 p-4 rounded-lg">
                  <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Key Achievement:</h5>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Recruiter Focused */}
        
      </div>
    </section>
  );
}