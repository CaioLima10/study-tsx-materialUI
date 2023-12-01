import { AxiosError } from "axios"

export const errorInterceptors = (error: AxiosError) =>{
    if(error.message === 'Network Error'){
        return Promise.reject(new Error("Error na conexão"))
    }

    return Promise.reject(error)
}