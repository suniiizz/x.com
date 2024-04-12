"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();

  // redirect("i/flow/login"); //서버 리다이렉트
  router.replace("i/flow/login"); //클라이언트 리다이렉트
  return <Main />;
}
