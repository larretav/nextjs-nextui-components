import { PageTitle } from "@/components";
import { DrawerButtons } from "./_components/DrawerButtons";
import SidebarFiltersButton from "./_components/SidebarFiltersButton";

export default function DrawerPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Drawer" />
      <div className="grid grid-cols-1 gap-3 mt-2 md:grid-cols-5">
        <DrawerButtons />
        <SidebarFiltersButton />
      </div>
    </div>
  );
}