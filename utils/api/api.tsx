import Axios from "./axios";

const axios = new Axios(process.env.NEXT_PUBLIC_BASE_URL);


export const getMovies = async (data) => {
    const res = await axios.get(`/movies`)
    return res;
}