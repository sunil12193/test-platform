"use client";

import { useState } from "react";

export default function AddPositionPage() {

  const [formData, setFormData] = useState({
    positionId: "",
    title: "",
    department: "",
    location: "",
    employmentType: "Full-time",
    experienceRequired: "",
    salaryRange: "",
    requiredSkills: "",
    description: "",
    assignedAssessment: "",
    openings: "",
    applicants: "",
    shortlisted: "",
    status: "Open",
    createdAt: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...formData,

      requiredSkills: formData.requiredSkills
        .split(",")
        .map((skill) => skill.trim()),
    };

    console.log(finalData);

    alert("Position Added Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">
            Add New Position
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all position details carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* POSITION ID */}
            <InputField
              label="Position ID"
              name="positionId"
              value={formData.positionId}
              onChange={handleChange}
              placeholder="POS-1001"
            />

            {/* TITLE */}
            <InputField
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
            />

            {/* DEPARTMENT */}
            <InputField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Engineering"
            />

            {/* LOCATION */}
            <InputField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Delhi, India"
            />

            {/* EMPLOYMENT TYPE */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Employment Type
              </label>

              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>

            </div>

            {/* EXPERIENCE */}
            <InputField
              label="Experience Required"
              name="experienceRequired"
              value={formData.experienceRequired}
              onChange={handleChange}
              placeholder="2+ Years"
            />

            {/* SALARY */}
            <InputField
              label="Salary Range"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              placeholder="₹8 LPA - ₹12 LPA"
            />

            {/* ASSESSMENT */}
            <InputField
              label="Assigned Assessment"
              name="assignedAssessment"
              value={formData.assignedAssessment}
              onChange={handleChange}
              placeholder="Frontend React Assessment"
            />

            {/* OPENINGS */}
            <InputField
              label="Openings"
              type="number"
              name="openings"
              value={formData.openings}
              onChange={handleChange}
              placeholder="4"
            />

            {/* APPLICANTS */}
            <InputField
              label="Applicants"
              type="number"
              name="applicants"
              value={formData.applicants}
              onChange={handleChange}
              placeholder="128"
            />

            {/* SHORTLISTED */}
            <InputField
              label="Shortlisted"
              type="number"
              name="shortlisted"
              value={formData.shortlisted}
              onChange={handleChange}
              placeholder="42"
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
                <option>Open</option>
                <option>Closed</option>
                <option>Paused</option>
              </select>

            </div>

            {/* CREATED AT */}
            <InputField
              label="Created At"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
            />

            {/* REQUIRED SKILLS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">

              <label className="text-sm font-semibold text-gray-700">
                Required Skills
              </label>

              <input
                type="text"
                name="requiredSkills"
                value={formData.requiredSkills}
                onChange={handleChange}
                placeholder="React, Next.js, TailwindCSS, JavaScript"
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* DESCRIPTION */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">

              <label className="text-sm font-semibold text-gray-700">
                Job Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write job description..."
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-end">

            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Submit Position
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

/* INPUT FIELD */
function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {

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
        className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}