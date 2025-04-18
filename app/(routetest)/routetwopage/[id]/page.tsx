import { use } from 'react'
type Props = {
    params: Promise<{ id: string }>;
};


export default async function DynamicTest(props: Props) {

    //서버단에서 정보를 불러오는 것, use client를 써야 클라단에서 활용 가능
    const { id } = await props.params;
    console.group("그룹")
    console.log('params:', (await props.params).id);
    console.groupEnd()
    console.log('params:', (id));
    return (<h1>이건 다이네믹 테스트입니다.</h1>)
}

//잔디심기