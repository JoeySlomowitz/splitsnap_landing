'use client';

import PlaceholderImage from './PlaceholderImage';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] py-4 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
            Snap a receipt<br />
            <span className="text-[#34C759] dark:text-[#58D158]">split the bill</span><br />
            Effortlessly
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
            Tired of the awkward math after a group meal? SplitSnap is an iOS app that lets you split a restaurant bill just by scanning it with your camera. Our AI automatically reads the items and prices, so you can assign items to friends and see who owes what in seconds.
          </p>
          <div className="mt-8">
            <a
              href="https://testflight.apple.com/join/VfvszCHu"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#34C759] hover:bg-[#2db14e] dark:bg-[#58D158] dark:hover:bg-[#4abb4a] transition duration-150 ease-in-out shadow-sm"
            >
              <PlaceholderImage
                width={24}
                height={24}
                text=""
                isIcon={true}
                className="mr-2 rounded-full"
              />
              Download on Test Flight
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#34C759] to-[#2db14e] rounded-[60px] blur-xl opacity-20 animate-pulse dark:from-[#58D158] dark:to-[#4abb4a]" />
            <div className="relative">
              <PlaceholderImage
                width={310}
                height={679.2}
                text=""
                bgColor="#f5f5f7 dark:bg-black"
                textColor="#0071E3"
                className="relative z-10 rounded-[60px]"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex ">
                <Image
                  src="/images/receipt_total_light.png"
                  width={320}
                  height={696}
                  alt="Receipt Total"
                  className='relative z-20 w-auto h-full object-contain rounded-[60px] shadow-lg mb-4 block dark:hidden'
                />
                <Image
                  src="/images/receipt_total_dark.png"
                  width={320}
                  height={696}
                  alt="Receipt Total"
                  className='relative z-20 w-auto h-full object-contain rounded-[60px] shadow-lg mb-4 hidden dark:block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
    </section>
  );
}