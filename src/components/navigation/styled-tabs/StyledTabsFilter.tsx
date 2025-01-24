'use client';
import { getNextUiColor, getTailwindColorHex } from '@/utils';
import { Button } from '@nextui-org/button';
import { Tab, TabItemProps, Tabs } from '@nextui-org/tabs';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const getActiveColor = (color: string = "blue") => {
  return getNextUiColor(color, "light", 600) || getTailwindColorHex(color, 600);
}

export const StyledTabsFilter = styled(Tabs).attrs((props) => ({
  classNames: {
    // cursor: "dark:bg-red-500 text-green-600"
  }
}))`
  /* &[data-slot="base"] > [data-slot="tabList"] > [data-slot="tab"] > span {
    background-color: green;
  } */
  /* & > div {
    background-color: green;
  } */
`;

export const StyledTabFilter = styled(Tab) <{ $activeColor: string }>`
  &&[data-slot="cursor"]  {
    /* background-color: ${prop => getActiveColor(prop.$activeColor)}; */
    background-color: red;
    outline: 1px red solid;
  }
`;
export const StyledTabFilter2 = styled(Tab).attrs<{ $activeColor: string }>((props) => ({
  $activeColor: props.$activeColor,
  className: "outline",
  title: <></>
}))`
  &>span{
    outline: 1px red solid;
  }
`;

type Props = {
  title: string;
  children: ReactNode
}

export const CustomTab = ({ title, children }: Props) => {
  // Aquí puedes agregar lógica o estilos adicionales
  return <Tab title={title}>{children}</Tab>;
};