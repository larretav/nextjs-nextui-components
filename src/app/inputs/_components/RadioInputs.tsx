import React from 'react'
import { OSQuotationRadio } from './radios/OSQuotationRadio'
import { OSStatusFilterRadio } from './radios/OSStatusFilterRadio'
import OSImageRadio from './radios/OSImageRadio'

export const RadioInputs = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      <OSQuotationRadio />
      <OSStatusFilterRadio />
      <OSImageRadio />
    </div>
  )
}
