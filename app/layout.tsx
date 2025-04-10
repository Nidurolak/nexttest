//레이아웃이 필요한 이유 - 헤더같은 것들 붙이기 좋으니깐?
//메타데이터
//라우트 그룹 - 라우트들을 그룹화해서 로지컬 그룹으로 제어할 수 있음

import Navi from "../components/navigation"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navi />
        {children}
      </body>
    </html>
  )
}
