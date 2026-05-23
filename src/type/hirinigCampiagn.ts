export interface HiringCampaign {
  campaignId: string;

  campaignName: string;

  positionId: string;

  assignedAssessments: string[];

  candidateIds: string[];

  totalInvited: number;
  totalCompleted: number;

  averageScore: number;

  suspiciousActivities: number;

  startDate: string;
  endDate: string;

  status: "Active" | "Completed";

  createdBy: string;
}
