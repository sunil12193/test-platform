"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";
import { useEffect, useState } from "react";
import { API_BASE_URL, getRequest } from "@/util/APIGeneric";

const proctoringData = [
  {
    proctoringId: "PRC-1001",

    candidateId: "CND-1001",

    assessmentId: "ASM-1001",

    webcamSnapshots: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    ],

    tabSwitchCount: 2,

    copyPasteAttempts: 1,

    fullscreenViolations: 0,

    suspiciousScore: 28,

    recordingUrl: "https://example.com/recording-1.mp4",

    finalStatus: "Safe",

    monitoredAt: "2026-05-15 11:20 AM",
  },

  {
    proctoringId: "PRC-1002",

    candidateId: "CND-1002",

    assessmentId: "ASM-1002",

    webcamSnapshots: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    ],

    tabSwitchCount: 12,

    copyPasteAttempts: 6,

    fullscreenViolations: 3,

    suspiciousScore: 82,

    recordingUrl: "https://example.com/recording-2.mp4",

    finalStatus: "Suspicious",

    monitoredAt: "2026-05-15 01:40 PM",
  },
];

export default function ProctoringPage() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
  
      const fetchData = async () => {
        try {
  
          const response = await getRequest(
            `${API_BASE_URL}/proctoring`
          );
  
          console.log("Fetched Data: proctoring ", response);
  
          setData(response);
  
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
  
    }, []);

  const columns = [

    // PROCTORING
    {
      header: "Monitoring Session",

      render: (item) => (
        <div className="min-w-[320px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
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
            ">
              P
            </div>

            <div>

              <h2 className="font-bold text-gray-900 text-base">
                {item.proctoringId}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Candidate : {item.candidateId}
              </p>

              <div className="mt-3">

                <span className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                ">
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

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="flex items-center">

            {item.webcamSnapshots.map((image, index) => (
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
            ))}

          </div>

          <p className="text-xs text-gray-500 mt-3">
            Total : {item.webcamSnapshots.length} Snapshots
          </p>

        </div>
      ),
    },

    // ACTIVITY TRACKING
    {
      header: "Activity Tracking",

      render: (item) => (
        <div className="min-w-[260px] space-y-3">

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Tab Switches
            </span>

            <span className="
              bg-yellow-100
              text-yellow-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.tabSwitchCount}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Copy/Paste
            </span>

            <span className="
              bg-red-100
              text-red-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.copyPasteAttempts}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Fullscreen Violations
            </span>

            <span className="
              bg-pink-100
              text-pink-700
              px-3
              py-1
              rounded-full
              text-xs
              font-bold
            ">
              {item.fullscreenViolations}
            </span>

          </div>

        </div>
      ),
    },

    // SUSPICIOUS SCORE
    {
      header: "Suspicious Score",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="flex items-center justify-between mb-2">

            <span className="font-bold text-red-700">
              {item.suspiciousScore}%
            </span>

            <span className="text-xs text-gray-500">
              Risk Score
            </span>

          </div>

          <div className="
            w-full
            h-3
            rounded-full
            bg-gray-200
            overflow-hidden
          ">

            <div
              className={`
                h-full
                rounded-full

                ${item.suspiciousScore > 70
                  ? "bg-gradient-to-r from-red-500 to-pink-600"
                  : item.suspiciousScore > 40
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                    : "bg-gradient-to-r from-green-500 to-emerald-600"
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

      render: (item) => (
        <div className="min-w-[220px]">

          <a
            href={item.recordingUrl}
            target="_blank"
            className="
              inline-flex
              items-center
              gap-2
              bg-gradient-to-r
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

      render: (item) => (
        <div
          className={`
            px-4
            py-3
            rounded-2xl
            text-sm
            font-bold
            w-fit

            ${item.finalStatus === "Safe"
              ? "bg-green-100 text-green-700"
              : item.finalStatus === "Warning"
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

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-3
          ">

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

      <ActionButtons
        addUrl="/dashboard/proctoring/add"
        importUrl="/dashboard/proctoring/import"
        exportUrl="/dashboard/proctoring/export"

      // showExport={false}
      />

      <DataTable
        title="Proctoring Monitoring"
        columns={columns}
        data={proctoringData}
      />

    </div>
  );
}