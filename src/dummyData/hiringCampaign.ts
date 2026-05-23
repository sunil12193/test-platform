import { HiringCampaign } from "@/type/hirinigCampiagn";

export const hiringCampaignData: HiringCampaign[] = [
  {
    campaignId: "CMP-1001",

    campaignName: "Frontend Hiring Drive 2026",

    positionId: "POS-1001",

    assignedAssessments: [
      "React Skill Test",
      "JavaScript MCQ",
      "Frontend Coding Round",
    ],

    candidateIds: ["CND-1001", "CND-1002", "CND-1003"],

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

    assignedAssessments: ["Node.js Assessment", "MongoDB Quiz"],

    candidateIds: ["CND-2001", "CND-2002"],

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
