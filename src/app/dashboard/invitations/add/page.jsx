"use client";

import { useState } from "react";

export default function AddInvitationPage() {

  const [formData, setFormData] = useState({
    invitationId: "",

    candidateId: "",

    assessmentId: "",

    email: "",

    inviteToken: "",

    sentAt: "",

    expiresAt: "",

    status: "Opened",

    reminderSent: false,
  });

  // HANDLE CHANGE
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Invitation Added Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div
        className="
          max-w-5xl
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
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            px-8
            py-6
          "
        >

          <h1 className="text-3xl font-bold text-white">
            Add New Invitation
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all invitation details carefully
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* INVITATION ID */}
            <InputField
              label="Invitation ID"
              name="invitationId"
              value={formData.invitationId}
              onChange={handleChange}
              placeholder="INV-1001"
            />

            {/* CANDIDATE ID */}
            <InputField
              label="Candidate ID"
              name="candidateId"
              value={formData.candidateId}
              onChange={handleChange}
              placeholder="CND-1001"
            />

            {/* ASSESSMENT ID */}
            <InputField
              label="Assessment ID"
              name="assessmentId"
              value={formData.assessmentId}
              onChange={handleChange}
              placeholder="ASM-1001"
            />

            {/* EMAIL */}
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="sunil@example.com"
            />

            {/* INVITE TOKEN */}
            <InputField
              label="Invite Token"
              name="inviteToken"
              value={formData.inviteToken}
              onChange={handleChange}
              placeholder="INV-TOKEN-XY12345"
            />

            {/* SENT AT */}
            <InputField
              label="Sent At"
              type="datetime-local"
              name="sentAt"
              value={formData.sentAt}
              onChange={handleChange}
            />

            {/* EXPIRES AT */}
            <InputField
              label="Expires At"
              type="datetime-local"
              name="expiresAt"
              value={formData.expiresAt}
              onChange={handleChange}
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
                <option>Pending</option>
                <option>Opened</option>
                <option>Completed</option>
                <option>Expired</option>
              </select>

            </div>

            {/* REMINDER SENT */}
            <div className="flex items-center gap-3 mt-8">

              <input
                type="checkbox"
                name="reminderSent"
                checked={formData.reminderSent}
                onChange={handleChange}
                className="w-5 h-5"
              />

              <label className="text-sm font-semibold text-gray-700">
                Reminder Sent
              </label>

            </div>

          </div>

          {/* SUBMIT BUTTON */}
          <div className="mt-10 flex justify-end">

            <button
              type="submit"
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
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
              Submit Invitation
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

/* INPUT FIELD COMPONENT */
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