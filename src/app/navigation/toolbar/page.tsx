import { PageTitle } from '@/components'
import React from 'react'
import ToolbarFilters from '@/components/navigation/desktop-toolbar/ToolbarFilters'

export default function Page() {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
    <PageTitle text="Toolbar Components" />
    <p>Toolbar Filters</p>
    <div className="">    
    <ToolbarFilters />
    </div>    
  </div>
  )
}