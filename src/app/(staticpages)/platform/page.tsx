import Image from "next/image";

export default function GleefixPlatformPage() {
  const modules = [
    {
      title: "Assessment Engine",
      desc: "Build coding, aptitude, psychometric, and technical assessments with realtime evaluation.",
    },
    {
      title: "AI Proctoring",
      desc: "Monitor candidate behavior using AI-driven fraud prevention and integrity systems.",
    },
    {
      title: "Candidate Management",
      desc: "Track applications, candidate pipelines, and hiring stages from one dashboard.",
    },
    {
      title: "Hiring Campaigns",
      desc: "Manage enterprise recruitment drives and automate candidate invitations.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Gain actionable hiring insights through realtime dashboards and reports.",
    },
    {
      title: "Enterprise Integrations",
      desc: "Connect ATS, HRMS, Slack, Teams, Zoom, and custom APIs seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">

      {/* HERO */}
      <section className="relative py-12 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              Next Generation Recruitment Platform
            </div>

            <h1 className="text-3xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              The Complete
              <br />
              Hiring Platform
              <br />
              <span className="text-[#0F2B46]">Powered By AI.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Gleefix unifies assessments, candidate management, AI proctoring,
              analytics, and enterprise recruitment workflows into one powerful
              platform.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <button className="h-14 lg:px-8 text-sm lg:text-lg rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Explore Platform
              </button>

              <button className="h-14 lg:px-8 text-sm lg:text-lg rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Live Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[36px] bg-white border border-slate-200 shadow-2xl p-7 overflow-hidden">
              {/* TOP */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Platform Overview
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Enterprise recruitment infrastructure
                  </p>
                </div>

                <div className="h-16 w-16 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B]" />
              </div>

              {/* MAIN SCREEN */}
              <div className="h-72 rounded-[28px] bg-linear-to-br from-blue-50 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 font-semibold text-lg">
                Dashboard Preview
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 lg:gap-2 mt-5">
                {[
                  {
                    value: "12K+",
                    label: "Candidates",
                  },
                  {
                    value: "98%",
                    label: "Accuracy",
                  },
                  {
                    value: "350+",
                    label: "Clients",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50 border border-slate-100 lg:p-5 p-2 text-center"
                  >
                    <h3 className=" text-xl lg:text-3xl font-black text-[#0F2B46]">
                      {item.value}
                    </h3>

                    <p className="text-sm text-slate-500 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING */}
            {/* <div className="absolute -bottom-10 -left-10 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 hidden lg:block">
              <p className="text-sm text-slate-500">Fraud Detection</p>

              <h3 className="text-5xl font-black text-red-600 mt-3">AI</h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                Advanced realtime cheating prevention system.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* PLATFORM MODULES */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Platform Modules
          </div>

          <h2 className="lg:text-5xl text-3xl font-black text-slate-900 leading-tight">
            Everything Required To Scale Hiring
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Modular enterprise platform designed for intelligent recruitment
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-4xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* BG */}
              <div className="absolute top-0 right-0 h-52 w-52 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7" />

                <h3 className="lg:text-3xl text-2xl font-black text-slate-900 leading-tight">
                  {module.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                  {module.desc}
                </p>

                <button className="mt-10 text-[#0F2B46] font-bold hover:translate-x-1 transition-all duration-200">
                  Explore Module →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="bg-white border-y border-slate-200 py-12 lg:py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Enterprise Dashboard
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
              Beautiful Analytics.
              <br />
              Powerful Insights.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Gain complete visibility into recruitment campaigns, assessments,
              candidate performance, and platform security.
            </p>
          </div>

          {/* DASHBOARD */}
          <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* LEFT */}
              <div className="lg:col-span-2 rounded-4xl bg-white p-6 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">
                      Recruitment Analytics
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Realtime platform insights
                    </p>
                  </div>

                  <button className="h-11 px-5 mt-2 lg:mt-0 rounded-xl bg-slate-100 text-slate-700 font-semibold">
                    This Month
                  </button>
                </div>

                <div className="h-80 rounded-[28px] bg-linear-to-br from-slate-50 to-blue-50 border border-slate-200 flex items-center justify-center text-slate-400 font-semibold text-lg">
                  Advanced Analytics Visualization
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-5">
                {[
                  {
                    value: "1.8K",
                    label: "Candidates Live",
                  },
                  {
                    value: "94%",
                    label: "Assessment Completion",
                  },
                  {
                    value: "14",
                    label: "Fraud Alerts",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/10 p-7 text-white"
                  >
                    <h3 className="text-3xl lg:text-5xl font-black">{item.value}</h3>

                    <p className="text-blue-100 mt-4 text-sm leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900">
            How The Platform Works
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            A complete end-to-end recruitment ecosystem powered by automation
            and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {[
            "Create Assessment",
            "Invite Candidates",
            "Monitor Realtime",
            "Analyze Results",
          ].map((step, index) => (
            <div
              key={index}
              className="relative rounded-4xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-5 right-5 text-7xl font-black text-slate-100">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] mb-7" />

                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {step}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5">
                  Enterprise-grade workflow automation for scalable recruitment
                  operations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-12 lg:pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-6xl font-black leading-tight">
              Experience The Future Of Hiring
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Modern enterprises use Gleefix to streamline recruitment, automate
              hiring workflows, and improve candidate quality.
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
    </div>
  );
}
