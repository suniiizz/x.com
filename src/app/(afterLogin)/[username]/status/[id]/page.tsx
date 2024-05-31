import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Comments from "./_component/Comments";
import SinglePost from "./_component/SinglePost";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";

type Props = {
  params: { id: string };
};

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
