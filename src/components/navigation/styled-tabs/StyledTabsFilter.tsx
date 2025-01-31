'use client';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUiColor, getNextUIOrTailwindColor, getTailwindColorHex, ThemeName } from '@/utils';
import { Button } from '@nextui-org/button';
import { Chip } from '@nextui-org/chip';
import { Tab, TabItemProps, Tabs } from '@nextui-org/tabs';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const getActiveColor = (color: string = "blue") => {
  return getNextUiColor(color, "light", 600) || getTailwindColorHex(color, 600);
}

export const StyledTabsFilter = styled(Tabs).attrs((props) => ({
  variant: 'underlined',
  classNames: {
    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
    cursor: "w-full dark:bg-opacity-70 ",
    tab: "max-w-fit px-0 h-12",
  },
  fullWidth: true,

}))``;

// export const StyledTabFilter = styled(Tab).attrs<{ $value: string | number, $activeColor: NextUIColorKeys | TailwindColorKeys }>((props) => ({
//   // title: <TitleTab title={props.title} value={props.$value} color={props.$activeColor} />
//   // title:'Prueba'
// }))`
//     background-color: red;  
//   /* &&>span {
//   } */
// `;

export const StyledTabFilter = styled(Tab)`
  
`;


type Props = {
  title: string;
  children: ReactNode
}

export const CustomTab = ({ title, children }: Props) => {
  // Aquí puedes agregar lógica o estilos adicionales
  return <Tab title={title}>{children}</Tab>;
};







type TitleTabProps = {
  title: ReactNode,
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