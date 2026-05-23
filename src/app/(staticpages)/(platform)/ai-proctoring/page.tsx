import Image from "next/image";

export default function AIProctoringPage() {
  const features = [
    {
      title: "Face Detection",
      desc: "Realtime face tracking and identity verification using AI vision models.",
    },
    {
      title: "Multiple Person Detection",
      desc: "Detect unauthorized participants during assessments instantly.",
    },
    {
      title: "Tab Switching Alerts",
      desc: "Track suspicious browser activities and focus violations.",
    },
    {
      title: "Voice & Noise Detection",
      desc: "Identify background conversations and abnormal audio patterns.",
    },
  ];

  const monitoring = [
    "Live Video Monitoring",
    "Screen Recording",
    "Realtime Suspicious Activity Detection",
    "Browser Lockdown",
    "AI Behavior Analysis",
    "Automated Proctor Reports",
    "Identity Verification",
    "Session Integrity Tracking",
  ];

  const workflow = [
    {
      step: "01",
      title: "Candidate Verification",
      desc: "AI verifies candidate identity before assessment starts.",
    },
    {
      step: "02",
      title: "Live Monitoring",
      desc: "Continuous AI-powered tracking during the examination session.",
    },
    {
      step: "03",
      title: "Suspicious Detection",
      desc: "Realtime alerts generated for abnormal behavior patterns.",
    },
    {
      step: "04",
      title: "Integrity Reports",
      desc: "Detailed proctoring reports with screenshots and analytics.",
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

            <button className="text-[#0F2B46]">AI Proctoring</button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          <button className="h-11 px-6 rounded-xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-200">
            Request Demo
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
              AI Proctoring Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Secure
              <br />
              Online
              <br />
              <span className="text-[#0F2B46]">Assessments</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Advanced AI-powered proctoring platform designed to maintain
              assessment integrity through intelligent monitoring and realtime
              fraud detection.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Explore Platform
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "99.2%",
                    label: "Exam Integrity",
                  },
                  {
                    value: "24/7",
                    label: "Realtime Monitoring",
                  },
                  {
                    value: "1M+",
                    label: "Sessions Monitored",
                  },
                  {
                    value: "AI",
                    label: "Fraud Detection",
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
              <p className="text-sm text-slate-500">
                Suspicious Activities Prevented
              </p>

              <h3 className="text-5xl font-black text-red-500 mt-3">48K+</h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                AI-driven fraud detection across enterprise assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Proctoring Features
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Intelligent Monitoring System
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            AI-powered proctoring capabilities built for enterprise-grade online
            assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {features.map((item, index) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONITORING */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              Monitoring Capabilities
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Advanced AI Surveillance Infrastructure
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Monitor every assessment session with intelligent AI-driven
              security and behavioral analytics.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {monitoring.map((feature, index) => (
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
              AI Proctoring Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            AI Workflow
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            How AI Proctoring Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {workflow.map((item, index) => (
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
              Secure Your Online Assessments
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Prevent cheating, maintain integrity, and build trusted assessment
              experiences with AI-powered proctoring.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                Request Demo
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                Talk To Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
