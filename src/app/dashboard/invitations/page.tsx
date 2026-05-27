"use client";

import { useEffect, useState } from "react";

import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiKey,
  FiMail,
  FiSend,
  FiShield,
} from "react-icons/fi";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import Pagination from "@/component/pagination";

import { Invitation } from "@/type/invitation";

export default function InvitationsPage() {
  // SEARCH
  const [search, setSearch] =
    useState<string>("");

  // PAGINATION
  const [currentPage, setCurrentPage] =
    useState<number>(1);

  const [pageSize, setPageSize] =
    useState<number>(10);

  const [totalPages, setTotalPages] =
    useState<number>(1);

  const [totalDocuments, setTotalDocuments] =
    useState<number>(0);

  // DATA
  const [data, setData] =
    useState<Invitation[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");

  // API CALL
  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        setLoading(true);

        console.log("API Calling Started");

        const response = await fetch(
          `http://localhost:5010/api/invitation?page=${currentPage}&limit=${pageSize}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch invitations"
          );
        }

        const result = await response.json();

        console.log("API DATA:", result);

        // SET DATA
        setData(result.data || []);

        // SET PAGINATION
        setTotalPages(result.totalPages || 1);

        setTotalDocuments(
          result.totalDocuments || 0
        );
      } catch (err) {
        console.log("ERROR:", err);

        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInvitations();
  }, [currentPage, pageSize]);

  // FILTER DATA
  const filteredData = data.filter((item) =>
    (
      (item.invitationId || "") +
      " " +
      (item.candidateId || "") +
      " " +
      (item.assessmentId || "")
    ) 
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading invitations...
      </div>
    );
  }

  // TABLE COLUMNS
  const columns = [
    // INVITATION
    {
      header: "Invitation",

      render: (item: Invitation) => (
        <div className="min-w-85 text-left">
          <div className="flex items-start gap-4">
            {/* ICON */}
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-linear-to-br
                from-[#0F2B46]
                to-[#1E4D7B]
                flex
                items-center
                justify-center
                text-white
                shadow-sm
                shrink-0
              "
            >
              <FiSend size={22} />
            </div>

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="font-semibold text-slate-800 text-[15px]">
                  {item.invitationId}
                </h2>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-[11px]
                    font-semibold
                    border

                    ${
                      item.status ===
                      "Completed"
                        ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                        : item.status ===
                            "Opened"
                          ? "bg-blue-50 border-blue-100 text-blue-700"
                          : item.status ===
                              "Expired"
                            ? "bg-red-50 border-red-100 text-red-700"
                            : "bg-yellow-50 border-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-1">
                Candidate :
                {" "}
                {item.candidateId}
              </p>

              <div className="mt-4">
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-700
                    text-xs
                    font-medium
                  "
                >
                  {item.assessmentId}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // EMAIL
    {
      header: "Email",

      render: (item: Invitation) => (
        <div className="min-w-65">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-slate-100
                text-slate-700
                flex
                items-center
                justify-center
              "
            >
              <FiMail />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                {item.email}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Candidate Email
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TOKEN
    {
      header: "Invite Token",

      render: (item: Invitation) => (
        <div className="min-w-70">
          <div
            className="
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-indigo-50
              border
              border-indigo-100
            "
          >
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-indigo-100
                text-indigo-700
                flex
                items-center
                justify-center
              "
            >
              <FiKey />
            </div>

            <div>
              <p
                className="
                  font-mono
                  text-sm
                  font-semibold
                  text-indigo-700
                "
              >
                {item.inviteToken}
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Secure Invite Token
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // SENT DATE
    {
      header: "Sent At",

      render: (item: Invitation) => (
        <div className="min-w-65">
          <div className="flex items-start gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-sky-50
                text-sky-600
                flex
                items-center
                justify-center
              "
            >
              <FiCalendar />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 text-sm">
                {item.sentAt}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Invitation Sent
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // EXPIRY
    {
      header: "Expires At",

      render: (item: Invitation) => (
        <div className="min-w-60">
          <div className="flex items-start gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-amber-50
                text-amber-600
                flex
                items-center
                justify-center
              "
            >
              <FiClock />
            </div>

            <div>
              <h3 className="font-semibold text-amber-700 text-sm">
                {item.expiresAt}
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Expiration Deadline
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // REMINDER
    {
      header: "Reminder",

      render: (item: Invitation) => (
        <div className="min-w-50">
          <div className="flex items-center gap-3">
            <div
              className={`
                h-10
                w-10
                rounded-xl
                flex
                items-center
                justify-center

                ${
                  item.reminderSent
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-500"
                }
              `}
            >
              <FiCheckCircle />
            </div>

            <div>
              <div
                className={`
                  inline-flex
                  items-center
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold

                  ${
                    item.reminderSent
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {item.reminderSent
                  ? "Reminder Sent"
                  : "No Reminder"}
              </div>

              <p className="text-xs text-slate-500 mt-2">
                Reminder Status
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // SECURITY
    {
      header: "Security",

      render: (item: Invitation) => (
        <div className="min-w-45">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-red-50
                text-red-600
                flex
                items-center
                justify-center
              "
            >
              <FiShield />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Protected
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Secure Invitation
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 p-6">
      <div className="space-y-6">
        {/* ACTION BUTTONS */}
        <ActionButtons
          addUrl="/dashboard/invitations/add"
          importUrl="/dashboard/invitations/import"
          exportUrl="/dashboard/invitations/export"
          searchValue={search}
          onSearchChange={setSearch}
        />

        {/* TABLE */}
        <DataTable
          title="Invitations"
          columns={columns}
          data={filteredData}
        />

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalDocuments}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}