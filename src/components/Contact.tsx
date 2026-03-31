'use client';

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "devarajsharmila36@gmail.com",
      link: "mailto:devarajsharmila36@gmail.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 9489767312",
      link: "tel:+919489767312"
    }
  ];

  const socialLinks = [
    { name: "Twitter", url: "https://x.com/sharmishrini26" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sharmila-devarajan/" },
    { name: "GitHub", url: "https://github.com/Sharmiladevarajan" }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get in touch
          </h2>
          <p className="text-3xl text-slate-600 dark:text-slate-400 mt-4 max-w-4xl mx-auto">
            Open to SDE and GenAI Engineer roles. Happy to discuss opportunities, projects, or technical collaboration.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              className={`inline-flex items-center justify-center gap-3 rounded-2xl border px-6 py-4 text-sm font-semibold ${
                info.title === 'Email'
                  ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white'
                  : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700'
              }`}
            >
              <span className="w-4 h-4">{info.icon}</span>
              {info.value}
            </a>
          ))}
        </div>

        <div className="mt-20 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © 2025 Sharmila Devarajan.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}