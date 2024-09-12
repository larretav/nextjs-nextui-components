"use client"
import React, { useState, Key } from 'react'
import { TabsFilters } from '../tabs/TabsFilters';
import TabFilter from '../tabs/TabFilter';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { FaEye, FaFilter } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Button } from '@nextui-org/button';
type Props = {}


type TabFiltersProps = {
    text: string;
    value: number,
    activeColor: TailwindColorKeys | NextUIColorKeys
}

export default function ToolbarFilters({ }: Props) {
    const [selectedKey, setSelectedKey] = useState<string>("")
    const handleChange = (key: Key) => {
        setSelectedKey(key as string);
    }
    const tabs: TabFiltersProps[] = [
        {
            text: "Todos",
            value: 45,
            activeColor: "primary"
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
        <div className="flex">
            <div>
                <TabsFilters fullWidth selectedKey={selectedKey} onSelectionChange={handleChange} >
                    {tabs.map((tab, index) => (
                        <TabFilter key={index + tab.text} text={tab.text} value={tab.value} activeColor={tab.activeColor} />
                    ))}
                </TabsFilters>
            </div>
            <div className="flex ml-2">
                <Button variant='light' radius='full' isIconOnly>
                    <FaEye className='text-slate-600' />
                </Button>
                <Button variant='light' radius='full' isIconOnly>
                    <FaFilter className='text-slate-600' />
                </Button>
                <Button variant='light' radius='full' isIconOnly>
                    <FaPlus className='text-blue-500' />
                </Button>
            </div>
        </div>
    )
}