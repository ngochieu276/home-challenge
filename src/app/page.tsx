
'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
