'use client';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { Chip } from '@nextui-org/chip'
import { TabItemProps, Tab as NextUITab } from '@nextui-org/tabs'
import React from 'react'

export type TabFilterProps = TabItemProps & {
  text: string;
  value: string | number,
  activeColor?: NextUIColorKeys | TailwindColorKeys,

}

export const TabFilter = ({ text, value, activeColor = "blue", ...restProps }: TabFilterProps) => {
  return (
    <NextUITab {...restProps} />
  )
}
