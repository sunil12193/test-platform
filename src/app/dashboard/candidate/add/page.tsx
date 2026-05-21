"use client";

import { useState } from "react";
import { InputField } from "../../../../component/InputField";

export default function AddCandidatePage() {
  const [formData, setFormData] = useState({
    candidateId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profileImage: "",

    resumeUrl: "",
    linkedinUrl: "",
    githubUrl: "",

    skills: "",
    experience: "",
    education: "",

    currentStatus: "Applied",

    appliedPosition: "",
    assignedAssessment: "",

    totalScore: "",
    ranking: "",

    createdAt: "",
    updatedAt: "",
  });

  // HANDLE CHANGE
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const finalData = {
      ...formData,

      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    console.log(finalData);

    alert("Candidate Added Successfully 🚀");
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
          <h1 className="text-3xl font-bold text-white">Add New Candidate</h1>

          <p className="text-blue-100 mt-2">
            Fill all candidate details carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CANDIDATE ID */}
            <InputField
              label="Candidate ID"
              name="candidateId"
              value={formData.candidateId}
              onChange={handleChange}
              placeholder="CND-1001"
            />

            {/* FIRST NAME */}
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />

            {/* LAST NAME */}
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />

            {/* EMAIL */}
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            {/* PHONE */}
            <InputField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
            />

            {/* PROFILE IMAGE */}
            <InputField
              label="Profile Image URL"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              placeholder="https://..."
            />

            {/* RESUME */}
            <InputField
              label="Resume URL"
              name="resumeUrl"
              value={formData.resumeUrl}
              onChange={handleChange}
              placeholder="https://resume.pdf"
            />

            {/* LINKEDIN */}
            <InputField
              label="LinkedIn URL"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              placeholder="https://linkedin.com"
            />

            {/* GITHUB */}
            <InputField
              label="GitHub URL"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com"
            />

            {/* SKILLS */}
            <div className="col-span-1 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, Next.js, Node.js"
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

            {/* EXPERIENCE */}
            <InputField
              label="Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="2 Years"
            />

            {/* EDUCATION */}
            <InputField
              label="Education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="BCA / MCA"
            />

            {/* STATUS */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Current Status
              </label>

              <select
                name="currentStatus"
                value={formData.currentStatus}
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
                <option>Applied</option>
                <option>Invited</option>
                <option>Completed</option>
                <option>Rejected</option>
                <option>Selected</option>
              </select>
            </div>

            {/* POSITION */}
            <InputField
              label="Applied Position"
              name="appliedPosition"
              value={formData.appliedPosition}
              onChange={handleChange}
              placeholder="Frontend Developer"
            />

            {/* ASSESSMENT */}
            <InputField
              label="Assigned Assessment"
              name="assignedAssessment"
              value={formData.assignedAssessment}
              onChange={handleChange}
              placeholder="React Skill Test"
            />

            {/* SCORE */}
            <InputField
              label="Total Score"
              type="number"
              name="totalScore"
              value={formData.totalScore}
              onChange={handleChange}
              placeholder="88"
            />

            {/* RANKING */}
            <InputField
              label="Ranking"
              type="number"
              name="ranking"
              value={formData.ranking}
              onChange={handleChange}
              placeholder="5"
            />

            {/* CREATED */}
            <InputField
              label="Created At"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              placeholder={undefined}
            />

            {/* UPDATED */}
            <InputField
              label="Updated At"
              type="date"
              name="updatedAt"
              value={formData.updatedAt}
              onChange={handleChange}
              placeholder={undefined}
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
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
              "
            >
              Submit Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* INPUT FIELD COMPONENT */
