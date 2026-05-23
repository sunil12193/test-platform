"use client";

import { useEffect, useState } from "react";
import {
  FiActivity,
  FiAlertTriangle,
  FiBarChart2,
  FiCalendar,
  FiClipboard,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import { HiringCampaign } from "@/type/hirinigCampiagn";
import { hiringCampaignData } from "@/dummyData/hiringCampaign";

export default function HiringCampaignsPage() {
  const [data, setData] = useState<HiringCampaign[]>(hiringCampaignData);
  const [search, setSearch] = useState<string>("");

  const filteredData = data.filter((item) =>
  (item.campaignName + " " + item.campaignId + " " + item.positionId)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRequest(`${API_BASE_URL}/hiring-campaigns`);

  //       console.log("Fetched Data: Hiring Campaigns", response);

  //       if (response) {
  //         setData(response);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const columns = [
    // CAMPAIGN
    {
      header: "Campaign",

      render: (item: HiringCampaign) => (
        <div className="min-w-90 text-left">
          <div className="flex items-start gap-4">
            {/* ICON */}
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-linear-to-br
                from-[#0F2B46]
                to-[#1E4D7B]
                flex
                items-center
                justify-center
                text-white
                shadow-sm
                shrink-0
              "
            >
              <FiTarget size={22} />
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-semibold text-slate-800 text-[15px]">
                  {item.campaignName}
                </h2>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-[11px]
                    font-semibold
                    border

                    ${item.status === "Active"
                      ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                      : "bg-slate-100 border-slate-200 text-slate-700"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-1">{item.campaignId}</p>

              <div className="mt-4">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-700
                    text-xs
                    font-medium
                  "
                >
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

      render: (item: HiringCampaign) => (
        <div className="flex flex-wrap gap-2 min-w-70">
          {item.assignedAssessments.map((assessment: string, index: number) => (
            <span
              key={index}
              className="
                  px-3
                  py-1
                  rounded-full
                  bg-indigo-50
                  border
                  border-indigo-100
                  text-indigo-700
                  text-xs
                  font-medium
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

      render: (item: HiringCampaign) => (
        <div className="min-w-65">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-sky-50
                text-sky-600
                flex
                items-center
                justify-center
              "
            >
              <FiUsers />
            </div>

            <div>
              <h3 className="font-bold text-slate-800">{item.totalInvited}</h3>

              <p className="text-xs text-slate-500">Total Invited</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Completed</span>

            <span
              className="
                px-3
                py-1
                rounded-full
                bg-emerald-50
                text-emerald-700
                text-xs
                font-semibold
              "
            >
              {item.totalCompleted}
            </span>
          </div>
        </div>
      ),
    },

    // COMPLETION RATE
    {
      header: "Completion",

      render: (item: HiringCampaign) => {
        const completionRate =
          item.totalInvited > 0
            ? Math.round((item.totalCompleted / item.totalInvited) * 100)
            : 0;

        return (
          <div className="min-w-65">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500">Completion</span>

              <span className="font-bold text-emerald-600">
                {completionRate}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="
                  h-full
                  rounded-full
                  bg-linear-to-r
                  from-emerald-500
                  to-green-600
                "
                style={{
                  width: `${completionRate}%`,
                }}
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <FiActivity className="text-emerald-500 text-sm" />

              <p className="text-xs text-slate-500">
                {item.totalCompleted} completed
              </p>
            </div>
          </div>
        );
      },
    },

    // AVERAGE SCORE
    {
      header: "Average Score",

      render: (item: HiringCampaign) => (
        <div className="min-w-65">
          <div className="flex items-center gap-4">
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-linear-to-br
                from-amber-400
                to-orange-500
                text-white
                flex
                items-center
                justify-center
                font-bold
                text-lg
                shadow-sm
              "
            >
              {item.averageScore}%
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Avg Performance</h3>

              <p className="text-xs text-slate-500 mt-1">Candidate Score</p>
            </div>
          </div>
        </div>
      ),
    },

    // SECURITY
    {
      header: "Security",

      render: (item: HiringCampaign) => (
        <div className="min-w-45">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-red-50
                text-red-600
                flex
                items-center
                justify-center
              "
            >
              <FiAlertTriangle />
            </div>

            <div>
              <h3 className="font-semibold text-red-700">
                {item.suspiciousActivities}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Suspicious Activities
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TIMELINE
    {
      header: "Timeline",

      render: (item: HiringCampaign) => (
        <div className="min-w-50">
          <div className="flex items-start gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-amber-50
                text-amber-600
                flex
                items-center
                justify-center
              "
            >
              <FiCalendar />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700">
                {item.startDate}
              </p>

              <p className="text-xs text-slate-500 mt-1">to {item.endDate}</p>
            </div>
          </div>
        </div>
      ),
    },

    // CREATED BY
    {
      header: "Created By",

      render: (item: HiringCampaign) => (
        <div className="min-w-45">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-slate-100
                text-slate-700
                flex
                items-center
                justify-center
              "
            >
              <FiClipboard />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">{item.createdBy}</h3>

              <p className="text-xs text-slate-500 mt-1">Campaign Manager</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      className=" min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 p-6
      "
    >
      <div className="space-y-6">
        <ActionButtons
          addUrl="/dashboard/hiring-campaigns/add"
          importUrl="/dashboard/hiring-campaigns/import"
          exportUrl="/dashboard/hiring-campaigns/export"
          searchValue={search}
          onSearchChange={setSearch}

        />

        <DataTable title="Hiring Campaigns" columns={columns} data={filteredData} />
      </div>
    </div>
  );
}
