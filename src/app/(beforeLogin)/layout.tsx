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
