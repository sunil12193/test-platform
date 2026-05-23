import { Billing } from "@/type/billing";

export const billingPlansData: Billing[] = [
  {
    companyId: "CMPNY-1001",

    currentPlan: "Enterprise Pro",

    billingCycle: "Yearly",

    totalUsers: 420,

    activeAssessments: 28,

    invoiceHistory: ["INV-2026-001", "INV-2026-002", "INV-2026-003"],

    paymentStatus: "Paid",

    renewalDate: "2027-05-15",
  },

  {
    companyId: "CMPNY-1002",

    currentPlan: "Startup Plan",

    billingCycle: "Monthly",

    totalUsers: 58,

    activeAssessments: 7,

    invoiceHistory: ["INV-2026-011", "INV-2026-012"],

    paymentStatus: "Pending",

    renewalDate: "2026-06-01",
  },
];