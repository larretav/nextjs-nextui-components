import { PageTitle, ThemeSwitch, ThemeSwitchTabs } from '@/components'
import { Switch } from '@nextui-org/switch'
import React from 'react'

export const SwitchInputs = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
      <div className="container-component-item"><ThemeSwitch /></div>
      <div className="container-component-item"><Switch /></div>
      <div className="col-span-2 container-component-item"><ThemeSwitchTabs /></div>
    </div>
  )
}
