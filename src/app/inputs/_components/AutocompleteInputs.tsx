import { AutocompleteLocation, PageTitle, ThemeSwitch, ThemeSwitchTabs } from '@/components'
import { Switch } from '@nextui-org/switch'
import React from 'react'
import { OSAutocompleteLocation } from './autocomplete/OSAutocompleteLocation'

export const AutocompleteInputs = () => {
  return (
    <div >
      <OSAutocompleteLocation  />
    </div>
  )
}
