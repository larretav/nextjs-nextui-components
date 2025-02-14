'use client';
import { useComponentsStore } from '@/store';
import { Button } from "@heroui/button";
import React from 'react'
import { TbLayoutSidebarRightFilled } from 'react-icons/tb';
import { OSSidebarFilters } from './onsite-sidebar-filters/OSSidebarFilters';

const SidebarFiltersButton = () => {

  const toggleSidebar = useComponentsStore.use.toggleOSSidebarFilters();

  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-xl bg-default-100">
      <Button
        color="success"
        endContent={<TbLayoutSidebarRightFilled />}
        onPress={()=> toggleSidebar()}
      >Open Filters</Button>
      <OSSidebarFilters />
    </div>
  )
}

export default SidebarFiltersButton