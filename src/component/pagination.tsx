"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: Props) {

  if (totalPages <= 1) return null;

  const startItem =
    (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(
    currentPage * pageSize,
    totalItems
  );

  const getVisiblePages = () => {

    const delta = 2;

    const pages: number[] = [];

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div
      className="
        mt-6
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        px-5
        py-4
      "
    >

      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            gap-4
          "
        >

          {/* INFO */}
          <div
            className="
              text-sm
              text-slate-500
              font-medium
            "
          >

            Showing{" "}

            <span className="text-slate-900 font-bold">
              {startItem}
            </span>

            {" "}to{" "}

            <span className="text-slate-900 font-bold">
              {endItem}
            </span>

            {" "}of{" "}

            <span className="text-blue-600 font-bold">
              {totalItems}
            </span>

            {" "}results

          </div>

          {/* PAGE SIZE */}
          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                text-sm
                font-medium
                text-slate-600
              "
            >
              Rows per page
            </span>

            <select
              value={pageSize}
              onChange={(e) =>
                onPageSizeChange(
                  Number(e.target.value)
                )
              }
              className="
                h-11
                px-4
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                text-sm
                font-medium
                text-slate-700
                outline-none
                transition-all
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            >
              {[10, 20, 50, 100].map(
                (size) => (
                  <option
                    key={size}
                    value={size}
                  >
                    {size}
                  </option>
                )
              )}
            </select>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-2
          "
        >

          {/* PREVIOUS */}
          <NavButton
            disabled={currentPage === 1}
            onClick={() =>
              onPageChange(currentPage - 1)
            }
          >
            <ChevronLeft size={18} />
          </NavButton>

          {/* FIRST PAGE */}
          {visiblePages[0] > 1 && (
            <>
              <PageButton
                page={1}
                active={currentPage === 1}
                onClick={onPageChange}
              />

              {visiblePages[0] > 2 && (
                <span className="px-2 text-slate-400">
                  ...
                </span>
              )}
            </>
          )}

          {/* VISIBLE PAGES */}
          {visiblePages.map((page) => (
            <PageButton
              key={page}
              page={page}
              active={page === currentPage}
              onClick={onPageChange}
            />
          ))}

          {/* LAST PAGE */}
          {visiblePages[
            visiblePages.length - 1
          ] < totalPages && (
            <>
              {visiblePages[
                visiblePages.length - 1
              ] < totalPages - 1 && (
                <span className="px-2 text-slate-400">
                  ...
                </span>
              )}

              <PageButton
                page={totalPages}
                active={
                  currentPage === totalPages
                }
                onClick={onPageChange}
              />
            </>
          )}

          {/* NEXT */}
          <NavButton
            disabled={
              currentPage === totalPages
            }
            onClick={() =>
              onPageChange(currentPage + 1)
            }
          >
            <ChevronRight size={18} />
          </NavButton>

        </div>

      </div>

    </div>
  );
}

/* PAGE BUTTON */
function PageButton({
  page,
  active,
  onClick,
}: {
  page: number;
  active: boolean;
  onClick: (page: number) => void;
}) {

  return (
    <button
      onClick={() => onClick(page)}
      className={`
        min-w-[44px]
        h-11
        px-4
        rounded-2xl
        text-sm
        font-semibold
        transition-all
        duration-300

        ${
          active
            ? `
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg
              shadow-blue-200
              scale-105
            `
            : `
              bg-white
              border
              border-slate-200
              text-slate-700
              hover:bg-slate-50
              hover:border-blue-300
              hover:text-blue-600
            `
        }
      `}
    >
      {page}
    </button>
  );
}

/* NAV BUTTON */
function NavButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className=" w-11 h-11 flex items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed">
      {children}
    </button>
  );
}