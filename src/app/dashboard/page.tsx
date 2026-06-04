"use client";

import {
  FiBriefcase,
  FiClipboard,
  FiUsers,
  FiUser,
} from "react-icons/fi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", candidates: 1200 },
  { month: "Feb", candidates: 1500 },
  { month: "Mar", candidates: 1800 },
  { month: "Apr", candidates: 2200 },
  { month: "May", candidates: 2600 },
  { month: "Jun", candidates: 3100 },
];

const stats = [
  {
    title: "Total Candidates",
    value: "12,543",
    change: "+18.6%",
    icon: <FiUsers size={24} />,
  },
  {
    title: "Assessments Completed",
    value: "8,653",
    change: "+22.4%",
    icon: <FiClipboard size={24} />,
  },
  {
    title: "Interviews Conducted",
    value: "2,350",
    change: "+15.7%",
    icon: <FiUsers size={24} />,
  },
  {
    title: "Offers Made",
    value: "320",
    change: "+20.0%",
    icon: <FiBriefcase size={24} />,
  },
  {
    title: "Hires",
    value: "189",
    change: "+25.8%",
    icon: <FiUser size={24} />,
  },
];

const assessmentData = [
  {
    label: "Excellent (80-100%)",
    value: 2150,
    percentage: 24.8,
  },
  {
    label: "Good (60-79%)",
    value: 3250,
    percentage: 37.6,
  },
  {
    label: "Average (40-59%)",
    value: 2100,
    percentage: 24.3,
  },
  {
    label: "Below Avg (<40%)",
    value: 1153,
    percentage: 13.3,
  },
];

const funnelData = [
  { label: "Applied", value: 1200, width: "220px" },
  { label: "Screened", value: 850, width: "180px" },
  { label: "Interviewed", value: 450, width: "140px" },
  { label: "Offered", value: 120, width: "100px" },
  { label: "Hired", value: 80, width: "70px" },
];
const funnelColors = [
  "from-blue-500 to-blue-600",
  "from-cyan-500 to-cyan-600",
  "from-green-500 to-green-600",
  "from-yellow-500 to-yellow-600",
  "from-red-500 to-red-600",
];
const sourceData = [
  {
    label: "LinkedIn",
    value: 3250,
    percentage: 37.6,
  },
  {
    label: "Referral",
    value: 2150,
    percentage: 24.8,
  },
  {
    label: "Naukri",
    value: 2100,
    percentage: 24.3,
  },
  {
    label: "Company Website",
    value: 1153,
    percentage: 13.3,
  },
];

const sourceColors = [
  "#3B82F6",
  "#14B8A6",
  "#FBBF24",
  "#F87171",
];

const colors = [
  "#3B82F6", // Blue
  "#14B8A6", // Teal
  "#FBBF24", // Yellow
  "#F87171", // Red
  "#8B5CF6", // Purple
  "#10B981", // Green
];

