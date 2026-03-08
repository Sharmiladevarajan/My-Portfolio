export default function Projects() {
  const projects = [
    {
      title: "MultiRAG System for Content Creation",
      company: "Impelox",
      description: "Built a hybrid Multi-RAG (Retrieval-Augmented Generation) system at Impelox that orchestrates multiple retrieval sources and LLMs (OpenAI, Claude) to generate high-quality, context-aware content. Powered by Temporal for durable workflows, ECS for embeddings, and RAPI for unified API access—delivering citation-backed content for blogs, docs, and marketing at scale.",
      features: [
        "Hybrid Multi-RAG: documents, web, and APIs with unified retrieval and RAPI integration",
        "Temporal-based workflow orchestration for reliable, resumable content pipelines",
        "ECS-backed embedding pipelines and semantic search for accurate retrieval",
        "Dual LLM support: OpenAI and Claude for content generation and routing",
        "Next.js frontend and Nest + Python backend for full-stack content tooling",
        "Citation-backed outputs and configurable content templates"
      ],
      technologies: ["Next.js", "NestJS", "Python", "RAG", "Temporal", "OpenAI", "Claude", "ECS", "Embeddings", "RAPI API"],
      status: "Production (Hybrid)",
      impact: "Scalable, accurate content creation with traceable sources; reduced manual research and drafting time by 60%"
    },
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
    <section id="projects" className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Selected work in GenAI, RAG, multi-agent systems, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{project.company}</p>
                  </div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded shrink-0">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                        <span className="text-slate-400 mr-2 mt-0.5">·</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400"><span className="font-medium text-slate-600 dark:text-slate-300">Impact:</span> {project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-0.5 text-xs text-slate-400">+{project.technologies.length - 6}</span>
                  )}
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