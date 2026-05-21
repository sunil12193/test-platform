"use client";
import DataTable from "@/component/table";
import ActionButtons from "@/component/button";
import { useEffect, useState } from "react";
import { API_BASE_URL, getRequest } from "@/util/APIGeneric";


// const assessmentData = [
//   {
//     assessmentId: "ASM-1001",
//     title: "Frontend React Assessment",
//     description: "React.js, Hooks, API & TailwindCSS Test",

//     assessmentType: "Coding",
//     duration: 60,
//     totalQuestions: 25,
//     totalMarks: 100,
//     passingMarks: 40,

//     difficultyLevel: "Medium",

//     questionBankIds: ["QB101", "QB102"],

//     randomizeQuestions: true,
//     negativeMarking: false,

//     startDate: "2026-05-20",
//     endDate: "2026-05-22",

//     status: "Active",

//     totalCandidates: 120,
//     completedAttempts: 84,

//     averageScore: 76,
//     suspiciousActivities: 2,

//     createdBy: "Admin",
//     createdAt: "2026-05-15",
//   },

//   {
//     assessmentId: "ASM-1002",
//     title: "JavaScript Aptitude Test",
//     description: "Logic Building + JavaScript Fundamentals",

//     assessmentType: "Mixed",
//     duration: 45,
//     totalQuestions: 40,
//     totalMarks: 80,
//     passingMarks: 35,

//     difficultyLevel: "Hard",

//     questionBankIds: ["QB201", "QB202"],

//     randomizeQuestions: true,
//     negativeMarking: true,

//     startDate: "2026-05-25",
//     endDate: "2026-05-28",

//     status: "Draft",

//     totalCandidates: 75,
//     completedAttempts: 20,

//     averageScore: 61,
//     suspiciousActivities: 4,

//     createdBy: "HR Team",
//     createdAt: "2026-05-10",
//   },
// ];

export default function AssessmentsPage() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await getRequest(
          `${API_BASE_URL}/assessment`
        );

        console.log("Fetched Data: assessment", response.data);

        setData(response);

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

      render: (item) => (
        <div className="min-w-[280px]">
          <div className="flex items-center gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-blue-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
            ">
              {item.title.charAt(0)}
            </div>

            <div>
              <h2 className="font-bold text-gray-900 text-base">
                {item.title}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {item.assessmentId}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            {item.description}
          </p>
        </div>
      ),
    },

    // TYPE
    {
      header: "Type",

      render: (item) => (
        <div className="
          bg-blue-100
          text-blue-700
          px-4
          py-2
          rounded-2xl
          text-xs
          font-bold
          w-fit
        ">
          {item.assessmentType}
        </div>
      ),
    },

    // QUESTIONS
    {
      header: "Questions",

      render: (item) => (
        <div className="min-w-[160px]">
          <h3 className="font-bold text-gray-800 text-lg">
            {item.totalQuestions}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Total Questions
          </p>
        </div>
      ),
    },

    // MARKS
    {
      header: "Marks",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Total
            </span>

            <span className="font-bold text-indigo-700">
              {item.totalMarks}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm font-semibold text-gray-700">
              Passing
            </span>

            <span className="font-bold text-green-600">
              {item.passingMarks}
            </span>
          </div>
        </div>
      ),
    },

    // DURATION
    {
      header: "Duration",

      render: (item) => (
        <div className="min-w-[140px]">
          <h3 className="font-bold text-gray-800 text-lg">
            {item.duration} Min
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Assessment Time
          </p>
        </div>
      ),
    },

    // DIFFICULTY
    {
      header: "Difficulty",

      render: (item) => (
        <div
          className={`
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit

            ${item.difficultyLevel === "Hard"
              ? "bg-red-100 text-red-700"
              : item.difficultyLevel === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }
          `}
        >
          {item.difficultyLevel}
        </div>
      ),
    },

    // CANDIDATES
    {
      header: "Candidates",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-600">
              Invited
            </span>

            <span className="font-bold text-gray-800">
              {item.totalCandidates}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-600">
              Completed
            </span>

            <span className="font-bold text-green-600">
              {item.completedAttempts}
            </span>
          </div>
        </div>
      ),
    },

    // SCORE
    {
      header: "Average Score",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-blue-700">
              {item.averageScore}%
            </span>

            <span className="text-xs text-gray-500">
              Avg Score
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-indigo-600
              "
              style={{
                width: `${item.averageScore}%`,
              }}
            />
          </div>
        </div>
      ),
    },

    // SECURITY
    {
      header: "Security",

      render: (item) => (
        <div className="min-w-[200px] space-y-2">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Randomized
            </span>

            <span className={`
              text-xs
              font-bold
              px-3
              py-1
              rounded-full

              ${item.randomizeQuestions
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
              }
            `}>
              {item.randomizeQuestions ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Negative Marking
            </span>

            <span className={`
              text-xs
              font-bold
              px-3
              py-1
              rounded-full

              ${item.negativeMarking
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-700"
              }
            `}>
              {item.negativeMarking ? "Active" : "Off"}
            </span>
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
              : item.status === "Draft"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {item.status}
        </div>
      ),
    },

    // DATE
    {
      header: "Timeline",

      render: (item) => (
        <div className="min-w-[180px]">
          <p className="font-semibold text-gray-700">
            {item.startDate}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            to {item.endDate}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ActionButtons
        addUrl="/dashboard/assessments/add"
        importUrl="/dashboard/assessments/import"
        exportUrl="/dashboard/assessments/export"

      // showExport={false}
      />

      <DataTable
        title="Assessments"
        columns={columns}
        data={data}

        onEdit={(item) => {
          console.log("Edit Data:", item);
        }}
      />
    </div>
  );
}