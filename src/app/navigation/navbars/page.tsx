import { MobileToolbar, PageTitle } from "@/components";
import { OSNavbar } from "./_components/OSNavbar";
import { FaPlus } from "react-icons/fa6";
import { OSSidebar } from "../drawer/_components/onsite-sidebar/OSSidebar";
import { BoxOpenSolid } from "@/components/icons";

export default function NavbarsPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Navbar" />

      <div className="grid grid-cols-1 gap-3 mt-2 md:grid-cols-3">
        <OSNavbar />
        <MobileToolbar title="Detalles" endContent={<FaPlus size={24} className="text-blue-500" />} />
        <OSSidebar />

        <div className="text-green-500">
          <BoxOpenSolid size={50}  />
        </div>
      </div>
    </div >
  );
}