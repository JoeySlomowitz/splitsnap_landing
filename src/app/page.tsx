'use client';

import { useEffect } from 'react';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import WaveDivider from '@/components/WaveDivider';

export default function Home() {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    // Function to scroll to element by ID
    const scrollToElement = (id: string) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };

    // Handle initial load with hash in URL (coming from another page)
    const handleInitialHash = () => {
      if (window.location.hash && window.location.hash.startsWith('#')) {
        const targetId = window.location.hash.slice(1);
        // Use setTimeout to ensure the DOM is fully loaded
        setTimeout(() => scrollToElement(targetId), 100);
      }
    };

    // Handle anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Check if it's an internal link to the current page
        const isInternalLink =
          anchor.origin === window.location.origin &&
          (anchor.pathname === window.location.pathname ||
           anchor.pathname === '/' + window.location.pathname ||
           window.location.pathname + '/' === anchor.pathname);

        if (isInternalLink) {
          e.preventDefault();
          const targetId = anchor.hash.slice(1);
          scrollToElement(targetId);
          
          // Update URL without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    // Add event listeners
    handleInitialHash();
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />

        <div id="features" className="relative">
          <Features />
          <WaveDivider flip={false} className="absolute -bottom-px left-0 right-0 z-10" />
        </div>

        <div id="how-it-works" className="relative bg-gray-50 dark:bg-gray-900">
          <Steps />
        </div>

        <section id="download" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to <span className="gradient-text">Split Bills</span> Effortlessly?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Download Splitra today and never worry about complicated bill splitting again.
            </p>
            <a
              href="https://testflight.apple.com/join/VfvszCHu"
              className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-[#34C759] to-[#2db14e] hover:from-[#2db14e] hover:to-[#28a745] dark:from-[#58D158] dark:to-[#4abb4a] dark:hover:from-[#4abb4a] dark:hover:to-[#3ca842] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ boxShadow: '0 10px 30px rgba(52, 199, 89, 0.3)' }}
            >
              <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3.5c-1.1 0-2.1.5-2.8 1.3L12 6.5 10.3 4.8c-.7-.8-1.7-1.3-2.8-1.3-2.2 0-4 1.8-4 4 0 .8.2 1.5.6 2.1.1.1.1.2.2.3l7.6 8.4c.1.1.2.1.3.1s.2 0 .3-.1l7.6-8.4c.1-.1.1-.2.2-.3.4-.6.6-1.3.6-2.1 0-2.2-1.8-4-4-4z" />
              </svg>
              Download on Test Flight
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}
