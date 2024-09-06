import { Button } from "@nextui-org/button";
import { DrawerButtons } from "./_components/drawer/DrawerButtons";
import { OSBottomNavBar } from "./_components";
import { OSNavbar } from "./_components/nav-bar/OSNavbar";
import BreakpointsTest from "@/components/test/BreakpointsTest";
import { FaImage, FaMusic } from "react-icons/fa6";
import { TabsFilters } from "@/components/navigation/tabs/TabsFilters";
import { TabFilter } from "@/components/navigation/tabs/TabFilter";
import OSTabsFilters from "./_components/tabs-filters/OSTabsFilters";
import { BsPerson } from "react-icons/bs";

export default function NavigationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
      <div className=" box-border rounded-2xl overflow-hidden">
        <OSBottomNavBar />
      </div>
      <div>
        <OSNavbar />
      </div>
      <div >
        <DrawerButtons />
      </div>
      <div className="sm:col-span-2 ">
        <BreakpointsTest />
      </div>
      <div className="">
        <OSTabsFilters />
      </div>
      {/* <div className="">
        <OSStyledTabsFilters />
      </div> */}
    </div>
  );
}