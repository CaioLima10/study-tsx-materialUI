import { useNavigate, useParams } from "react-router-dom";
import DetailTools from "../../shared/components/detail-tools/DetailTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useEffect, useState } from "react";
import { UsersServices } from "../../shared/services/users/UsersServices";
import {  LinearProgress } from "@mui/material";


export function UserMembers(){

    const { id = "nova" } = useParams<'id'>()
    const navigate = useNavigate()

    const [ name , setName ] = useState("")
    const [ isLoading , setIsLoading ] = useState(false)

    useEffect(() => {
        if(id !== "nova"){
            setIsLoading(true)
            UsersServices.getbyId(Number(id))
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message)
                        navigate("/pessoas")
                    }else{
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 2000)
                        setName(result.nameCompleted)
                        console.log({result})
                    }
                })
        }
    }, [id , navigate])

    const handleSave = () => {
        
    }

    const handleDelete = (id: number) => {
        if(confirm("Realmente deseja apagar!")){
            UsersServices.deleteById(id)
                .then((result) => {
                    if(result instanceof Error){
                        alert(result.message)
                    }else{
                        alert("Registro apagado com sucesso!")
                        navigate("/pessoas")
                    }
                })
        }
    }

    return(
        <BasePageLayout title={ id === "nova" ? "Nova Pessoa" : name}>
            <DetailTools 
                textNewButton="nova"
                showSaveAndDeleteButton
                showNewButton={id !== "nova"}
                showDeleteButton={id !== "nova"}
            

                clickButtonNew={() => navigate('/pessoas/detalhe/nova')}
                clickButtonBack={() => navigate('/pessoas')}
                clickButtonDelete={() => handleDelete(Number(id))}
                clickButtonSaveAndDelete={handleSave}

            >
            </DetailTools>
                {isLoading &&(
                    <LinearProgress/>
                )}

                <span>membro{id}</span>

        </BasePageLayout>
    )
}