const skills = [
  { name: "Python", value: 82 },
  { name: "SQL", value: 74 },
  { name: "JavaScript", value: 68 },
  { name: "Problem Solving", value: 64 },
  { name: "Communication", value: 58 },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-6 overflow-auto">
        {/* PAGE TITLE */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">
            Overview of your hiring pipeline and key metrics.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className=" relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0f2b46] via-[#1c4d7e] to-[#3d79b8]" />

              {/* Background Glow */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0f2b46]/5 blur-2xl" />

              <div className="relative flex items-center justify-between ">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                      +{item.change}
                    </span>

                    <span className="text-xs text-slate-400">
                      vs last month
                    </span>
                  </div>
                </div>

                <div
                  className=" flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f2b46]/10 text-[#0f2b46]">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHARTS SECTION */}
        <div className="grid grid-cols-12 gap-4 mt-6">

          {/* CANDIDATE TREND */}
          <div className="col-span-12 xl:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-slate-100">

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Candidate Growth
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Recruitment performance overview
                  </p>
                </div>

                <button className="px-3 py-1.5 text-sm rounded-xl bg-[#0f2b46]/10 text-[#0f2b46]">
                  Last 6 Months
                </button>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-3 gap-4 mt-5">

                <div>
                  <p className="text-xs text-slate-500">
                    Total Candidates
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900">
                    12.5K
                  </h4>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Growth Rate
                  </p>

                  <h4 className="text-2xl font-bold text-green-600">
                    +18.6%
                  </h4>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Active Jobs
                  </p>

                  <h4 className="text-2xl font-bold text-slate-900">
                    64
                  </h4>
                </div>

              </div>
            </div>

            {/* Chart */}
            <div className="p-4 h-[320px]">

              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>

                  <defs>
                    <linearGradient
                      id="candidateGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#0f2b46"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="95%"
                        stopColor="#0f2b46"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    vertical={false}
                    stroke="#E2E8F0"
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                  />

                  <YAxis
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow:
                        "0px 15px 40px rgba(0,0,0,0.08)",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="candidates"
                    stroke="#0f2b46"
                    strokeWidth={4}
                    fill="url(#candidateGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>

            </div>
          </div>

          {/* ASSESSMENT PERFORMANCE */}
          <div className="col-span-12 xl:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h3 className="font-bold text-slate-900">
                  Assessment Results
                </h3>

                <p className="text-sm text-slate-500">
                  Candidate score distribution
                </p>
              </div>

              <div className="bg-[#0f2b46]/10 px-3 py-1 rounded-xl">
                <span className="text-xs font-semibold text-[#0f2b46]">
                  8,653 Tests
                </span>
              </div>

            </div>

            <div className="flex flex-col items-center">

              {/* DONUT */}
              <div className="relative w-48 h-48">

                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#0f2b46 0% 25%, #1d4f80 25% 62%, #3a77b7 62% 87%, #94b9dd 87% 100%)",
                  }}
                />

                <div className="absolute inset-[24px] bg-white rounded-full flex flex-col justify-center items-center shadow-inner">

                  <h2 className="text-3xl font-bold">
                    8.6K
                  </h2>

                  <p className="text-sm text-slate-500">
                    Completed
                  </p>

                </div>

              </div>

              {/* LEGEND */}
              <div className="w-full mt-6 space-y-4">

                {assessmentData.map((item, index) => (

                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">

                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: colors[index],
                        }}
                      />

                      <span className="text-sm text-slate-700">
                        {item.label}
                      </span>

                    </div>

                    <span className="font-semibold text-slate-900">
                      {item.percentage}%
                    </span>
                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* TOP SKILLS */}
          <div className="col-span-12 xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-5">

            <div className="flex items-center justify-between mb-6">

              <h3 className="font-bold text-slate-900">
                Top Skills
              </h3>

              <button className="text-[#0f2b46] text-sm font-medium">
                View All
              </button>

            </div>

            <div className="space-y-5">

              {skills.map((skill) => (

                <div key={skill.name}>

                  <div className="flex justify-between mb-2">

                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>

                    <span className="text-sm font-semibold text-slate-900">
                      {skill.value}%
                    </span>

                  </div>

                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#0f2b46] to-[#2d5d8f]"
                      style={{
                        width: `${skill.value}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            {/* Extra Metric */}
            <div className="mt-8 p-4 rounded-2xl bg-[#0f2b46] text-white">

              <p className="text-xs opacity-80">
                Most Demanded
              </p>

              <h4 className="font-bold mt-1">
                Python
              </h4>

              <p className="text-xs opacity-80 mt-1">
                Appears in 82% of job roles
              </p>

            </div>

          </div>

        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-12 gap-2 mt-6">
          <div className="col-span-12 xl:col-span-5 bg-white rounded-2xl p-4 border">
            <h3 className="font-semibold text-start mb-5">Hiring Funnel</h3>

            <div className="flex items-center justify-center gap-8">
              {/* FUNNEL */}
              <div className="flex flex-col items-center gap-2">
                {funnelData.map((item, index) => (
                  <div
                    key={item.label}
                    className={`h-6 rounded-md bg-gradient-to-r ${funnelColors[index % funnelColors.length]
                      }`}
                    style={{ width: item.width }}
                  />
                ))}
              </div>

              {/* LEGEND */}
              <div className="flex flex-col gap-3">
                {funnelData.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-6 min-w-[180px]"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${funnelColors[index % funnelColors.length]
                          }`}
                      />

                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-sm text-gray-600 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-4 bg-white rounded-2xl p-3 border">
            <h3 className="font-semibold mb-4">
              Candidates by Source
            </h3>

            <div className="flex flex-col pt-10 lg:flex-row items-center gap-2">
              {/* DONUT */}
              <div className="relative w-42 h-42 flex items-center">
                <div className="relative w-36 h-36">
                  {/* Colored Ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(
              ${sourceColors[0]} 0% 37.6%,
              ${sourceColors[1]} 37.6% 62.4%,
              ${sourceColors[2]} 62.4% 86.7%,
              ${sourceColors[3]} 86.7% 100%
            )`,
                    }}
                  />
                </div>
              </div>

              {/* LEGEND */}
              <div className="flex-col space-y-4">
                {sourceData.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor:
                            sourceColors[index],
                        }}
                      />
                      <span className="text-[10px] font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-[10px] text-gray-600 whitespace-nowrap">
                      {item.value.toLocaleString()} (
                      {item.percentage}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-3 bg-white rounded-2xl p-3 border">
            <div className="flex justify-between">
              <h3 className="font-semibold">Proctoring Overview</h3>
              <button className="text-purple-600 text-sm">
                View Details
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <Card title="Tests Proctored" value="5,643" />
              <Card title="Suspicious Activities" value="320" />
              <Card title="Flagged Sessions" value="145" />
              <Card title="Integrity Score" value="98.2%" />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl border mt-6 overflow-hidden">
          <div className="p-5 flex justify-between">
            <h3 className="font-semibold">Recent Assessments</h3>
            <button className="text-purple-600 text-sm">
              View All Assessments
            </button>
          </div>

          <table className="w-full">
            <thead className="bg-gray-50 border-y">
              <tr>
                <th className="text-left p-4">Assessment</th>
                <th className="text-left p-4">Job Role</th>
                <th className="text-left p-4">Candidates</th>
                <th className="text-left p-4">Completed</th>
                <th className="text-left p-4">Avg Score</th>
                <th className="text-left p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Full Stack Developer Test</td>
                <td className="p-4">Full Stack Developer</td>
                <td className="p-4">1,250</td>
                <td className="p-4">980 (78%)</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    76.4%
                  </span>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 border rounded-lg">
                    View Report
                  </button>
                </td>
              </tr>

              <tr>
                <td className="p-4">Data Analyst Assessment</td>
                <td className="p-4">Data Analyst</td>
                <td className="p-4">950</td>
                <td className="p-4">760 (80%)</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    72.1%
                  </span>
                </td>
                <td className="p-4">
                  <button className="px-4 py-2 border rounded-lg">
                    View Report
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-4">
      <p className="text-xs text-gray-500">{title}</p>
      <h3 className="text-xl font-bold mt-2">{value}</h3>
    </div>
  );
}