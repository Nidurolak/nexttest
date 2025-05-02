"use client"

import { useState } from "react"



export default function RouteOnepage() {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const [movies, setMovies] = useState();
    const getMovies = async () => {
        const response = await fetch(
            baseurl
        )
    }


    return <><h1>라우터 원 페이지</h1>
        { }</>
}