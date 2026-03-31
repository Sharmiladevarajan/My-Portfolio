'use client';

export default function Skills() {
  const skillCategories: { title: string; skills: string[] }[] = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'REST APIs', 'Microservices']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS Lambda',
        'EC2',
        'S3',
        'ECS',
        'RDS',
        'GCP Pub/Sub',
        'Docker',
        'Kubernetes',
        'CI/CD'
      ]
    },
    {
      title: 'Distributed Systems',
      skills: ['Apache Kafka', 'Event-Driven Architecture', 'Async Processing']
    },
    {
      title: 'AI / GenAI',
      skills: ['OpenAI GPT-4', 'Gemini', 'RAG', 'Multi-Agent Systems']
    },
    {
      title: 'Core CS',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'Concurrency', 'System Design']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Stack</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1.5 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-700 text-slate-100"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
