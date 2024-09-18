import { PageTitle } from "@/components";
import { OSStatusFilterRadio } from "./_components/OSStatusFilterRadio";
import { OSQuotationRadio } from "./_components/OSQuotationRadio";

export default function RadioPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6 pb-2">
      <PageTitle text="Radio" />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <OSQuotationRadio />
        <OSStatusFilterRadio />
      </div>

    </div>
  );
}
