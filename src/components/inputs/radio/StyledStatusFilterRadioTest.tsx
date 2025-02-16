'use client';
import { cn } from '@/lib/utils';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor, ThemeName } from '@/utils';
import { Radio, RadioProps } from '@heroui/radio';
import styled, { css } from 'styled-components';


export const StyledStatusFilterRadioTest = styled(Radio).attrs<{ activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName }>((props) => ({
  classNames: {
    label: "font-medium text-default-600",
    base: cn(
      "inline-flex m-0 max-w-full bg-content1 hover:bg-content2 items-center justify-between transition-all",
      "flex-row-reverse cursor-pointer rounded-lg gap-9 px-3 py-2 border-2 border-transparent",
    ),
  }
}))`
  background-color: ${props => getBgColor(props.activeColor, props.theme)};
  
  &:hover{
    background-color: ${props => getHoverColor(props.activeColor, props.theme)};
  }

  &[data-selected="true"], &[data-selected="true"] > span {
    border-color: ${props => getAccentColor(props.activeColor, props.theme)} !important;
  }

  & > span > span{
    background-color: ${props => getAccentColor(props.activeColor, props.theme)};
  }
`;


const getAccentColor = (activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName) => {
  return getNextUIOrTailwindColor(activeColor || 'primary', 'light', theme === 'dark' ? 800 : 500, 'rgba', 100);
}

const getBgColor = (activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName) => {
  return getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 15 : 5);
}

const getHoverColor = (activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName) => {
  return getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 20 : 10);
}