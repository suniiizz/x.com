"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      // react-query 전역 설정
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false, //다른 탭 갔다가 돌아올 경우 데이터 새로 가져오겠다.
          retryOnMount: true, //페이지 이동이나 컴포넌트가 unmount였다가 돌아올 경우 데이터 새로 가져오겠다.
          refetchOnReconnect: true, //인터넷 연결이 끊겼다가 돌아올 경우 데이터를 새로 가져오겠다.
          retry: false, //데이터를 가져올 때 실패할 경우 재시도 할 때
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}

export default RQProvider;
