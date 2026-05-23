import { QuestionBank } from "@/type/questionBank";

export const questionBankData: QuestionBank[] = [
  {
    questionId: "QST-1001",

    questionType: "MCQ",

    category: "Frontend",
    subCategory: "React",

    difficultyLevel: "Medium",

    question:
      "Which React Hook is used for managing state inside functional components?",

    options: ["useFetch", "useState", "useReducer", "useMemo"],

    correctAnswer: "useState",

    explanation:
      "useState is the primary hook for state management in React functional components.",

    marks: 5,

    tags: ["React", "Hooks", "JavaScript"],

    totalAttempts: 120,
    correctAttempts: 94,

    status: "Published",

    createdBy: "Admin",
    createdAt: "2026-05-15",
  },

  {
    questionId: "QST-1002",

    questionType: "Coding",

    category: "Programming",
    subCategory: "JavaScript",

    difficultyLevel: "Hard",

    question:
      "Write a function to reverse a string without using built-in reverse().",

    options: [],

    correctAnswer: "Custom Logic",

    explanation:
      "Candidates must implement string reversal manually using loops.",

    marks: 10,

    tags: ["JavaScript", "Algorithms"],

    totalAttempts: 90,
    correctAttempts: 45,

    status: "Draft",

    createdBy: "HR Team",
    createdAt: "2026-05-12",
  },
];
