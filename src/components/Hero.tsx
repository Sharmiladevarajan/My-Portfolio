'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const roles = ['AI & Full Stack Engineer', 'GenAI Engineer', 'SDE'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
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
    <section className="min-h-screen flex items-center px-4 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="max-w-3xl lg:max-w-none">
          <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 mb-5">
            Available for SDE & GenAI Roles
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Sharmila Devarajan
          </h1>

          <div className="text-3xl md:text-4xl text-slate-600 dark:text-slate-300 mb-8 h-12 font-semibold">
            {displayText}
            <span className="text-indigo-500 animate-pulse ml-2">•</span>
          </div>

          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10 leading-relaxed">
            3+ years building production systems: MultiRAG, agentic automation, and full-stack apps. Focusing on scale, clarity, and impact.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:devarajsharmila36@gmail.com"
              className="w-10 h-10 rounded-md border border-slate-200 dark:border-slate-700 inline-flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sharmila-devarajan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border border-slate-200 dark:border-slate-700 inline-flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/Sharmiladevarajan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-md border border-slate-200 dark:border-slate-700 inline-flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.691-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.203 2.398.1 2.65.64.701 1.028 1.596 1.028 2.691 0 3.852-2.338 4.702-4.566 4.948.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.748 0 .269.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/sharmila-devarajan/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 text-sm font-semibold shadow-sm"
            >
              View LinkedIn
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-square w-64 sm:w-72 lg:w-80 shrink-0 overflow-hidden rounded-full border-2 border-slate-200 bg-slate-50 shadow-sm dark:border-slate-600 dark:bg-slate-900">
              <Image
                src="/profile.jpeg"
                alt="Sharmila Devarajan"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 1024px) 288px, 320px"
                priority
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjFGNUY5Ii8+CjxwYXRoIGQ9Ik0xNjAgMTYwQzE5Ny4xNDYgMTYwIDIyOCAxMjkuMTQ2IDIyOCA5MkMyMjggNTQuODUzOCAxOTcuMTQ2IDI0IDE2MCAyNEMxMjIuODU0IDI0IDkyIDU0Ljg1MzggOTIgOTJDOTIgMTI5LjE0NiAxMjIuODU0IDE2MCAxNjAgMTYwWiIgZmlsbD0iIzk0QTNCOCIvPgo8cGF0aCBkPSJNMTYwIDE4MEMxOTcuMTQ2IDE4MCAyMjggMjEwLjg1NCAyMjggMjQ4VjMyMEgxNjBIOTJWMjQ4QzkyIDIxMC44NTQgMTIyLjg1NCAxODAgMTYwIDE4MFoiIGZpbGw9IiM5NEEzQjgiLz4KPC9zdmc+';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}