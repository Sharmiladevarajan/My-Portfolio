'use client';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Agentic Systems",
      skills: [
        { name: "Gemini", level: "Expert" },
        { name: "OpenAI GPT", level: "Expert" },
        { name: "Agent SDK", level: "Advanced" },
        { name: "Multi-Agent Frameworks", level: "Advanced" },
        { name: "LangChain", level: "Advanced" },
        { name: "LlamaIndex", level: "Intermediate" },
        { name: "RAG Systems", level: "Advanced" },
        { name: "Prompt Engineering", level: "Expert" },
        { name: "Workflow Orchestration", level: "Advanced" },
        { name: "Contextual Memory Graphs", level: "Intermediate" }
      ],
      icon: "🤖"
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Python", level: "Expert" },
        { name: "Node.js", level: "Advanced" },
        { name: "HTML/CSS", level: "Advanced" }
      ],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "NestJS", level: "Advanced" },
        { name: "FastAPI", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "Redux", level: "Intermediate" }
      ],
      icon: "⚛️"
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Advanced" },
        { name: "Vector Databases", level: "Intermediate" },
        { name: "AWS", level: "Advanced" },
        { name: "Google Cloud", level: "Advanced" },
        { name: "Google Cloud Pub/Sub", level: "Intermediate" }
      ],
      icon: "☁️"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "Kafka", level: "Intermediate" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Git", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "TFS", level: "Beginner" },
        { name: "Unit Testing", level: "Intermediate" },
        { name: "Microservices", level: "Advanced" },
        { name: "Event-Driven Architecture", level: "Advanced" }
      ],
      icon: "🛠️"
    }
  ];

  const aiMarketUpdates = [
    {
      title: "Generative AI Orchestration",
      description: "Leading automation solutions using multi-agent frameworks with custom orchestration layers",
      status: "Delivering",
      icon: "🤖"
    },
    {
      title: "Agentic Workflow Automation",
      description: "Implementing intelligent decision-making systems that reduce manual intervention",
      status: "Delivering",
      icon: "⚡"
    },
    {
      title: "Real-time AI Analytics",
      description: "Building contextual memory systems for enhanced AI performance in enterprise environments",
      status: "Delivering",
      icon: "📊"
    },
    {
      title: "AI Model Integration",
      description: "Seamlessly integrating latest LLM capabilities into existing business workflows",
      status: "Delivering",
      icon: "🔗"
    }
  ];

  const softSkills = [
    "AI Solution Architecture", "Cross-functional Leadership", "Strategic Communication", 
    "Agile Problem Solving", "Innovation Management", "Technical Mentoring", 
    "Client Relationship Building", "Process Optimization", "Team Collaboration"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Stack
          </h2>
          <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            GenAI, RAG, multi-agent systems, and full-stack—tools I use to ship production systems.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">
            Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiMarketUpdates.map((update, index) => (
              <div key={index} className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-700 border-l-2 border-l-slate-400 dark:border-l-slate-500">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {update.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-900/80 p-4 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 text-center">Competencies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {softSkills.map((skill, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "OpenAI", "LangChain"].map((name, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}