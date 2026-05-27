"use client";

import { useState } from "react";
import toast from "react-hot-toast";


export default function AddSettingsPage() {
  const [formData, setFormData] = useState({
    companyName: "",

    companyLogo: "",

    supportEmail: "",

    timezone: "Asia/Kolkata",

    brandingColor: "#4F46E5",

    enableProctoring: true,

    allowRetest: false,

    emailNotifications: true,

    customDomain: "",

    createdAt: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Settings Saved Successfully 🚀");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">
        {/* HEADER */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Platform Settings</h1>

          <p className="text-blue-100 mt-2">
            Configure company and platform settings
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* COMPANY NAME */}
            <InputField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="TechHire Solutions"
            />

            {/* COMPANY LOGO */}
            <InputField
              label="Company Logo URL"
              name="companyLogo"
              value={formData.companyLogo}
              onChange={handleChange}
              placeholder="https://..."
            />

            {/* SUPPORT EMAIL */}
            <InputField
              label="Support Email"
              type="email"
              name="supportEmail"
              value={formData.supportEmail}
              onChange={handleChange}
              placeholder="support@company.com"
            />

            {/* TIMEZONE */}
            <InputField
              label="Timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              placeholder="Asia/Kolkata"
            />

            {/* BRAND COLOR */}
            <InputField
              label="Branding Color"
              type="color"
              name="brandingColor"
              value={formData.brandingColor}
              onChange={handleChange}
            />

            {/* CUSTOM DOMAIN */}
            <InputField
              label="Custom Domain"
              name="customDomain"
              value={formData.customDomain}
              onChange={handleChange}
              placeholder="assess.company.com"
            />

            {/* CREATED AT */}
            <InputField
              label="Created At"
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
            />
          </div>

          {/* TOGGLES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <CheckboxField
              label="Enable Proctoring"
              name="enableProctoring"
              checked={formData.enableProctoring}
              onChange={handleChange}
            />

            <CheckboxField
              label="Allow Retest"
              name="allowRetest"
              checked={formData.allowRetest}
              onChange={handleChange}
            />

            <CheckboxField
              label="Email Notifications"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Save Settings
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
      <label className="text-sm font-semibold text-gray-700">{label}</label>

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

/* CHECKBOX FIELD */
function CheckboxField({ label, name, checked, onChange }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-5 w-5"
      />

      <label className="text-sm font-semibold text-gray-700">{label}</label>
    </div>
  );
}
