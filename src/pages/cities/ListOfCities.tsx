import { useSearchParams } from "react-router-dom";
import ListingTools from "../../shared/components/listing-tools/ListingTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";
import { useMemo } from "react";

export default function ListOfCities() {

    const [ searchParams , setSearchParams ] = useSearchParams()

    const search = useMemo(() => {
        return searchParams.get("buscar") || ""
    },[searchParams])

  return (
    <BasePageLayout 
        title="Listagem de Cidades"
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
