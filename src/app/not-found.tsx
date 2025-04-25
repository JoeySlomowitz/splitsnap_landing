'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">404</h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Page Not Found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
          >
            Return to Home
          </Link>
        </div>
      </main>
    </div>
  );
}