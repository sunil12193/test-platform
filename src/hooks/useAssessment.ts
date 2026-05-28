"use client";

import { useQuery } from "@tanstack/react-query";

import {
  assessmentService,
  AssessmentQueryParams,
} from "@/service/assessment.service";

export const useAssessments = (
  params: AssessmentQueryParams
) => {
  return useQuery({
    queryKey: [
      "assessments",
      params.page,
      params.limit,
    ],

    queryFn: () =>
      assessmentService.getAssessments(params),

    staleTime: 1000 * 60 * 5,
  });
};