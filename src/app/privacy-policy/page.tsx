'use client';

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-grow pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Last Updated: April 21, 2025
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Introduction</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Welcome to SplitSnap. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains our approach to privacy and how your information is handled when you use our receipt scanning bill-splitting application.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap is designed with privacy at its core. Our app processes all data directly on your device, with no information transmitted to external servers. This "zero-data-transmission" approach means your financial information never leaves your control.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Our Zero-Data-Transmission Approach</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap operates entirely on your device. When you scan a receipt, the image is processed locally using your device's computing power. The text recognition, calculations, and bill splitting all happen on your device. At no point is your receipt data, financial information, or any other personal data transmitted to our servers or any third-party servers.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            This approach provides several key privacy benefits:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Your financial information remains completely private</li>
                            <li className="mb-2">No risk of data breaches from our servers (because we don't store your data)</li>
                            <li className="mb-2">No tracking or profiling of your spending habits</li>
                            <li className="mb-2">Full functionality even without an internet connection</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No-Server Architecture</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap is built with a no-server architecture. This means:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">We do not operate servers that process or store your personal data</li>
                            <li className="mb-2">We do not collect, store, or transmit your receipt data</li>
                            <li className="mb-2">All processing happens locally on your device</li>
                            <li className="mb-2">Your data remains under your control at all times</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            The only exceptions to this are standard app functionality services provided by Apple, such as App Store downloads, TestFlight distribution, and crash reporting, which are governed by Apple's privacy policy.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Camera Permission</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap requires camera permission to function properly. This permission is used exclusively for scanning receipts. When you take a photo of a receipt:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">The image is processed entirely on your device</li>
                            <li className="mb-2">The image is not transmitted to any external servers</li>
                            <li className="mb-2">The image is only stored temporarily in your device's memory during processing</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            You can revoke camera permission at any time through your device settings, though this will limit the app's functionality as receipt scanning is our core feature.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">On-Device Data Storage</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap temporarily stores the following information on your device:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Receipt images during processing</li>
                            <li className="mb-2">Extracted receipt data (items, prices, etc.)</li>
                            <li className="mb-2">Bill splitting calculations</li>
                            <li className="mb-2">App preferences and settings</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            This data is stored only for the duration of your active session and is automatically cleared when you close the app or start a new receipt scanning session. We do not maintain a history of your receipts or transactions unless you explicitly save them using your device's native sharing or saving features.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Handling of Financial Information</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap processes financial information from your receipts, including:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Item names and prices</li>
                            <li className="mb-2">Tax amounts</li>
                            <li className="mb-2">Total bill amounts</li>
                            <li className="mb-2">Merchant information</li>
                        </ul>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            This information is:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Processed entirely on your device</li>
                            <li className="mb-2">Used only for the purpose of splitting the bill</li>
                            <li className="mb-2">Not transmitted to any external servers</li>
                            <li className="mb-2">Not used for any advertising, marketing, or analytics purposes</li>
                            <li className="mb-2">Automatically cleared when you close the app or start a new receipt scanning session</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Sharing Results</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap allows you to share bill splitting results with others. When you use this feature:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">You control who receives the information</li>
                            <li className="mb-2">Sharing happens through your device's native sharing features (Messages, Email, etc.)</li>
                            <li className="mb-2">We do not have access to or control over the information once you share it</li>
                            <li className="mb-2">The privacy policies of the apps you use to share (Messages, Email, etc.) will apply to that shared data</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Children's Privacy</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            SplitSnap is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Since we do not collect or store your personal data on our servers, many traditional data rights (such as the right to access, correct, or delete your data) are automatically fulfilled by our design. You maintain complete control over your data at all times.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            You can:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
                            <li className="mb-2">Control camera permissions through your device settings</li>
                            <li className="mb-2">Delete the app at any time, which will remove all app-related data from your device</li>
                            <li className="mb-2">Use the app without creating an account or providing any personal information</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Email: privacy@splitsnap.app
                        </p>
                    </div>
                </div>
            </main>

        </div>
    );
}