import { Sidebar } from "../navigation/_components";

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}