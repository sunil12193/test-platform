import api from "./axios";

import { QuestionBank } from "@/type/questionBank";

export interface GetAllQuestionBankParams {
  page?: number;
  limit?: number;
}

export interface GetAllQuestionBankResponse {
  data: QuestionBank[];

  totalPages: number;

  totalDocuments: number;
}

export const questionBankService = {
  // ========================================
  // GET ALL QUESTION BANK
  // ========================================

  getAllQuestionBank: async ({
    page = 1,
    limit = 10,
  }: GetAllQuestionBankParams) => {
    const response =
      await api.get<GetAllQuestionBankResponse>(
        `/question-bank/get-all?page=${page}&limit=${limit}`
      );

    return response.data;
  },
};