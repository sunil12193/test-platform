import api from "./axios";

import { API_BASE_URL } from "@/util/APIGeneric";

export interface AssessmentQueryParams {
  page: number;
  limit: number;
}

export const assessmentService = {
  getAssessments: async ({
    page,
    limit,
  }: AssessmentQueryParams) => {
    const response = await api.get(
      `${API_BASE_URL}/assessment/get-all?page=${page}&limit=${limit}`
    );

    return response.data;
  },
};