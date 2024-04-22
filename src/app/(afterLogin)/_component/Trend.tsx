import Link from "next/link";
import style from "@/app/(afterLogin)/_component/trend.module.css";

export default function Trend() {
  return (
    <Link href={`/serch?q=트렌드`} className={style.container}>
      <div className={style.count}>실시간 트랜드</div>
      <div className={style.title}>제로초</div>
      <div className={style.count}>1,234 posts</div>
    </Link>
  );
}
