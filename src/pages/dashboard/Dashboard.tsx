import DetailTools from "../../shared/components/detail-tools/DetailTools";
import BasePageLayout from "../../shared/layout/BasePageLayout";

export default function Dashboard() {
  return (
        <BasePageLayout 
          title="Página Inicial" 
          toolbar={<DetailTools showSaveAndDeleteButton/>}
          
          >
            
            <span>children</span>
        </BasePageLayout>
  )
}
