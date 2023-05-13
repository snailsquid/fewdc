"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const router = useRouter();
    router.push("/home");
  });
}
