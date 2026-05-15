"use client";

import DataTable from "@/component/table";

const settingsData = [
  {
    companyName: "TechHire Solutions",

    companyLogo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623",

    supportEmail: "support@techhire.com",

    timezone: "Asia/Kolkata",

    brandingColor: "#4F46E5",

    enableProctoring: true,

    allowRetest: false,

    emailNotifications: true,

    customDomain: "assess.techhire.com",

    createdAt: "2026-05-15",
  },

  {
    companyName: "NextGen Recruiters",

    companyLogo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",

    supportEmail: "help@nextgenrecruiters.com",

    timezone: "Europe/London",

    brandingColor: "#059669",

    enableProctoring: true,

    allowRetest: true,

    emailNotifications: false,

    customDomain: "portal.nextgenrecruiters.com",

    createdAt: "2026-05-10",
  },
];

export default function SettingsPage() {

  const columns = [

    // COMPANY
    {
      header: "Company",

      render: (item) => (
        <div className="min-w-[300px]">

          <div className="flex items-center gap-4">

            <img
              src={item.companyLogo}
              alt="company-logo"
              className="
                w-16
                h-16
                rounded-2xl
                object-cover
                border-4
                border-white
                shadow-lg
              "
            />

            <div>

              <h2 className="font-bold text-gray-900 text-base">
                {item.companyName}
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Company Workspace
              </p>

            </div>

          </div>

        </div>
      ),
    },

    // SUPPORT
    {
      header: "Support Details",

      render: (item) => (
        <div className="min-w-[260px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-4
          ">

            <h3 className="font-semibold text-gray-800">
              {item.supportEmail}
            </h3>

            <p className="text-xs text-gray-500 mt-2">
              Support Contact Email
            </p>

          </div>

        </div>
      ),
    },

    // TIMEZONE
    {
      header: "Timezone",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="
            bg-blue-100
            text-blue-700
            px-5
            py-4
            rounded-2xl
            font-semibold
            shadow-sm
          ">
            {item.timezone}
          </div>

        </div>
      ),
    },

    // BRANDING
    {
      header: "Branding",

      render: (item) => (
        <div className="min-w-[220px]">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                border-4
                border-white
                shadow-lg
              "
              style={{
                backgroundColor: item.brandingColor,
              }}
            />

            <div>

              <h3 className="font-bold text-gray-800">
                {item.brandingColor}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                Brand Primary Color
              </p>

            </div>

          </div>

        </div>
      ),
    },

    // PROCTORING
    {
      header: "Proctoring",

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

              ${
                item.enableProctoring
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }
            `}
          >
            {item.enableProctoring
              ? "Enabled"
              : "Disabled"}
          </div>

        </div>
      ),
    },

    // RETEST
    {
      header: "Retest Access",

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

              ${
                item.allowRetest
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }
            `}
          >
            {item.allowRetest
              ? "Allowed"
              : "Restricted"}
          </div>

        </div>
      ),
    },

    // EMAIL NOTIFICATION
    {
      header: "Notifications",

      render: (item) => (
        <div className="min-w-[200px]">

          <div
            className={`
              px-4
              py-3
              rounded-2xl
              text-sm
              font-bold
              w-fit

              ${
                item.emailNotifications
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }
            `}
          >
            {item.emailNotifications
              ? "Email Enabled"
              : "Email Disabled"}
          </div>

        </div>
      ),
    },

    // CUSTOM DOMAIN
    {
      header: "Custom Domain",

      render: (item) => (
        <div className="min-w-[260px]">

          <div className="
            bg-gradient-to-r
            from-indigo-100
            to-purple-100
            text-indigo-700
            rounded-2xl
            px-5
            py-4
            font-semibold
            shadow-sm
          ">
            {item.customDomain}
          </div>

        </div>
      ),
    },

    // CREATED DATE
    {
      header: "Created At",

      render: (item) => (
        <div className="min-w-[180px]">

          <div className="
            bg-gray-100
            rounded-2xl
            px-4
            py-4
          ">

            <h3 className="font-semibold text-gray-800">
              {item.createdAt}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Workspace Created
            </p>

          </div>

        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <DataTable
        title="Platform Settings"
        columns={columns}
        data={settingsData}
      />

    </div>
  );
}