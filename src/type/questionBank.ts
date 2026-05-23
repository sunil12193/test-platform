export interface QuestionBank {
  questionId: string;
  questionType: string;
  category: string;
  subCategory: string;
  difficultyLevel: "Easy" | "Medium" | "Hard";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  marks: number;
  tags: string[];
  totalAttempts: number;
  correctAttempts: number;
  status: string;
  createdBy: string;
  createdAt: string;
}
