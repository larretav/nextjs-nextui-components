
export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white w-dvw h-dvh light text-neutral-50">
      {children}
    </main>
  );
}