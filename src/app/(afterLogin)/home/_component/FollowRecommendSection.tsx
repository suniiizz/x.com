"use client";

import { useQuery } from "@tanstack/react-query";
import { getFollowRecommends } from "../../_lib/getFollowRecommend";
import FollowRecommend from "../../_component/FollowRecommend";
import { User } from "@auth/core/types";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["user", "followRecommends"],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000, //fresh -> stale
    gcTime: 300 * 1000,
  });

  return data?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
