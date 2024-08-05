// 서버 컴포넌트이므로 이 함수는 서버에서 실행된다.
export const getSinglePost = async ({
  queryKey,
}: {
  queryKey: [string, string];
}) => {
  const [_1, id] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
    {
      next: {
        tags: ["posts", id], // 서버에서 가져온 데이터에 tag를 설정, 이후 캐시 초기화 등에 사용됨
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
