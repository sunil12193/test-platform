import { JobPosition } from "@/type/jobPosition";

export const jobPositionsData: JobPosition[] = [
  {
    positionId: "POS-1001",

    title: "Frontend Developer",
    department: "Engineering",
    location: "Delhi, India",

    employmentType: "Full-time",

    experienceRequired: "2+ Years",

    salaryRange: "₹8 LPA - ₹12 LPA",

    requiredSkills: ["React", "Next.js", "TailwindCSS", "JavaScript"],

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

    requiredSkills: ["Node.js", "MongoDB", "Express", "REST API"],

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
