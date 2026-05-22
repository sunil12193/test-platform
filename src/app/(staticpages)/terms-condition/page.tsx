import Image from "next/image";

export default function GleefixTermsPage() {
  const sections = [
    {
      title: "Acceptance Of Terms",
      content:
        "By accessing or using Gleefix services, users agree to comply with these Terms & Conditions and all applicable laws and regulations.",
    },
    {
      title: "Platform Usage",
      content:
        "Users may use Gleefix solely for lawful recruitment, assessment, and enterprise hiring activities. Unauthorized or malicious usage is strictly prohibited.",
    },
    {
      title: "User Accounts",
      content:
        "Users are responsible for maintaining the confidentiality of account credentials and all activities performed under their accounts.",
    },
    {
      title: "Intellectual Property",
      content:
        "All platform content, software, branding, algorithms, and intellectual property remain the exclusive property of Gleefix unless otherwise stated.",
    },
    {
      title: "Data & Privacy",
      content:
        "Use of the platform is also governed by our Privacy Policy. Gleefix implements enterprise-grade security to protect customer and candidate information.",
    },
    {
      title: "Limitation Of Liability",
      content:
        "Gleefix shall not be liable for indirect, incidental, special, or consequential damages arising from the use of the platform or related services.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center overflow-hidden">
              <Image
                src="/gleeffix_logo.jpeg"
                alt="Gleefix"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl font-black text-[#0F2B46]">Gleefix</h2>

              <p className="text-xs text-slate-500 mt-1">
                Consulting Talent. Building Futures.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Home
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Services
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Platform
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          <button className="h-11 px-6 rounded-xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-200">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-7">
            Legal Agreement
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
            Terms & Conditions
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-3xl mx-auto">
            These Terms & Conditions govern your access to and use of the
            Gleefix platform, products, services, and enterprise recruitment
            solutions.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">Effective Date</p>

              <h3 className="font-bold text-slate-900 mt-1">January 2026</h3>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">Jurisdiction</p>

              <h3 className="font-bold text-slate-900 mt-1">
                Global Enterprise Use
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          {/* SIDEBAR */}
          <div className="sticky top-28 rounded-[36px] bg-white border border-slate-200 shadow-sm p-7 hidden lg:block">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900">
                Terms Overview
              </h2>

              <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                Browse important terms and platform policies.
              </p>
            </div>

            <div className="space-y-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className="w-full text-left rounded-2xl bg-slate-50 hover:bg-orange-50 border border-slate-100 hover:border-orange-100 px-5 py-4 text-sm font-semibold text-slate-700 hover:text-[#0F2B46] transition-all duration-200"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="space-y-7">
            {/* INTRO CARD */}
            <div className="rounded-[36px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-7">
                  Enterprise Compliance
                </div>

                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                  Transparent.
                  <br />
                  Secure.
                  <br />
                  Enterprise Ready.
                </h2>

                <p className="text-blue-100 leading-relaxed mt-8 text-lg max-w-3xl">
                  Gleefix is committed to maintaining fair usage,
                  enterprise-grade security, and responsible platform
                  governance.
                </p>
              </div>
            </div>

            {/* TERMS SECTIONS */}
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-5 mb-6">
                  <div>
                    <div className="inline-flex h-14 w-14 rounded-3xl bg-gradient-to-br from-[#0F2B46] to-[#1E4D7B] items-center justify-center text-white text-xl font-black shadow-lg mb-6">
                      {index + 1}
                    </div>

                    <h2 className="text-4xl font-black text-slate-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                  {section.content}
                </p>
              </div>
            ))}

            {/* ACCEPTABLE USE */}
            <div className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 h-64 w-64 bg-orange-100/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
                  Acceptable Usage
                </div>

                <h2 className="text-4xl font-black text-slate-900 leading-tight">
                  Responsible Platform Usage
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
                  {[
                    "No Unauthorized Access",
                    "No Fraudulent Activity",
                    "Secure Credential Usage",
                    "Lawful Recruitment Operations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-6"
                    >
                      <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-[#0F2B46] to-[#1E4D7B] shadow-lg mb-6" />

                      <h3 className="text-xl font-black text-slate-900 leading-tight">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="rounded-[36px] bg-gradient-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-7">
                  Legal Support
                </div>

                <h2 className="text-5xl font-black leading-tight">
                  Need Clarification?
                </h2>

                <p className="text-blue-100 leading-relaxed mt-8 text-lg max-w-3xl">
                  If you have questions regarding these Terms & Conditions,
                  please contact our legal and compliance team.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-10">
                  <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                    Contact Legal Team
                  </button>

                  <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                    legal@gleefix.com
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/gleeffix_logo.jpeg"
                  alt="Gleefix"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">Gleefix</h2>

                <p className="text-xs text-slate-400 mt-1">
                  Consulting Talent. Building Futures.
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mt-6 max-w-sm">
              AI-powered recruitment platform for enterprise hiring and
              assessments.
            </p>
          </div>

          {[
            {
              title: "Company",
              items: ["About", "Careers", "Blogs", "Contact"],
            },
            {
              title: "Platform",
              items: [
                "Assessments",
                "Analytics",
                "AI Proctoring",
                "Integrations",
              ],
            },
            {
              title: "Resources",
              items: ["Help Center", "Documentation", "Privacy", "Terms"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-5">{section.title}</h3>

              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <button
                    key={idx}
                    className="block text-slate-400 hover:text-white transition-all duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Gleefix. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <button className="hover:text-white transition-all duration-200">
              Privacy
            </button>

            <button className="hover:text-white transition-all duration-200">
              Terms
            </button>

            <button className="hover:text-white transition-all duration-200">
              Security
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
