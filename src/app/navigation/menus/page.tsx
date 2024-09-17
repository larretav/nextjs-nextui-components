import { PageTitle } from '@/components'
import EnviosFilterMenu from '@/components/navigation/menu/EnviosFilterMenu'
import EnviosShowMoreColumnsMenu from '@/components/navigation/menu/EnviosShowMoreColumnsMenu'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
    <PageTitle text="Menu Components" />
    <p>EnviosShowMoreColumnsMenu</p>
    <div >    
    <EnviosShowMoreColumnsMenu/>
    </div>
    <p>EnviosFilterMenu</p>
    <div >    
    <EnviosFilterMenu/>
    </div>       
  </div>
  )
}