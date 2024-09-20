
import { redirect } from "next/navigation";
import { FaImage } from "react-icons/fa6"
import { ComponentCategoriesList } from "./_components/ComponentCategoriesList";

export default function HomePage() {

  return (
    <div className="flex flex-col gap-4">
      <span className="px-6 text-3xl antialiased text-slate-700 dark:text-slate-100">Categorías</span>
      <ComponentCategoriesList />      
    </div>
  );
}