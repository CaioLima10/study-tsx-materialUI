import { Environment } from "../../environment"
import { Api } from "../axios-config/api"


interface IListUser{
    id: number
    nameCompleted: string
    email: string
    cidadeId: number
}

interface IDetailUser{
    id: number
    nameCompleted: string
    email: string
    cidadeId: number
}

type TUserTotalCount = {
    data: IListUser[]
    totalCount: number 
}

const getAll = async (page = 1 , filter = ''): Promise<TUserTotalCount | Error> => {
    try {
        const urlResponse = 
        `/users?_page=${page}
        &_limit=${Environment.LINE_LIMIT}
        &nameCompleted_like=${filter}
        `

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

const getbyId = async (id: number): Promise<IDetailUser | Error> => {
    try {
        const { data  } = await Api.get(`/users/${id}`)

        if(data){
            return data
        }
        return new Error('error ao consultar registro.')

    } catch (error) {
        console.error(error)
        return new Error((error as { message: string }).message 
        || 'error ao consultar registro.')
        
    }
}

const create = async ( values: Omit<IDetailUser , 'id'> ): Promise<number | Error> => {
    try {
        const { data } = await Api.post<IDetailUser>('/users' , values)

        if(data){
            return data.id
        }

        return new Error('error ao criar o registro')
        
    } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'error ao criar o registro')
        
    }
}

const updateById = async (id: number , values: IDetailUser ): Promise<void | Error> => {
    try {
        await Api.put(`/users/${id}` , values)

    } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || 'erro ao atualizar o registro')
        
    }
}

export const UsersServices = {
    getAll,
    getbyId,
    create,
    updateById
}