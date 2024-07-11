'use client';

import clsx from 'clsx'
import React, { useState } from 'react'
import { FaDashcube, FaHouse } from 'react-icons/fa6'
import { BsHouse, BsFillHouseFill } from "react-icons/bs";

export const BottomBar = () => {
  const [index, setIndex] = useState(0)

  const items = [
    {
      index: 0,
      text: "Cotización",
      icon: <BsHouse size={24} className="text-red-700" />,
      selectedIcon: <BsFillHouseFill size={24} className="text-red-700" />,
    },
    {
      index: 1,
      text: "Cotización",
      icon: <BsHouse size={24} className="text-red-700" />,
      selectedIcon: <BsFillHouseFill size={24} className="text-red-700" />,
    },
    {
      index: 2,
      text: "Cotización",
      icon: <BsHouse size={24} className="text-red-700" />,
      selectedIcon: <BsFillHouseFill size={24} className="text-red-700" />,
    },

  ]

  return (
    <div className="flex gap-4  p-2 rounded-2xl bg-default-200 overflow-auto no-scrollbar">
      {
        items.slice(0,1).map(item => <div className="flex flex-col items-center w-fit gap-2 cursor-pointer hover:bg-default-300 rounded-xl p-1 box-border transition-all" onClick={() => setIndex(item.index)} >
          <span className="w-fit py-1 px-5 box-border flex justify-center relative  ">
            <div>{item.index === index ? item.selectedIcon : item.icon}</div>
            <span className={clsx(
              "h-full box-border absolute top-0 bottom-0 m-auto bg-red-500 opacity-30 rounded-full animate-expand	",
              {
                "w-full": item.index === index,
                "hidden": item.index !== index
              }
            )} />
          </span>

          <span className="text-xl">Cotizacion</span>
        </div>)
      }
      <div className="flex flex-col items-center w-fit gap-2 cursor-pointer hover:bg-default-300 rounded-xl p-1 box-border transition-all" onClick={() => setIndex(items[2].index)} >
        <span className="w-fit py-1 px-5 box-border flex justify-center relative  ">
          <div>{items[2].index === index ? items[2].selectedIcon : items[2].icon}</div>
          <span className={clsx(
            "h-full box-border absolute top-0 bottom-0 m-auto bg-red-500 opacity-30 rounded-full animate-expand2	",
            {
              "w-full": items[2].index === index,
              "hidden": items[2].index !== index
            }
          )} />
        </span>

        <span className="text-xl">Cotizacion</span>
      </div>

    </div>
  )
}
