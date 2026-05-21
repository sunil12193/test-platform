// components/DataTable.jsx

"use client";

import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function DataTable({
  columns = [],
  data = [],
  title,
  onEdit,
}: {
  columns?: any[];
  data?: any[];
  title?: string;
  onEdit?: (rowIndex: number) => void;
}) {
  // LOCAL STATE
  const [tableData, setTableData] = useState(data);

  // DELETE FUNCTION
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
            relative
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-lg
        "
    >
      {/* TOP BAR */}
      <div
        className="
                flex
                items-center
                justify-between
                px-5
                py-4
                border-b
                bg-linear-to-r
                from-blue-600
                to-indigo-600
            "
      >
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>

          <p className="text-blue-100 text-xs mt-1">
            Manage and monitor all records
          </p>
        </div>

        <div
          className="
                    bg-white/20
                    backdrop-blur-md
                    px-3
                    py-1.5
                    rounded-xl
                "
        >
          <p className="text-white text-xs font-medium">
            Total : {tableData.length}
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table
          className="
                    w-full
                    min-w-250
                    border-collapse
                "
        >
          {/* HEADER */}
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="
                                        px-4
                                        py-3
                                        text-center
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wide
                                        text-gray-600
                                        border-b
                                        whitespace-nowrap
                                    "
                >
                  {column.header}
                </th>
              ))}

              {/* ACTION COLUMN */}
              <th
                className="
                px-4
                py-3
                text-center
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-gray-600
                border-b
                whitespace-nowrap"
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {tableData.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="
                                    group
                                    hover:bg-blue-50/40
                                    transition-all
                                    duration-200
                                    border-b
                                    border-gray-100
                                "
              >
                {/* TABLE DATA */}
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4
                    py-3
                    text-gray-700
                    text-sm
                    text-center
                    whitespace-nowrap"
                  >
                    <div
                      className="
                    group-hover:translate-x-0.5
                    transition
                    duration-200
                    text-center"
                    >
                      {column.render
                        ? column.render(item)
                        : item[column.accessor]}
                    </div>
                  </td>
                ))}

                {/* ACTION BUTTONS */}
                <td className="px-4 py-3">
                  <div
                    className="
                    flex
                    items-center
                    justify-center
                    gap-3"
                  >
                    {/* EDIT BUTTON */}
                    <button
                      onClick={() => onEdit?.(item)}
                      className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-200"
                    >
                      <FiEdit2 size={18} />
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => handleDelete(rowIndex)}
                      className="
                                                w-10
                                                h-10
                                                rounded-xl
                                                bg-red-100
                                                text-red-600
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-red-600
                                                hover:text-white
                                                transition-all
                                                duration-200
                                            "
                    >
                      <FiTrash2 size={18} />
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
        <div className="py-16 text-center">
          <div
            className="
                        w-20
                        h-20
                        mx-auto
                        rounded-full
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        mb-4
                    "
          >
            <span className="text-3xl">📂</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">No Data Found</h3>

          <p className="text-sm text-gray-500 mt-2">
            There are no records available right now.
          </p>
        </div>
      )}
    </div>
  );
}
