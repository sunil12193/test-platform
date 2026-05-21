"use client";

import { useState } from "react";

export default function AddProctoringPage() {

  const [formData, setFormData] = useState({
    proctoringId: "",

    candidateId: "",

    assessmentId: "",

    webcamSnapshots: "",

    tabSwitchCount: "",

    copyPasteAttempts: "",

    fullscreenViolations: "",

    suspiciousScore: "",

    recordingUrl: "",

    finalStatus: "Safe",

    monitoredAt: "",
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

      webcamSnapshots: formData.webcamSnapshots
        .split(",")
        .map((item) => item.trim()),
    };

    console.log(finalData);

    alert("Proctoring Added Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">

          <h1 className="text-3xl font-bold text-white">
            Add Proctoring Record
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all proctoring details carefully
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PROCTORING ID */}
            <InputField
              label="Proctoring ID"
              name="proctoringId"
              value={formData.proctoringId}
              onChange={handleChange}
              placeholder="PRC-1001"
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

            {/* TAB SWITCH */}
            <InputField
              label="Tab Switch Count"
              type="number"
              name="tabSwitchCount"
              value={formData.tabSwitchCount}
              onChange={handleChange}
              placeholder="2"
            />

            {/* COPY PASTE */}
            <InputField
              label="Copy Paste Attempts"
              type="number"
              name="copyPasteAttempts"
              value={formData.copyPasteAttempts}
              onChange={handleChange}
              placeholder="1"
            />

            {/* FULLSCREEN */}
            <InputField
              label="Fullscreen Violations"
              type="number"
              name="fullscreenViolations"
              value={formData.fullscreenViolations}
              onChange={handleChange}
              placeholder="0"
            />

            {/* SUSPICIOUS SCORE */}
            <InputField
              label="Suspicious Score"
              type="number"
              name="suspiciousScore"
              value={formData.suspiciousScore}
              onChange={handleChange}
              placeholder="28"
            />

            {/* RECORDING URL */}
            <InputField
              label="Recording URL"
              name="recordingUrl"
              value={formData.recordingUrl}
              onChange={handleChange}
              placeholder="https://example.com/video.mp4"
            />

            {/* MONITORED AT */}
            <InputField
              label="Monitored At"
              type="datetime-local"
              name="monitoredAt"
              value={formData.monitoredAt}
              onChange={handleChange}
            />

            {/* FINAL STATUS */}
            <div>

              <label className="text-sm font-semibold text-gray-700">
                Final Status
              </label>

              <select
                name="finalStatus"
                value={formData.finalStatus}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option>Safe</option>
                <option>Warning</option>
                <option>Suspicious</option>
                <option>Blocked</option>

              </select>

            </div>

            {/* SNAPSHOTS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">

              <label className="text-sm font-semibold text-gray-700">
                Webcam Snapshots
              </label>

              <textarea
                name="webcamSnapshots"
                value={formData.webcamSnapshots}
                onChange={handleChange}
                placeholder="Paste image URLs separated by commas"
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
              Submit Proctoring
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