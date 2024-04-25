import { ReactNode } from "react";
import Link from "next/link";
import style from "@/app/(afterLogin)/layout.module.css";
import NavMenu from "@/app/(afterLogin)/_component/NavMenu";
import LogoutButton from "@/app/(afterLogin)/_component/LogoutButton";
import TrendSection from "@/app/(afterLogin)/_component/TrendSection";
import FollowRecommend from "@/app/(afterLogin)/_component/FollowRecommend";
import RightSearchZone from "@/app/(afterLogin)/_component/RightSearchZone";

export default async function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <svg width={30} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </g>
                </svg>
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
