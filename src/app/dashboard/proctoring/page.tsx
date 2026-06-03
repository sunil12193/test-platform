"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/util/APIGeneric";
import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import Pagination from "@/component/pagination";

export default function ProctoringPage() {
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
    useState<any[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");

  // API CALL
  useEffect(() => {
    const fetchProctoring = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_BASE_URL}/proctoring?page=${currentPage}&limit=${pageSize}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch proctoring data"
          );
        }

        const result = await response.json();

        // SET DATA
        setData(result.data || []);

        // SET PAGINATION
        setTotalPages(result.totalPages || 1);

        setTotalDocuments(
          result.totalDocuments || 0
        );
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

    fetchProctoring();
  }, [currentPage, pageSize]);

  // FILTER DATA
  const filteredData = data.filter((item) =>
    (
      (item.proctoringId || "") +
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
        Loading proctoring data...
      </div>
    );
  }

  // TABLE COLUMNS
  const columns = [
    // PROCTORING
    {
      header: "Monitoring Session",

      render: (item: any) => (
        <div className="min-w-[320px]">
          <div className="flex items-start gap-4">
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-linear-to-r
                from-red-500
                to-pink-600
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
              P
            </div>

            <div>
              <h2 className="font-bold text-gray-900 text-base">
                {item.proctoringId}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Candidate :
                {" "}
                {item.candidateId}
              </p>

              <div className="mt-3">
                <span
                  className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
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

    // SNAPSHOTS
    {
      header: "Webcam Snapshots",

      render: (item: any) => (
        <div className="min-w-55">
          <div className="flex items-center">
            {item.webcamSnapshots?.map(
              (image: any, index: any) => (
                <img
                  key={index}
                  src={image}
                  alt="snapshot"
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    object-cover
                    border-2
                    border-white
                    shadow-md
                    -ml-2
                    first:ml-0
                  "
                />
              )
            )}
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Total :
            {" "}
            {item.webcamSnapshots?.length || 0}
            {" "}
            Snapshots
          </p>
        </div>
      ),
    },

    // ACTIVITY TRACKING
    {
      header: "Activity Tracking",

      render: (item: any) => (
        <div className="min-w-65 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Tab Switches
            </span>

            <span
              className="
                bg-yellow-100
                text-yellow-700
                px-3
                py-1
                rounded-full
                text-xs
                font-bold
              "
            >
              {item.tabSwitchCount}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Copy/Paste
            </span>

            <span
              className="
                bg-red-100
                text-red-700
                px-3
                py-1
                rounded-full
                text-xs
                font-bold
              "
            >
              {item.copyPasteAttempts}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Fullscreen Violations
            </span>

            <span
              className="
                bg-pink-100
                text-pink-700
                px-3
                py-1
                rounded-full
                text-xs
                font-bold
              "
            >
              {item.fullscreenViolations}
            </span>
          </div>
        </div>
      ),
    },

    // SUSPICIOUS SCORE
    {
      header: "Suspicious Score",

      render: (item: any) => (
        <div className="min-w-55">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-red-700">
              {item.suspiciousScore}%
            </span>

            <span className="text-xs text-gray-500">
              Risk Score
            </span>
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
              className={`
                h-full
                rounded-full

                ${
                  item.suspiciousScore >
                  70
                    ? "bg-linear-to-r from-red-500 to-pink-600"
                    : item.suspiciousScore >
                        40
                      ? "bg-linear-to-r from-yellow-400 to-orange-500"
                      : "bg-linear-to-r from-green-500 to-emerald-600"
                }
              `}
              style={{
                width: `${item.suspiciousScore}%`,
              }}
            />
          </div>
        </div>
      ),
    },

    // RECORDING
    {
      header: "Recording",

      render: (item: any) => (
        <div className="min-w-55">
          <a
            href={item.recordingUrl}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              bg-linear-to-r
              from-indigo-500
              to-blue-600
              text-white
              px-4
              py-3
              rounded-2xl
              text-sm
              font-semibold
              shadow-md
              hover:scale-105
              transition-all
              duration-200
            "
          >
            🎥 View Recording
          </a>
        </div>
      ),
    },

    // FINAL STATUS
    {
      header: "Final Status",

      render: (item: any) => (
        <div
          className={`
            px-4
            py-3
            rounded-2xl
            text-sm
            font-bold
            w-fit

            ${
              item.finalStatus ===
              "Safe"
                ? "bg-green-100 text-green-700"
                : item.finalStatus ===
                    "Warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
            }
          `}
        >
          {item.finalStatus}
        </div>
      ),
    },

    // MONITORED AT
    {
      header: "Monitored At",

      render: (item: any) => (
        <div className="min-w-55">
          <div
            className="
              bg-gray-100
              rounded-2xl
              px-4
              py-3
            "
          >
            <h3 className="font-semibold text-gray-800">
              {item.monitoredAt}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Monitoring Timestamp
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="space-y-6">
        {/* ACTION BUTTONS */}
        <ActionButtons
          addUrl="/dashboard/proctoring/add"
          importUrl="/dashboard/proctoring/import"
          exportUrl="/dashboard/proctoring/export"
          searchValue={search}
          onSearchChange={setSearch}
        />

        {/* TABLE */}
        <DataTable
          title="Proctoring Monitoring"
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