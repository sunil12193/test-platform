import Image from "next/image";
import Link from "next/link";

export default function GleefixPrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information such as names, email addresses, phone numbers, assessment data, recruitment records, and platform activity required to deliver Gleefix services efficiently.",
    },
    {
      title: "How We Use Information",
      content:
        "Collected information is used to provide hiring solutions, improve recruitment workflows, enhance platform security, deliver analytics, and personalize user experiences.",
    },
    {
      title: "Data Security",
      content:
        "Gleefix uses enterprise-grade encryption, secure infrastructure, realtime monitoring, and access controls to protect customer and candidate data.",
    },
    {
      title: "Third-Party Integrations",
      content:
        "We may integrate with external enterprise platforms such as ATS, HRMS, communication tools, and analytics systems to streamline workflows.",
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use cookies and similar technologies to improve platform functionality, analyze usage patterns, and optimize user experience.",
    },
    {
      title: "User Rights",
      content:
        "Users may request access, correction, deletion, or export of their data in accordance with applicable data protection regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">

      {/* HERO */}
      <section className="relative py-12 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
            Legal & Compliance
          </div>

          <h1 className="text-3xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-3xl mx-auto">
            Your privacy and data security are extremely important to us. This
            Privacy Policy explains how Gleefix collects, uses, and protects
            your information.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">Last Updated</p>

              <h3 className="font-bold text-slate-900 mt-1">January 2026</h3>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-3 shadow-sm">
              <p className="text-sm text-slate-500">Compliance</p>

              <h3 className="font-bold text-slate-900 mt-1">
                GDPR • SOC2 • ISO
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-12 lg:pb-24">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">
          {/* SIDEBAR */}
          <div className="sticky top-28 rounded-[36px] bg-white border border-slate-200 shadow-sm p-7 hidden lg:block">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900">
                Quick Navigation
              </h2>

              <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                Browse privacy and compliance sections.
              </p>
            </div>

            <div className="space-y-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className="w-full text-left rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 px-5 py-4 text-sm font-semibold text-slate-700 hover:text-[#0F2B46] transition-all duration-200"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="space-y-7">
            {/* INTRO */}
            <div className="rounded-[36px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-7">
                  Enterprise Data Protection
                </div>

                <h2 className="text-3xl lg:text-5xl font-black leading-tight">
                  Your Data.
                  <br />
                  Protected By Design.
                </h2>

                <p className="text-blue-100 leading-relaxed mt-8 text-lg max-w-3xl">
                  Gleefix follows modern enterprise security standards and
                  privacy-first principles to ensure secure handling of customer
                  and candidate information.
                </p>
              </div>
            </div>

            {/* POLICY SECTIONS */}
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-5 mb-6">
                  <div>
                    <div className="inline-flex h-14 w-14 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] items-center justify-center text-white text-xl font-black shadow-lg mb-6">
                      {index + 1}
                    </div>

                    <h2 className="lg:text-4xl text-2xl font-black text-slate-900 leading-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
                  {section.content}
                </p>
              </div>
            ))}

            {/* SECURITY HIGHLIGHTS */}
            <div className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-7">
                  Security Standards
                </div>

                <h2 className="lg:text-4xl text-2xl font-black text-slate-900 leading-tight">
                  Enterprise Security Infrastructure
                </h2>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
                  {[
                    "Data Encryption",
                    "Access Control",
                    "Realtime Monitoring",
                    "Secure Cloud Infrastructure",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-[#F8FAFC] border border-slate-200 p-6"
                    >
                      <div className="h-16 w-16 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-lg mb-6" />

                      <h3 className="text-xl font-black text-slate-900 leading-tight">
                        {item}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="rounded-[36px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-7">
                  Privacy Support
                </div>

                <h2 className="text-3xl lg:text-5xl font-black leading-tight">
                  Questions About Privacy?
                </h2>

                <p className="text-blue-100 leading-relaxed mt-8 text-lg max-w-3xl">
                  If you have any questions regarding data handling, security
                  practices, or privacy rights, our compliance team is here to
                  help.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-10">
                  <Link
                    href="/contact-us"
                  >
                    <button className="h-14 px-8 cursor-pointer rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                      Contact Support
                    </button>
                  </Link>

                  <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                    compliance@gleefix.com
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
