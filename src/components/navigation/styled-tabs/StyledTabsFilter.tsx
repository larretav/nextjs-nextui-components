'use client';
import { getNextUiColor, getTailwindColorHex } from '@/utils';
import { Button } from '@nextui-org/button';
import { Tab, Tabs } from '@nextui-org/tabs';
import styled from 'styled-components';

const getActiveColor = (color: string = "blue") => {
  return getNextUiColor(color, "light", 600) || getTailwindColorHex(color, 600);
}

export const StyledTabsFilter = styled(Tabs).attrs((props) => ({
  classNames: {}
}))`
  /* &[data-slot="base"] > [data-slot="tabList"] > [data-slot="tab"] > span {
    background-color: green;
  } */
  /* & > div {
    background-color: green;
  } */
`;

export const StyledTabFilter = styled(Tab) <{ $activeColor: string }>`
  && {
    /* background-color: ${prop => getActiveColor(prop.$activeColor)}; */
    outline: 1px red solid !important;
  }
`;
//   styled(Tab).attrs<{ $activeColor: string }>((props) => ({
//   $activeColor: props.$activeColor,
//   className: "outline"
// }))`
//   &[data-slot="tab"]{
//     outline: 1px red solid;
//   }
// `;

export const StyledButton = styled(Button) <{ $customcolor: string }>`
  background-color: ${prop => getActiveColor(prop.$customcolor)};
`;