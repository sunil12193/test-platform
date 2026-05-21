"use client";

import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiMapPin,
  FiUsers,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";

import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import { JobPosition } from "@/type/jobPosition";
import { jobPositionsData } from "@/dummyData/jobPosition";

export default function JobPositionsPage() {
  const [data, setData] = useState<JobPosition[]>(jobPositionsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`${API_BASE_URL}/job-position`);

        console.log("Fetched Data: Job Positions", response);

        if (response) {
          setData(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    // POSITION
    {
      header: "Position",

      render: (item: JobPosition) => (
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
                shrink-0
                shadow-sm
              "
            >
              <FiBriefcase size={22} />
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-semibold text-slate-800 text-[15px]">
                  {item.title}
                </h2>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-[11px]
                    font-semibold
                    border

                    ${
                      item.status === "Open"
                        ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                        : "bg-red-50 border-red-100 text-red-700"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-1">{item.positionId}</p>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-slate-100
                    text-slate-700
                    text-xs
                    font-medium
                  "
                >
                  {item.department}
                </span>

                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    text-xs
                    font-medium
                    flex
                    items-center
                    gap-1
                  "
                >
                  <FiMapPin size={12} />

                  {item.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // EMPLOYMENT
    {
      header: "Employment",

      render: (item: JobPosition) => (
        <div className="min-w-[180px]">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              bg-indigo-50
              border
              border-indigo-100
              text-indigo-700
              text-xs
              font-semibold
            "
          >
            <FiLayers />

            {item.employmentType}
          </div>

          <p className="text-sm text-slate-600 mt-4">
            {item.experienceRequired}
          </p>

          <p className="text-xs text-slate-500 mt-1">Experience Required</p>
        </div>
      ),
    },

    // SALARY
    {
      header: "Salary",

      render: (item: JobPosition) => (
        <div className="min-w-[180px]">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-emerald-50
                text-emerald-600
                flex
                items-center
                justify-center
              "
            >
              <FiDollarSign />
            </div>

            <div>
              <h3 className="font-bold text-emerald-600 text-base">
                {item.salaryRange}
              </h3>

              <p className="text-xs text-slate-500 mt-1">Compensation</p>
            </div>
          </div>
        </div>
      ),
    },

    // SKILLS
    {
      header: "Required Skills",

      render: (item: JobPosition) => (
        <div className="flex flex-wrap gap-2 min-w-[260px]">
          {item.requiredSkills.map((skill: string, index: number) => (
            <span
              key={index}
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
              {skill}
            </span>
          ))}
        </div>
      ),
    },

    // ASSESSMENT
    {
      header: "Assessment",

      render: (item: JobPosition) => (
        <div
          className="
            min-w-[240px]
            px-4
            py-3
            rounded-2xl
            bg-slate-50
            border
            border-slate-200
            text-slate-700
            text-sm
            font-medium
          "
        >
          {item.assignedAssessment}
        </div>
      ),
    },

    // HIRING
    {
      header: "Hiring Stats",

      render: (item: JobPosition) => (
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
              <h3 className="font-bold text-slate-800">{item.applicants}</h3>

              <p className="text-xs text-slate-500">Total Applicants</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Openings</span>

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
                {item.openings}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Shortlisted</span>

              <span className="font-semibold text-blue-700">
                {item.shortlisted}
              </span>
            </div>
          </div>
        </div>
      ),
    },

    // CREATED
    {
      header: "Created",

      render: (item: JobPosition) => (
        <div className="min-w-[140px]">
          <p className="text-sm font-semibold text-slate-700">
            {item.createdAt}
          </p>

          <p className="text-xs text-slate-500 mt-1">Published Date</p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-blue-50/30
        to-slate-100
        p-6
      "
    >
      <div className="space-y-6">
        <ActionButtons
          addUrl="/dashboard/job-positions/add"
          importUrl="/dashboard/job-positions/import"
          exportUrl="/dashboard/job-positions/export"
        />

        <DataTable
          title="Job Positions"
          columns={columns}
          data={data}
          onEdit={(item: JobPosition) => {
            console.log("Edit Data:", item);
          }}
        />
      </div>
    </div>
  );
}
