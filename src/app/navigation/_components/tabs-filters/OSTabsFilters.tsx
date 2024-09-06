'use client';
import { TabFilter, TabFilter2 } from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { Tab } from '@nextui-org/tabs';
import React, { cloneElement, Key, useState } from 'react'

type TabsExample = {
  key: string;
  text: string;
  value: number;
  activeColor: string;
}
const OSTabsFilters = () => {

  const [selectedKey, setSelectedKey] = useState<string>("")

  const tabsTest: TabsExample[] = [
    {
      key: "pendings",
      text: "Pendientes",
      value: 23,
      activeColor: "blue",
    },
    {
      key: "delivered",
      text: "Entregados",
      value: 23,
      activeColor: "green",
    },
    {
      key: "calcelled",
      text: "Cancelados",
      value: 23,
      activeColor: "red",
    },
  ]

  const handleChange = (key: Key) => {
    setSelectedKey(key as string);
  };


  return (
    <TabsFilters fullWidth items={tabsTest} selectedKey={selectedKey} onSelectionChange={handleChange} >
      <TabFilter key="photos" text="Todos" value={100} activeColor="primary" />
      <TabFilter key="delivered" text="Enviados" value={45} activeColor="red" />
      <TabFilter key="pendings" text="Pendientes" value={55} activeColor="blue" />
    </TabsFilters>
  )
}

export default OSTabsFilters