type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DynamicTest({ params, searchParams }) {

    //서버단에서 사용할 거면 이렇게 구조분해를 하고 에이싱크를 붙이고 해야하나보다.
    const { id } = await params;
    //이렇게하면 서치파라미터의 region만 골라 가져온다.
    //const { region } = await searchParams
    //이렇게하면 서치파라미터의 region돠 ths만 골라 가져온다.
    const { region, thx } = await searchParams

    console.group("그룹");
    console.log('params:', id);
    console.log('searchParams:', region);
    console.log('searchParams2:', thx);
    console.groupEnd();

    return <h1>이건 다이네믹 테스트입니다.{id} {region}</h1>;
}

//그러면 클라단에선 어떻게 받을 까?
/*
"use client"





*/