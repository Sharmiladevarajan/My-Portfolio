'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['AI Engineer', 'Agentic Automation Expert', 'Full Stack Developer', 'Software Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const role = roles[roleIndex];
    let currentText = '';
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < role.length) {
        currentText += role[charIndex];
        setDisplayText(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText('');
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Professional Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Professional Profile */}
          <div className="mb-8 mt-20 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-lg bg-gradient-to-br from-slate-200 to-blue-100 dark:from-slate-800 dark:to-blue-900 p-0.5 shadow-xl">
                <div className="w-full h-full rounded-lg bg-white dark:bg-slate-900 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Sharmila Devarajan - AI Engineer"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIgdmlld0JveD0iMCAwIDE0NCAxNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNDQiIGhlaWdodD0iMTQ0IiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik03MiA3MkM5My42NzMxIDcyIDExMS4yIDU0LjY3MzEgMTExLjIgMzNTOTMuNjczMSAtNiA3MiAtNiA1Mi44IDExLjMyNjkgNTIuOCAzMyA3MC4zMjY5IDcyIDcyIDcyWiIgZmlsbD0iIzk0QTNCOCIvPgo8cGF0aCBkPSJNNzIgODEuNkM5My42NzMxIDgxLjYgMTExLjIgOTkuMzI2OSAxMTEuMiAxMjEuNFYxNDRINzJIMzIuOFYxMjEuNEMzMi44IDk5LjMyNjkgNTAuMzI2OSA4MS42IDcyIDgxLjZaIiBmaWxsPSIjOTRBM0I4Ii8+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Sharmila Devarajan
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 h-8 font-medium">
            {displayText}
            <span className="animate-pulse ml-0.5">|</span>
          </div>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            <strong>Delivering cutting-edge AI solutions</strong> with expertise in full-stack development and intelligent automation. Specialized in building scalable applications, implementing modern AI frameworks, and creating efficient development workflows that enhance productivity and code quality.
          </p>

          {/* Value Proposition */}
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">AI-Powered Development</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Modern AI frameworks integration and automation solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Full-Stack Expertise</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">End-to-end application development with modern tech stack</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Quality-Focused Development</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Clean code practices and scalable architecture design</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-600 text-xl">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Latest Technology Integration</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Staying current with cutting-edge development trends</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2.9+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Projects Delivered</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">AI Integrations</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Client Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:devarajsharmila36@gmail.com?subject=Job Opportunity&body=Hi Sharmila, I am interested in discussing a position with you."
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <Link 
              href="#projects"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:border-blue-500"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/sharmila-devarajan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:devarajsharmila36@gmail.com"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="tel:+919489767312"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href="https://github.com/Sharmiladevarajan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.691-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.65.64.701 1.028 1.596 1.028 2.691 0 3.852-2.338 4.702-4.566 4.948.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.748 0 .269.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://x.com/sharmishrini26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.133C19.7 3.5 18.6 3 17.4 3c-2.605 0-4.713 2.09-4.713 4.667 0 .365.042.72.12 1.062-3.916-.198-7.386-2.073-9.709-4.93-.405.7-.636 1.51-.636 2.376 0 1.64.822 3.088 2.071 3.936-.763-.024-1.48-.24-2.11-.596v.06c0 2.29 1.56 4.2 3.63 4.63-.38.106-.78.163-1.193.163-.29 0-.573-.028-.848-.08.573 1.78 2.238 3.078 4.21 3.115-1.544 1.214-3.486 1.94-5.595 1.94-.364 0-.722-.02-1.076-.062 2.01 1.298 4.4 2.056 6.962 2.056 8.356 0 12.928-7.08 12.928-13.223 0-.2-.005-.4-.014-.598.89-.644 1.66-1.44 2.272-2.352z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}