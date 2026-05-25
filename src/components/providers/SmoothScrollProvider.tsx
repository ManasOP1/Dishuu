"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function SmoothScrollProvider({
  children,
  enabled = true,
}: {
  children: React.ReactNode;
  enabled?: boolean;
}) {
  useSmoothScroll(enabled);
  return <>{children}</>;
}
