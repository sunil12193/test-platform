"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/service/auth.service";

type InputFieldProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: any) => void;
  placeholder?: string | undefined;
  type?: string;
};

export default function AddBillingPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyId: "",

    currentPlan: "",

    billingCycle: "Monthly",

    totalUsers: "",

    activeAssessments: "",

    invoiceHistory: "",

    paymentStatus: "Paid",

    renewalDate: "",
  });

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

        totalUsers: Number(formData.totalUsers),

        activeAssessments: Number(formData.activeAssessments),

        invoiceHistory: formData.invoiceHistory
          .split(",")
          .map((invoice) => invoice.trim())
          .filter((invoice) => invoice !== ""),
      };

      console.log("FINAL DATA:", finalData);

      const response = await fetch(
        `${API_BASE_URL}/billing/create`,
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
        toast.success(data.success || "Billing Added Successfully");

        // RESET FORM
        setFormData({
          companyId: "",

          currentPlan: "",

          billingCycle: "Monthly",

          totalUsers: "",

          activeAssessments: "",

          invoiceHistory: "",

          paymentStatus: "Paid",

          renewalDate: "",
        });
      } else {
        toast.error(data.message || "Failed To Add Billing");
      }
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">
        {/* HEADER */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">
            Add Billing Details
          </h1>

          <p className="text-blue-100 mt-2">
            Fill all company billing information carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* COMPANY ID */}
            <InputField
              label="Company ID"
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              placeholder="CMPNY-1001"
            />

            {/* CURRENT PLAN */}
            <InputField
              label="Current Plan"
              name="currentPlan"
              value={formData.currentPlan}
              onChange={handleChange}
              placeholder="Enterprise Pro"
            />

            {/* BILLING CYCLE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Billing Cycle
              </label>

              <select
                name="billingCycle"
                value={formData.billingCycle}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Yearly</option>
              </select>
            </div>

            {/* TOTAL USERS */}
            <InputField
              label="Total Users"
              type="number"
              name="totalUsers"
              value={formData.totalUsers}
              onChange={handleChange}
              placeholder="420"
            />

            {/* ACTIVE ASSESSMENTS */}
            <InputField
              label="Active Assessments"
              type="number"
              name="activeAssessments"
              value={formData.activeAssessments}
              onChange={handleChange}
              placeholder="28"
            />

            {/* PAYMENT STATUS */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Payment Status
              </label>

              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Paid</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>

            {/* INVOICE HISTORY */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">
                Invoice History
              </label>

              <input
                type="text"
                name="invoiceHistory"
                value={formData.invoiceHistory}
                onChange={handleChange}
                placeholder="INV-2026-001, INV-2026-002"
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* RENEWAL DATE */}
            <InputField
              label="Renewal Date"
              type="date"
              name="renewalDate"
              value={formData.renewalDate}
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
              {loading ? "Submitting..." : "Submit Billing"}
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