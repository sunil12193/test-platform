import api from "./axios";

import { API_BASE_URL } from "@/util/APIGeneric";

export interface CandidateQueryParams {
  page: number;
  limit: number;
}

export const candidateService = {
  getCandidates: async ({
    page,
    limit,
  }: CandidateQueryParams) => {
    const response = await api.get(
      `${API_BASE_URL}/candidate/get-all?page=${page}&limit=${limit}`
    );

    return response.data;
  },
};