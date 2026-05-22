import Image from "next/image";

export default function GleefixServicesPage() {
  const services = [
    {
      title: "AI Recruitment Solutions",
      description:
        "Automate candidate screening, shortlisting, and hiring decisions with AI-powered intelligence.",
      features: [
        "AI Resume Screening",
        "Smart Candidate Ranking",
        "Automated Shortlisting",
        "Hiring Recommendations",
      ],
    },
    {
      title: "Assessment Platform",
      description:
        "Create enterprise-grade coding, aptitude, psychometric, and technical assessments.",
      features: [
        "Coding Assessments",
        "MCQ & Aptitude Tests",
        "Custom Question Banks",
        "Realtime Evaluation",
      ],
    },
    {
      title: "AI Proctoring",
      description:
        "Prevent cheating and maintain assessment integrity with advanced AI proctoring systems.",
      features: [
        "Face Detection",
        "Tab Switching Alerts",
        "Voice Monitoring",
        "Behavior Analytics",
      ],
    },
    {
      title: "Hiring Campaign Management",
      description:
        "Manage large-scale hiring drives, recruitment campaigns, and candidate communication.",
      features: [
        "Bulk Invitations",
        "Campaign Tracking",
        "Candidate Pipelines",
        "Realtime Progress",
      ],
    },
    {
      title: "Hiring Analytics",
      description:
        "Get deep insights into candidate performance and recruitment effectiveness.",
      features: [
        "Realtime Dashboards",
        "Performance Reports",
        "Fraud Analytics",
        "Exportable Reports",
      ],
    },
    {
      title: "Custom Enterprise Solutions",
      description:
        "Tailor-made hiring ecosystems designed specifically for enterprise workflows.",
      features: [
        "Custom Branding",
        "API Integrations",
        "Multi-Tenant Support",
        "Advanced Security",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
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

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Home
            </button>

            <button className="text-[#0F2B46]">Services</button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Platform
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          {/* ACTION */}
          <button className="h-11 px-6 rounded-xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-200">
            Book Demo
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
            Enterprise Recruitment Infrastructure
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight max-w-5xl mx-auto">
            Powerful Services Built For Modern Hiring
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mt-8">
            From AI recruitment automation to enterprise-grade assessments and
            analytics, Gleefix provides everything required to build a smarter
            hiring ecosystem.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-bold shadow-xl hover:scale-[1.02] transition-all duration-200">
              Explore Platform
            </button>

            <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold hover:shadow-lg transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 h-48 w-48 bg-blue-100/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                {/* ICON */}
                <div className="h-18 w-18 rounded-3xl bg-gradient-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7" />

                <h2 className="text-3xl font-black text-slate-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                  {service.description}
                </p>

                {/* FEATURES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3"
                    >
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B]" />

                      <span className="text-sm font-semibold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ACTION */}
                <button className="mt-10 h-12 px-6 rounded-2xl bg-[#0F2B46] text-white font-semibold hover:bg-[#163a5c] transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
              Why Gleefix
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Enterprise Hiring.
              <br />
              Reimagined With AI.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Our platform combines intelligent automation, advanced analytics,
              and enterprise scalability to transform modern recruitment
              operations.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "AI Powered Recruitment Intelligence",
                "Realtime Candidate Monitoring",
                "Enterprise Security & Scalability",
                "Custom Workflow Automation",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0F2B46] to-[#1E4D7B]" />

                  <h3 className="text-lg font-bold text-slate-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[36px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 text-white shadow-2xl">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "98%",
                    label: "Assessment Accuracy",
                  },
                  {
                    value: "45%",
                    label: "Reduced Hiring Time",
                  },
                  {
                    value: "350+",
                    label: "Enterprise Clients",
                  },
                  {
                    value: "24/7",
                    label: "Realtime Monitoring",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6"
                  >
                    <h3 className="text-4xl font-black">{item.value}</h3>

                    <p className="text-blue-100 mt-3 text-sm leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING */}
            <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 hidden lg:block">
              <p className="text-sm text-slate-500">Platform Uptime</p>

              <h3 className="text-5xl font-black text-emerald-600 mt-3">
                99.99%
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Let’s Build Your Smart Hiring Ecosystem
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Discover how Gleefix can help your enterprise scale recruitment,
              improve hiring quality, and streamline candidate assessment
              workflows.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                Book Free Consultation
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                Contact Sales
              </button>
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
              title: "Services",
              items: [
                "AI Recruitment",
                "Assessments",
                "Analytics",
                "Proctoring",
              ],
            },
            {
              title: "Company",
              items: ["About", "Careers", "Blogs", "Contact"],
            },
            {
              title: "Resources",
              items: ["Help Center", "Privacy", "Terms", "Documentation"],
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
