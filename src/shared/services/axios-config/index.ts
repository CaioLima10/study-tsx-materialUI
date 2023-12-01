import axios from "axios";
import { errorInterceptors, successInterceptors } from "./interceptors";


const Api = axios.create({
    baseURL: 'http://localhost:3333'
})

Api.interceptors.response.use(
    (response) => successInterceptors(response),
    (response) => errorInterceptors(response),
)

export { Api }