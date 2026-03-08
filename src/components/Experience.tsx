export default function Experience() {
  const experiences = [
    {
      title: "AI & Full Stack Engineer",
      company: "Impelox",
      period: "March 2025 – Present",
      location: "Hybrid",
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
    <section id="experience" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            3+ years in software development and GenAI—from enterprise automation to multi-agent and RAG systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-slate-200 dark:bg-slate-700"></div>

          {experiences.map((experience, index) => (
            <div key={index} className={`relative mb-10 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2`}>
              <div className="absolute left-6 md:left-auto md:-right-[5px] md:top-5 w-2.5 h-2.5 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
              <div className="ml-14 md:ml-0 bg-white dark:bg-slate-900/80 p-5 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.title}</h3>
                    <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400">{experience.company}</h4>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                    <div>{experience.period}</div>
                    <div>{experience.location}</div>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-slate-600 dark:text-slate-300 flex items-start text-sm">
                      <span className="text-slate-400 mr-2 mt-0.5">·</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700"
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