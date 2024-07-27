'use client';

import { useState } from "react";
import { BottomNavigationBar } from "../bottom-nav-bar/BottomNavigationBar";
import BottomNavigationBarItem from "../bottom-nav-bar/BottomNavigationBarItem";
import { BsHouse, BsHouseFill } from "react-icons/bs";

const OSBottomBar = () => {

  const [index, setIndex] = useState(0);

  return (
    <div>
      <BottomNavigationBar value="asas" onChange={(value)=>{ console.log(value) }} >
        <BottomNavigationBarItem label="Home" icon={<BsHouseFill/>} activeIcon={<BsHouse />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouseFill />} activeIcon={<BsHouse />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouseFill />} activeIcon={<BsHouse />} />
        <BottomNavigationBarItem label="Home" icon={<BsHouseFill />} activeIcon={<BsHouse />} />
      </BottomNavigationBar>

    </div>
  )
}

export default OSBottomBar