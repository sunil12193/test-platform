import Image from "next/image";

export default function AssessmentsPage() {
  const assessmentTypes = [
    {
      title: "Technical Assessments",
      desc: "Coding challenges, MCQs, debugging, and live programming evaluations.",
      stats: "120K+ Attempts",
    },
    {
      title: "Aptitude Tests",
      desc: "Logical reasoning, quantitative aptitude, and analytical ability tests.",
      stats: "80K+ Candidates",
    },
    {
      title: "Behavioral Assessments",
      desc: "Personality profiling and soft skill evaluations powered by AI.",
      stats: "35K+ Evaluations",
    },
    {
      title: "AI Proctored Exams",
      desc: "Advanced AI monitoring with suspicious activity detection.",
      stats: "99.2% Integrity",
    },
  ];

  const features = [
    "AI Based Evaluation",
    "Realtime Coding Environment",
    "Automated Candidate Ranking",
    "Custom Assessment Builder",
    "Anti-Cheating AI Proctoring",
    "Enterprise Analytics Dashboard",
    "Question Bank Management",
    "Live Video Monitoring",
  ];

  const workflows = [
    {
      step: "01",
      title: "Create Assessment",
      desc: "Design customized tests with coding, MCQ, and AI evaluation modules.",
    },
    {
      step: "02",
      title: "Invite Candidates",
      desc: "Send secure assessment invitations with automated workflows.",
    },
    {
      step: "03",
      title: "Monitor & Analyze",
      desc: "Track live progress, suspicious activities, and performance analytics.",
    },
    {
      step: "04",
      title: "Hire Faster",
      desc: "Rank top candidates instantly with AI-powered recommendations.",
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

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Platform
            </button>

            <button className="text-[#0F2B46]">Assessments</button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          <button className="h-11 px-6 rounded-xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-200">
            Book Demo
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              AI Powered Assessments
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Smart Hiring
              <br />
              Through
              <br />
              <span className="text-[#0F2B46]">Intelligent Assessments</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Evaluate technical, aptitude, behavioral, and coding skills with
              enterprise-grade AI-powered assessments and proctoring systems.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Start Assessment
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Explore Features
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "1M+",
                    label: "Assessments Conducted",
                  },
                  {
                    value: "98%",
                    label: "AI Accuracy",
                  },
                  {
                    value: "240+",
                    label: "Enterprise Clients",
                  },
                  {
                    value: "99.2%",
                    label: "Proctoring Integrity",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/10 p-7"
                  >
                    <h3 className="text-5xl font-black">{item.value}</h3>

                    <p className="text-blue-100 mt-4 leading-relaxed text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 hidden lg:block">
              <p className="text-sm text-slate-500">Assessment Success Rate</p>

              <h3 className="text-5xl font-black text-emerald-600 mt-3">94%</h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                Improvement in hiring efficiency using AI evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT TYPES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Assessment Modules
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Comprehensive Evaluation Ecosystem
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Build customized assessment workflows for every hiring scenario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {assessmentTypes.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7" />

                <h3 className="text-3xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                  {item.desc}
                </p>

                <div className="mt-8 inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold">
                  {item.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              Enterprise Features
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Powerful Features For Modern Recruitment
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Gleefix combines AI, automation, and enterprise infrastructure to
              deliver scalable assessment experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F8FAFC] border border-slate-200 px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-4 rounded-full bg-linear-to-r from-[#0F2B46] to-[#1E4D7B]" />

                    <h3 className="font-bold text-slate-800">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden">
            <div className="h-137.5 rounded-4xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-2xl font-bold">
              Assessment Dashboard Preview
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Assessment Workflow
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            How Gleefix Assessments Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {workflows.map((item, index) => (
            <div
              key={index}
              className="rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl font-black text-[#0F2B46]/10">
                {item.step}
              </div>

              <h3 className="text-3xl font-black text-slate-900 mt-5">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Build Smarter Assessments With AI
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Transform recruitment with intelligent evaluations, realtime
              analytics, and AI-powered proctoring.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                Request Demo
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
