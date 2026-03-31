export default function Experience() {
  const experiences = [
    {
      title: "AI & Full Stack Engineer",
      company: "Impelox",
      period: "March 2025 – Present",
      summary: "Architected an AI-driven multi-agent automation platform integrating Gemini, GPT, and voice-based agents for real-time lead engagement.",
      technologies: ["Next.js", "NestJS", "FastAPI", "Gemini", "Twilio"]
    },
    {
      title: "Software Engineer",
      company: "AVASOFT Inc",
      period: "Jan 2023 – Jan 2025",
      summary: "Built AI-powered web applications using React.js and Python, improving performance by 30% and reducing manual work by 50%.",
      technologies: ["React.js", "Python", "TypeScript", "PostgreSQL", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Experience
          </h2>
        </div>

        <div className="space-y-10">
          {experiences.map((experience) => (
            <div key={experience.title} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 border-l border-slate-200 dark:border-slate-700 pl-6">
              <div className="relative">
                <span className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-indigo-500"></span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl">{experience.title}</h3>
                <p className="text-base font-semibold text-indigo-500 mt-1 md:text-lg">{experience.company}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 max-w-3xl leading-relaxed md:text-base">{experience.summary}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap md:pt-2">{experience.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}