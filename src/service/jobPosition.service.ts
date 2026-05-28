import api from "axios";

import { JobPosition } from "@/type/jobPosition";

export interface GetAllJobPositionsResponse {
  data: JobPosition[];

  totalPages: number;

  totalDocuments: number;

  currentPage: number;
}

export const jobPositionService = {
  // =========================================
  // GET ALL JOB POSITIONS
  // =========================================

  getAll: async (
    page: number,
    limit: number,
  ): Promise<GetAllJobPositionsResponse> => {
    const response = await api.get(
      `/jobPosition?page=${page}&limit=${limit}`,
    );

    return response.data;
  },
};