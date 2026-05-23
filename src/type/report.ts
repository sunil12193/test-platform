export interface ReportsAnalytics {
  reportId: string;

  reportType: string;

  generatedBy: string;

  assessmentId: string;

  campaignId: string;

  averageScore: number;
  highestScore: number;
  lowestScore: number;

  completionRate: number;

  suspiciousActivities: number;

  exportedFormat: "PDF" | "Excel";

  generatedAt: string;
}
