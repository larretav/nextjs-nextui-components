import { PageTitle } from "@/components";
import { OSPackageContentAdjust } from "./_components/OSPackageContentAdjust";

export default function TextfieldsPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6 pb-2">
      <PageTitle text="Textfields" />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <OSPackageContentAdjust />
      </div>

    </div>
  );
}
