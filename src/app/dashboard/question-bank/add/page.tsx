"use client";

import { useState } from "react";
import { InputField } from "../../../../component/InputField";
import { API_BASE_URL } from "@/service/auth.service";
import toast from "react-hot-toast";

export default function AddQuestionPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    questionId: "",

    questionType: "MCQ",

    category: "",
    subCategory: "",

    difficultyLevel: "Medium",

    question: "",

    options: "",

    correctAnswer: "",

    explanation: "",

    marks: "",

    tags: "",

    totalAttempts: "",
    correctAttempts: "",

    status: "Published",

    createdBy: "",

    createdAt: "",
  });

  // HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const finalData = {
        ...formData,

        marks: Number(formData.marks),

        totalAttempts: Number(formData.totalAttempts),

        correctAttempts: Number(formData.correctAttempts),

        options: formData.options
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        tags: formData.tags
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      console.log("FINAL DATA:", finalData);

      const response = await fetch(
        `${API_BASE_URL}/questionBank/create`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(finalData),
        }
      );

      const data = await response.json();

      console.log("API RESPONSE:", data);

      if (response.ok) {
        toast.success(data.message || "Question Added Successfully");
        // RESET FORM
        setFormData({
          questionId: "",

          questionType: "MCQ",

          category: "",
          subCategory: "",

          difficultyLevel: "Medium",

          question: "",

          options: "",

          correctAnswer: "",

          explanation: "",

          marks: "",

          tags: "",

          totalAttempts: "",
          correctAttempts: "",

          status: "Published",

          createdBy: "",

          createdAt: "",
        });
      } else {
        toast.error(data.message || "Failed To Add Question");
      }
    } catch (error) {
      console.log("ERROR:", error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-xl overflow-hidden border border-gray-200">
        {/* HEADER */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Add New Question</h1>

          <p className="text-blue-100 mt-2">
            Fill all question details carefully
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* QUESTION ID */}
            <InputField
              label="Question ID"
              name="questionId"
              value={formData.questionId}
              onChange={handleChange}
              placeholder="QST-1001"
            />

            {/* QUESTION TYPE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Question Type
              </label>

              <select
                name="questionType"
                value={formData.questionType}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>MCQ</option>
                <option>Coding</option>
                <option>True/False</option>
                <option>Short Answer</option>
              </select>
            </div>

            {/* CATEGORY */}
            <InputField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Frontend"
            />

            {/* SUB CATEGORY */}
            <InputField
              label="Sub Category"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              placeholder="React"
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

            {/* MARKS */}
            <InputField
              label="Marks"
              type="number"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              placeholder="5"
            />

            {/* CORRECT ANSWER */}
            <InputField
              label="Correct Answer"
              name="correctAnswer"
              value={formData.correctAnswer}
              onChange={handleChange}
              placeholder="useState"
            />

            {/* TOTAL ATTEMPTS */}
            <InputField
              label="Total Attempts"
              type="number"
              name="totalAttempts"
              value={formData.totalAttempts}
              onChange={handleChange}
              placeholder="120"
            />

            {/* CORRECT ATTEMPTS */}
            <InputField
              label="Correct Attempts"
              type="number"
              name="correctAttempts"
              value={formData.correctAttempts}
              onChange={handleChange}
              placeholder="94"
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
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>

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
            />

            {/* OPTIONS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-gray-700">
                Options
              </label>

              <textarea
                name="options"
                value={formData.options}
                onChange={handleChange}
                placeholder="useFetch, useState, useReducer, useMemo"
                rows={4}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* TAGS */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-gray-700">
                Tags
              </label>

              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="React, Hooks, JavaScript"
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* QUESTION */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-gray-700">
                Question
              </label>

              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Write your question here..."
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EXPLANATION */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="text-sm font-semibold text-gray-700">
                Explanation
              </label>

              <textarea
                name="explanation"
                value={formData.explanation}
                onChange={handleChange}
                placeholder="Write explanation..."
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* BUTTON */}
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
              {loading ? "Submitting..." : "Submit Question"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}