"use client"
import { PageTitle } from "@/components";
import { Card } from "@heroui/card";
import { useRouter } from 'next/navigation';
import { FaImage } from "react-icons/fa6";
export default function SurfacesPage() {
  const router = useRouter();
  const categories = [
    {
      icon: <FaImage size={40} />,
      title: 'Cards',
      subtitle: 'Mobile & Desktop Cards',
      url: '/surfaces/cards'
    },
  ];

  return (
    <div className="flex flex-col p-3">
    <PageTitle text="Surfaces Componentes" />
    <div className="grid grid-cols-1 gap-4 py-2 px-6 w-full sm:grid-cols-4">
      {
        categories.map((item, idx) => (
          <Card key={idx} isPressable onPress={() => router.push(item.url)} className="gap-3 items-center p-4 rounded-2xl bg-zinc-100 text-slate-800 dark:bg-zinc-800 dark:text-slate-100">
            <div>{item.icon}</div>
            <div className="flex flex-col">
              <span className="text-3xl">{item.title}</span>
              <span className="text-xl text-zinc-600">{item.subtitle}</span>
            </div>
          </Card>
        ))
      }
    </div>
    </div>
    
  )
}