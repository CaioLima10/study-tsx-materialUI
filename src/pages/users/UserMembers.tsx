import { useNavigate, useParams } from "react-router-dom";
import DetailTools from "../../shared/components/detail-tools/DetailTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useCallback, useEffect, useRef, useState } from "react";
import { UsersServices } from "../../shared/services/users/UsersServices";
import { Form } from "@unform/web";
import UnTextField from "../../shared/components/forms/UnTextField";
import { FormHandles } from "@unform/core";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";


interface IFormData{
    nameCompleted: string
    email: string
    cidadeId: number
}

export function UserMembers(){



    const { id = "nova" } = useParams<'id'>()
    const navigate = useNavigate()
    const formRef = useRef<FormHandles>(null)

    const [ name , setName ] = useState("")
    const [ isLoading , setIsLoading ] = useState(false)

    useEffect(() => {
        if(id !== "nova"){
            setIsLoading(true)
            UsersServices.getbyId(Number(id))
                .then((result) => {
                    formRef.current?.setData(result)
                    if(result instanceof Error){
                        alert(result.message)
                        navigate("/pessoas")
                    }else{
                        setTimeout(() => {
                            setIsLoading(false)
                        }, 2000)
                        setName(result.nameCompleted)
                        console.log({result})

                        formRef.current?.setData(result)
                    }
                })
        }
    }, [id , navigate])

    const handleSave = useCallback((data: IFormData) => {
        setIsLoading(true)
        if(id === "nova"){
            UsersServices.create(data)
                .then((result) => {
                    setIsLoading(false)
                    if(result instanceof Error){
                        alert(result.message)
                    }else{
                        navigate(`/pessoas/detalhe/${result}`)
                    }
                })
        }else{
            UsersServices.updateById(Number(id) , {id: Number(id) , ...data})
            .then((result) => {
                setIsLoading(false)
                if(result instanceof Error){
                    alert(result.message)
                }else{
                    if(data && 'nameCompleted' in data){
                        setName(data.nameCompleted)
                    }
                }
            })
            
        }
        
    }, [id , navigate])

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
                clickButtonSaveAndDelete={() => formRef.current?.submitForm()}
                clickButtonSave={() => formRef.current?.submitForm()}

            >
            </DetailTools>
                <Form 
                    ref={formRef} 
                    onSubmit={handleSave}>
                <Box 
                    display="flex"
                    flexDirection="column"
                    margin={1} 
                    component={Paper}
                    variant="outlined"
                >
                    <Grid item>
                        {isLoading && (<LinearProgress/>)}
                    <Grid 
                        container 
                        display="flex"
                        gap={2}
                        padding={2} 
                    
                    >
                        {id === 'nova' ?(
                            <Typography variant="h6">Novo Membro</Typography>
                            ):(
                            <Typography variant="h6">Editar</Typography>
                        )}
                        <Grid container item direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6} >
                                <UnTextField 
                                    fullWidth
                                    name="nameCompleted"
                                    label="Nome Completo"  
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>

                        <Grid container item  direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6}>
                                <UnTextField
                                    fullWidth 
                                    name="email"
                                    label="Email"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>
   
                        <Grid container item  direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6}> 
                                <UnTextField 
                                    fullWidth
                                    name="cidadeId"
                                    label="Cidade"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Box>
                </Form>
        </BasePageLayout>
    )   
}