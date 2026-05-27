export interface ProctoringData {
  proctoringId: string;
  candidateId: string;
  assessmentId: string;

  webcamSnapshots: string[];

  tabSwitchCount: number;
  copyPasteAttempts: number;
  fullscreenViolations: number;

  suspiciousScore: number;

  recordingUrl: string;

  finalStatus: "Safe" | "Warning" | "Suspicious";

  monitoredAt: string;
};