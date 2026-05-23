"use client";

import { useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type Column<T> = {
  header: string;
  accessor?: keyof T;
  render?: (item: T) => React.ReactNode;
};
type DataTableProps<T> = {
  columns?: Column<T>[];
  data?: T[];
  title?: string;
  onEdit?: (item: T) => void;
};

export default function DataTable<T extends Record<string, any>>({
  columns = [],
  data = [],
  title = "Data Table",
  onEdit,
}: DataTableProps<T>) {
  const [tableData, setTableData] = useState<T[]>(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  // DELETE
  const handleDelete = (rowIndex: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?",
    );

    if (!confirmDelete) return;

    const updatedData = [...tableData];

    updatedData.splice(rowIndex, 1);

    setTableData(updatedData);
  };

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white/90
        backdrop-blur-xl
        shadow-sm
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          px-6
          py-5
          border-b
          border-slate-100
          bg-linear-to-r
          from-[#0F2B46]
          via-[#163A5C]
          to-[#1E4D7B]
        "
      >
        {/* LEFT */}
        <div>
          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
            "
          >
            {title}
          </h2>

          <p className="text-sm text-blue-100 mt-1">
            Manage and monitor all records
          </p>
        </div>

        {/* TOTAL */}
        <div
          className="
            w-fit
            px-4
            py-2
            rounded-xl
            bg-white/10
            border
            border-white/10
            backdrop-blur-md
          "
        >
          <p className="text-sm font-medium text-white">
            Total : {tableData.length}
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-275">
          {/* TABLE HEADER */}
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="
                    px-6
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-500
                    text-center
                    whitespace-nowrap
                    border-b
                    border-slate-100
                  "
                >
                  {column.header}
                </th>
              ))}

              <th
                className="
                  px-6
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-slate-500
                  text-center
                  whitespace-nowrap
                  border-b
                  border-slate-100
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {tableData?.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="
                  group
                  border-b
                  border-slate-100
                  hover:bg-blue-50/30
                  transition-all
                  duration-200
                "
              >
                {/* COLUMNS */}
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="
                      px-6
                      py-5
                      text-sm
                      text-slate-700
                      whitespace-nowrap
                      text-center
                    "
                  >
                    <div
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-0.5
                      "
                    >
                      {column.render
                        ? column.render(item)
                        : column.accessor
                          ? String(item[column.accessor] ?? "-")
                          : "-"}
                    </div>
                  </td>
                ))}

                {/* ACTIONS */}
                <td className="px-6 py-5">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    {/* EDIT */}
                    <button
                      onClick={() => onEdit?.(item)}
                      className="
                        h-10
                        w-10
                        rounded-xl
                        bg-blue-50
                        text-[#1E4D7B]
                        border
                        border-blue-100
                        flex
                        items-center
                        justify-center
                        hover:bg-[#1E4D7B]
                        hover:text-white
                        transition-all
                        duration-200
                      "
                    >
                      <FiEdit2 size={16} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(rowIndex)}
                      className="
                        h-10
                        w-10
                        rounded-xl
                        bg-red-50
                        text-red-600
                        border
                        border-red-100
                        flex
                        items-center
                        justify-center
                        hover:bg-red-600
                        hover:text-white
                        transition-all
                        duration-200
                      "
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EMPTY STATE */}
      {tableData.length === 0 && (
        <div className="py-20 text-center">
          <div
            className="
              h-20
              w-20
              mx-auto
              rounded-2xl
              bg-slate-100
              flex
              items-center
              justify-center
              mb-5
            "
          >
            <span className="text-3xl">📂</span>
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            No Data Found
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            There are no records available right now.
          </p>
        </div>
      )}
    </div>
  );
}
