import style from "@/app/(afterLogin)/home/home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        {/* <PostForm />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </TabProvider>
    </main>
  );
}
