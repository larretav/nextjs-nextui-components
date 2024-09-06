
export default function LoginLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen bg-white">
      {children}
    </main>
  );
}