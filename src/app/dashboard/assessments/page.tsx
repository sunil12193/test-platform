"use client";

import { useEffect, useState } from "react";

import {
  FiClock,
  FiFileText,
  FiHelpCircle,
  FiUsers,
} from "react-icons/fi";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import Pagination from "@/component/pagination";

import { Assessment } from "@/type/assessment";
import { API_BASE_URL } from "@/service/auth.service";

export default function AssessmentsPage() {
  // DATA
  const [data, setData] =
    useState<Assessment[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");

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

  // API CALL
  useEffect(() => {
    const fetchAssessments = async () => {
      try {
        setLoading(true);

        console.log("API Calling Started");

        const response = await fetch(
          `${API_BASE_URL}/assessment?page=${currentPage}&limit=${pageSize}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch assessments"
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

    fetchAssessments();
  }, [currentPage, pageSize]);

  // FILTER DATA
  const filteredData = data.filter((item) =>
    (
      (item.title || "") +
      " " +
      (item.assessmentId || "") +
      " " +
      (item.description || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  console.log(filteredData.length);
  console.log(totalPages);
  console.log(currentPage);

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading assessments...
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg font-semibold">
        Failed to fetch assessments
      </div>
    );
  }

  // TABLE COLUMNS
  const columns = [
    // ASSESSMENT
    {
      header: "Assessment",

      render: (item: Assessment) => (
        <div className="min-w-[320px] text-left">
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
              <FiFileText size={22} />
            </div>

            {/* INFO */}
            <div>
              <h2 className="text-[15px] font-semibold text-slate-800">
                {item.title}
              </h2>

              <p className="text-xs text-slate-500 mt-1">
                {item.assessmentId}
              </p>

              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TYPE
    {
      header: "Type",

      render: (item: Assessment) => (
        <div className="flex justify-center min-w-35">
          <span
            className="
              px-4
              py-2
              rounded-xl
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-xs
              font-semibold
            "
          >
            {item.assessmentType}
          </span>
        </div>
      ),
    },

    // QUESTIONS
    {
      header: "Questions",

      render: (item: Assessment) => (
        <div className="min-w-37.5">
          <div className="flex items-center justify-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-violet-50
                text-violet-600
                flex
                items-center
                justify-center
              "
            >
              <FiHelpCircle />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-800">
                {item.totalQuestions}
              </h3>

              <p className="text-xs text-slate-500">
                Questions
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // MARKS
    {
      header: "Marks",

      render: (item: Assessment) => (
        <div className="min-w-42.5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Total
            </span>

            <span className="font-bold text-slate-800">
              {item.totalMarks}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Passing
            </span>

            <span className="font-bold text-emerald-600">
              {item.passingMarks}
            </span>
          </div>
        </div>
      ),
    },

    // DURATION
    {
      header: "Duration",

      render: (item: Assessment) => (
        <div className="min-w-37.5">
          <div className="flex items-center justify-center gap-3">
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

            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-800">
                {item.duration}m
              </h3>

              <p className="text-xs text-slate-500">
                Duration
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // DIFFICULTY
    {
      header: "Difficulty",

      render: (item: Assessment) => (
        <div className="flex justify-center min-w-35">
          <span
            className={`
              px-4
              py-2
              rounded-xl
              text-xs
              font-semibold
              border

              ${
                item.difficultyLevel === "Hard"
                  ? "bg-red-50 border-red-100 text-red-700"
                  : item.difficultyLevel === "Medium"
                  ? "bg-yellow-50 border-yellow-100 text-yellow-700"
                  : "bg-emerald-50 border-emerald-100 text-emerald-700"
              }
            `}
          >
            {item.difficultyLevel}
          </span>
        </div>
      ),
    },

    // CANDIDATES
    {
      header: "Candidates",

      render: (item: Assessment) => (
        <div className="min-w-45">
          <div className="flex items-center gap-3">
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
              <FiUsers />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">
                  Invited:
                </span>

                <span className="font-semibold text-slate-800">
                  {item.totalCandidates}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">
                  Completed:
                </span>

                <span className="font-semibold text-emerald-600">
                  {item.completedAttempts}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // CREATED
    {
      header: "Created",

      render: (item: Assessment) => (
        <div className="text-sm text-slate-500 font-medium min-w-30">
          {item.createdAt}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 p-6">
      <div className="space-y-6">
        {/* ACTION BUTTONS */}
        <ActionButtons
          addUrl="/dashboard/assessments/add"
          importUrl="/dashboard/assessments/import"
          exportUrl="/dashboard/assessments/export"
          searchValue={search}
          onSearchChange={setSearch}
        />

        {/* TABLE */}
        <DataTable
          title="Assessments"
          columns={columns}
          data={filteredData}
          onEdit={(item: Assessment) => {
            console.log("Edit:", item);
          }}
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