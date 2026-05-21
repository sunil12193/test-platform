import React from "react";

const dashboardData = {
  totalCandidates: 1200,
  totalAssessments: 45,
  activeCampaigns: 12,
  completedTests: 980,
  averageScore: 78,
  upcomingTests: 15,
  suspiciousActivities: 3,
  recentActivities: [
    "John completed React Test",
    "New assessment created",
    "Candidate imported",
  ],
};


export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg border overflow-x-auto">

        {/* TABLE */}
        <table className="w-full border-collapse text-center">

          {/* COLUMN HEADINGS */}
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border">
                Total Candidates
              </th>

              <th className="p-4 border">
                Total Assessments
              </th>

              <th className="p-4 border">
                Active Campaigns
              </th>

              <th className="p-4 border">
                Completed Tests
              </th>

              <th className="p-4 border">
                Average Score
              </th>

              <th className="p-4 border">
                Upcoming Tests
              </th>

              <th className="p-4 border">
                Suspicious Activities
              </th>
            </tr>
          </thead>

          {/* DATA ROW */}
          <tbody>
            <tr>
              <td className="p-4 border">
                {dashboardData.totalCandidates}
              </td>

              <td className="p-4 border">
                {dashboardData.totalAssessments}
              </td>

              <td className="p-4 border">
                {dashboardData.activeCampaigns}
              </td>

              <td className="p-4 border">
                {dashboardData.completedTests}
              </td>

              <td className="p-4 border">
                {dashboardData.averageScore}%
              </td>

              <td className="p-4 border">
                {dashboardData.upcomingTests}
              </td>

              <td className="p-4 border text-red-500 font-semibold">
                {dashboardData.suspiciousActivities}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}