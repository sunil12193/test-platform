"use client";

import { useRouter } from "next/navigation";
import {
  FiPlus,
  FiUpload,
  FiDownload,
  FiSearch,
} from "react-icons/fi";

type ActionButtonsProps = {
  addUrl: string;
  importUrl: string;
  exportUrl: string;

  showAdd?: boolean;
  showImport?: boolean;
  showExport?: boolean;

  // SEARCH
  searchValue?: string;
  onSearchChange?: (
    value: string
  ) => void;
};

export default function ActionButtons({
  addUrl,
  importUrl,
  exportUrl,

  showAdd = true,
  showImport = true,
  showExport = true,

  searchValue = "",
  onSearchChange,
}: ActionButtonsProps) {

  const router = useRouter();

  return (
    <div className=" relative overflow-hidden rounded-2xl px-5">

      {/* TOP BAR */}
      <div className=" relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

        {/* SEARCH BAR */}
        <div className="relative w-full lg:w-[320px]">

          <FiSearch
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
              text-[18px]
            "
          />

          <input
            type="text"
            placeholder="Search by Candidate Id or Name"
            value={searchValue}
            onChange={(e) =>
              onSearchChange?.(e.target.value)
            }
            className="
              w-full
              h-11
              pl-11
              pr-4
              rounded-xl
              border
              border-slate-200
              bg-white
              text-sm
              outline-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

        {/* BUTTONS */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-end
            gap-3
          "
        >

          {/* ADD */}
          {showAdd && (
            <button
              onClick={() => router.push(addUrl)}
              className="
                group
                h-11
                px-5
                rounded-xl
                bg-[#0F2B46]
                hover:bg-[#163a5c]
                text-white
                font-medium
                flex
                items-center
                gap-2
                shadow-sm
                hover:shadow-md
                transition-all
                duration-200
              "
            >

              <FiPlus
                className="
                  text-[18px]
                  transition-transform
                  duration-300
                  group-hover:rotate-90
                "
              />

              Add

            </button>
          )}

          {/* IMPORT */}
          {showImport && (
            <button
              onClick={() => router.push(importUrl)}
              className="
                group
                h-11
                px-5
                rounded-xl
                border
                border-slate-200
                bg-white
                hover:bg-slate-50
                text-slate-700
                font-medium
                flex
                items-center
                gap-2
                shadow-sm
                hover:shadow-md
                transition-all
                duration-200
              "
            >

              <FiUpload
                className="
                  text-[17px]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              Import

            </button>
          )}

          {/* EXPORT */}
          {showExport && (
            <button
              onClick={() => router.push(exportUrl)}
              className="
                group
                h-11
                px-5
                rounded-xl
                bg-[#F59E0B]
                hover:bg-[#E58E00]
                text-white
                font-medium
                flex
                items-center
                gap-2
                shadow-sm
                hover:shadow-md
                transition-all
                duration-200
              "
            >

              <FiDownload
                className="
                  text-[17px]
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />

              Export

            </button>
          )}

        </div>

      </div>

    </div>
  );
}