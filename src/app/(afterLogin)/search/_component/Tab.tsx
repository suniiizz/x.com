"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "../search.module.css";

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent("hot");
    
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");
    router.replace(`/search?${newSearchParams.toString()}`);

    // setCurrent("hot");
    // let url = `/search?q=${searchParams.get("q")}`;
    // if (searchParams.has("pf")) {
    //   url += `&pf=${searchParams.get("pf")}`;
    // }
    // router.replace(url);
  };

  const onClickNew = () => {
    setCurrent("new");

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "live");
    router.replace(`/search?${newSearchParams.toString()}`);

    // let url = `/search?q=${searchParams.get("q")}&f=live`;
    // if (searchParams.has("pf")) {
    //   url += `&pf=${searchParams.get("pf")}`;
    // }
    // router.replace(url);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
