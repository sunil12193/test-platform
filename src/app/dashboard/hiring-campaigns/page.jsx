"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";

const hiringCampaignData = [
  {
    campaignId: "CMP-1001",

    campaignName: "Frontend Hiring Drive 2026",

    positionId: "POS-1001",

    assignedAssessments: [
      "React Skill Test",
      "JavaScript MCQ",
      "Frontend Coding Round",
    ],

    candidateIds: [
      "CND-1001",
      "CND-1002",
      "CND-1003",
    ],

    totalInvited: 150,
    totalCompleted: 96,

    averageScore: 78,

    suspiciousActivities: 3,

    startDate: "2026-05-15",
    endDate: "2026-05-30",

    status: "Active",

    createdBy: "Sunil Kumar",
  },

  {
    campaignId: "CMP-1002",

    campaignName: "Backend Internship Program",

    positionId: "POS-1002",

    assignedAssessments: [
      "Node.js Assessment",
      "MongoDB Quiz",
    ],

    candidateIds: [
      "CND-2001",
      "CND-2002",
    ],

    totalInvited: 80,
    totalCompleted: 80,

    averageScore: 69,

    suspiciousActivities: 1,

    startDate: "2026-04-10",
    endDate: "2026-04-25",

    status: "Completed",

    createdBy: "HR Team",
  },
];

export default function HiringCampaignsPage() {

  const columns = [

    // CAMPAIGN
    {
      header: "Campaign",

      render: (item) => (
        <div className="min-w-[320px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
              shrink-0
            ">
              {item.campaignName.charAt(0)}
            </div>

            <div>
              <h2 className="font-bold text-gray-900 text-base">
                {item.campaignName}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {item.campaignId}
              </p>

              <div className="mt-3">
                <span className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                ">
                  Position : {item.positionId}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // ASSESSMENTS
    {
      header: "Assessments",

      render: (item) => (
        <div className="
          flex
          flex-wrap
          gap-2
          min-w-[280px]
        ">

          {item.assignedAssessments.map((assessment, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-gradient-to-r
                from-indigo-100
                to-blue-100
                text-indigo-700
              "
            >
              {assessment}
            </span>
          ))}
        </div>
      ),
    },

    // CANDIDATES
    {
      header: "Candidates",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">
              Total Invited
            </span>

            <span className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.totalInvited}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Completed
            </span>

            <span className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.totalCompleted}
            </span>
          </div>
        </div>
      ),
    },

    // COMPLETION RATE
    {
      header: "Completion",

      render: (item) => {

        const completionRate = Math.round(
          (item.totalCompleted / item.totalInvited) * 100
        );

        return (
          <div className="min-w-[220px]">

            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-700">
                {completionRate}%
              </span>

              <span className="text-xs text-gray-500">
                Completion Rate
              </span>
            </div>

            <div className="
              w-full
              h-2
              rounded-full
              bg-gray-200
              overflow-hidden
            ">
              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600
                "
                style={{
                  width: `${completionRate}%`,
                }}
              />
            </div>
          </div>
        );
      },
    },

    // AVERAGE SCORE
    {
      header: "Average Score",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="flex items-center gap-3">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-lg
              shadow-lg
            ">
              {item.averageScore}%
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Avg Performance
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Candidate Score
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // SECURITY
    {
      header: "Security",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="
            bg-red-100
            text-red-700
            px-4
            py-3
            rounded-2xl
            font-bold
            text-sm
            w-fit
          ">
            {item.suspiciousActivities} Suspicious
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Activities Detected
          </p>
        </div>
      ),
    },

    // TIMELINE
    {
      header: "Timeline",

      render: (item) => (
        <div className="min-w-[200px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-3
          ">
            <p className="font-semibold text-gray-800">
              {item.startDate}
            </p>

            <p className="text-xs text-gray-500 mt-1">
              to {item.endDate}
            </p>
          </div>
        </div>
      ),
    },

    // STATUS
    {
      header: "Status",

      render: (item) => (
        <div
          className={`
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit

            ${item.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {item.status}
        </div>
      ),
    },

    // CREATED BY
    {
      header: "Created By",

      render: (item) => (
        <div className="min-w-[180px]">

          <h3 className="font-semibold text-gray-800">
            {item.createdBy}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Campaign Manager
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <ActionButtons
        addUrl="/dashboard/hiring-campaigns/add"
        importUrl="/dashboard/hiring-campaigns/import"
        exportUrl="/dashboard/hiring-campaigns/export"

      // showExport={false}
      />

      <DataTable
        title="Hiring Campaigns"
        columns={columns}
        data={hiringCampaignData}
      />

    </div>
  );
}