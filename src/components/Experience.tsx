export default function Experience() {
  const experiences = [
    {
      title: "AI & Full Stack Engineer",
      company: "Impelox",
      period: "May 2025 – Present",
      location: "Remote",
      highlights: [
        "Architected and developed an AI-driven multi-agent automation platform integrating Gemini, GPT, and voice-based agents for real-time lead engagement and appointment orchestration",
        "Designed and implemented scalable Next.js frontend and NestJS + FastAPI(Python) backend, enabling modular agent communication and microservice interoperability",
        "Engineered LLM-powered agent workflows for appointment booking, follow-up, and no-show prevention, using memory graphs and context-driven reasoning for adaptive decision-making",
        "Developed AI orchestration pipelines that autonomously manage prompt selection, JSON schema, and action routing between agents",
        "Integrated Twilio Voice, Gmail Pub/Sub, and Google Cloud APIs to create end-to-end automation covering scheduling, reminders, and lead nurturing",
        "Optimized backend concurrency with async execution and event-driven architecture, improving response latency by 60%",
        "Led system architecture and agent framework design, defining interfaces, role hierarchies, and personality-guided response logic for domain-specific AI agents"
      ],
      technologies: ["Next.js", "NestJS", "FastAPI", "Python", "Gemini", "OpenAI GPT", "Twilio", "Google Cloud", "Agent SDK"]
    },
    {
      title: "Software Engineer",
      company: "AVASOFT Inc",
      period: "Jan 2023 – Jan 2025",
      location: "Chennai, India",
      highlights: [
        "Built and deployed AI-powered web applications using React.js, Python, TypeScript, and PostgreSQL, which improved performance and user engagement by 30%",
        "Integrated machine learning models and chatbots for process automation, enhancing client efficiency by 25%",
        "Streamlined project delivery through optimized CI/CD pipelines and scalable backend APIs using Node.js and Flask",
        "Created an internal automation tool and chatbot generator that streamlined workflows and reduced development time by 70%",
        "Built AI-based automation solutions for reporting and image processing, cutting errors by 95% and reducing manual work by 50%"
      ],
      technologies: ["React.js", "Python", "TypeScript", "PostgreSQL", "Node.js", "Flask", "Machine Learning", "CI/CD"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-600 to-blue-600"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-auto md:-right-2 md:top-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-indigo-600 rounded-full"></div>
              
              <div className="ml-16 md:ml-0 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">{experience.company}</h4>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <div>{experience.period}</div>
                    <div>{experience.location}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}