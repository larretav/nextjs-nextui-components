import { Button } from "@nextui-org/button";
import { DrawerButtons } from "./_components/drawer/DrawerButtons";
import { OSBottomNavBar } from "./_components";
import { OSNavbar } from "./navbars/_components/OSNavbar";
import BreakpointsTest from "@/components/test/BreakpointsTest";
import { FaImage, FaMusic, FaPlus } from "react-icons/fa6";
import { TabsFilters } from "@/components/navigation/tabs/TabsFilters";
import { TabFilter } from "@/components/navigation/tabs/TabFilter";
import OSTabsFilters from "./tabs/_components/OSTabsFilters";
import { BsPerson } from "react-icons/bs";
import { MobileToolbar } from "@/components";
import { redirect } from "next/navigation";

export default function NavigationPage() {
  return redirect('/navigation/drawer')
}