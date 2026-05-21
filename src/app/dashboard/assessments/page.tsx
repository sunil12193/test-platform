"use client";

import { useEffect, useState } from "react";
import { FiClock, FiFileText, FiHelpCircle, FiUsers } from "react-icons/fi";

import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";
import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import { assessmentData } from "@/dummyData/assessment";
import { Assessment } from "@/type/assessment";

export default function AssessmentsPage() {
  const [data, setData] = useState<Assessment[]>(assessmentData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`${API_BASE_URL}/assessment`);

        console.log("Fetched Data:", response);

        setData(response || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    // ASSESSMENT
    {
      header: "Assessment",

      render: (item: Assessment) => (
        <div className="min-w-[320px] text-left">
          <div className="flex items-start gap-4">
            {/* ICON */}
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-gradient-to-br
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
              <FiFileText size={22} />
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-[15px] font-semibold text-slate-800">
                {item.title}
              </h2>

              <p className="text-xs text-slate-500 mt-1">{item.assessmentId}</p>

              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TYPE
    {
      header: "Type",

      render: (item: Assessment) => (
        <div className="flex justify-center min-w-[140px]">
          <span
            className="
              px-4
              py-2
              rounded-xl
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-xs
              font-semibold
            "
          >
            {item.assessmentType}
          </span>
        </div>
      ),
    },

    // QUESTIONS
    {
      header: "Questions",

      render: (item: Assessment) => (
        <div className="min-w-[150px]">
          <div className="flex items-center justify-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-violet-50
                text-violet-600
                flex
                items-center
                justify-center
              "
            >
              <FiHelpCircle />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-800">
                {item.totalQuestions}
              </h3>

              <p className="text-xs text-slate-500">Questions</p>
            </div>
          </div>
        </div>
      ),
    },

    // MARKS
    {
      header: "Marks",

      render: (item: Assessment) => (
        <div className="min-w-[170px] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total</span>

            <span className="font-bold text-slate-800">{item.totalMarks}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Passing</span>

            <span className="font-bold text-emerald-600">
              {item.passingMarks}
            </span>
          </div>
        </div>
      ),
    },

    // DURATION
    {
      header: "Duration",

      render: (item: Assessment) => (
        <div className="min-w-[150px]">
          <div className="flex items-center justify-center gap-3">
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
              <FiClock />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-800">
                {item.duration}m
              </h3>

              <p className="text-xs text-slate-500">Duration</p>
            </div>
          </div>
        </div>
      ),
    },

    // DIFFICULTY
    {
      header: "Difficulty",

      render: (item: Assessment) => (
        <div className="flex justify-center min-w-[140px]">
          <span
            className={`
              px-4
              py-2
              rounded-xl
              text-xs
              font-semibold
              border

              ${
                item.difficultyLevel === "Hard"
                  ? "bg-red-50 border-red-100 text-red-700"
                  : item.difficultyLevel === "Medium"
                    ? "bg-yellow-50 border-yellow-100 text-yellow-700"
                    : "bg-emerald-50 border-emerald-100 text-emerald-700"
              }
            `}
          >
            {item.difficultyLevel}
          </span>
        </div>
      ),
    },

    // CANDIDATES
    {
      header: "Candidates",

      render: (item: Assessment) => (
        <div className="min-w-[180px]">
          <div className="flex items-center gap-3">
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

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Invited:</span>

                <span className="font-semibold text-slate-800">
                  {item.totalCandidates}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Completed:</span>

                <span className="font-semibold text-emerald-600">
                  {item.completedAttempts}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // CREATED
    {
      header: "Created",

      render: (item: Assessment) => (
        <div className="text-sm text-slate-500 font-medium min-w-[120px]">
          {item.createdAt}
        </div>
      ),
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-50
        via-blue-50/30
        to-slate-100
        p-6
      "
    >
      <div className="space-y-6">
        <ActionButtons
          addUrl="/dashboard/assessments/add"
          importUrl="/dashboard/assessments/import"
          exportUrl="/dashboard/assessments/export"
        />

        <DataTable
          title="Assessments"
          columns={columns}
          data={data}
          onEdit={(item: Assessment) => {
            console.log("Edit:", item);
          }}
        />
      </div>
    </div>
  );
}
