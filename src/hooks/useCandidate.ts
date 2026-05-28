"use client";

import { useQuery } from "@tanstack/react-query";

import {
  candidateService,
  CandidateQueryParams,
} from "@/service/candidate.service";

export const useCandidates = (
  params: CandidateQueryParams
) => {
  return useQuery({
    queryKey: [
      "candidates",
      params.page,
      params.limit,
    ],

    queryFn: () =>
      candidateService.getCandidates(params),

    staleTime: 1000 * 60 * 5,
  });
};