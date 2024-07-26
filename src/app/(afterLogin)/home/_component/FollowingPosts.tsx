"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import styles from "@/app/(afterLogin)/home/home.module.css";

export default function FollowingPosts() {
  const { data, isPending } = useSuspenseQuery<IPost[]>({
    queryKey: ["post", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
