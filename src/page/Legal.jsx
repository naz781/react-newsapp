import React from 'react';
import Wrapper from '../component/Wrapper';

const Legal = () => {
    return (
        <Wrapper>
            <div className="py-16 px-4 max-w-4xl mx-auto min-h-screen">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Legal Information</h1>
                    <p className="text-lg opacity-70">Our commitment to transparency and your rights</p>
                </div>

                {/* Privacy Policy Section */}
                <article className="prose lg:prose-xl max-w-none bg-base-100 p-8 rounded-box shadow-sm border border-base-300 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
                    <p className="mb-4">
                        At ACME News Network, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h3>
                    <p className="mb-4">
                        We collect minimal data to provide you with the best news experience. This includes:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Browser type and device information</li>
                        <li>Pages you visit on our site</li>
                        <li>Email address (only if you subscribe to our newsletter)</li>
                        <li>Reading preferences to personalize your news feed</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-6 mb-3">How We Use Your Data</h3>
                    <p className="mb-4">
                        Your data helps us improve our services and deliver relevant content. We never sell your personal information to third parties.
                    </p>
                    <p className="text-sm opacity-50 mt-6">Last updated: December 2025</p>
                </article>

                {/* Terms of Service Section */}
                <article className="prose lg:prose-xl max-w-none bg-base-100 p-8 rounded-box shadow-sm border border-base-300 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Terms of Service</h2>
                    <p className="mb-4">
                        By accessing ACME News Network, you agree to be bound by these terms. Please read them carefully before using our services.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Acceptance of Terms</h3>
                    <p className="mb-4">
                        By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">User Conduct</h3>
                    <p className="mb-4">
                        You agree to use our website only for lawful purposes. You may not:
                    </p>
                    <ul className="list-disc ml-6 mb-4">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Transmit harmful or malicious code</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Content Ownership</h3>
                    <p className="mb-4">
                        All content on ACME News Network is owned by us or our content providers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission.
                    </p>
                    <p className="text-sm opacity-50 mt-6">Last updated: December 2025</p>
                </article>

                {/* Cookie Policy Section */}
                <article className="prose lg:prose-xl max-w-none bg-base-100 p-8 rounded-box shadow-sm border border-base-300 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Cookie Policy</h2>
                    <p className="mb-4">
                        We use cookies to remember your preferences and analyze traffic. This helps us improve your experience on our website.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">What Are Cookies?</h3>
                    <p className="mb-4">
                        Cookies are small text files stored on your device when you visit our website. They help us recognize you and remember your preferences.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cookies We Use</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                        <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                        <li><strong>Marketing Cookies:</strong> Track your browsing to show relevant ads</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Managing Cookies</h3>
                    <p className="mb-4">
                        You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                    </p>
                    <p className="text-sm opacity-50 mt-6">Last updated: December 2025</p>
                </article>

                {/* Editorial Ethics Section */}
                <article className="prose lg:prose-xl max-w-none bg-base-100 p-8 rounded-box shadow-sm border border-base-300 mb-8">
                    <h2 className="text-3xl font-bold mb-4">Editorial Ethics</h2>
                    <p className="mb-4">
                        Our reporters adhere to the highest standards of integrity and fact-checking. We are committed to unbiased, accurate journalism.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Our Commitment</h3>
                    <p className="mb-4">
                        At ACME News Network, we believe in transparency, accuracy, and accountability. Our editorial team follows strict ethical guidelines to ensure the integrity of our reporting.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Core Principles</h3>
                    <ul className="list-disc ml-6 mb-4">
                        <li><strong>Accuracy:</strong> We verify all facts before publication</li>
                        <li><strong>Independence:</strong> We maintain editorial independence from advertisers and sponsors</li>
                        <li><strong>Fairness:</strong> We present multiple perspectives on controversial issues</li>
                        <li><strong>Transparency:</strong> We clearly identify opinion pieces and sponsored content</li>
                        <li><strong>Accountability:</strong> We promptly correct errors and welcome feedback</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Corrections Policy</h3>
                    <p className="mb-4">
                        If we make a mistake, we correct it promptly and transparently. Contact us at corrections@acmenews.com to report an error.
                    </p>
                    <p className="text-sm opacity-50 mt-6">Last updated: December 2025</p>
                </article>

                {/* Contact Section */}
                <div className="bg-base-200 p-8 rounded-box text-center">
                    <h3 className="text-2xl font-bold mb-4">Questions About Our Policies?</h3>
                    <p className="mb-6 opacity-70">
                        If you have any questions about our legal policies or how we handle your data, please don't hesitate to reach out.
                    </p>
                    <a href="/contact" className="btn btn-primary">Contact Us</a>
                </div>

            </div>
        </Wrapper>
    );
};

export default Legal;