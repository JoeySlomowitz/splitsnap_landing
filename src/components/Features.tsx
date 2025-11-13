'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FeatureProps {
  iconSrc: string;
  title: string;
  description: string;
  color: string;
}

function Feature({ iconSrc, title, description, color }: FeatureProps) {
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.3 }
    );

    // Store the ref value in a variable to use in the cleanup function
    const currentRef = featureRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className="flex flex-col items-center text-center opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className="mb-4">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: color, width: '60px', height: '60px' }}
        >
          <Image
            src={iconSrc}
            alt={title}
            width={40}
            height={40}
            className="invert brightness-0 filter"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Designed with simplicity and efficiency in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Feature
            iconSrc="/images/scan-receipt.svg"
            title="Smart Receipt Scanning"
            description="Leverages your device's camera and advanced text recognition to accurately capture all the details from your receipt."
            color="#34C759"
          />

          <Feature
            iconSrc="/images/menu-square.svg"
            title="AI-Powered Itemization"
            description="Our AI automatically reads the items and prices, so you can assign items to friends and see who owes what in seconds."
            color="#34C759"
          />

          <Feature
            iconSrc="/images/math.svg"
            title="Swift & Smart Totals"
            description="Get instant, accurate totals. Splitra's intelligent calculation engine handles all the complex math, including taxes and tips, so you can settle up in seconds."
            color="#34C759"
          />
        </div>
      </div>
    </section>
  );
}