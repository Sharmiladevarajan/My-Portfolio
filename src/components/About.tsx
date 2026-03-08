export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Built for SDE & GenAI
          </h2>
          <div className="w-12 h-0.5 bg-slate-300 dark:bg-slate-600 mx-auto"></div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            I ship production systems with measurable impact: clear architecture, strong collaboration, and a bias for iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-lg border-l-2 border-slate-400 dark:border-slate-500">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Results-Driven SDE & GenAI Engineer
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <strong>3+ years</strong> turning product and business needs into production systems. At <strong>Impelox</strong> I lead 
                MultiRAG (hybrid content pipeline) and multi-agent automation—with a focus on reliability, scale, and clear ownership.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-lg border-l-2 border-slate-400 dark:border-slate-500">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Systems Thinking & Quality</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                I prioritize <strong>readable, testable code</strong> and <strong>maintainable architecture</strong>. I care about performance, observability, and designs that make the next engineer’s job easier.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-lg border-l-2 border-slate-400 dark:border-slate-500">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">GenAI & RAG Specialist</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Deep experience in <strong>RAG (MultiRAG, ECS embeddings, RAPI)</strong>, <strong>orchestration (Temporal)</strong>, and <strong>LLMs (OpenAI, Claude)</strong>. I design systems that are debuggable, cost-aware, and ready for production traffic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">15+</span>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Projects</p>
              </div>
              <div className="text-center p-3 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700">
                <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">100%</span>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">What I Bring</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="text-slate-400">·</span> AI Application Development</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="text-slate-400">·</span> Multi-Agent Systems</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="text-slate-400">·</span> Full-Stack Development</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="text-slate-400">·</span> Process Automation</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span className="text-slate-400">·</span> Cloud & APIs</div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-2 text-sm">Highlights</h4>
                <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <div>Multi-agent platform for business automation</div>
                  <div>AI automation tools; 15+ projects delivered</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
                <div>devarajsharmila36@gmail.com</div>
                <div>+91 9489767312 · Chennai · Remote</div>
                <div className="mt-1 font-medium text-slate-700 dark:text-slate-300">Available for opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}