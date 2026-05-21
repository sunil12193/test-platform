"use client";
import React from "react";
import { useEffect, useState } from "react";
import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";
import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";

const candidateData = [
  {
    candidateId: "CND-1001",
    firstName: "Sunil",
    lastName: "Kumar",
    email: "sunil@example.com",
    phone: "+91 9876543210",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",

    resumeUrl: "https://example.com/resume.pdf",
    linkedinUrl: "https://linkedin.com/in/sunil",
    githubUrl: "https://github.com/sunil",

    skills: ["React", "Next.js", "Node.js"],
    experience: "2 Years",
    education: "BCA",

    currentStatus: "Completed",

    appliedPosition: "Frontend Developer",
    assignedAssessment: "React Skill Test",

    totalScore: 88,
    ranking: 5,

    createdAt: "2026-05-15",
  },

  {
    candidateId: "CND-1002",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@example.com",
    phone: "+91 9876500001",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",

    resumeUrl: "https://example.com/resume2.pdf",
    linkedinUrl: "https://linkedin.com/in/rahul",
    githubUrl: "https://github.com/rahul",

    skills: ["Vue.js", "Firebase", "Tailwind"],
    experience: "3 Years",
    education: "B.Tech",

    currentStatus: "Selected",

    appliedPosition: "Frontend Engineer",
    assignedAssessment: "Vue Assessment",

    totalScore: 92,
    ranking: 2,

    createdAt: "2026-05-12",
  },
  {
    candidateId: "CND-1002",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul@example.com",
    phone: "+91 9876500001",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",

    resumeUrl: "https://example.com/resume2.pdf",
    linkedinUrl: "https://linkedin.com/in/rahul",
    githubUrl: "https://github.com/rahul",

    skills: ["Vue.js", "Firebase", "Tailwind"],
    experience: "3 Years",
    education: "B.Tech",

    currentStatus: "Selected",

    appliedPosition: "Frontend Engineer",
    assignedAssessment: "Vue Assessment",

    totalScore: 92,
    ranking: 2,

    createdAt: "2026-05-12",
  },
];

export default function CandidatesPage() {
  const [data, setData] = useState<typeof candidateData>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(`${API_BASE_URL}/candidate`);

        console.log("Fetched Data: candidate", response);

        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    // CANDIDATE
    {
      header: "Candidate",

      render: (item: {
        profileImage: string | Blob | undefined;
        firstName:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            >
          | null
          | undefined;
        lastName:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            >
          | null
          | undefined;
        candidateId:
          | string
          | number
          | bigint
          | boolean
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | Promise<
              | string
              | number
              | bigint
              | boolean
              | React.ReactPortal
              | React.ReactElement<
                  unknown,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined
            >
          | null
          | undefined;
      }) => (
        <div className="flex items-center gap-4 min-w-62.5">
          <div className="relative">
            <img
              src={item.profileImage}
              alt="profile"
              className="
                w-14
                h-14
                rounded-2xl
                object-cover
                border-2
                border-white
                shadow-lg
              "
            />

            <span
              className="
              absolute
              -bottom-1
              -right-1
              w-4
              h-4
              rounded-full
              border-2
              border-white
              bg-green-500
            "
            />
          </div>

          <div>
            <h2 className="font-bold text-gray-900 text-base">
              {item.firstName} {item.lastName}
            </h2>

            <p className="text-xs text-gray-500 mt-1">{item.candidateId}</p>
          </div>
        </div>
      ),
    },

    // CONTACT
    {
      header: "Contact",

      render: (item: any) => (
        <div className="min-w-55">
          <p className="font-medium text-gray-800">{item.email}</p>

          <p className="text-xs text-gray-500 mt-1">{item.phone}</p>
        </div>
      ),
    },

    // SKILLS
    {
      header: "Skills",

      render: (item: { skills: any[] }) => (
        <div className="flex flex-wrap gap-2 min-w-55">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-linear-to-r
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

    // EXPERIENCE
    {
      header: "Experience",

      render: (item: any) => (
        <div className="font-semibold text-gray-700">{item.experience}</div>
      ),
    },

    // EDUCATION
    {
      header: "Education",

      render: (item: { education: string }) => (
        <div
          className="
          bg-purple-100
          text-purple-700
          px-4
          py-2
          rounded-2xl
          text-xs
          font-bold
          w-fit
        "
        >
          {item.education}
        </div>
      ),
    },

    // POSITION
    {
      header: "Position",

      render: (item: { appliedPosition: string }) => (
        <div className="min-w-45">
          <p className="font-semibold text-gray-800">{item.appliedPosition}</p>

          <p className="text-xs text-gray-500 mt-1">Applied Role</p>
        </div>
      ),
    },

    // ASSESSMENT
    {
      header: "Assessment",

      render: (item: { assignedAssessment: string }) => (
        <div
          className="
          bg-gray-100
          px-4
          py-2
          rounded-2xl
          text-gray-700
          font-medium
          min-w-45
        "
        >
          {item.assignedAssessment}
        </div>
      ),
    },

    // SCORE
    {
      header: "Score",

      render: (item: { totalScore: number }) => (
        <div className="min-w-40">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-blue-700">{item.totalScore}%</span>

            <span className="text-xs text-gray-500">Score</span>
          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-600"
              style={{
                width: `${item.totalScore}%`,
              }}
            />
          </div>
        </div>
      ),
    },

    // RANK
    {
      header: "Rank",

      render: (item: { ranking: number }) => (
        <div
          className="
          bg-yellow-100
          text-yellow-700
          px-4
          py-2
          rounded-2xl
          font-bold
          w-fit
        "
        >
          #{item.ranking}
        </div>
      ),
    },

    // STATUS
    {
      header: "Status",

      render: (item: { currentStatus: string }) => (
        <div
          className={`
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit

            ${
              item.currentStatus === "Completed"
                ? "bg-green-100 text-green-700"
                : item.currentStatus === "Selected"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {item.currentStatus}
        </div>
      ),
    },

    // LINKS
    {
      header: "Links",

      render: (item: {
        resumeUrl: string;
        linkedinUrl: string;
        githubUrl: string;
      }) => (
        <div className="flex flex-col gap-2 min-w-30">
          <a
            href={item.resumeUrl}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            Resume
          </a>

          <a
            href={item.linkedinUrl}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            LinkedIn
          </a>

          <a
            href={item.githubUrl}
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            GitHub
          </a>
        </div>
      ),
    },

    // CREATED
    {
      header: "Created",

      render: (item: any) => (
        <div className="text-gray-500 font-medium">{item.createdAt}</div>
      ),
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <ActionButtons
        addUrl="/dashboard/candidates/add"
        importUrl="/dashboard/candidates/import"
        exportUrl="/dashboard/candidates/export"

        // showExport={false}
      />

      <DataTable
        title="Candidates"
        columns={columns || []}
        data={candidateData}
        onEdit={(item: any) => {
          console.log("Edit Data:", item);
        }}
      />
    </div>
  );
}
