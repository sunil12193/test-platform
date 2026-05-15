"use client";

import DataTable from "@/component/table";
import ActionButtons from "@/component/button";


const invitationsData = [
  {
    invitationId: "INV-1001",

    candidateId: "CND-1001",

    assessmentId: "ASM-1001",

    email: "sunil@example.com",

    inviteToken: "INV-TOKEN-XY12345",

    sentAt: "2026-05-15 10:30 AM",

    expiresAt: "2026-05-20 11:59 PM",

    status: "Opened",

    reminderSent: true,
  },

  {
    invitationId: "INV-1002",

    candidateId: "CND-1002",

    assessmentId: "ASM-1002",

    email: "rahul@example.com",

    inviteToken: "INV-TOKEN-ZA87452",

    sentAt: "2026-05-14 09:00 AM",

    expiresAt: "2026-05-18 11:59 PM",

    status: "Completed",

    reminderSent: false,
  },
];

export default function InvitationsPage() {

  const columns = [

    // INVITATION
    {
      header: "Invitation",

      render: (item) => (
        <div className="min-w-[320px]">

          <div className="flex items-start gap-4">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-cyan-600
              flex
              items-center
              justify-center
              text-white
              font-bold
              text-lg
              shadow-lg
              shrink-0
            ">
              I
            </div>

            <div>

              <h2 className="font-bold text-gray-900 text-base">
                {item.invitationId}
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

    // EMAIL
    {
      header: "Email",

      render: (item) => (
        <div className="min-w-[240px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-3
          ">

            <h3 className="font-semibold text-gray-800">
              {item.email}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Candidate Email
            </p>

          </div>

        </div>
      ),
    },

    // TOKEN
    {
      header: "Invite Token",

      render: (item) => (
        <div className="min-w-[260px]">

          <div className="
            bg-gradient-to-r
            from-indigo-100
            to-blue-100
            text-indigo-700
            px-4
            py-3
            rounded-2xl
            font-mono
            text-sm
            font-bold
            shadow-sm
          ">
            {item.inviteToken}
          </div>

        </div>
      ),
    },

    // SENT DATE
    {
      header: "Sent At",

      render: (item) => (
        <div className="min-w-[200px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-3
          ">

            <h3 className="font-semibold text-gray-800">
              {item.sentAt}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Invitation Sent
            </p>

          </div>

        </div>
      ),
    },

    // EXPIRY
    {
      header: "Expires At",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="
            bg-yellow-100
            text-yellow-800
            rounded-2xl
            px-4
            py-3
            font-semibold
          ">
            {item.expiresAt}
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Expiration Deadline
          </p>

        </div>
      ),
    },

    // STATUS
    {
      header: "Status",

      render: (item) => (
        <div
          className={`
            px-4
            py-2
            rounded-2xl
            text-xs
            font-bold
            w-fit

            ${item.status === "Completed"
              ? "bg-green-100 text-green-700"
              : item.status === "Opened"
                ? "bg-blue-100 text-blue-700"
                : item.status === "Expired"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
            }
          `}
        >
          {item.status}
        </div>
      ),
    },

    // REMINDER
    {
      header: "Reminder",

      render: (item) => (
        <div className="min-w-[180px]">

          <div
            className={`
              px-4
              py-3
              rounded-2xl
              text-sm
              font-bold
              w-fit

              ${item.reminderSent
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
              }
            `}
          >
            {item.reminderSent
              ? "Reminder Sent"
              : "No Reminder"}
          </div>

        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <ActionButtons
        addUrl="/dashboard/invitations/add"
        importUrl="/dashboard/invitations/import"
        exportUrl="/dashboard/invitations/export"

      // showExport={false}
      />

      <DataTable
        title="Invitations"
        columns={columns}
        data={invitationsData}
      />

    </div>
  );
}