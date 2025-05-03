//레이아웃이 필요한 이유 - 헤더같은 것들 붙이기 좋으니깐?
//메타데이터
//라우트 그룹 - 라우트들을 그룹화해서 로지컬 그룹으로 제어할 수 있음

import { Metadata } from "next"
import Navi from "../components/navigation"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

//프레임워크는 메타데이터 객체를 찾고 이를 헤드에 표시함
/** 
export const metadata = {
  title: 'jaewoo | wow!',
  description: '이건 디스크립션이야',
}*/

export const metadata: Metadata = {
  title: { template: "jaewoo | %s", default: "jaewoo | " },
  description: '이건 디스크립션이야',
}
/*
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/*<QueryClientProvider client={queryClient}>>*/}
        <Navi />
        {children}
        {/*</QueryClientProvider>*/}
      </body>
    </html>
  )
}
