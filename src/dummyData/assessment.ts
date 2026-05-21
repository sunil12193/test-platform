import { Assessment } from "@/type/assessment";

export const assessmentData: Assessment[] = [
  {
    assessmentId: "ASM-1001",
    title: "Frontend React Assessment",
    description: "React.js, Hooks, API & TailwindCSS Test",

    assessmentType: "Coding",
    duration: 60,
    totalQuestions: 25,
    totalMarks: 100,
    passingMarks: 40,

    difficultyLevel: "Medium",

    // @ts-ignore: questionBankIds may not be defined on Assessment type in current typings
    questionBankIds: ["QB101", "QB102"],

    randomizeQuestions: true,
    negativeMarking: false,

    startDate: "2026-05-20",
    endDate: "2026-05-22",

    status: "Active",

    totalCandidates: 120,
    completedAttempts: 84,

    averageScore: 76,
    suspiciousActivities: 2,

    createdBy: "Admin",
    createdAt: "2026-05-15",
  },

  {
    assessmentId: "ASM-1002",
    title: "JavaScript Aptitude Test",
    description: "Logic Building + JavaScript Fundamentals",

    assessmentType: "Mixed",
    duration: 45,
    totalQuestions: 40,
    totalMarks: 80,
    passingMarks: 35,

    difficultyLevel: "Hard",

    // @ts-ignore: questionBankIds may not be defined on Assessment type in current typings
    questionBankIds: ["QB201", "QB202"],

    randomizeQuestions: true,
    negativeMarking: true,

    startDate: "2026-05-25",
    endDate: "2026-05-28",

    status: "Draft",

    totalCandidates: 75,
    completedAttempts: 20,

    averageScore: 61,
    suspiciousActivities: 4,

    createdBy: "HR Team",
    createdAt: "2026-05-10",
  },
];
