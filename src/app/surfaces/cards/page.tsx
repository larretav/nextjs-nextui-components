import { PageTitle } from "@/components";
import BoxMobileCard from "@/components/surfaces/cards/mobile/BoxMobileCard";
import ContentSummaryMobileCard from "@/components/surfaces/cards/mobile/ContentSummaryMobileCard";
import CustomerMobileCard from "@/components/surfaces/cards/mobile/CustomerMobileCard";
import DashboardMobileCard from "@/components/surfaces/cards/mobile/DashboardMobileCard";
import InvoiceMobileCard from "@/components/surfaces/cards/mobile/InvoiceMobileCard";
import InvoiceDetailsMobileCard from "@/components/surfaces/cards/mobile/InvoiceDetailsMobileCard";
import ListTitleMobileCard from "@/components/surfaces/cards/mobile/ListTitleMobileCard";
import OriginDestinationMobileCard from "@/components/surfaces/cards/mobile/OriginDestinationMobileCard";
import PackageMobileCard from "@/components/surfaces/cards/mobile/PackageMobileCard";
import PackageItemMobileCard from "@/components/surfaces/cards/mobile/PackageItemMobileCard";
import RechargeMobileCard from "@/components/surfaces/cards/mobile/recharge-card/RechargeMobileCard";
import RechargeCustomAmountMobileCard from "@/components/surfaces/cards/mobile/recharge-card/RechargeCustomAmountMobileCard";

export default function CardsPage() { 
  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="Cards Components" />
      <p>Package MobileCard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <PackageMobileCard
          leadingIcon="box"
          title="Nike Air Force"
          subtitle="Tenis 28cm"
          weightMeasures="35x30x20-1kg"
          quantity={4}
        />
        <PackageMobileCard
          leadingIcon="envelope"
          title="Documentos"
          subtitle="Papelería"
          weightMeasures="10x15x1-0.5kg"
          quantity={2}
        />
        <PackageMobileCard
          leadingIcon="pallet"
          title="Llantas de carro"
          subtitle="auto partes"
          weightMeasures="65x60x40-10kg"
          quantity={1}
        />
      </div>
      <p>List Title Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" />
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" leadingIcon="box" />
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" leadingIcon="pallet" />
        <ListTitleMobileCard title="Envío de documentos " subtitle="Total de sobres" leadingIcon="envelope" />
        <ListTitleMobileCard title="Envío de documentos" subtitle="Total de sobres" leadingIcon="envelope" showTrailing />
        <ListTitleMobileCard title="Base de datos" subtitle="Base subtítulos" showTrailing />
      </div>
      <p>Package Item Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <PackageItemMobileCard content="Informativo" packageType="box"/>
      <PackageItemMobileCard content="Documentos" packageType="envelope"/>
      <PackageItemMobileCard content="Pallets" packageType="pallet"/>
      </div>
      <p>Invoice Card Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InvoiceMobileCard folio="LMAO-01" date="02/04/2024" payment="Tarjeta de crédito" amount={1000} status="paid" />
        <InvoiceMobileCard folio="LMAO-02" date="02/04/2024" payment="Tarjeta de debito" amount={500.99} status="canceled" />
        <InvoiceMobileCard folio="LMAO-03" date="02/04/2024" payment="Tarjeta de crédito" amount={88.99} status="pending" />
      </div>
      <p>Customer Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <CustomerMobileCard customerName="DEP dental villa de cortes" address="Ciudad de Mexico, Ciudad de Mexico MX, 03530"/>
        <CustomerMobileCard customerName="Laboratorio clínico Don Alvarez" address="Jalisco, Guadalajara MX, 18351"/>
      </div>
      <p>Box Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BoxMobileCard description="Caja chica" content="Hdmi, tarjeta de video y equipo de computo" length={20} height={20}width={20}weight={1}/>
      </div>
      <p>Content Summary Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ContentSummaryMobileCard content="Informativo" type="Caja" dimensions="35cm x 30cm x 20cm - 1.5kg" quantity={3}/>
      </div>
      <p>Invoice Details Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <InvoiceDetailsMobileCard number="0043123" date="23/05/2024" amount={230}/>
      </div>
      <p>Dashboard Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
       <DashboardMobileCard text="En sitio" quantity={250}/>
      </div>
      <p>OriginDestination Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <OriginDestinationMobileCard title="Origen" postalCode="81200" address="Centro, Los Mochis, Sin" />
      </div>
      <p>Recharge Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <RechargeMobileCard title="Básico" description="Puedes realizar hasta 2 envíos" cost={200} highlighted badgeQuantity={5} paymentMethods={["cash"]}/>
      <RechargeMobileCard title="Avanzado" description="Puedes realizar hasta 2 envíos" cost={500} badgeQuantity={20} paymentMethods={["cash","transfer"]}/>
      <RechargeMobileCard title="Pro" description="Puedes realizar hasta 2 envíos" cost={1000} highlighted badgeQuantity={200} paymentMethods={["cash","transfer","card"]}/>
      </div> 
      <p>Recharge Custom Amount Mobile Card</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">   
      <RechargeCustomAmountMobileCard  title="Otra Cantidad" highlighted/>
      <RechargeCustomAmountMobileCard  title="Otra Cantidad"/>
      </div> 
    </div>
  )
}