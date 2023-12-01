import axios from "axios";
import { errorInterceptors, successInterceptors } from "../interceptors";
import { Environment } from "../../../environment";


const Api = axios.create({
    baseURL: Environment.URL_BASE
})

Api.interceptors.response.use(
    (response) => successInterceptors(response),
    (response) => errorInterceptors(response),
)

export { Api }