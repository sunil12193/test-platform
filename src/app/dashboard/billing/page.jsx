"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";
import { useEffect, useState } from "react";
import { API_BASE_URL, getRequest } from "@/util/APIGeneric";



const billingPlansData = [
  {
    companyId: "CMPNY-1001",

    currentPlan: "Enterprise Pro",

    billingCycle: "Yearly",

    totalUsers: 420,

    activeAssessments: 28,

    invoiceHistory: [
      "INV-2026-001",
      "INV-2026-002",
      "INV-2026-003",
    ],

    paymentStatus: "Paid",

    renewalDate: "2027-05-15",
  },

  {
    companyId: "CMPNY-1002",

    currentPlan: "Startup Plan",

    billingCycle: "Monthly",

    totalUsers: 58,

    activeAssessments: 7,

    invoiceHistory: [
      "INV-2026-011",
      "INV-2026-012",
    ],

    paymentStatus: "Pending",

    renewalDate: "2026-06-01",
  },
];

export default function BillingPlansPage() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
  
      const fetchData = async () => {
        try {
  
          const response = await getRequest(
            `${API_BASE_URL}/billing`
          );
  
          console.log("Fetched Data: billing", response);
  
          setData(response);
  
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
  
    }, []);


  const columns = [

    // COMPANY
    {
      header: "Company",

      render: (item) => (
        <div className="min-w-[280px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-violet-500
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
              shrink-0
            ">
              C
            </div>

            <div>

              <h2 className="font-bold text-gray-900 text-base">
                {item.companyId}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                SaaS Client Account
              </p>

            </div>

          </div>
        </div>
      ),
    },

    // PLAN
    {
      header: "Current Plan",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="
            bg-gradient-to-r
            from-indigo-500
            to-blue-600
            text-white
            px-5
            py-4
            rounded-2xl
            shadow-md
          ">

            <h3 className="font-bold text-base">
              {item.currentPlan}
            </h3>

            <p className="text-xs text-indigo-100 mt-1">
              {item.billingCycle} Billing
            </p>

          </div>

        </div>
      ),
    },

    // USERS
    {
      header: "Users & Assessments",

      render: (item) => (
        <div className="min-w-[240px] space-y-3">

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Total Users
            </span>

            <span className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.totalUsers}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Active Assessments
            </span>

            <span className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.activeAssessments}
            </span>

          </div>

        </div>
      ),
    },

    // INVOICES
    {
      header: "Invoice History",

      render: (item) => (
        <div className="
          flex
          flex-wrap
          gap-2
          min-w-[280px]
        ">

          {item.invoiceHistory.map((invoice, index) => (
            <span
              key={index}
              className="
                px-3
                py-2
                rounded-xl
                text-xs
                font-semibold
                bg-gradient-to-r
                from-gray-100
                to-gray-200
                text-gray-700
                shadow-sm
              "
            >
              {invoice}
            </span>
          ))}

        </div>
      ),
    },

    // PAYMENT STATUS
    {
      header: "Payment Status",

      render: (item) => (
        <div
          className={`
            px-5
            py-3
            rounded-2xl
            text-sm
            font-bold
            w-fit
            shadow-sm

            ${item.paymentStatus === "Paid"
              ? "bg-green-100 text-green-700"
              : item.paymentStatus === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {item.paymentStatus}
        </div>
      ),
    },

    // RENEWAL DATE
    {
      header: "Renewal Date",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="
            bg-gradient-to-r
            from-orange-100
            to-yellow-100
            rounded-2xl
            px-5
            py-4
            shadow-sm
          ">

            <h3 className="font-bold text-gray-800">
              {item.renewalDate}
            </h3>

            <p className="text-xs text-gray-600 mt-1">
              Subscription Renewal
            </p>

          </div>

        </div>
      ),
    },

    // PLAN HEALTH
    {
      header: "Plan Usage",

      render: (item) => {

        const usage =
          item.totalUsers > 300
            ? 85
            : item.totalUsers > 100
              ? 60
              : 35;

        return (
          <div className="min-w-[240px]">

            <div className="flex items-center justify-between mb-2">

              <span className="font-bold text-indigo-700">
                {usage}%
              </span>

              <span className="text-xs text-gray-500">
                Resource Usage
              </span>

            </div>

            <div className="
              w-full
              h-3
              rounded-full
              bg-gray-200
              overflow-hidden
            ">

              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  to-purple-600
                "
                style={{
                  width: `${usage}%`,
                }}
              />

            </div>

          </div>
        );
      },
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <ActionButtons
        addUrl="/dashboard/billing/add"
        importUrl="/dashboard/billing/import"
        exportUrl="/dashboard/billing/export"

      // showExport={false}
      />

      <DataTable
        title="Billing & Plans"
        columns={columns}
        data={billingPlansData}
      />

    </div>
  );
}