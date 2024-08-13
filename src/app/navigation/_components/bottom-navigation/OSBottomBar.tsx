'use client';

import { useState } from "react";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { BottomNavigationBar, BottomNavigationBarItem } from "@/components";

export const OSBottomNavBar = () => {

  const [index, setIndex] = useState<string | number>(0);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
    setIndex(value);
  }

  return (
    <>
      <BottomNavigationBar value={index} onChange={handleChange} color="danger" >
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
      </BottomNavigationBar>
    </>
  )
}
