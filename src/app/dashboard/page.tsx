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
  {
    label: "Applications",
    value: "12,543",
    width: "100%",
    color: "from-indigo-500 to-purple-500",
  },
  {
    label: "Assessments",
    value: "8,653",
    width: "85%",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Interviews",
    value: "2,350",
    width: "70%",
    color: "from-pink-500 to-rose-500",
  },
  {
    label: "Offers",
    value: "320",
    width: "55%",
    color: "from-orange-500 to-amber-500",
  },
  {
    label: "Hires",
    value: "189",
    width: "40%",
    color: "from-emerald-500 to-green-500",
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 border shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[12px] whitespace-nowrap text-gray-500">{item.title}</p>
                  <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
                  <p className="text-green-600 text-sm mt-2">
                    ↑ {item.change}
                  </p>
                </div>

                <div className="h-14 w-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-12 gap-2 mt-6">
          <div className="col-span-12 xl:col-span-5 bg-white rounded-2xl border p-5">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Candidates Over Time
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Jan 2024 - Jun 2024
                </p>
              </div>

              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  12,543
                </p>
                <p className="text-xs text-green-600 font-medium">
                  ↑ 18.6% growth
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[260px] focus:outline-none">
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
                        stopColor="#8B5CF6"
                        stopOpacity={0.25}
                      />
                      <stop
                        offset="95%"
                        stopColor="#8B5CF6"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    vertical={false}
                    stroke="#E5E7EB"
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <YAxis
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />

                  <Area
                    type="natural"
                    dataKey="candidates"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    fill="url(#candidateGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-5 bg-white rounded-2xl p-5 border">
            <h3 className="font-semibold mb-2">
              Assessment Performance
            </h3>
            <div className="flex flex-col pt-10 lg:flex-row items-center gap-2">
              {/* DONUT */}
              <div className="relative w-42 h-42 flex items-center">

                {/* Inner Circle */}
                <div className="relative w-36 h-36">
                  {/* Colored Ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(#3B82F6 0% 25%, #14B8A6 25% 62%, #FBBF24 62% 87%, #F87171 87% 100%)",
                    }}
                  />

                  {/* White Center */}
                  <div className="absolute inset-[28px] bg-white rounded-full flex flex-col items-center justify-center">
                    <h2 className="text-xl font-bold">8,653</h2>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
              </div>

              {/* LEGEND */}
              <div className="flex-col space-y-4">
                {assessmentData.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: colors[index],
                        }}
                      />

                      <span className="text-[12px] font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>

                    <span className="text-[12px] text-gray-600 whitespace-nowrap">
                      {item.value.toLocaleString()} ({item.percentage}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-2 bg-white rounded-2xl p-5 border">
            <div className="flex justify-between">
              <h3 className="font-semibold">Top Skills</h3>
              <button className="text-purple-600 text-sm">View All</button>
            </div>

            <div className="mt-3 space-y-3">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      style={{ width: `${skill.value}%` }}
                      className="h-2 rounded-full bg-purple-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="grid grid-cols-12 gap-2 mt-6">
          <div className="col-span-12 xl:col-span-5 bg-white rounded-2xl p-3 border">
            <h3 className="font-semibold text-start mb-5">Hiring Funnel</h3>

            <div className="flex flex-col items-center gap-1">
              {funnelData.map((item) => (
                <div
                  key={item.label}
                  className={`h-12 rounded-lg bg-gradient-to-r ${item.color}
                  flex items-center justify-between px-4 text-white font-medium shadow-sm`}
                  style={{ width: item.width }}
                >
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
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