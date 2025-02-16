'use client';
import { cn } from '@/lib/utils';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor, ThemeName } from '@/utils';
// import { css } from '@emotion/css';
import { Radio, RadioProps } from '@heroui/radio'
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import React from 'react'
import styled from 'styled-components';

type Props = RadioProps & {
  activeColor?: NextUIColorKeys | TailwindColorKeys,
}

export const StatusFilterRadio = ({ activeColor = 'primary', children, ...otherProps }: Props) => { 
  const { theme = 'light' } = useTheme();
  const isSSR = useIsSSR();

  if (isSSR) return null;

  return (
    <StyledStatusFilterRadio
      activeColor={activeColor}
      theme={theme}
      {...otherProps}
    >
      {children}
    </StyledStatusFilterRadio>
  );
}


const StyledStatusFilterRadio = styled(Radio).attrs<{ activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName }>((props) => ({
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
  return getNextUIOrTailwindColor(activeColor, 'light', theme === 'dark' ? 800 : 500, 'rgba', 100);
}

const getBgColor = (activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName) => {
  return getNextUIOrTailwindColor(activeColor, 'light', 500, 'rgba', theme === 'dark' ? 15 : 5);
}

const getHoverColor = (activeColor: NextUIColorKeys | TailwindColorKeys, theme: ThemeName) => {
  return getNextUIOrTailwindColor(activeColor, 'light', 500, 'rgba', theme === 'dark' ? 20 : 10);
}
