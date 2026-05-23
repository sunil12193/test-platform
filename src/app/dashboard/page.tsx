export default function RTestDashboard() {
  const stats = [
    {
      title: "Total Assessments",
      value: "248",
      growth: "+18%",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Active Candidates",
      value: "4,892",
      growth: "+24%",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Completion Rate",
      value: "86%",
      growth: "+12%",
      color: "from-orange-400 to-amber-500",
    },
    {
      title: "Fraud Alerts",
      value: "14",
      growth: "-8%",
      color: "from-rose-500 to-red-600",
    },
  ];

  const recentAssessments = [
    {
      name: "Frontend Hiring Test",
      candidates: 320,
      completion: "84%",
      status: "Active",
    },
    {
      name: "Backend Node.js Round",
      candidates: 180,
      completion: "72%",
      status: "Live",
    },
    {
      name: "UI/UX Design Assessment",
      candidates: 90,
      completion: "96%",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2 text-sm">
            Monitor hiring campaigns, assessments, analytics & candidate
            performance.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="h-11 px-5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:shadow-md transition-all duration-200">
            Export Reports
          </button>

          <button className="h-11 px-5 rounded-xl bg-[#0F2B46] text-white font-medium shadow-sm hover:bg-[#163a5c] hover:shadow-md transition-all duration-200">
            Create Assessment
          </button>
        </div>
      </div>

      {/* HERO */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-linear-to-r
          from-[#0F2B46]
          via-[#163A5C]
          to-[#1E4D7B]
          p-8
          text-white
          shadow-2xl
          mb-8
        "
      >
        <div className="absolute top-0 right-0 h-72 w-72 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium mb-5">
              AI Powered Hiring Intelligence
            </div>

            <h2 className="text-4xl font-bold leading-tight max-w-xl">
              Smart Assessment & Recruitment Platform
            </h2>

            <p className="text-blue-100 mt-5 leading-relaxed max-w-xl">
              Manage candidates, monitor assessment progress, detect suspicious
              activities, and generate enterprise-grade hiring analytics.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-6 py-3 rounded-2xl bg-white text-[#0F2B46] font-semibold hover:scale-[1.02] transition-all duration-200">
                Start Campaign
              </button>

              <button className="px-6 py-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all duration-200">
                View Analytics
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-5">
              <p className="text-sm text-blue-100">Assessments Today</p>
              <h3 className="text-4xl font-bold mt-3">42</h3>
              <p className="text-emerald-300 text-sm mt-3">+12% Growth</p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-5">
              <p className="text-sm text-blue-100">Candidates Live</p>
              <h3 className="text-4xl font-bold mt-3">1.8k</h3>
              <p className="text-emerald-300 text-sm mt-3">
                Real-time Monitoring
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Platform Health</p>
                  <h3 className="text-3xl font-bold mt-3">99.98%</h3>
                </div>

                <div className="h-24 w-24 rounded-full border-8 border-emerald-400 flex items-center justify-center text-xl font-bold">
                  A+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{item.title}</p>

                <h3 className="text-3xl font-bold text-slate-900 mt-4">
                  {item.value}
                </h3>
              </div>

              <div
                className={`h-14 w-14 rounded-2xl bg-linear-to-br ${item.color}`}
              />
            </div>

            <div className="mt-6 inline-flex px-3 py-1 rounded-full bg-slate-100 text-sm font-medium text-slate-700">
              {item.growth}
            </div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">
          {/* PERFORMANCE */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Assessment Performance
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Weekly assessment engagement analytics
                </p>
              </div>

              <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all duration-200">
                This Week
              </button>
            </div>

            <div className="h-80 rounded-3xl bg-linear-to-br from-slate-50 to-blue-50 border border-slate-100 flex items-center justify-center text-slate-400 text-lg font-medium">
              Analytics Chart Area
            </div>
          </div>

          {/* RECENT ASSESSMENTS */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Recent Assessments
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Ongoing recruitment assessments
                </p>
              </div>

              <button className="text-sm font-semibold text-[#0F2B46] hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentAssessments.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {item.name}
                      </h4>

                      <div className="flex items-center gap-5 mt-3 text-sm text-slate-500">
                        <span>{item.candidates} Candidates</span>
                        <span>{item.completion} Completion</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700"
                            : item.status === "Live"
                              ? "bg-orange-50 text-orange-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {item.status}
                      </span>

                      <button className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all duration-200">
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* ACTIVITY */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Live Activity
            </h3>

            <div className="space-y-5">
              {[
                "12 candidates started assessment",
                "Frontend Drive completed by 18 users",
                "2 suspicious activities detected",
                "New campaign created successfully",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#0F2B46] mt-2" />

                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Quick Actions
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Create Test",
                "Invite Users",
                "Generate Report",
                "Manage Campaign",
              ].map((item, index) => (
                <button
                  key={index}
                  className="h-28 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-[#0F2B46] hover:text-white transition-all duration-300 text-sm font-semibold text-slate-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* SECURITY */}
          <div className="rounded-3xl bg-linear-to-br from-red-500 to-rose-600 p-6 text-white shadow-xl">
            <p className="text-sm text-red-100">AI Proctoring Enabled</p>

            <h3 className="text-3xl font-bold mt-3">14 Alerts</h3>

            <p className="text-sm text-red-100 mt-4 leading-relaxed">
              Suspicious activities automatically detected and flagged during
              assessments.
            </p>

            <button className="mt-6 w-full h-11 rounded-2xl bg-white text-red-600 font-semibold hover:scale-[1.02] transition-all duration-200">
              Review Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
