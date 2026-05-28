"use client";

import { useMemo, useState } from "react";

import {
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import Pagination from "@/component/pagination";

import { QuestionBank } from "@/type/questionBank";

import { useGetAllQuestionBank } from "@/hooks/useQuestionBank";

export default function QuestionBankPage() {
  // ========================================
  // SEARCH
  // ========================================

  const [search, setSearch] =
    useState<string>("");

  // ========================================
  // PAGINATION
  // ========================================

  const [currentPage, setCurrentPage] =
    useState<number>(1);

  const [pageSize, setPageSize] =
    useState<number>(10);

  // ========================================
  // API CALL
  // ========================================

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useGetAllQuestionBank({
    page: currentPage,
    limit: pageSize,
  });

  // ========================================
  // DATA
  // ========================================

  const data: QuestionBank[] =
    response?.data || [];

  const totalPages =
    response?.totalPages || 1;

  const totalDocuments =
    response?.totalDocuments || 0;

  // ========================================
  // FILTER DATA
  // ========================================

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      (
        (item.questionType || "") +
        " " +
        (item.questionId || "") +
        " " +
        (item.question || "")
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  // ========================================
  // LOADING
  // ========================================

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading question bank...
      </div>
    );
  }

  // ========================================
  // ERROR
  // ========================================

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg font-semibold">
        {error instanceof Error
          ? error.message
          : "Failed to fetch question bank"}
      </div>
    );
  }

  // ========================================
  // TABLE COLUMNS
  // ========================================

  const columns = [
    // QUESTION
    {
      header: "Question",

      render: (item: QuestionBank) => (
        <div className="min-w-95 text-left">
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
                text-white
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              {item.questionType ===
              "Coding" ? (
                <FiCode size={22} />
              ) : (
                <FiBookOpen size={22} />
              )}
            </div>

            {/* INFO */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-[15px] font-semibold text-slate-800">
                  {item.questionType}
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
                      "Published"
                        ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                        : "bg-amber-50 border-amber-100 text-amber-700"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-1">
                {item.questionId}
              </p>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {item.question}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // CATEGORY
    {
      header: "Category",

      render: (item: QuestionBank) => (
        <div className="min-w-45">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10
                w-10
                rounded-xl
                bg-blue-50
                text-blue-600
                flex
                items-center
                justify-center
              "
            >
              <FiLayers />
            </div>

            <div className="text-left">
              <h3 className="font-semibold text-slate-800 text-sm">
                {item.category}
              </h3>

              <p className="text-xs text-slate-500">
                {item.subCategory}
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // TAGS
    {
      header: "Tags",

      render: (item: QuestionBank) => (
        <div className="min-w-60 flex flex-wrap gap-2 justify-center">
          {item.tags?.map(
            (tag, index) => (
              <span
                key={index}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-violet-50
                  border
                  border-violet-100
                  text-violet-700
                  text-xs
                  font-medium
                "
              >
                {tag}
              </span>
            )
          )}
        </div>
      ),
    },

    // MARKS
    {
      header: "Marks",

      render: (item: QuestionBank) => (
        <div className="min-w-30">
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <h2 className="text-2xl font-bold text-[#0F2B46]">
              {item.marks}
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              Marks
            </p>
          </div>
        </div>
      ),
    },

    // DIFFICULTY
    {
      header: "Difficulty",

      render: (item: QuestionBank) => (
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
                item.difficultyLevel ===
                "Hard"
                  ? "bg-red-50 border-red-100 text-red-700"
                  : item.difficultyLevel ===
                      "Medium"
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

    // PERFORMANCE
    {
      header: "Performance",

      render: (item: QuestionBank) => {
        const percentage =
          item.totalAttempts > 0
            ? Math.round(
                (item.correctAttempts /
                  item.totalAttempts) *
                  100
              )
            : 0;

        return (
          <div className="min-w-55">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500">
                Accuracy
              </span>

              <span className="font-bold text-emerald-600">
                {percentage}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="
                  h-full
                  rounded-full
                  bg-linear-to-r
                  from-[#0F2B46]
                  to-[#1E4D7B]
                "
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <FiCheckCircle className="text-emerald-500 text-sm" />

              <p className="text-xs text-slate-500">
                {item.correctAttempts}
                {" "}
                correct out of
                {" "}
                {item.totalAttempts}
              </p>
            </div>
          </div>
        );
      },
    },

    // CREATED
    {
      header: "Created",

      render: (item: QuestionBank) => (
        <div className="min-w-45">
          <p className="text-sm font-semibold text-slate-700">
            {item.createdAt}
          </p>

          <p className="text-xs text-slate-500 mt-1">
            by
            {" "}
            {item.createdBy}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-blue-50/30
        to-slate-100
        p-6
      "
    >
      <div className="space-y-6">
        {/* ACTION BUTTONS */}
        <ActionButtons
          addUrl="/dashboard/question-bank/add"
          importUrl="/dashboard/question-bank/import"
          exportUrl="/dashboard/question-bank/export"
          searchValue={search}
          onSearchChange={setSearch}
        />

        {/* TABLE */}
        <DataTable
          title="Question Bank"
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