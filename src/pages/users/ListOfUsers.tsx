import { useSearchParams } from "react-router-dom";
import ListingTools from "../../shared/components/listing-tools/ListingTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useEffect, useMemo, useState } from "react";
import { IListUser, UsersServices } from "../../shared/services/users/UsersServices";
import { useDebounce } from "../../shared/hooks/UseDebounce";
import {  Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { Environment } from "../../shared/environment";

export default function ListOfUsers() {

    const [ searchParams , setSearchParams ] = useSearchParams()
    const { debounce } = useDebounce()

    const [ rows , setRows ] = useState<IListUser[]>([])
    const [ totalCount , setTotalCount ] = useState(0)
    const [ isLoading , setIsLoading ] = useState(false)

    const theme = useTheme()
    

    const search = useMemo(() => {
        return searchParams.get("buscar") || ""
    },[searchParams])

    useEffect(() => {
      setIsLoading(true)
        debounce(() => {
        UsersServices.getAll(1 , search)
        .then((result) => {
          if(result instanceof Error){
            alert(result.message)
            return
          }
          setTimeout(() => {
            setIsLoading(false)
          },2000)
          console.log(result)
          setRows(result.data)
          setTotalCount(result.totalCount)
        })
      })
    },[debounce , search])
        
  return (
    <BasePageLayout 
        title="Listagem de Pessoas"
        toolbar={<ListingTools  
            showNewButton
            showInputSearch={true}
            textNewButton="nova"
            searchText={search}
            changingSearchText={text => setSearchParams({ buscar: text })}
            

            />}
    >
      <TableContainer 
        component={Paper} 
        variant="outlined" 
        sx={{ m: 1 , width: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow style={{ background: theme.palette.secondary.main }}>
                <TableCell>Ação</TableCell>
                <TableCell>Nome completo</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

                { rows.map(row => (
                  <TableRow key={row.id}>
                    { isLoading && (
                      <TableCell colSpan={3}>
                        <Skeleton sx={{ height: '25px' }}/>
                      </TableCell>
                    )||(
                      <>
                        <TableCell>{row.cidadeId}</TableCell>
                        <TableCell>{row.nameCompleted}</TableCell>
                        <TableCell>{row.email}</TableCell>
                      </>
                    )}
                  </TableRow>
                )) }
                  {rows.length === 0 
                    && totalCount 
                    && !isLoading 
                    && (
                      <TableRow >
                        <TableCell >
                          <caption 
                            style={{ display: "flex"}}>
                            {Environment.EMPTY_LISTING}
                          </caption>
                        </TableCell>
                      </TableRow>
                  )}
            </TableBody>
            
          </Table>
      </TableContainer>
    </BasePageLayout>
  )
}
