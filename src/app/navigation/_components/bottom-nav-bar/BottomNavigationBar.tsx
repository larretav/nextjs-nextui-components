'use client';

import clsx from 'clsx'
import React, { Children, cloneElement, ReactElement, useEffect, useState } from 'react'
import { FaDashcube, FaHouse } from 'react-icons/fa6'
import { BsHouse, BsFillHouseFill } from "react-icons/bs";
import { Navbar } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { MdHome } from 'react-icons/md';
import { ColorKeys } from '@/types';

type Props = {
  value: string | number,
  onChange: (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => void,
  color?: ColorKeys,
  iconSize?: number,
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],
  children: ReactElement | ReactElement[]
}

export const BottomNavigationBar = ({ value, onChange, color = 'primary', iconSize = 24, className = '', children }: Props) => {

  const isArray = Array.isArray(children);

  const [index, setIndex] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)

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
    {
      index: 4,
      text: "Cotización",
      icon: <BsHouse size={24} />,
      selectedIcon: <BsFillHouseFill size={24} />,
    },

  ]


  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll >= 100) {
      setPrevScrollPosition(currentScroll);
      setHidden(true);
    } else if (prevScrollPosition < currentScroll) {
      setPrevScrollPosition(currentScroll);
      setHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "w-full py-1 flex justify-evenly box-border bg-default-100 overflow-auto no-scrollbar transition-all duration-500 " + className,
        {
          "translate-y-60 ": hidden
        }
      )}>
      {
        children && (isArray
          ? Children.map(children, (child, index) => cloneElement(child, { iconSize, value, index, onClick: onChange, color }))
          : cloneElement(children, { iconSize, value, index, color }))
      }
    </nav >
  )
}
