'use client';

import { useEffect, useRef } from 'react';
import PlaceholderImage from './PlaceholderImage';

interface StepProps {
  number: number;
  title: string;
  description: string;
  imageBgColor: string;
}

function Step({ number, title, description, imageBgColor }: StepProps) {
  const stepRef = useRef<HTMLDivElement>(null);

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

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="flex flex-col md:flex-row items-center gap-8 opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className="flex-1 order-2 md:order-1 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold text-xl mb-4">
          {number}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex-1 order-1 md:order-2 flex justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-md opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl">
            <PlaceholderImage
              width={240}
              height={240}
              text={`Step ${number}`}
              bgColor={imageBgColor}
              textColor="white"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Steps() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Split any bill in three simple steps
          </p>
        </div>
        
        <div className="space-y-20">
          <Step
            number={1}
            title="Snap a Photo"
            description="Take a quick photo of any receipt with your iPhone camera."
            imageBgColor="#34C759" // iOS green
          />
          
          <Step
            number={2}
            title="Split the Bill"
            description="Enter the number of people and let SplitSnap calculate each person's share."
            imageBgColor="#0071E3" // iOS blue
          />
          
          <Step
            number={3}
            title="Share Instantly"
            description="Send payment details to friends via text, email, or your favorite messaging app."
            imageBgColor="#5E5CE6" // iOS purple
          />
        </div>
      </div>
    </section>
  );
}