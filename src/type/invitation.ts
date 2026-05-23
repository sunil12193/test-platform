export interface Invitation {
  invitationId: string;

  candidateId: string;

  assessmentId: string;

  email: string;

  inviteToken: string;

  sentAt: string;

  expiresAt: string;

  status: "Opened" | "Completed" | "Expired" | "Pending";

  reminderSent: boolean;
}
