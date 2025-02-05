import { Navbar } from "@heroui/navbar";

export default function NavigationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative flex-col px-2">
      <main>
        {children}
      </main>
    </div>
  );
}