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
import { getPostRecommends } from "./_lib/getPostRecommends";
import PostRecommends from "./_component/PostRecommends";

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
          <PostRecommends />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
