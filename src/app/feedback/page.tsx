import { PageTitle } from "@/components";
import PackageCard from "@/components/feedback/PackageCard";

export default function FeedBackPage() {
  return (
    <div className="flex flex-col gap-3 px-6 py-3">
      <PageTitle text="Feedback Components" />
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
    </div>
  );
}