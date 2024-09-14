import { PageTitle } from "@/components";
import OSQuotationRadio from "./_components/OSRadio";

export default function RadioPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Radio" />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <OSQuotationRadio />
      </div>

    </div>
  );
}
