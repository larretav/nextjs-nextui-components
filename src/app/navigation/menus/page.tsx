import { PageTitle } from '@/components'
import EnviosShowMoreColumnsMenu from '@/components/navigation/menu/EnviosShowMoreColumnsMenu'
import React from 'react'

type Props = {}

export default function Page({}: Props) {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
    <PageTitle text="Toolbar Components" />
    <p>EnviosShowMoreColumnsMenu</p>
    <div className="">    
    <EnviosShowMoreColumnsMenu/>
    </div>    
  </div>
  )
}