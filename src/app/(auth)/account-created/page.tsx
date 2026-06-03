"use client";

import { Suspense } from "react";
import AccountCreated from "@/component/account-Created";

export default function AccountCreatedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountCreated />
    </Suspense>
  );
}