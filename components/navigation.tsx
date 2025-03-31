"use client"
/*이것이 필요한 이유는 리액트 작동방식 때문이다.
리액트는 기본적으로 자바스크립트 파일을 클라이언트에게 보내고 클라단에서는 빈 html과 자바스크립트 뭉치를 받는다.
이것을 클라단에서는 자바스크립트를 실행해서 완성해야 보이는 것이다.
*/

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navi() {

    const path = usePathname();

    return <nav>

        <ul>
            <li><Link href="/">메인</Link>{path === "/" ? "  현 페이지" : ""}</li>
            <li><Link href="/Testpage">테스트</Link>{path === "/Testpage" ? "  현 페이지" : ""}</li>
            <li><Link href="/Testpage/Deeptestpage">딥테스트</Link>{path === "/Testpage/Deeptestpage" ? "  현 페이지" : ""}</li>
        </ul>
    </nav>
}