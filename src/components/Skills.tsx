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
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Excellence & Market Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Delivering cutting-edge AI solutions with proven expertise across the full technology stack and latest market innovations.
          </p>
        </div>

        {/* Latest AI Market Deliveries */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Current AI Market Solutions I'm Delivering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiMarketUpdates.map((update, index) => (
              <div key={index} className="relative overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{update.icon}</span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {update.title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                    {update.status}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {update.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {skill.name}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Competencies */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Professional Competencies & Leadership Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">70%</div>
            <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Efficiency Boost</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">AI-based Process Automation</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">60%</div>
            <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Faster Development</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Automated Workflow Solutions</div>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-t-4 border-indigo-500 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">20+</div>
            <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Client Projects</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise AI Implementation</div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Core Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "Next.js", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200" },
              { name: "TypeScript", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "Python", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
              { name: "FastAPI", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
              { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "AWS", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
              { name: "Docker", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
              { name: "OpenAI", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
              { name: "LangChain", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" }
            ].map((tech, index) => (
              <span 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}