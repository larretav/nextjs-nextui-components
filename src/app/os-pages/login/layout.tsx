
export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen bg-white light">
      {children}
    </main>
  );
}