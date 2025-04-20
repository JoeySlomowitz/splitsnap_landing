'use client';

import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <PlaceholderImage
                width={40}
                height={40}
                text=""
                isIcon={true}
                bgColor="#34C759"
                className="mr-2 rounded-lg dark:bg-[#58D158]"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">SplitSnap</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              The easiest way to split receipts with friends. Snap, split, and share in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/splitsnapapp?s=21&t=YbKAF7AlNFH_lloQdmEMxg" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <span className="sr-only">X</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SplitSnap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}