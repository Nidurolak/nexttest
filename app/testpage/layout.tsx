//레이아웃이 필요한 이유 - 헤더같은 것들 붙이기 좋으니깐?
//기본 페이지 말고, 분할된 페이지에도 레이아웃을 붙일 수 있다

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <h2>김재우짱짱맨</h2>
        </div>
    )
}
