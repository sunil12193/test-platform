"use client";

import { useState } from "react";

import { API_BASE_URL } from "../../../../util/APIGeneric";

export default function AddAssessmentPage() {
  const [formData, setFormData] = useState({
    assessmentId: "",

    title: "",
    description: "",

    assessmentType: "Coding",

    duration: "",
    totalQuestions: "",
    totalMarks: "",
    passingMarks: "",

    difficultyLevel: "Medium",

    questionBankIds: "",

    randomizeQuestions: true,
    negativeMarking: false,

    startDate: "",
    endDate: "",

    status: "Active",

    totalCandidates: "",
    completedAttempts: "",

    averageScore: "",
    suspiciousActivities: "",

    createdBy: "",
    createdAt: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e: any) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

    setFormData({
      ...formData,

      [name]: type === "checkbox" ? checked : value,
    });
  };

  // SUBMIT
  const handleSubmit = async (
    e: { preventDefault: () => void }
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const finalData = {
        ...formData,

        duration: Number(formData.duration),

        totalQuestions: Number(formData.totalQuestions),

        totalMarks: Number(formData.totalMarks),

        passingMarks: Number(formData.passingMarks),

        totalCandidates: Number(formData.totalCandidates),

        completedAttempts: Number(formData.completedAttempts),

        averageScore: Number(formData.averageScore),

        suspiciousActivities: Number(
          formData.suspiciousActivities
        ),

        questionBankIds: formData.questionBankIds
          .split(",")
          .map((id) => id.trim())
          .filter((id) => id !== ""),
      };

      console.log("FINAL DATA :", finalData);

      const response = await fetch(
        `${API_BASE_URL}/assessment/create`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(finalData),
        }
      );

      const data = await response.json();

      console.log("API RESPONSE :", data);

      if (response.ok) {
        alert("Assessment Added Successfully 🚀");

        // RESET FORM
        setFormData({
          assessmentId: "",

          title: "",
          description: "",

          assessmentType: "Coding",

          duration: "",
          totalQuestions: "",
          totalMarks: "",
          passingMarks: "",

          difficultyLevel: "Medium",

          questionBankIds: "",

          randomizeQuestions: true,
          negativeMarking: false,

          startDate: "",
          endDate: "",

          status: "Active",

          totalCandidates: "",
          completedAttempts: "",

          averageScore: "",
          suspiciousActivities: "",

          createdBy: "",
          createdAt: "",
        });
      } else {
        alert(data.message || "Failed to create assessment");
      }
    } catch (error) {
      console.log("CREATE ERROR :", error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">
        {/* HEADER */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">
            Add New Assessment
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all assessment details carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ASSESSMENT ID */}
            <InputField
              label="Assessment ID"
              name="assessmentId"
              value={formData.assessmentId}
              onChange={handleChange}
              placeholder="ASM-1001"
            />

            {/* TITLE */}
            <InputField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Frontend React Assessment"
            />

            {/* ASSESSMENT TYPE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Assessment Type
              </label>

              <select
                name="assessmentType"
                value={formData.assessmentType}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Coding</option>
                <option>MCQ</option>
                <option>Technical</option>
                <option>Aptitude</option>
              </select>
            </div>

            {/* DESCRIPTION */}
            <div className="md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-gray-700">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="React.js, Hooks, API & TailwindCSS Test"
                rows={4}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DURATION */}
            <InputField
              label="Duration (Minutes)"
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="60"
            />

            {/* TOTAL QUESTIONS */}
            <InputField
              label="Total Questions"
              type="number"
              name="totalQuestions"
              value={formData.totalQuestions}
              onChange={handleChange}
              placeholder="25"
            />

            {/* TOTAL MARKS */}
            <InputField
              label="Total Marks"
              type="number"
              name="totalMarks"
              value={formData.totalMarks}
              onChange={handleChange}
              placeholder="100"
            />

            {/* PASSING MARKS */}
            <InputField
              label="Passing Marks"
              type="number"
              name="passingMarks"
              value={formData.passingMarks}
              onChange={handleChange}
              placeholder="40"
            />

            {/* DIFFICULTY */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Difficulty Level
              </label>

              <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            {/* QUESTION BANK IDS */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Question Bank IDs
              </label>

              <input
                type="text"
                name="questionBankIds"
                value={formData.questionBankIds}
                onChange={handleChange}
                placeholder="QB101, QB102"
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* RANDOMIZE QUESTIONS */}
            <div className="flex items-center gap-3 mt-8">
              <input
                type="checkbox"
                name="randomizeQuestions"
                checked={formData.randomizeQuestions}
                onChange={handleChange}
              />

              <label className="text-sm font-semibold text-gray-700">
                Randomize Questions
              </label>
            </div>

            {/* NEGATIVE MARKING */}
            <div className="flex items-center gap-3 mt-8">
              <input
                type="checkbox"
                name="negativeMarking"
                checked={formData.negativeMarking}
                onChange={handleChange}
              />

              <label className="text-sm font-semibold text-gray-700">
                Negative Marking
              </label>
            </div>

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
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Active</option>
                <option>Draft</option>
                <option>Closed</option>
              </select>
            </div>

            {/* TOTAL CANDIDATES */}
            <InputField
              label="Total Candidates"
              type="number"
              name="totalCandidates"
              value={formData.totalCandidates}
              onChange={handleChange}
              placeholder="120"
            />

            {/* COMPLETED ATTEMPTS */}
            <InputField
              label="Completed Attempts"
              type="number"
              name="completedAttempts"
              value={formData.completedAttempts}
              onChange={handleChange}
              placeholder="84"
            />

            {/* AVERAGE SCORE */}
            <InputField
              label="Average Score"
              type="number"
              name="averageScore"
              value={formData.averageScore}
              onChange={handleChange}
              placeholder="76"
            />

            {/* SUSPICIOUS ACTIVITIES */}
            <InputField
              label="Suspicious Activities"
              type="number"
              name="suspiciousActivities"
              value={formData.suspiciousActivities}
              onChange={handleChange}
              placeholder="2"
            />

            {/* CREATED BY */}
            <InputField
              label="Created By"
              name="createdBy"
              value={formData.createdBy}
              onChange={handleChange}
              placeholder="Admin"
            />

            {/* CREATED AT */}
            <InputField
              label="Created At"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              placeholder={undefined}
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
              {loading
                ? "Submitting..."
                : "Submit Assessment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string | undefined;
  type?: string;
};

/* INPUT FIELD COMPONENT */
function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputFieldProps) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
  );
}