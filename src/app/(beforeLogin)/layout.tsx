import { ReactNode } from "react";
import styles from "@/app/page.module.css";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      비포 로그인 레이아웃
      {children}
      {modal}
    </div>
  );
}

// 기본 주소일 때 children
// => page.tsx modal
// => @modal/default.tsx

// 기본 주소/i/flow/login일 때
// children => i/flow/login/page.tsx
// modal => @modal/i/flow/login/login/page.tsx
