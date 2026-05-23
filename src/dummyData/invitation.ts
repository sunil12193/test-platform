import { Invitation } from "@/type/invitation";

export const invitationsData: Invitation[] = [
  {
    invitationId: "INV-1001",

    candidateId: "CND-1001",

    assessmentId: "ASM-1001",

    email: "sunil@example.com",

    inviteToken: "INV-TOKEN-XY12345",

    sentAt: "2026-05-15 10:30 AM",

    expiresAt: "2026-05-20 11:59 PM",

    status: "Opened",

    reminderSent: true,
  },

  {
    invitationId: "INV-1002",

    candidateId: "CND-1002",

    assessmentId: "ASM-1002",

    email: "rahul@example.com",

    inviteToken: "INV-TOKEN-ZA87452",

    sentAt: "2026-05-14 09:00 AM",

    expiresAt: "2026-05-18 11:59 PM",

    status: "Completed",

    reminderSent: false,
  },
];
