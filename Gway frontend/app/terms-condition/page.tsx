export default function TermsConditions() {
  return (
    <main className="bg-gradient-to-b from-[#fff3ec] to-[#fffaf6] min-h-screen">

      {/* HERO */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f46c44]/10 blur-3xl" />

        <h1 className="relative text-3xl md:text-5xl font-bold text-gray-800">
          Terms & Conditions
        </h1>

        <p className="relative mt-4 text-gray-600 max-w-2xl mx-auto">
          Please read these terms carefully before using our services
        </p>
      </section>

      {/* CONTENT CARD */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-6 md:p-12">

            {/* LEFT ACCENT */}
            <div className="absolute left-0 top-10 bottom-10 w-2 bg-[#f46c44] rounded-full" />

            {/* CONTENT */}
            <div className="pl-6 md:pl-10 space-y-10">

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Acceptance of Terms
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  By accessing and using Gateway Abroad Education services,
                  you agree to comply with these terms. If you do not agree,
                  please discontinue use immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Services Offered
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  We provide education counseling, admission guidance,
                  and study abroad assistance. Services may change
                  without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  User Responsibilities
                </h2>
                <ul className="mt-3 list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate and up-to-date information</li>
                  <li>Maintain confidentiality of your personal data</li>
                  <li>Avoid misuse of website content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Payments & Refunds
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Payments once made are non-refundable unless stated
                  otherwise in official written communication.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Limitation of Liability
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Gateway Abroad Education shall not be responsible for
                  indirect or consequential damages arising from service use.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Governing Law
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  These terms are governed by the laws of India.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#f46c44]">
                  Contact Information
                </h2>
                <p className="mt-3 text-gray-600">
                  📧 info@gatewayabroad.com
                </p>
              </section>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
