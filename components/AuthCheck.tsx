"use client";

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  console.log(session, status);

  // si authentifié, on renvoie les enfants
  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    // si pas authentifié, on ne renvoie rien
    return <></>;
  }
}
