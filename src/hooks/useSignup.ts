"use client";

import { authService } from "@/service/auth.service";

import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: authService.signup,
  });
};
export const useSignin = () => {
  return useMutation({
    mutationFn: authService.signin,
  });
};
