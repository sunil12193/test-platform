import Image from "next/image";

export default function HiringAnalyticsPage() {
  const stats = [
    {
      value: "94%",
      label: "Hiring Accuracy",
    },
    {
      value: "2.4x",
      label: "Faster Screening",
    },
    {
      value: "78K+",
      label: "Candidates Evaluated",
    },
    {
      value: "240+",
      label: "Enterprise Clients",
    },
  ];

  const insights = [
    {
      title: "Candidate Performance",
      desc: "Track assessment scores, completion rates, and ranking trends in realtime.",
    },
    {
      title: "Hiring Funnel",
      desc: "Visualize applicant drop-offs, shortlist conversions, and hiring efficiency.",
    },
    {
      title: "AI Insights",
      desc: "Identify top talent using AI-generated performance recommendations.",
    },
    {
      title: "Fraud Detection",
      desc: "Monitor suspicious activities and proctoring anomalies across campaigns.",
    },
  ];

  const metrics = [
    {
      title: "Assessment Completion",
      value: "84%",
      growth: "+12%",
    },
    {
      title: "Average Candidate Score",
      value: "78%",
      growth: "+8%",
    },
    {
      title: "Shortlisting Rate",
      value: "42%",
      growth: "+17%",
    },
    {
      title: "Hiring Conversion",
      value: "26%",
      growth: "+11%",
    },
  ];

  const charts = [
    "Assessment Performance Analytics",
    "Candidate Funnel Visualization",
    "Department Hiring Insights",
    "AI Recommendation Heatmap",
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

            <button className="text-[#0F2B46]">Hiring Analytics</button>

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
              AI Hiring Analytics
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Realtime
              <br />
              Recruitment
              <br />
              <span className="text-[#0F2B46]">Intelligence</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Gain powerful insights into recruitment performance, candidate
              quality, hiring funnels, and AI-driven talent analytics.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Explore Analytics
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                View Dashboard
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item, index) => (
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
                Faster hiring workflows powered by AI insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Analytics Insights
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Powerful Recruitment Intelligence
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Analyze every stage of recruitment with enterprise-grade analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {insights.map((item, index) => (
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

      {/* METRICS */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                KPI Metrics
              </div>

              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Key Recruitment Metrics
              </h2>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Monitor realtime hiring performance and enterprise recruitment
              efficiency with advanced KPI tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="rounded-[36px] bg-[#F8FAFC] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <p className="text-slate-500 font-medium">{item.title}</p>

                <h3 className="text-5xl font-black text-slate-900 mt-5">
                  {item.value}
                </h3>

                <div className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-bold text-sm mt-6">
                  {item.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-7">
              Analytics Dashboard
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Visualize Recruitment Data In Realtime
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Understand candidate trends, department hiring performance,
              assessment outcomes, and AI recommendations instantly.
            </p>

            <div className="space-y-5 mt-10">
              {charts.map((chart, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#0F2B46] to-[#1E4D7B]" />

                    <h3 className="font-bold text-slate-800">{chart}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[40px] bg-gradient-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden">
            <div className="h-[550px] rounded-[32px] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-2xl font-bold">
              Analytics Dashboard Preview
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-gradient-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Make Smarter Hiring Decisions
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Unlock AI-powered recruitment analytics and improve hiring
              efficiency across your organization.
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
