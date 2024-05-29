import Link from "next/link";
import style from "@/app/(afterLogin)/_component/trend.module.css";
import { Hashtag } from "@/model/Hashtag";

type Prop = {
  trend: Hashtag;
};

export default function Trend({ trend }: Prop) {
  return (
    <Link href={`/search?q=${trend.title}`} className={style.container}>
      <div className={style.count}>실시간 트랜드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
}
