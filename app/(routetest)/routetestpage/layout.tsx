//레이아웃이 필요한 이유 - 헤더같은 것들 붙이기 좋으니깐?
//기본 페이지 말고, 분할된 페이지에도 레이아웃을 붙일 수 있다

//메타데이터는 레이아웃과 비슷해보이지만 병합된다는 차이점이 있다.
export const metadata = {
    title: 'jaewoo | route!',
    description: '이건  라우트디스크립션이야',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <h2>라우트 그룹 테스트</h2>
        </div>
    )
}
