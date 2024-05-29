"use client";

import { Post as IPost } from "@/model/Post";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import Post from "../../_component/Post";

type Props = {
  username: string;
};

export default function UserPosts({ username }: Props) {
  const { data } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["post", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 300 * 1000,
  });

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);

  if (user) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
}
