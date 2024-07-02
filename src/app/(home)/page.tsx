import { Card } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { FaImage } from "react-icons/fa6"
import { ComponentCategoriesList } from "./_components/ComponentCategoriesList";

export default function HomePage() {



  return (
    <div className="flex flex-col gap-4">
      <span className="text-3xl antialiased text-slate-700 dark:text-slate-100">Categorias</span>
      <ComponentCategoriesList />
    </div>
  );
}