import axios from "axios";
import { errorInterceptors, successInterceptors } from "../interceptors";
import { Environment } from "../../../environment";


export const Api = axios.create({
    baseURL: Environment.URL_BASE
})

Api.interceptors.response.use(
    (response) => successInterceptors(response),
    (response) => errorInterceptors(response),
)
