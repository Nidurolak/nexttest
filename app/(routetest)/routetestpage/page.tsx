"use client"

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { getMovies } from "../../../utils/api/api";



export default function RouteOnepage() {
    const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
    const [movies, setMovies] = useState("");
    const { data, error, isLoading } =
        useQuery({ queryKey: ['movie'], queryFn: getMovies },);

    /* 
    const getMovies = async () => {
        const url = `${baseurl}/movies`;
        const response = await fetch(
            url
        )
        const json = await response.json();
        setMovies(JSON.stringify(json))
    }
*/


    useEffect(() => {
        if (data) {
            setMovies(JSON.stringify(data))
        }

    }, [])

    return <><h1>라우터 원 페이지</h1>
        <h3>{isLoading === true ? '로딩 중' : error ? '에러 발생' : movies}</h3>
    </>
}