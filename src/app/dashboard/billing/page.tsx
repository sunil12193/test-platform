"use client";
import { useEffect, useState } from "react";
import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";
import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import { Billing } from "@/type/billing";
import { billingPlansData } from "@/dummyData/billing";
import Pagination from "@/component/pagination";


export default function BillingPlansPage() {
  // const [data, setData] = useState([]);

  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] =
    useState<number>(1);
    const [data, setData] = useState<Billing[]>([]);
    
    const [loading, setLoading] =
      useState<boolean>(true);
    
    const [error, setError] =
      useState<string>("");
  const [pageSize, setPageSize] =
    useState<number>(10);

  const filteredData = data.filter((item) =>
  (    (item.companyId || "") +
       " " +
       (item.currentPlan || "") +
       " " +
       (item.billingCycle || "") 
       
      .toLowerCase()
      .includes(search.toLowerCase())
  )
);

  const startIndex =
    (currentPage - 1) * pageSize;

  const endIndex =
    startIndex + pageSize;

  const paginatedData =
    filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(
    filteredData.length / pageSize
  );



useEffect(() => {
  const fetchAssessments = async () => {
    try {
      const response = await fetch(
        "http://localhost:5010/api/billing"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch billing information"
        );
      }

      const result = await response.json();

      setData(result.data || result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  fetchAssessments();
}, []);

  const columns = [
    // COMPANY
    {
      header: "Company",

      render: (item: any) => (
        <div className="min-w-70">
          <div className="flex items-start gap-4">
            <div
              className="
              w-14
              h-14
              rounded-2xl
              bg-linear-to-r
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
            "
            >
              C
            </div>

            <div>
              <h2 className="font-bold text-gray-900 text-base">
                {item.companyId}
              </h2>

              <p className="text-xs text-gray-500 mt-1">SaaS Client Account</p>
            </div>
          </div>
        </div>
      ),
    },

    // PLAN
    {
      header: "Current Plan",

      render: (item: any) => (
        <div className="min-w-55">
          <div
            className="
            bg-linear-to-r
            from-indigo-500
            to-blue-600
            text-white
            px-5
            py-4
            rounded-2xl
            shadow-md
          "
          >
            <h3 className="font-bold text-base">{item.currentPlan}</h3>

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

      render: (item: any) => (
        <div className="min-w-60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Total Users</span>

            <span
              className="
              bg-blue-100
              text-blue-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            "
            >
              {item.totalUsers}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Active Assessments</span>

            <span
              className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            "
            >
              {item.activeAssessments}
            </span>
          </div>
        </div>
      ),
    },

    // INVOICES
    {
      header: "Invoice History",

      render: (item: any) => (
        <div
          className="
          flex
          flex-wrap
          gap-2
          min-w-70
        "
        >
          {item.invoiceHistory.map((invoice: any, index: any) => (
            <span
              key={index}
              className="
                px-3
                py-2
                rounded-xl
                text-xs
                font-semibold
                bg-linear-to-r
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

      render: (item: any) => (
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

      render: (item: any) => (
        <div className="min-w-55">
          <div
            className="
            bg-linear-to-r
            from-orange-100
            to-yellow-100
            rounded-2xl
            px-5
            py-4
            shadow-sm
          "
          >
            <h3 className="font-bold text-gray-800">{item.renewalDate}</h3>

            <p className="text-xs text-gray-600 mt-1">Subscription Renewal</p>
          </div>
        </div>
      ),
    },

    // PLAN HEALTH
    {
      header: "Plan Usage",

      render: (item: any) => {
        const usage =
          item.totalUsers > 300 ? 85 : item.totalUsers > 100 ? 60 : 35;

        return (
          <div className="min-w-60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-indigo-700">{usage}%</span>

              <span className="text-xs text-gray-500">Resource Usage</span>
            </div>

            <div
              className="
              w-full
              h-3
              rounded-full
              bg-gray-200
              overflow-hidden
            "
            >
              <div
                className="
                  h-full
                  rounded-full
                  bg-linear-to-r
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
    <div className=" min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 p-6">
      <div className="space-y-6">
        <ActionButtons
          addUrl="/dashboard/billing/add"
          importUrl="/dashboard/billing/import"
          exportUrl="/dashboard/billing/export"

          searchValue={search}
          onSearchChange={setSearch}
        />

        <DataTable
          title="Billing Plans"
          columns={columns}
          data={filteredData}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredData.length}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}
