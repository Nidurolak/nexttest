
export const metadata = {
    title: "서버컴포넌트 테스트",
}

const URL = process.env.NEXT_PUBLIC_BASE_URL + "/movies"

async function getMovies() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function ServerTest() {
    console.log(URL)
    const movies = await getMovies();
    return <>
        <h1>이건 서버 컴포넌트 테스트입니다.</h1>
        <div>{JSON.stringify(movies)}</div>
    </>;
}
