'use client';
import { StyledTabsFilter, StyledTabFilter } from '@/components';
import CustomTabs, { CustomTab } from '@/components/navigation/tabs/CustomTabs';
import { TabFilter } from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { getNextUiColor } from '@/utils';
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
        {CustomTab({ key: "tab-1", title: "Tab 1", value: 40, activeColor: "primary" })}
        {CustomTab({ key: "tab-2", title: "Tab 1", value: 40, activeColor: "sky" })}


      </CustomTabs>
    </>
  )
}

export default OSStyledTabsFilters