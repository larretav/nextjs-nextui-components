import { Navbar } from "@nextui-org/navbar";
import { OSSidebar } from "./_components";

export default function NavigationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col px-2">
      <main>
        {children}
      </main>

      <OSSidebar/>
    </div>
  );
}