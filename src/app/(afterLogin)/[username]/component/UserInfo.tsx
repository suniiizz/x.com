"use client";

import { useQuery } from "@tanstack/react-query";
import { User } from "@/model/User";
import BackButton from "@/app/(beforeLogin)/_component/BackButton";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import { getUser } from "../_lib/getUser";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const { data: user, error } = useQuery<
    User,
    Object,
    User,
    [_1: string, _2: string]
  >({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 300 * 1000,
  });

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>프로필</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}></div>
          <div className={style.userName}>
            <div>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: "100",
            fontSize: 31,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingTop: "30px",
          }}
        >
          계정이 존재하지 않음.
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}
