"use client";

import { redirect, useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  // redirect("/i/flow/login"); //서버 리다이렉트
  router.replace("/i/flow/login"); //클라이언트 리다이렉트
  return <Main />;
}
