"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";


const jobPositionsData = [
  {
    positionId: "POS-1001",

    title: "Frontend Developer",
    department: "Engineering",
    location: "Delhi, India",

    employmentType: "Full-time",

    experienceRequired: "2+ Years",

    salaryRange: "₹8 LPA - ₹12 LPA",

    requiredSkills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "JavaScript",
    ],

    description:
      "Looking for a skilled frontend developer with strong React and UI experience.",

    assignedAssessment: "Frontend React Assessment",

    openings: 4,

    applicants: 128,

    shortlisted: 42,

    status: "Open",

    createdAt: "2026-05-15",
  },

  {
    positionId: "POS-1002",

    title: "Backend Developer",
    department: "Engineering",
    location: "Bangalore, India",

    employmentType: "Internship",

    experienceRequired: "0-1 Year",

    salaryRange: "₹25K / Month",

    requiredSkills: [
      "Node.js",
      "MongoDB",
      "Express",
      "REST API",
    ],

    description:
      "Hiring backend interns for API development and database management.",

    assignedAssessment: "Node.js Backend Test",

    openings: 2,

    applicants: 84,

    shortlisted: 15,

    status: "Closed",

    createdAt: "2026-05-10",
  },
];

export default function JobPositionsPage() {

  const columns = [

    // POSITION
    {
      header: "Position",

      render: (item) => (
        <div className="min-w-[280px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-indigo-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
              shrink-0
            ">
              {item.title.charAt(0)}
            </div>

            <div>
              <h2 className="font-bold text-gray-900 text-base">
                {item.title}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                {item.positionId}
              </p>

              <div className="flex items-center gap-2 mt-3">

                <span className="
                  bg-gray-100
                  text-gray-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                ">
                  {item.department}
                </span>

                <span className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                ">
                  {item.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            {item.description}
          </p>
        </div>
      ),
    },

    // EMPLOYMENT
    {
      header: "Employment",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="
            bg-indigo-100
            text-indigo-700
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit
          ">
            {item.employmentType}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            {item.experienceRequired}
          </p>
        </div>
      ),
    },

    // SALARY
    {
      header: "Salary",

      render: (item) => (
        <div className="min-w-[180px]">

          <h3 className="font-bold text-green-600 text-lg">
            {item.salaryRange}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            Compensation
          </p>
        </div>
      ),
    },

    // SKILLS
    {
      header: "Required Skills",

      render: (item) => (
        <div className="
          flex
          flex-wrap
          gap-2
          min-w-[250px]
        ">

          {item.requiredSkills.map((skill, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-gradient-to-r
                from-blue-100
                to-indigo-100
                text-blue-700
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

      render: (item) => (
        <div className="
          bg-gray-100
          px-4
          py-3
          rounded-2xl
          text-gray-700
          font-medium
          min-w-[220px]
        ">
          {item.assignedAssessment}
        </div>
      ),
    },

    // HIRING
    {
      header: "Hiring Stats",

      render: (item) => (
        <div className="min-w-[220px] space-y-3">

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Openings
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
              {item.openings}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Applicants
            </span>

            <span className="font-bold text-gray-800">
              {item.applicants}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Shortlisted
            </span>

            <span className="font-bold text-blue-700">
              {item.shortlisted}
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

            ${item.status === "Open"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
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
            {item.createdAt}
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Published Date
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <ActionButtons
        addUrl="/dashboard/job-positions/add"
        importUrl="/dashboard/job-positions/import"
        exportUrl="/dashboard/job-positions/export"

      // showExport={false}
      />


      <DataTable
        title="Candidates"
        columns={columns}
        data={jobPositionsData}

        onEdit={(item) => {
          console.log("Edit Data:", item);
        }}
      />
    </div>
  );
}