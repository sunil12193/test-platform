import {
  FiGrid,
  FiUsers,
  FiFileText,
  FiBriefcase,
  FiClipboard,
  FiLayers,
  FiBarChart2,
  FiSettings,
  FiShield,
  FiMail,
  FiCreditCard,
  FiActivity,
} from "react-icons/fi";

export const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    sub: "Overview and analytics",
    icon: FiGrid,
  },

  {
    label: "Candidates",
    href: "/dashboard/candidates",
    sub: "Manage candidate profiles",
    icon: FiUsers,
  },

  {
    label: "Assessments",
    href: "/dashboard/assessments",
    sub: "Create and manage tests",
    icon: FiClipboard,
  },

  {
    label: "Question Bank",
    href: "/dashboard/question-bank",
    sub: "Manage questions and categories",
    icon: FiFileText,
  },

  {
    label: "Job Positions",
    href: "/dashboard/job-positions",
    sub: "Manage hiring positions",
    icon: FiBriefcase,
  },

  {
    label: "Hiring Campaigns",
    href: "/dashboard/hiring-campaigns",
    sub: "Manage recruitment drives",
    icon: FiLayers,
  },

  {
    label: "Reports & Analytics",
    href: "/dashboard/reports",
    sub: "View performance insights",
    icon: FiBarChart2,
  },

  {
    label: "Invitations",
    href: "/dashboard/invitations",
    sub: "Send test invitations",
    icon: FiMail,
  },

  {
    label: "Proctoring",
    href: "/dashboard/proctoring",
    sub: "Monitor exam integrity",
    icon: FiShield,
  },

  {
    label: "Activity Logs",
    href: "/dashboard/activity-logs",
    sub: "Track platform activities",
    icon: FiActivity,
  },

  {
    label: "Billing & Plans",
    href: "/dashboard/billing",
    sub: "Manage subscriptions and invoices",
    icon: FiCreditCard,
  },

  {
    label: "Settings",
    href: "/dashboard/settings",
    sub: "Manage company preferences",
    icon: FiSettings,
  },
];