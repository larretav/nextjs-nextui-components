
export default function Layout({
  children
}: {
  children: React.ReactNode;
}) { 
  return (
    <main className="overflow-y-auto pb-40 bg-white md:pb-0 w-dvw h-dvh light text-neutral-50">
      {children}
    </main>
  );
}