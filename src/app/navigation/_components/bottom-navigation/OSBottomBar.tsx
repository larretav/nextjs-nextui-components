'use client';

import { useState } from "react";
import { BottomNavigationBar } from "../bottom-nav-bar/BottomNavigationBar";
import BottomNavigationBarItem from "../bottom-nav-bar/BottomNavigationBarItem";
import { BsHouse, BsHouseFill } from "react-icons/bs";

const OSBottomBar = () => {

  const [index, setIndex] = useState<string | number>(0);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
    setIndex(value)
  }

  return (
    <>
      <BottomNavigationBar value={index} onChange={handleChange} color="warning" >
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
      </BottomNavigationBar>
    </>
  )
}

export default OSBottomBar