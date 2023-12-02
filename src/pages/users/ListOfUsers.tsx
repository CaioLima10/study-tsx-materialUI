import { useSearchParams } from "react-router-dom";
import ListingTools from "../../shared/components/listing-tools/ListingTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useEffect, useMemo } from "react";
import { UsersServices } from "../../shared/services/users/UsersServices";
import { useDebounce } from "../../shared/hooks/UseDebounce";

export default function ListOfUsers() {

    const [ searchParams , setSearchParams ] = useSearchParams()

    const { debounce } = useDebounce()
    

    const search = useMemo(() => {
        return searchParams.get("buscar") || ""
    },[searchParams])

    useEffect(() => {
        debounce(() => {
        UsersServices.getAll(1 , search)
        .then((result) => {
          if(result instanceof Error){
            alert(result.message)
            return
          }
          console.log(result)
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
    ></BasePageLayout>
  )
}
