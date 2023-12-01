import { Environment } from "../../environment"
import { Api } from "../axios-config/api"


interface IListUser{
    id: number
    nameCompleted: string
    email: string
    cidadeId: number
}

/*interface IDetailUser{
    id: number
    nameCompleted: string
    email: string
    cidadeId: number
}*/

type TUserTotalCount = {
    data: IListUser[]
    totalCount: number 
}

const getAll = async (page = 1 , filter = ''): Promise<TUserTotalCount | Error> => {
    try {
        const urlResponse = `/users?_page=${page}&_limit=${Environment.LINE_LIMIT}&nameCompleted_like=${filter}`

        const { data , headers } = await Api.get(urlResponse)

        if(data){
            return {
                data,
                totalCount: headers["x-total-count"] 
                || Environment.LINE_LIMIT
            }
        }
        return new Error('error ao listar registros.')

    } catch (error) {
        console.error(error)
        return new Error((error as { message: string }).message 
        || 'error ao listar registros.')
        
    }
}


export const UsersServices = {
    getAll
}