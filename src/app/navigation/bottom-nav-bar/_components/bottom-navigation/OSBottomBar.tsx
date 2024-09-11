'use client';

import { useState } from "react";
import { BsHouse, BsHouseFill } from "react-icons/bs";
import { BottomNavigationBar, BottomNavigationBarItem } from "@/components";
import { BoxPackageOutlined, BoxPackageSolid, QuotationOutlined, QuotationSolid } from "@/components/icons";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";

export const OSBottomNavBar = () => {

  const [index, setIndex] = useState<string | number>(0);

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>, value: string | number) => {
    setIndex(value);
  }

  return (
    <>
      <BottomNavigationBar value={index} onChange={handleChange} color="danger" className="relative" >
        <BottomNavigationBarItem label="Inicio" icon={<BsHouse />} activeIcon={<BsHouseFill />} />
        <BottomNavigationBarItem label="Cotizar" icon={<QuotationOutlined />} activeIcon={<QuotationSolid />} />
        <BottomNavigationBarItem label="Envíos" icon={<BoxPackageOutlined />} activeIcon={<BoxPackageSolid />} />
        <BottomNavigationBarItem label="Cuenta" icon={<FaRegCircleUser />} activeIcon={<FaCircleUser />} />
      </BottomNavigationBar>
    </>
  )
}
