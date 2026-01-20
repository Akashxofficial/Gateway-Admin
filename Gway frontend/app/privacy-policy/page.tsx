export default function PrivacyPolicy() {
  return (
    <main className="bg-gradient-to-b from-[#fffaf6] to-[#fff3ec] min-h-screen">

      {/* HERO */}
      <section className="py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-[0_25px_55px_rgba(0,0,0,0.12)] p-6 md:p-12 space-y-12">

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                Overview
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Information We Collect
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                We may collect personal information such as your name,
                phone number, email address, educational background,
                and preferences when you interact with our website
                or submit inquiry forms.
              </p>
            </div>

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                Usage
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                How We Use Your Information
              </h2>

              <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide counseling and advisory services</li>
                <li>To respond to inquiries and support requests</li>
                <li>To improve our website and services</li>
              </ul>
            </div>

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                Protection
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Data Security
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational
                measures to safeguard your personal data against
                unauthorized access, misuse, or disclosure.
              </p>
            </div>

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                Cookies
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Cookies & Tracking
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Cookies help us understand how visitors interact with
                our website. You may disable cookies through your
                browser settings if preferred.
              </p>
            </div>

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                External Links
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Third-Party Websites
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Our website may contain links to third-party platforms.
                We are not responsible for their privacy practices
                or content.
              </p>
            </div>

            {/* BLOCK */}
            <div>
              <span className="inline-block bg-[#f46c44]/10 text-[#f46c44] px-4 py-1 rounded-full text-sm font-medium">
                Updates
              </span>

              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                Policy Updates
              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">
                This Privacy Policy may be updated periodically.
                Continued use of our website indicates acceptance
                of the revised policy.
              </p>
            </div>

            {/* CONTACT */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-800">
                Contact Us
              </h3>

              <p className="mt-2 text-gray-600">
                If you have questions about this Privacy Policy, contact us at:
              </p>

              <p className="mt-1 font-medium text-[#f46c44]">
                info@gatewayabroad.com
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
