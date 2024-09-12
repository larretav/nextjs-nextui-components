import { PageTitle } from "@/components";
import BoxMobileCard from "@/components/surfaces/cards/mobile/BoxMobileCard";
import ContentSummaryMobileCard from "@/components/surfaces/cards/mobile/ContentSummaryMobileCard";
import CustomerMobileCard from "@/components/surfaces/cards/mobile/CustomerMobileCard";
import DashboardCard from "@/components/surfaces/cards/desktop-mobile/DashboardCard";
import InvoiceMobileCard from "@/components/surfaces/cards/mobile/InvoiceMobileCard";
import InvoiceDetailsMobileCard from "@/components/surfaces/cards/mobile/InvoiceDetailsMobileCard";
import ListTitleMobileCard from "@/components/surfaces/cards/mobile/ListTitleMobileCard";
import OriginDestinationMobileCard from "@/components/surfaces/cards/mobile/OriginDestinationMobileCard";
import PackageMobileCard from "@/components/surfaces/cards/mobile/PackageMobileCard";
import PackageItemMobileCard from "@/components/surfaces/cards/mobile/PackageItemMobileCard";
import RechargeMobileCard from "@/components/surfaces/cards/mobile/recharge-card/RechargeMobileCard";
import RechargeCustomAmountCard from "@/components/surfaces/cards/desktop-mobile/RechargeCustomAmountCard";
import AccountBalanceCard from "@/components/surfaces/cards/desktop-mobile/AccountBalanceCard";
import AccountStateCard from "@/components/surfaces/cards/desktop-mobile/AccountStateCard";

export default function CardsPage() {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
      <PageTitle text="Cards Components" />
      <p>PackageMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
      <p>ListTitleMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" />
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" leadingIcon="box" />
        <ListTitleMobileCard title="Título" subtitle="SubTítulo" leadingIcon="pallet" />
        <ListTitleMobileCard title="Envío de documentos " subtitle="Total de sobres" leadingIcon="envelope" />
        <ListTitleMobileCard title="Envío de documentos" subtitle="Total de sobres" leadingIcon="envelope" showTrailing />
        <ListTitleMobileCard title="Base de datos" subtitle="Base subtítulos" showTrailing />
      </div>
      <p>PackageItemMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <PackageItemMobileCard content="Informativo" packageType="box" />
        <PackageItemMobileCard content="Documentos" packageType="envelope" />
        <PackageItemMobileCard content="Pallets" packageType="pallet" />
      </div>
      <p>InvoiceMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <InvoiceMobileCard folio="LMAO-01" date="02/04/2024" payment="Tarjeta de crédito" amount={1000} status="paid" />
        <InvoiceMobileCard folio="LMAO-02" date="02/04/2024" payment="Tarjeta de debito" amount={500.99} status="canceled" />
        <InvoiceMobileCard folio="LMAO-03" date="02/04/2024" payment="Tarjeta de crédito" amount={88.99} status="pending" />
      </div>
      <p>CustomerMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <CustomerMobileCard customerName="DEP dental villa de cortes" address="Ciudad de Mexico, Ciudad de Mexico MX, 03530" />
        <CustomerMobileCard customerName="Laboratorio clínico Don Alvarez" address="Jalisco, Guadalajara MX, 18351" />
      </div>
      <p>BoxMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <BoxMobileCard description="Caja chica" content="Hdmi, tarjeta de video y equipo de computo" length={20} height={20} width={20} weight={1} />
      </div>
      <p>ContentSummaryMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <ContentSummaryMobileCard content="Informativo" type="Caja" dimensions="35cm x 30cm x 20cm - 1.5kg" quantity={3} />
      </div>
      <p>InvoiceDetailsMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <InvoiceDetailsMobileCard number="0043123" date="23/05/2024" amount={230} />
      </div>
      <p>DashboardCard (Desktop-Mobile)</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard text="En sitio" quantity={250} />
      </div>
      <p>OriginDestinationMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <OriginDestinationMobileCard title="Origen" postalCode="81200" address="Centro, Los Mochis, Sin" />
      </div>
      <p>RechargeMobileCard</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <RechargeMobileCard title="Básico" description="Puedes realizar hasta 2 envíos" cost={200} highlighted badgeQuantity={5} paymentMethods={["cash"]} />
        <RechargeMobileCard title="Avanzado" description="Puedes realizar hasta 2 envíos" cost={500} badgeQuantity={20} paymentMethods={["cash", "transfer"]} />
        <RechargeMobileCard title="Pro" description="Puedes realizar hasta 2 envíos" cost={1000} highlighted badgeQuantity={200} paymentMethods={["cash", "transfer", "card"]} />
      </div>
      <p>RechargeCustomAmountCard (Mobile-Desktop)</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <RechargeCustomAmountCard title="Otra Cantidad" highlighted />
        <RechargeCustomAmountCard title="Otra Cantidad" />
      </div>
      <p>AccountBalanceCard (Mobile-Desktop)</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <AccountBalanceCard balance={1200} trackingGuidesQuantity={5}/>
      </div>
      <p>AccountStateCard (Mobile-Desktop)</p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <AccountStateCard type="pending"amount={100} date="22 Junio"/>
      <AccountStateCard type="expired"amount={200} date="22 Abril"/>
      <AccountStateCard type="congrats"/>
      </div>
    </div>
  )
}