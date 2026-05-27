"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  FiMail,
  FiPhone,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import Pagination from "@/component/pagination";

import { Candidate } from "@/type/canditate";

export default function CandidatesPage() {
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
    useState<Candidate[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<string>("");

  // API CALL
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);

        console.log("API Calling Started");

        const response = await fetch(
          `http://localhost:5010/api/candidate?page=${currentPage}&limit=${pageSize}`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch candidates"
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

    fetchCandidates();
  }, [currentPage, pageSize]);

  // FILTER DATA
  const filteredData = data.filter((item) =>
    (
      (item.firstName || "") +
      " " +
      (item.lastName || "") +
      " " +
      (item.candidateId || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // LOADING
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading candidates...
      </div>
    );
  }

  // TABLE COLUMNS
  const columns = [
    {
      header: "Candidate",

      render: (item: Candidate) => (
        <div className="flex items-center gap-4 min-w-65">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200">
            <Image
              src="/user1.jpeg"
              alt="profile"
              fill
              className="object-cover"
            />

            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
          </div>

          <div className="text-left">
            <h2 className="text-[15px] font-semibold text-slate-800">
              {item.firstName} {item.lastName}
            </h2>

            <p className="text-xs text-slate-500 mt-1">
              {item.candidateId}
            </p>
          </div>
        </div>
      ),
    },

    {
      header: "Contact",

      render: (item: Candidate) => (
        <div className="space-y-2 text-left min-w-57.5">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <FiMail className="text-slate-400" />
            {item.email}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <FiPhone className="text-slate-400" />
            {item.phone}
          </div>
        </div>
      ),
    },

    {
      header: "Skills",

      render: (item: Candidate) => (
        <div className="flex flex-wrap gap-2 min-w-62.5 justify-center">
          {item.skills.map(
            (skill, index) => (
              <span
                key={index}
                className=" px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium">
                {skill}
              </span>
            )
          )}
        </div>
      ),
    },

    {
      header: "Experience",

      render: (item: Candidate) => (
        <div className="flex items-center justify-center gap-2 min-w-35">
          <div className=" h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <FiBriefcase />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">
              {item.experience}
            </p>

            <p className="text-xs text-slate-500">
              Experience
            </p>
          </div>
        </div>
      ),
    },

    {
      header: "Education",

      render: (item: Candidate) => (
        <div className="flex justify-center min-w-30">
          <span
            className="
              px-4
              py-2
              rounded-xl
              bg-violet-50
              border
              border-violet-100
              text-violet-700
              text-sm
              font-semibold
            "
          >
            {item.education}
          </span>
        </div>
      ),
    },

    {
      header: "Position",

      render: (item: Candidate) => (
        <div className="min-w-55 text-left">
          <div className="flex items-center gap-2">
            <FiAward className="text-slate-400" />

            <h3 className="font-semibold text-slate-800 text-sm">
              {item.appliedPosition}
            </h3>
          </div>

          <p className="text-xs text-slate-500 mt-1 ml-6">
            Applied Role
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100 p-6">
      <div className="space-y-6">
        {/* ACTION BUTTONS */}
        <ActionButtons
          addUrl="dashboard/candidate/add"
          importUrl="dashboard/candidate/import"
          exportUrl="dashboard/candidate/export"
          searchValue={search}
          onSearchChange={setSearch}
        />

        {/* TABLE */}
        <DataTable
          title="Candidates"
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