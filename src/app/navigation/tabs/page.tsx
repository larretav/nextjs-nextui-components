import { PageTitle } from "@/components";
import OSTabsFilters from "./_components/OSTabsFilters";
import { TabsExample } from "./_components/TabsExample";

export default function TabsPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Tabs" />
      <div className="grid grid-cols-1 gap-3 mt-2 md:grid-cols-3">
        <div >
          <OSTabsFilters />
        </div>
        <div>
          <TabsExample />
        </div>
      </div>
    </div>
  );
}