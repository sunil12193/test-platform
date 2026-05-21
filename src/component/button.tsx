"use client";

import { useRouter } from "next/navigation";
import { FiPlus, FiUpload, FiDownload } from "react-icons/fi";

export default function ActionButtons({
  addUrl,
  importUrl,
  exportUrl,

  showAdd = true,
  showImport = true,
  showExport = true,
}) {
  const router = useRouter();

  return (
    <div
      className="
      flex
      flex-col
      md:flex-row
      md:items-center
      md:justify-between
      gap-4
      mb-4
      w-full
    "
    >
      {/* LEFT SIDE */}
      <div>
        {showAdd && (
          <button
            onClick={() => router.push(addUrl)}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-2xl
              bg-linear-to-r
              from-blue-600
              to-indigo-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <FiPlus className="text-lg" />
            Add
          </button>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 ml-auto">
        {/* IMPORT */}
        {showImport && (
          <button
            onClick={() => router.push(importUrl)}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-2xl
              bg-white
              border
              border-gray-200
              text-gray-700
              font-semibold
              shadow-md
              hover:bg-gray-100
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <FiUpload className="text-lg" />
            Import
          </button>
        )}

        {/* EXPORT */}
        {showExport && (
          <button
            onClick={() => router.push(exportUrl)}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-2xl
              bg-linear-to-r
              from-emerald-500
              to-green-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <FiDownload className="text-lg" />
            Export
          </button>
        )}
      </div>
    </div>
  );
}
