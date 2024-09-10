"use client"
import { PageTitle } from '@/components';
import { Card } from '@nextui-org/card';
import BoxBadge from "@/components/data-display/badge/BoxBadge"
import React from 'react'




export default function Page() {

  return (
    <div className="flex flex-col p-3">
      <PageTitle text="Badges Componentes" />
        <p>BoxBadge</p>
      <div className="relative w-full grid grid-cols-1 sm:grid-cols-4 gap-4 px-6 py-2">
        <BoxBadge quantity={10} />
      </div>
    </div>
  )
}