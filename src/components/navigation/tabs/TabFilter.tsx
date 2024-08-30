'use client';
import { Chip } from '@nextui-org/chip'
import { TabItemProps, Tab as NextUITab } from '@nextui-org/tabs'
import React from 'react'

export type TabFilterProps = TabItemProps & {
  text: string;
  value: string | number
}

export const TabFilter = ({ text, value, ...restProps }: TabFilterProps) => {
  return (
    <NextUITab {...restProps} />
  )
}
