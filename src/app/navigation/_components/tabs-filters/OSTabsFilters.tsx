'use client';
import { TabFilter } from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { Tab } from '@nextui-org/tabs';
import React, { cloneElement } from 'react'

const OSTabsFilters = () => {
  return (
    <TabsFilters  >
      <TabFilter key="photos" text="Todos" value={100} activeColor="primary" />
      <TabFilter key="delivered" text="Enviados" value={45} activeColor="red" />
      <TabFilter key="pendings" text="Pendientes" value={55} activeColor="blue" />
    </TabsFilters>
  )
}

export default OSTabsFilters