
export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-dvw h-dvh bg-white light text-neutral-50">
      {children}
    </main>
  );
}