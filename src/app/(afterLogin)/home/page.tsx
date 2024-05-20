import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";

import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import style from "@/app/(afterLogin)/home/home.module.css";

// 서버 컴포넌트이므로 이 함수는 서버에서 실행된다.
async function getPostRecommends() {
  const res = await fetch("http://localhost:9090/api/postRecommends", {
    next: {
      tags: ["posts", "recommends"], // 서버에서 가져온 데이터에 tag를 설정, 이후 캐시 초기화 등에 사용됨
    },
    cache: "no-store", // cache를 하지 않음
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
