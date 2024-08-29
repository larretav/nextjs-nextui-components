'use client';
import { useTabs } from '@nextui-org/tabs'
import React from 'react'

export const ThemeSwitchTabs = () => {

  const {
    getBaseProps,
    getWrapperProps,
    getTabListProps,
    Component, domRef, values,
  } = useTabs({})

  return (
    <div {...getBaseProps()}>
      <div {...getTabListProps()}>
        <span ref={domRef} >
          Hola
        </span>
      </div>
    </div>
  )
}
