import { cookies } from "next/headers";

export const getUserServer = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${username}`,
    {
      next: {
        tags: ["users", username], // 서버에서 가져온 데이터에 tag를 설정, 이후 캐시 초기화 등에 사용됨
      },
      credentials: "include",
      headers: { Cookie: cookies().toString() },
      cache: "no-store", // cache를 하지 않음
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
