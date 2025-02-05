import { PageTitle } from "@/components";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { FaChevronLeft, FaImage } from "react-icons/fa6";

export default function FeedBackPage() {
  const categories = [
    {
      icon: <FaImage size={40} />,
      title: 'Alertas',
      subtitle: 'Alerts',
      url: '/feedback/alerts'
    },

  ];

  return (
    <div className="grid grid-cols-1 gap-4 py-2 px-6 w-full sm:grid-cols-4">
      {
        categories.map((item, idx) => (
          <Link href={item.url} key={idx} >
            <Card  isPressable className="gap-3 items-center p-4 rounded-2xl bg-zinc-100 text-slate-800 dark:bg-zinc-800 dark:text-slate-100">
              <div>{item.icon}</div>
              <div className="flex flex-col">
                <span className="text-3xl">{item.title}</span>
                <span className="text-xl text-zinc-600">{item.subtitle}</span>
              </div>
            </Card>
          </Link>
        ))
      }
    </div>
  )
}