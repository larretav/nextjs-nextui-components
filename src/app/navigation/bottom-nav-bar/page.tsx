import { PageTitle } from "@/components";
import { OSBottomNavBar } from "./_components/bottom-navigation/OSBottomBar";

export default function BottomNavBarPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Bottom Nav Bar" />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
        <div className="overflow-hidden rounded-2xl box-border">
          <OSBottomNavBar />
        </div>
        <div className="overflow-hidden rounded-2xl box-border">
          <OSBottomNavBar />
        </div>
      </div>
    </div>
  );
}