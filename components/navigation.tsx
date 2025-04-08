"use client"
/*이것이 필요한 이유는 리액트 작동방식 때문이다.
리액트는 기본적으로 자바스크립트 파일을 클라이언트에게 보내고 클라단에서는 빈 html과 자바스크립트 뭉치를 받는다.
이것을 클라단에서는 자바스크립트를 실행해서 완성해야 보이는 것이다.
use client는 서버와 클라이언트 컴포넌트 모듈 간의 경계 선언에 사용됨.
이것이 존재하면 백앤드에서 랜더되고 프론트에서 hydrate됨.
이것이 없으면 기본적으로 전부 서버 랜더 방식이다. 그것들은 서버에서 랜더되고 hydrate(인터랙티브)되지 않는다.
*/

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navi() {

    const path = usePathname();

    return <nav>

        <ul>
            <li><Link href="/">메인</Link>{path === "/" ? "  현 페이지" : ""}</li>
            <li><Link href="/testpage">테스트</Link>{path === "/testpage" ? "  현 페이지" : ""}</li>
            <li><Link href="/testpage/deeptestpage">딥테스트</Link>{path === "/testpage/deeptestpage" ? "  현 페이지" : ""}</li>
        </ul>
    </nav>
}