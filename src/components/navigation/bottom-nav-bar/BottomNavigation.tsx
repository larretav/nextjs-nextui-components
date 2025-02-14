'use client';

import clsx from 'clsx'
import React, { useCallback, useEffect, useState } from 'react'
import { FaDashcube, FaHouse } from 'react-icons/fa6'
import { BsHouse, BsFillHouseFill } from "react-icons/bs";
import { Navbar } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { MdHome } from 'react-icons/md';

export const BottomNavigation = () => {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const items = [
    {
      index: 0,
      text: "Cotización",
      icon: <BsHouse size={24} />,
      selectedIcon: <BsFillHouseFill size={24} />,
    },
    {
      index: 1,
      text: "Cotización",
      icon: <BsHouse size={24} />,
      selectedIcon: <BsFillHouseFill size={24} />,
    },
    {
      index: 2,
      text: "Cotización",
      icon: <BsHouse size={24} />,
      selectedIcon: <BsFillHouseFill size={24} />,
    },
    {
      index: 3,
      text: "Cotización",
      icon: <BsHouse size={24} />,
      selectedIcon: <BsFillHouseFill size={24} />,
    },

  ]


  const handleScroll = useCallback((e: any) => {
    const currentScroll = window.scrollY

    if (scrollY < currentScroll && currentScroll > 100) {
      setHidden(true);
    } else if (scrollY > currentScroll) {
      setHidden(false);
    }
    setScrollY(currentScroll)
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={clsx(
        // "fixed bottom-0 right-0",
        "w-full py-1 flex justify-evenly box-border  bg-default-100 overflow-auto no-scrollbar transition-all duration-500",
        {
          "translate-y-60 ": hidden
        }
      )}>
      {
        items.map(item => {
          const isActive = item.index === index;
          return <Button
            key={item.index}
            disableAnimation
            onClick={() => setIndex(item.index)} className={clsx(
              "flex-col py-2 px-0 h-fit min-w-fit bg-transparent",
            )}>
            <div className="flex relative justify-center py-1 px-5 w-fit box-border">

              <span className={clsx(
                "h-full box-border absolute top-0 bottom-0 m-auto bg-primary-500 opacity-30 rounded-full animate-expand",
                {
                  "w-full": item.index === index,
                  "hidden": item.index !== index
                }
              )} />
              <span >
                {item.index === index ? item.selectedIcon : item.icon}
              </span>
            </div>

            <span className={clsx("transition-[font-weight] duration-100 box-border text-tiny ", {
              "font-normal": !isActive,
              "font-extrabold": isActive
            }
            )}>Home</span>


          </Button>
        })
      }

    </nav >
  )
}
