'use client';
import { StyledTabsFilter, StyledTabFilter } from '@/components';
import CustomTabs, { CustomTab } from '@/components/navigation/tabs/CustomTabs';
import { TabFilter } from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { Tab, Tabs } from '@nextui-org/tabs';
import React, { cloneElement } from 'react'

const OSStyledTabsFilters = () => {

  return (
    <>
      {/* <Tabs  >
        <Tab key="tab1" title="Tab" />
        <Tab key="tab2" title="Tab" />
        <CustomTab title="Tab 1">Contenido de la pestaña 1</CustomTab>
        <StyledTabFilter key="tab5" title="Tab styled" $activeColor="red" />
      </Tabs> */}
      <CustomTabs>
        {/* <CustomTab title="Tab 1">Contenido de la pestaña 1</CustomTab>
        <CustomTab title="Tab 2">Contenido de la pestaña 2</CustomTab> */}
        {CustomTab({title: "Tab 1", children: "El tab" })}
        {CustomTab({title: "Tab 1", children: "El tab" })}
      </CustomTabs>
    </>
  )
}

export default OSStyledTabsFilters