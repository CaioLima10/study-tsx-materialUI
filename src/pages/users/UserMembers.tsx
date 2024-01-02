import { useNavigate, useParams } from "react-router-dom";
import DetailTools from "../../shared/components/detail-tools/DetailTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useCallback, useEffect, useState } from "react";
import { UsersServices } from "../../shared/services/users/UsersServices";
import { Form } from "@unform/web";
import UnTextField from "../../shared/components/forms/UnTextField";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import useUnForm from "../../shared/components/forms/useUnForm";
import * as yup from "yup"
import { IKeyValidate } from "../../shared/components/forms/types";
import { cpf } from "cpf-cnpj-validator";


interface IFormData{
    nameCompleted: string
    email: string
    cpf: string
    idade: number
    celular: string
    cidadeId: number
}

const formValidationSchema: yup.Schema<IFormData> = yup.object().shape({
    nameCompleted: yup.string().required().min(3),
    email: yup.string().required().email(),
    cidadeId: yup.number().required(),
    idade: yup.number().required("Campo obrigatório"),
    celular: yup.string().required(),
    cpf: yup.string().required().test((x) => cpf.isValid(x) ),
}) 

export function UserMembers(){

    const { id = "nova" } = useParams<'id'>()
    const navigate = useNavigate()
    const { formRef , save , saveAndClose , isSaveAndClose} = useUnForm()

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
                        if(result){
                            setTimeout(() => {
                                setIsLoading(false)
                            }, 2000)
                            setName(result.nameCompleted)
                            formRef.current?.setData(result)
                        }
                    }
                })
        }else {
            formRef.current?.setData({
                nameCompleted: "",
                email: "",
                cidadeId: "",
                idade: "",
                cpf: "",
                celular: ""
            })
        }
    }, [id , navigate , formRef])

    const handleSave = useCallback((data: IFormData) => {
        formValidationSchema.
            validate(data, { abortEarly: false })
                .then((dataValidate) => {
                    setIsLoading(true)
                    if(id === "nova"){
                        UsersServices.create(dataValidate)
                            .then((result) => {
                                setIsLoading(false)
                                if(result instanceof Error){
                                    alert(result.message)
                                }else{
                                    if(isSaveAndClose()){
                                        navigate('/pessoas')    
                                    }else{
                                        navigate(`/pessoas/detalhe/${result}`)
                                    }
                                }
                            })
                    }else{
                        UsersServices.updateById(Number(id) , {id: Number(id) , ...dataValidate})
                        .then((result) => {
                            setIsLoading(false)
                            if(result instanceof Error){
                                alert(result.message)
                            }else{
                                if(dataValidate && 'nameCompleted' in dataValidate){
                                    setName(dataValidate.nameCompleted)
                                }if( isSaveAndClose()){
                                    navigate('/pessoas')
                                }
                            }
                        })
                    }
                }).catch((errors: yup.ValidationError) => {

                    const validationErrors: IKeyValidate = {}
                                
                    errors.inner.forEach((error) => {
                        if(!error.path) return
                        validationErrors[error.path] = error.message
                    })
                    formRef.current?.setErrors(validationErrors)
                })
        
    }, [id , navigate , isSaveAndClose , formRef])

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
        <BasePageLayout title={ id === "nova" ? "" : name}>
            <DetailTools 
                textNewButton="nova"
                showSaveAndDeleteButton
                showNewButton={id !== "nova"}
                showDeleteButton={id !== "nova"}
            

                clickButtonNew={() => navigate('/pessoas/detalhe/nova')}
                clickButtonBack={() => navigate('/pessoas')}
                clickButtonDelete={() => handleDelete(Number(id))}
                clickButtonSaveAndClose={saveAndClose}
                clickButtonSave={save}

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
                        <Grid container item  direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6}> 
                                <UnTextField 
                                    fullWidth
                                    name="cpf"
                                    label="CPF"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item  direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6}> 
                                <UnTextField 
                                    fullWidth
                                    name="celular"
                                    label="Celular"
                                    disabled={isLoading}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item  direction="row" spacing={2}>    
                            <Grid item xs={16} sm={12} md={6}> 
                                <UnTextField 
                                    fullWidth
                                    name="idade"
                                    label="Idade"
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