export default function About() {
  const focusAreas = [
    {
      title: 'GenAI Orchestration',
      subtitle: 'Multi-agent frameworks with custom layers'
    },
    {
      title: 'Agentic Automation',
      subtitle: 'Intelligent decision-making systems'
    },
    {
      title: 'Real-time AI Analytics',
      subtitle: 'Contextual memory systems for enterprise'
    },
    {
      title: 'Model Integration',
      subtitle: 'Seamless LLM capabilities in workflows'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              I build reliable AI and full-stack products with a focus on clean architecture, clear communication, and measurable outcomes.
              My journey spans from enterprise automation to complex multi-agent and RAG systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8 max-w-xl">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
                <p className="text-4xl font-bold text-indigo-500">3+</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years Experience</p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4">
                <p className="text-4xl font-bold text-indigo-500">95%</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Error Reduction</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-4">
              Focus Areas
            </p>
            <div className="space-y-4">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}