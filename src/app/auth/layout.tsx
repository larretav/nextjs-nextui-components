
export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
}