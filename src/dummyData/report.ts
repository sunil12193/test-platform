import { ReportsAnalytics } from "@/type/report";

export const reportsAnalyticsData: ReportsAnalytics[] = [
  {
    reportId: "RPT-1001",

    reportType: "Assessment Performance Report",

    generatedBy: "Sunil Kumar",

    assessmentId: "ASM-1001",

    campaignId: "CMP-1001",

    averageScore: 78,
    highestScore: 98,
    lowestScore: 42,

    completionRate: 84,

    suspiciousActivities: 3,

    exportedFormat: "PDF",

    generatedAt: "2026-05-15",
  },

  {
    reportId: "RPT-1002",

    reportType: "Campaign Analytics Report",

    generatedBy: "HR Team",

    assessmentId: "ASM-1002",

    campaignId: "CMP-1002",

    averageScore: 69,
    highestScore: 92,
    lowestScore: 35,

    completionRate: 100,

    suspiciousActivities: 1,

    exportedFormat: "Excel",

    generatedAt: "2026-05-14",
  },
];
