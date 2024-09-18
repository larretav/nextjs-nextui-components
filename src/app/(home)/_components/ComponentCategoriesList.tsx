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
      subtitle: 'Sidebars, Toolbars, Bottom Navigation, etc.',
      url: '/navigation'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Surfaces',
      subtitle: 'Accordion, Cards, etc.',
      url: '/surfaces'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Tables',
      subtitle: 'Tables.',
      url: '/tables'
    },
    
  ];

  const router = useRouter();

  return (
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
  )
}