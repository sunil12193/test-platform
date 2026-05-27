"use client";

import { useState } from "react";
import { InputField } from "../../../../component/InputField";
import { API_BASE_URL } from "@/service/auth.service";
import toast from "react-hot-toast";


export default function AddCampaignPage() {
  const [formData, setFormData] = useState({
    campaignId: "",

    campaignName: "",

    positionId: "",

    assignedAssessments: "",

    candidateIds: "",

    totalInvited: "",

    totalCompleted: "",

    averageScore: "",

    suspiciousActivities: "",

    startDate: "",

    endDate: "",

    status: "Active",

    createdBy: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT API
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const finalData = {
        ...formData,

        totalInvited: Number(formData.totalInvited),

        totalCompleted: Number(formData.totalCompleted),

        averageScore: Number(formData.averageScore),

        suspiciousActivities: Number(formData.suspiciousActivities),

        assignedAssessments: formData.assignedAssessments
          .split(",")
          .map((item: any) => item.trim())
          .filter((item: string) => item !== ""),

        candidateIds: formData.candidateIds
          .split(",")
          .map((item: any) => item.trim())
          .filter((item: string) => item !== ""),
      };

      const response = await fetch(
        `${API_BASE_URL}/hiringCampaings/create`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(finalData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Campaign Added Successfully");

        // RESET FORM
        setFormData({
          campaignId: "",

          campaignName: "",

          positionId: "",

          assignedAssessments: "",

          candidateIds: "",

          totalInvited: "",

          totalCompleted: "",

          averageScore: "",

          suspiciousActivities: "",

          startDate: "",

          endDate: "",

          status: "Active",

          createdBy: "",
        });
      } else {
        toast.error(data.message || "Failed To Add Campaign");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white
          rounded-[30px]
          shadow-xl
          overflow-hidden
          border
          border-gray-200
        "
      >
        {/* HEADER */}
        <div
          className="
            bg-linear-to-r
            from-blue-600
            to-indigo-600
            px-8
            py-6
          "
        >
          <h1 className="text-3xl font-bold text-white">
            Add New Campaign
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all campaign details carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CAMPAIGN ID */}
            <InputField
              label="Campaign ID"
              name="campaignId"
              value={formData.campaignId}
              onChange={handleChange}
              placeholder="CMP-1001"
            />

            {/* CAMPAIGN NAME */}
            <InputField
              label="Campaign Name"
              name="campaignName"
              value={formData.campaignName}
              onChange={handleChange}
              placeholder="Frontend Hiring Drive 2026"
            />

            {/* POSITION ID */}
            <InputField
              label="Position ID"
              name="positionId"
              value={formData.positionId}
              onChange={handleChange}
              placeholder="POS-1001"
            />

            {/* ASSIGNED ASSESSMENTS */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Assigned Assessments
              </label>

              <input
                type="text"
                name="assignedAssessments"
                value={formData.assignedAssessments}
                onChange={handleChange}
                placeholder="React Skill Test, JavaScript MCQ"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>

            {/* CANDIDATE IDS */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Candidate IDs
              </label>

              <input
                type="text"
                name="candidateIds"
                value={formData.candidateIds}
                onChange={handleChange}
                placeholder="CND-1001, CND-1002"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />
            </div>

            {/* TOTAL INVITED */}
            <InputField
              label="Total Invited"
              type="number"
              name="totalInvited"
              value={formData.totalInvited}
              onChange={handleChange}
              placeholder="150"
            />

            {/* TOTAL COMPLETED */}
            <InputField
              label="Total Completed"
              type="number"
              name="totalCompleted"
              value={formData.totalCompleted}
              onChange={handleChange}
              placeholder="96"
            />

            {/* AVERAGE SCORE */}
            <InputField
              label="Average Score"
              type="number"
              name="averageScore"
              value={formData.averageScore}
              onChange={handleChange}
              placeholder="78"
            />

            {/* SUSPICIOUS ACTIVITIES */}
            <InputField
              label="Suspicious Activities"
              type="number"
              name="suspiciousActivities"
              value={formData.suspiciousActivities}
              onChange={handleChange}
              placeholder="3"
            />

            {/* START DATE */}
            <InputField
              label="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder={undefined}
            />

            {/* END DATE */}
            <InputField
              label="End Date"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder={undefined}
            />

            {/* STATUS */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-gray-300
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >
                <option>Active</option>
                <option>Completed</option>
                <option>Draft</option>
                <option>Paused</option>
              </select>
            </div>

            {/* CREATED BY */}
            <InputField
              label="Created By"
              name="createdBy"
              value={formData.createdBy}
              onChange={handleChange}
              placeholder="Sunil Kumar"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="
                px-8
                py-4
                rounded-2xl
                bg-linear-to-r
                from-blue-600
                to-indigo-600
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Submitting..." : "Submit Campaign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}