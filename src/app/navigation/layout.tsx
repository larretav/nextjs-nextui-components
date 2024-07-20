import { Navbar } from "@nextui-org/navbar";

export default function NavigationLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}