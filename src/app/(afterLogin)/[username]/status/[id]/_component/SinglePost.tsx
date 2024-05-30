"use client";

import { Post as IPost } from "@/model/Post";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSinglePost } from "../_lib/getSinglePost";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  id: string;
  noImage?: boolean;
};

export default function SinglePost({ id, noImage }: Props) {
  const { data: post, error } = useQuery<
    IPost,
    Object,
    IPost,
    [_1: string, _2: string]
  >({
    queryKey: ["post", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 300 * 1000,
  });

  if (error) {
    return (
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
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return <Post key={post.postId} post={post} noImage={noImage} />;
}
