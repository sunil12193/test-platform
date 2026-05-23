export interface Candidate {
  candidateId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage: string;
  resumeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  skills: string[];
  experience: string;
  education: string;
  currentStatus: string;
  appliedPosition: string;
  assignedAssessment: string;
  totalScore: number;
  ranking: number;
  createdAt: string;
}
