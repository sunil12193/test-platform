"use client";

import { useRouter } from "next/navigation";
import { FiPlus, FiUpload, FiDownload } from "react-icons/fi";

type ActionButtonsProps = {
  addUrl: string;
  importUrl: string;
  exportUrl: string;
  showAdd?: boolean;
  showImport?: boolean;
  showExport?: boolean;
};

export default function ActionButtons({
  addUrl,
  importUrl,
  exportUrl,
  showAdd = true,
  showImport = true,
  showExport = true,
}: ActionButtonsProps) {
  const router = useRouter();

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        
        
        px-5
        
      "
    >
      {/* BUTTONS */}
      <div
        className="
          relative
          z-10
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
  );
}
