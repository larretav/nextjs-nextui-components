import { PageTitle } from "@/components";
import InvoiceCard from "@/components/surfaces/cards/InvoiceCard";
import ListTitle from "@/components/surfaces/cards/ListTitle";
import PackageCard from "@/components/surfaces/cards/PackageCard";

export default function CardsPage() { 
  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="Cards Components" />
      <p>Package Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <PackageCard
          leadingIcon="box"
          title="Nike Air Force"
          subtitle="Tenis 28cm"
          weightMeasures="35x30x20-1kg"
          quantity={4}
        />
        <PackageCard
          leadingIcon="envelope"
          title="Documentos"
          subtitle="Papelería"
          weightMeasures="10x15x1-0.5kg"
          quantity={2}
        />
        <PackageCard
          leadingIcon="pallet"
          title="Llantas de carro"
          subtitle="auto partes"
          weightMeasures="65x60x40-10kg"
          quantity={1}
        />
      </div>
      <p>List Title</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ListTitle title="Título" subtitle="SubTítulo" />
        <ListTitle title="Título" subtitle="SubTítulo" leadingIcon="box" />
        <ListTitle title="Título" subtitle="SubTítulo" leadingIcon="pallet" />
        <ListTitle title="Envío de documentos " subtitle="Total de sobres" leadingIcon="envelope" />
        <ListTitle title="Envío de documentos" subtitle="Total de sobres" leadingIcon="envelope" showTrailing />
        <ListTitle title="Base de datos" subtitle="Base subtítulos" showTrailing />
      </div>
      <p>Invoice Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InvoiceCard folio="LMAO-01" date="02/04/2024" payment="Tarjeta de crédito" amount={1000} status="paid" />
        <InvoiceCard folio="LMAO-02" date="02/04/2024" payment="Tarjeta de debito" amount={500.99} status="canceled" />
        <InvoiceCard folio="LMAO-03" date="02/04/2024" payment="Tarjeta de crédito" amount={88.99} status="pending" />
      </div>
    </div>
  )
}