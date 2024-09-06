
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) { 
  return (
    <main className="w-dvw h-dvh bg-white light text-neutral-50 overflow-y-auto pb-40 md:pb-0">
      {children}
    </main>
  );
}