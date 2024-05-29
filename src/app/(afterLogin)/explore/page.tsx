import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import style from "@/app/(afterLogin)/explore/explore.module.css";
import TrendSection from "./component/TrendSection";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}
