"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, //fresh -> stale
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
