import axios, { AxiosInstance } from "axios";

export default class Axios {
    instance: AxiosInstance;
    constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            withCredentials: true,
        });
    }

    async get(url: string) {
        return this.instance.get(url)
    }
}