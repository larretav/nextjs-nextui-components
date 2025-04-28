import { PageTitle } from '@/components'
import React from 'react'
import ToolbarFilters from '@/components/navigation/desktop-toolbar/ToolbarFilters'
import { HorizontalStepper } from './_components/HorizontalStepper'

export default function StepperPage() {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
      <PageTitle text="Stepper Components" />
      <p>Horizontal</p>
      <div className="max-w-[900px]">
        <HorizontalStepper />
      </div>
    </div>
  )
}