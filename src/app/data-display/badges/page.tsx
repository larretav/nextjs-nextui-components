"use client"
import { CBadge, PageTitle } from '@/components';
import BoxBadge from "@/components/data-display/badge/BoxBadge"
import React from 'react'




export default function Page() {

  return (
    <div className="flex flex-col p-3">
      <PageTitle text="Badges Componentes" />
      <p>BoxBadge</p>
      <CBadge content='23' />
      <div className="grid relative grid-cols-9 gap-4 py-2 px-6 w-full">
        <BoxBadge quantity={10} />
        <BoxBadge quantity={20} badgeSize='lg' boxSize={20} badgeVariant='faded' padding='md' />
        <BoxBadge quantity={50} badgeSize='lg' boxSize={50} badgeVariant='faded' />
        <BoxBadge quantity={90} badgeSize='lg' boxSize={90} badgeVariant='shadow' padding='md' />

      </div>
    </div>
  )
}