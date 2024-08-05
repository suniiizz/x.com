import { Metadata } from "next";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";
import { getUserServer } from "../../_lib/getUserServer";
import { getSinglePostServer } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePostServer";
import { User } from "@/model/User";
import { Post } from "@/model/Post";
import SinglePost from "./_component/SinglePost";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Comments from "./_component/Comments";
import style from "./singlePost.module.css";

type Props = {
  params: { id: string; username: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user: User = await getUserServer({
    queryKey: ["users", params.username],
  });
  const post: Post = await getSinglePostServer({
    queryKey: ["post", params.id],
  });
  return {
    title: `${user.nickname} / Z`,
    description: `${user.nickname} 프로필`,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div style={{ marginBottom: "53px" }}>
          <div className={style.header}>
            <BackButton />
            <h3 className={style.headerTitle}>게시하기</h3>
          </div>
        </div>

        {/* 원본 */}
        <SinglePost id={id} />

        {/* 답글 게시폼 */}
        <CommentForm id={id} />

        {/* 답글 */}
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
