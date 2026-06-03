import { useQuery } from "@tanstack/react-query";

import {
  questionBankService,
  GetAllQuestionBankParams,
} from "@/service/questionBank.service";

// ========================================
// GET ALL QUESTION BANK
// ========================================

export const useGetAllQuestionBank = (
  params: GetAllQuestionBankParams
) => {
  return useQuery({
    queryKey: [
      "question-bank",
      params.page,
      params.limit,
    ],

    queryFn: () =>
      questionBankService.getAllQuestionBank(
        params
      ),

    staleTime: 1000 * 60 * 5,
  });
};