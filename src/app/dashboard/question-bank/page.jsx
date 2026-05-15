"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";
const questionBankData = [
  {
    questionId: "QST-1001",

    questionType: "MCQ",

    category: "Frontend",
    subCategory: "React",

    difficultyLevel: "Medium",

    question:
      "Which React Hook is used for managing state inside functional components?",

    options: [
      "useFetch",
      "useState",
      "useReducer",
      "useMemo",
    ],

    correctAnswer: "useState",

    explanation:
      "useState is the primary hook for state management in React functional components.",

    marks: 5,

    tags: ["React", "Hooks", "JavaScript"],

    totalAttempts: 120,
    correctAttempts: 94,

    status: "Published",

    createdBy: "Admin",
    createdAt: "2026-05-15",
  },

  {
    questionId: "QST-1002",

    questionType: "Coding",

    category: "Programming",
    subCategory: "JavaScript",

    difficultyLevel: "Hard",

    question:
      "Write a function to reverse a string without using built-in reverse().",

    options: [],

    correctAnswer: "Custom Logic",

    explanation:
      "Candidates must implement string reversal manually using loops.",

    marks: 10,

    tags: ["JavaScript", "Algorithms"],

    totalAttempts: 90,
    correctAttempts: 45,

    status: "Draft",

    createdBy: "HR Team",
    createdAt: "2026-05-12",
  },
];

export default function QuestionBankPage() {

  const columns = [

    // QUESTION
    {
      header: "Question",

      render: (item) => (
        <div className="min-w-[380px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-indigo-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              shadow-lg
              shrink-0
            ">
              Q
            </div>

            <div>
              <h2 className="font-bold text-gray-900 leading-relaxed">
                {item.question}
              </h2>

              <p className="text-xs text-gray-500 mt-2">
                {item.questionId}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TYPE
    {
      header: "Type",

      render: (item) => (
        <div
          className={`
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit

            ${item.questionType === "Coding"
              ? "bg-indigo-100 text-indigo-700"
              : item.questionType === "MCQ"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            }
          `}
        >
          {item.questionType}
        </div>
      ),
    },

    // CATEGORY
    {
      header: "Category",

      render: (item) => (
        <div className="min-w-[180px]">
          <h3 className="font-bold text-gray-800">
            {item.category}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {item.subCategory}
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

    // OPTIONS
    {
      header: "Options",

      render: (item) => (
        <div className="space-y-2 min-w-[260px]">

          {item.options.length > 0 ? (
            item.options.map((option, index) => (
              <div
                key={index}
                className={`
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  border

                  ${option === item.correctAnswer
                    ? "bg-green-50 border-green-200 text-green-700 font-semibold"
                    : "bg-gray-50 border-gray-200 text-gray-600"
                  }
                `}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="
              bg-indigo-50
              text-indigo-700
              px-4
              py-3
              rounded-xl
              text-sm
              font-medium
            ">
              Coding Based Question
            </div>
          )}
        </div>
      ),
    },

    // MARKS
    {
      header: "Marks",

      render: (item) => (
        <div className="
          bg-blue-100
          text-blue-700
          px-4
          py-3
          rounded-2xl
          font-bold
          w-fit
        ">
          {item.marks} Marks
        </div>
      ),
    },

    // TAGS
    {
      header: "Tags",

      render: (item) => (
        <div className="flex flex-wrap gap-2 min-w-[220px]">

          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-gradient-to-r
                from-gray-100
                to-gray-200
                text-gray-700
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      ),
    },

    // PERFORMANCE
    {
      header: "Performance",

      render: (item) => {

        const percentage = Math.round(
          (item.correctAttempts / item.totalAttempts) * 100
        );

        return (
          <div className="min-w-[220px]">

            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-indigo-700">
                {percentage}%
              </span>

              <span className="text-xs text-gray-500">
                Accuracy
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-600
                "
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>

            <div className="flex justify-between mt-3 text-xs text-gray-500">
              <span>
                Attempts: {item.totalAttempts}
              </span>

              <span>
                Correct: {item.correctAttempts}
              </span>
            </div>
          </div>
        );
      },
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

            ${item.status === "Published"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
            }
          `}
        >
          {item.status}
        </div>
      ),
    },

    // CREATED
    {
      header: "Created",

      render: (item) => (
        <div className="min-w-[160px]">
          <p className="font-semibold text-gray-700">
            {item.createdBy}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            {item.createdAt}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <ActionButtons
        addUrl="/dashboard/question-bank/add"
        importUrl="/dashboard/question-bank/import"
        exportUrl="/dashboard/question-bank/export"

      // showExport={false}
      />


      <DataTable
        title="Question Bank"
        columns={columns}
        data={questionBankData}

        onEdit={(item) => {
          console.log("Edit Data:", item);
        }}
      />
    </div>
  );
}