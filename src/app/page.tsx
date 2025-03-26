'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import Footer from '@/components/Footer';

export default function Home() {
  // Add smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin + anchor.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        
        const targetId = anchor.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        
        <div id="features">
          <Features />
        </div>
        
        <div id="how-it-works">
          <Steps />
        </div>
        
        <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Split Bills Effortlessly?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Download SplitSnap today and never worry about complicated bill splitting again.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3.5c-1.1 0-2.1.5-2.8 1.3L12 6.5 10.3 4.8c-.7-.8-1.7-1.3-2.8-1.3-2.2 0-4 1.8-4 4 0 .8.2 1.5.6 2.1.1.1.1.2.2.3l7.6 8.4c.1.1.2.1.3.1s.2 0 .3-.1l7.6-8.4c.1-.1.1-.2.2-.3.4-.6.6-1.3.6-2.1 0-2.2-1.8-4-4-4z" />
              </svg>
              Download on App Store
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
