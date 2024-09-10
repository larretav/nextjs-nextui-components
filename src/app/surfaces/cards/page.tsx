import { PageTitle } from "@/components";
import BoxCard from "@/components/surfaces/cards/BoxCard";
import ContentSummaryCard from "@/components/surfaces/cards/ContentSummaryCard";
import CustomerCard from "@/components/surfaces/cards/CustomerCard";
import DashboardCard from "@/components/surfaces/cards/DashboardCard";
import InvoiceCard from "@/components/surfaces/cards/InvoiceCard";
import InvoiceDetailsCard from "@/components/surfaces/cards/InvoiceDetailsCard";
import ListTitle from "@/components/surfaces/cards/ListTitle";
import OriginDestinationCard from "@/components/surfaces/cards/OriginDestinationCard";
import PackageCard from "@/components/surfaces/cards/PackageCard";
import PackageItem from "@/components/surfaces/cards/PackageItem";
import RechargeCard from "@/components/surfaces/cards/RechargeCard";

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
      <p>Package Item</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <PackageItem content="Informativo" packageType="box"/>
      <PackageItem content="Documentos" packageType="envelope"/>
      <PackageItem content="Pallets" packageType="pallet"/>
      </div>
      <p>Invoice Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InvoiceCard folio="LMAO-01" date="02/04/2024" payment="Tarjeta de crédito" amount={1000} status="paid" />
        <InvoiceCard folio="LMAO-02" date="02/04/2024" payment="Tarjeta de debito" amount={500.99} status="canceled" />
        <InvoiceCard folio="LMAO-03" date="02/04/2024" payment="Tarjeta de crédito" amount={88.99} status="pending" />
      </div>
      <p>Customer Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <CustomerCard customerName="DEP dental villa de cortes" address="Ciudad de Mexico, Ciudad de Mexico MX, 03530"/>
        <CustomerCard customerName="Laboratorio clínico Don Alvarez" address="Jalisco, Guadalajara MX, 18351"/>
      </div>
      <p>Box Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BoxCard description="Caja chica" content="Hdmi, tarjeta de video y equipo de computo" length={20} height={20}width={20}weight={1}/>
      </div>
      <p>Content Summary Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ContentSummaryCard content="Informativo" type="Caja" dimensions="35cm x 30cm x 20cm - 1.5kg" quantity={3}/>
      </div>
      <p>Invoice Details Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InvoiceDetailsCard number="0043123" date="23/05/2024" amount={230}/>
      </div>
      <p>Dashboard Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
       <DashboardCard text="En sitio" quantity={250}/>
      </div>
      <p>OriginDestination Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <OriginDestinationCard title="Origen" postalCode="81200" address="Centro, Los Mochis, Sin" />
      </div>
      <p>Recharge Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <RechargeCard title="Básico" description="Puedes realizar hasta 2 envíos" cost={200} badgeQuantity={5}/>
      <RechargeCard title="Básico" description="Puedes realizar hasta 2 envíos" cost={200} highlighted badgeQuantity={10}/>
      <RechargeCard title="Otra Cantidad" highlighted customizedCost/>
      <RechargeCard title="Otra Cantidad" customizedCost/>
      </div>
      
      
    </div>
  )
}