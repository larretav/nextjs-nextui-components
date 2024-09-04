'use client';
import React, { ReactNode } from 'react';
import { Tabs, Tab } from '@nextui-org/tabs';
import { Chip } from '@nextui-org/chip';
import { ColorScale, getNextUiColor, getTailwindColorHex, ThemeName } from '@/utils';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { useTheme } from 'next-themes';
import { useIsSSR } from '@react-aria/ssr';

type TabProps = {
  title: string;
  value?: number | string;
  activeColor?: NextUIColorKeys | TailwindColorKeys
  key: string
}


const CustomTab = ({ title, value = 0, activeColor, ...rest }: TabProps) => {

  const { theme = "light" } = useTheme();
  const colorScale = theme === "dark" ? 900 : 100;
  const colorOpacity = theme === "dark" ? 30 : 100;

  const isSSR = useIsSSR();

  const getBgColorChip = (color: string = "primary") => {
    return getNextUiColor(color, "light", colorScale, "rgba", colorOpacity) || getTailwindColorHex(color, colorScale, "rgba", colorOpacity);
  };

  const getTextColorChip = (color: string = "primary") => {
    return getNextUiColor(color, theme as ThemeName, 600) || getTailwindColorHex(color, 600);
  };

  if (isSSR) return null;


  return <Tab
    {...rest}
    title={
      <div className="flex items-center space-x-2 ">
        <span>{title}</span>
        <Chip
          size="sm"
          variant="flat"
          radius="sm"
          classNames={{ base: "font-semibold" }}
          style={{
            backgroundColor: getBgColorChip(activeColor),
            color: getTextColorChip(activeColor),
          }}
        >
          {value}
        </Chip>
      </div>
    }
  />
};

const CustomTabs = ({ children }: { children: ReactNode }) => (
  <Tabs
    aria-label="Options"
    variant="underlined"
    classNames={{
      tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
      cursor: "w-full dark:bg-opacity-70 ",
      tab: "max-w-fit px-0 h-12",
    }}
  >{children}</Tabs>
);

export { CustomTab };
export default CustomTabs;