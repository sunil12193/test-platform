export interface JobPosition {
  positionId: string;

  title: string;
  department: string;
  location: string;

  employmentType: string;

  experienceRequired: string;

  salaryRange: string;

  requiredSkills: string[];

  description: string;

  assignedAssessment: string;

  openings: number;
  applicants: number;
  shortlisted: number;

  status: "Open" | "Closed";

  createdAt: string;
}
