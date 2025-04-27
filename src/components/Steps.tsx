'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

interface StepProps {
  number: number;
  title: string;
  description: string;
  imageBgColor: string;
  lightModeImage?: string;
  darkModeImage?: string;
}

function Step({ number, title, description, imageBgColor, lightModeImage, darkModeImage }: StepProps) {
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

    const currentRef = stepRef.current;
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
      ref={stepRef}
      className="flex flex-col md:flex-row items-center gap-12 opacity-0 transition-opacity duration-1000 ease-in-out"
    >
      <div className="flex-1 order-2 md:order-1 text-center md:text-left">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e6f7eb] dark:bg-[#1e3e28] text-[#34C759] dark:text-[#58D158] font-bold text-xl mb-4">
          {number}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex-1 order-1 md:order-2 flex justify-center">
        <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 transition-all duration-300">
          {lightModeImage && darkModeImage ? (
            <>
              <Image
                src={lightModeImage}
                alt={`Step ${number}`}
                width={380}
                height={380}
                className="w-full h-full object-contain rounded-xl dark:hidden"
              />
              <Image
                src={darkModeImage}
                alt={`Step ${number}`}
                width={380}
                height={380}
                className="w-full h-full object-contain rounded-xl hidden dark:block"
              />
            </>
          ) : (
            <PlaceholderImage
              width={240}
              height={240}
              text={`Step ${number}`}
              bgColor={imageBgColor}
              textColor="white"
              className="rounded-xl"
            />
          )}
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
            Split any bill in two simple steps
          </p>
        </div>

        <div className="space-y-20">
          <Step
            number={1}
            title="Snap a Photo"
            description="Take a quick photo of any receipt with your iPhone camera."
            imageBgColor="#34C759" // iOS green
            lightModeImage="/images/scan-instruction.png"
            darkModeImage="/images/scan-instruction_dark.png"
          />

          <Step
            number={2}
            title="Split the Bill"
            description="Enter the number of people and let SplitSnap calculate each person's share."
            imageBgColor="#34C759" // Updated to accent green
            lightModeImage="/images/split_instruction.png"
            darkModeImage="/images/split_instruction_dark.png"
          />

          {/* TODO: Add this later when functionality available  */}
          {/* <Step
            number={3}
            title="Share Instantly"
            description="Send payment details to friends via text, email, or your favorite messaging app."
            imageBgColor="#34C759" // Updated to accent green
          /> */}
        </div>
      </div>
    </section>
  );
}