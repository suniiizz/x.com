import style from "./profile.module.css";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getUserPosts } from "./_lib/getUserPosts";
import { getUserServer } from "./_lib/getUserServer";
import UserPosts from "./component/UserPosts";
import UserInfo from "./component/UserInfo";
import { auth } from "@/auth";

type Props = {
  params: { username: string };
};

export default async function Profile({ params }: Props) {
  const { username } = params;
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUserServer,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo username={username} session={session} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
