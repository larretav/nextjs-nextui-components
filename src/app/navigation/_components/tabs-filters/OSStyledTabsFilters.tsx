'use client';
import { StyledTabsFilter, StyledTabFilter, StyledButton } from '@/components';
import { TabFilter } from '@/components/navigation/tabs/TabFilter'
import { TabsFilters } from '@/components/navigation/tabs/TabsFilters'
import { Tab, Tabs } from '@nextui-org/tabs';
import React, { cloneElement } from 'react'

const OSStyledTabsFilters = () => {
  return (
    <>
      <StyledButton $customcolor='indigo' >Hola</StyledButton>
      <StyledTabsFilter  >
        <Tab key="tab1" title="Tab 1" />
        <Tab key="tab2" title="Tab 1" />
        <StyledTabFilter key="tab5" title="Tab 5" $activeColor="red" className='' />
      </StyledTabsFilter>
    </>
  )
}

export default OSStyledTabsFilters