import Image from "next/image";

export default function AIRecruitmentPlatformPage() {
  const modules = [
    {
      title: "AI Candidate Screening",
      desc: "Automatically shortlist top candidates using AI-powered evaluation models.",
    },
    {
      title: "Smart Resume Parsing",
      desc: "Extract and analyze candidate profiles with intelligent resume parsing.",
    },
    {
      title: "Automated Hiring Workflow",
      desc: "Streamline recruitment operations with automated hiring pipelines.",
    },
    {
      title: "AI Recommendations",
      desc: "Get intelligent hiring recommendations based on skill and performance analysis.",
    },
  ];

  const features = [
    "AI Resume Ranking",
    "Candidate Skill Matching",
    "Hiring Workflow Automation",
    "Realtime Recruitment Analytics",
    "AI Interview Insights",
    "Behavioral Intelligence",
    "Enterprise Hiring Dashboard",
    "Global Recruitment Management",
  ];

  const workflows = [
    {
      step: "01",
      title: "Collect Applications",
      desc: "Receive candidate applications through integrated recruitment channels.",
    },
    {
      step: "02",
      title: "AI Screening",
      desc: "AI automatically evaluates resumes, skills, and candidate relevance.",
    },
    {
      step: "03",
      title: "Assessment & Evaluation",
      desc: "Candidates complete assessments with AI-driven performance analysis.",
    },
    {
      step: "04",
      title: "Smart Hiring Decisions",
      desc: "Recruiters receive intelligent hiring recommendations and insights.",
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

            <button className="text-[#0F2B46]">AI Recruitment</button>

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
              AI Recruitment Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Hire Smarter
              <br />
              With
              <br />
              <span className="text-[#0F2B46]">Artificial Intelligence</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Transform enterprise recruitment with AI-powered screening,
              intelligent candidate evaluation, automated workflows, and
              realtime hiring analytics.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Start Hiring
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Explore Features
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "94%",
                    label: "Hiring Accuracy",
                  },
                  {
                    value: "2.5x",
                    label: "Faster Recruitment",
                  },
                  {
                    value: "1M+",
                    label: "Candidates Evaluated",
                  },
                  {
                    value: "240+",
                    label: "Enterprise Clients",
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
              <p className="text-sm text-slate-500">Recruitment Efficiency</p>

              <h3 className="text-5xl font-black text-emerald-600 mt-3">
                +240%
              </h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                Improved enterprise hiring performance using AI automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            AI Recruitment Modules
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Enterprise Recruitment Infrastructure
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Intelligent hiring systems built for modern enterprise recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {modules.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-gradient-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7" />

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

      {/* FEATURES */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              Recruitment Features
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              AI Powered Recruitment Ecosystem
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Automate and optimize every stage of recruitment with intelligent
              hiring infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F8FAFC] border border-slate-200 px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B]" />

                    <h3 className="font-bold text-slate-800">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[40px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden">
            <div className="h-[550px] rounded-[32px] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-2xl font-bold">
              AI Recruitment Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Hiring Workflow
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Intelligent Recruitment Process
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
        <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Build AI Powered Hiring Systems
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Transform enterprise recruitment with intelligent automation,
              AI-driven screening, and realtime hiring analytics.
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
