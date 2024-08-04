import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";

// 서버 컴포넌트이므로 이 함수는 서버에서 실행된다.
export const getUserPosts: QueryFunction<
  Post[],
  [_1: string, _2: string, string]
> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/users/${username}/posts?cursor=${0}`,
    {
      next: {
        tags: ["posts", "users", username], // 서버에서 가져온 데이터에 tag를 설정, 이후 캐시 초기화 등에 사용됨
      },
      credentials: "include",
      cache: "no-store", // cache를 하지 않음
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
