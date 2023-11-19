import BasePageLayout from "../../shared/layout/BasePageLayout";

export default function Dashboard() {
  return (
    <div>
        <BasePageLayout title="Página Inicial" toolbar={<>barra de ferramentas</>}>
            <span>children</span>
        </BasePageLayout>
    </div>
  )
}
