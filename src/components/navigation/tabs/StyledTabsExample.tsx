'use client';
import React from 'react'
import { StyledTabFilter, StyledTabsFilter } from '../styled-tabs/StyledTabsFilter'

const StyledTabsExample = () => {
  return (
    <StyledTabsFilter>
      {/* <StyledTabFilter key="tab-1" title="Tab 1" $activeColor="red" $value={32} /> */}
      {/* <StyledTabFilter key="tab-2" title="Tab 2" $activeColor="red" $value={32} /> */}
      {/* <StyledTabFilter key="tab-3" title="Tab 3" $activeColor="red" $value={32} /> */}
      {/* <StyledTabFilter key="tab-4" title="Tab 4" $activeColor="red" $value={32} /> */}
      <StyledTabFilter key="tab-1" title="Tab 4"/>
      <StyledTabFilter key="tab-2" title="Tab 4" />
      <StyledTabFilter key="tab-3" title="Tab 4" />
    </StyledTabsFilter>
  )
}

export default StyledTabsExample