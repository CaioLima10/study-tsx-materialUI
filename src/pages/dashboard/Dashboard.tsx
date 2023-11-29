import ListingTools from "../../shared/components/listing-tools/ListingTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";

export default function Dashboard() {
  return (
        <BasePageLayout 
          title="Página Inicial" 
          toolbar={<ListingTools
            showInputSearch 
            textNewButton="nova"
            showNewButton
          />}
          
          >
            <span>children</span>
        </BasePageLayout>
  )
}
