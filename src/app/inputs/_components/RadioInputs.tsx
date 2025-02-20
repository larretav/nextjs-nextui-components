import React from 'react'
import { OSQuotationRadio } from './radios/OSQuotationRadio'
import { OSStatusFilterRadio } from './radios/OSStatusFilterRadio'
import OSImageRadio from './radios/OSImageRadio'
import { OSBranchDeliverRadio } from './radios/OSBranchDeliverRadio'

export const RadioInputs = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-2 md:grid-cols-3">
      <OSQuotationRadio />
      <OSBranchDeliverRadio />
      <OSStatusFilterRadio />
      <OSImageRadio />
    </div>
  )
}
