'use client';
import { Card } from '@nextui-org/card';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaImage } from 'react-icons/fa6';

export const ComponentCategoriesList = () => {
  const categories = [
    {
      icon: <FaImage size={40} />,
      title: 'Data display',
      subtitle: 'Avatar, Chip, Badge, etc.',
      url: '/data-display'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Feedback',
      subtitle: 'Alerts, Snackbars, etc.',
      url: '/feedback'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Inputs',
      subtitle: 'Inputs, Toggles, etc.',
      url: '/inputs'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Navigation',
      subtitle: 'Sidebar, Bottom Navigation, etc.',
      url: '/navigation'
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 px-6 py-2">
      {
        categories.map((item, idx) => (
          <Card key={idx} isPressable onPress={()=> router.push(item.url)} className=" p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-100 gap-3 items-center shadow-none">
            <div>{item.icon}</div>
            <div className="flex flex-col">
              <span className="text-3xl">{item.title}</span>
              <span className="text-xl text-zinc-600">{item.subtitle}</span>
            </div>
          </Card>
        ))
      }
    </div>
  )
}