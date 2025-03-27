"use client"//이것이 필요한 방식은 

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