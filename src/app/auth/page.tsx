import { PageTitle } from "@/components";
import { AuthLoginForm } from "./_components/AuthLoginForm";

export default function AuthPage() {
  return (
    <div className="page-container !px-0 sm:!px-8">
      <PageTitle text="Modulo de autenticacion" className="px-4 sm:px-0" />
      <AuthLoginForm />
    </div>
  );
}