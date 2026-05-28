"use client";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/sign-in");
    } else {
      setLoading(false);
    }
  }, [router]);

  // ========================================
  // LOADING
  // ========================================

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}