'use client';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor, ThemeName } from '@/utils';
import { Chip } from "@heroui/chip"
import { Tab, Tabs, TabsProps, } from "@heroui/tabs"
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import React, { Key, useState } from 'react'

export const TabsExample = () => {

  const [selectedKey, setSelectedKey] = useState<Key>("all");

  return (
    <MyTabs
      aria-label="Options"
      selectedKey={selectedKey as string}
      onSelectionChange={setSelectedKey}
    >
      <Tab key="all" title={<TitleTab title="Todos" value={0} color="primary" showZero />} className="[&>span]:bg-primary-500" />

      <Tab key="delivered" title={<TitleTab title="Enviados" value={45} color="success" />} className="[&>span]:bg-red-500" />

      <Tab key="pending" title={<TitleTab title="Pendientes" value={55} color="cyan" />} className="[&>span]:bg-cyan-500" />
    </MyTabs>
  )
}


const MyTabs = ({ children, ...props }: TabsProps) => {
  return (
    <Tabs
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full dark:bg-opacity-70 ",
        tab: "max-w-fit px-0 h-12",
      }}
      fullWidth
      {...props}
    >
      {children}
    </Tabs>
  )
}


type TitleTabProps = {
  title: string,
  value: string | number,
  showZero?: boolean,
  color?: NextUIColorKeys | TailwindColorKeys,
}


const TitleTab = ({ title, value, showZero = false, color = "blue" }: TitleTabProps) => {

  const isSSR = useIsSSR();

  const { theme = "light" } = useTheme();
  const colorScale = theme === "dark" ? 900 : 100;
  const colorOpacity = theme === "dark" ? 30 : 100;

  const getBgColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, "light", colorScale, "rgba", colorOpacity);
  };

  const getTextColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, theme as ThemeName, 500, "hex", 100);
  };

  if (isSSR) return null;

  return (
    <div className="flex items-center space-x-2">
      <span>{title}</span>
      {
        (+value === 0 && !showZero) ? null : <Chip
          size="sm"
          variant="flat"
          radius="sm"
          style={{
            backgroundColor: getBgColorChip(color),
            color: getTextColorChip(color),
          }}
        >
          {value}
        </Chip>
      }

    </div >
  )
}
