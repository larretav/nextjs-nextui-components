"use client"
import React, { useState, Key } from 'react'
import { TabsFilters } from '../tabs/TabsFilters';
import TabFilter from '../tabs/TabFilter';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { FaEye, FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Button } from "@heroui/button";
import EnviosFilterMenu from '../menu/EnviosFilterMenu';
import EnviosShowMoreColumnsMenu from '../menu/EnviosShowMoreColumnsMenu';

type TabFiltersProps = {
    text: string;
    value: number,
    activeColor: TailwindColorKeys | NextUIColorKeys
}

export default function ToolbarFilters() {
    const [selectedKey, setSelectedKey] = useState<string>("")
    const [displayViewMenu, setDisplayViewMenu] = useState(false)
    const [displayFilterMenu, setDisplayFilterMenu] = useState(false)
    const handleChange = (key: Key) => {
        setSelectedKey(key as string);
    }
    const tabs: TabFiltersProps[] = [
        {
            text: "Todos",
            value: 45,
            activeColor: "default"
        },
        {
            text: "En Sitio y Transito",
            value: 80,
            activeColor: "amber"
        },
        {
            text: "En sitio",
            value: 40,
            activeColor: "amber"
        },
        {
            text: "En Transito",
            value: 40,
            activeColor: "red"
        },
        {
            text: "Entregado",
            value: 15,
            activeColor: "green"
        },
        {
            text: "Cancelado",
            value: 10,
            activeColor: "red"
        },
        {
            text: "Activos",
            value: 45,
            activeColor: "green"
        },
        {
            text: "Eliminados",
            value: 5,
            activeColor: "red"
        },
        {
            text: "Cajas",
            value: 15,
            activeColor: "red"
        },
        {
            text: "Tarimas",
            value: 45,
            activeColor: "amber"
        },
        {
            text: "Sin saldo",
            value: 10,
            activeColor: "amber"
        },
    ]
    return (
        <div className='flex flex-col w-full '>
            <div className="flex w-full">
                <div className='flex w-8/12 md:w-10/12 xl:w-11/12'>
                    <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={handleChange} >
                        {tabs.map((tab, index) => (
                            <TabFilter key={index + tab.text} text={tab.text} value={tab.value} activeColor={tab.activeColor} />
                        ))}
                    </TabsFilters>
                </div>
                <div className="flex px-2 w-full items-center justify-center">
                    <Button size="sm" variant='light' radius='full' isIconOnly
                        onPress={() => {
                            setDisplayViewMenu(!displayViewMenu)
                            setDisplayFilterMenu(false)
                        }}
                    >
                        <FaEye size={18} className='text-slate-600' />
                    </Button>
                    <Button size="sm" variant='light' radius='full' isIconOnly
                        onPress={() => {
                            setDisplayFilterMenu(!displayFilterMenu)
                            setDisplayViewMenu(false)
                        }}

                    >
                        <FaFilter size={18} className='text-slate-600' />
                    </Button>
                    <Button size="sm" variant='light' radius='full' isIconOnly
                    >
                        <FaPlus size={18} className='text-blue-500' />
                    </Button>
                </div>
            </div>
            <div className="flex relative w-full h-min">
                <div className={`absolute right-0 w-full transition-all duration-300 ${displayFilterMenu ? "opacity-100" : "opacity-0 -z-10"}`}>
                    <EnviosFilterMenu />
                </div>
                <div className={`absolute right-0 transition-all duration-300 ${displayViewMenu ? "opacity-100" : "opacity-0 -z-10"}`}>
                    <EnviosShowMoreColumnsMenu />
                </div>
            </div>
        </div>
    )
}