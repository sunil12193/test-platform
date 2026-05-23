export interface Billing {
    companyId: string;

    currentPlan: string;

    billingCycle: string;

    totalUsers: number;

    activeAssessments: number;

    invoiceHistory: string[];

    paymentStatus: string;

    renewalDate: string;
  }