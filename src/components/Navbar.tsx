'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
        : 'bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="#" className="font-bold text-base text-slate-900 dark:text-white">
            SD.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-1.5 text-sm font-semibold"
          >
            Hire Me
          </a>

          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </Link>
              ))}
              <a
                href="#contact"
                className="mx-4 mt-2 inline-flex rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-1.5 text-sm font-semibold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}