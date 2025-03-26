'use client';

import PlaceholderImage from './PlaceholderImage';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Split Receipts <span className="text-blue-600 dark:text-blue-400">in Seconds</span>
          </h1>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300">
            Snap. Split. Share.
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
            Transform receipt splitting with SplitSnap, the iOS app that makes dividing bills effortless and instant.
          </p>
          <div className="mt-8">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 ease-in-out shadow-sm"
            >
              <PlaceholderImage
                width={24}
                height={24}
                text="App"
                className="mr-2 rounded-full"
              />
              Download on App Store
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-[60px] blur-xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <PlaceholderImage
                width={320}
                height={650}
                text="iPhone"
                bgColor="#f5f5f7"
                textColor="#0071E3"
                className="relative z-10 rounded-[60px]"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center">
                <PlaceholderImage
                  width={280}
                  height={600}
                  text="SplitSnap App"
                  bgColor="#0071E3"
                  textColor="white"
                  className="rounded-[36px] object-cover"
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