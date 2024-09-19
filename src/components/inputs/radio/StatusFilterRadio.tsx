'use client';
import { cn } from '@/lib/utils';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor } from '@/utils';
import { css } from '@emotion/css';
import { Radio, RadioProps, useRadio } from '@nextui-org/radio'
import { useIsSSR } from '@react-aria/ssr';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useTheme } from 'next-themes';
import React from 'react'

type Props = RadioProps & {
  activeColor?: NextUIColorKeys | TailwindColorKeys,
}


export const StatusFilterRadio = ({ activeColor, ...otherProps }: Props) => {

  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(otherProps);

  const { theme = 'light' } = useTheme();
  const isSSR = useIsSSR();

  const accentColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', theme === 'dark' ? 800 : 500, 'rgba', 100);
  const bgColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 15 : 5);
  const hoverColor = getNextUIOrTailwindColor(activeColor || 'primary', 'light', 500, 'rgba', theme === 'dark' ? 20 : 10);

  if (isSSR) return null

  return (
    <Component
      {...getBaseProps()}

      className={cn(
        "group inline-flex items-center justify-between flex-row-reverse transition-all cursor-pointer border-2 border-default rounded-lg gap-4 px-3 py-2",
        css({
          backgroundColor: bgColor,
          borderColor: 'transparent',
          '&[data-selected="true"]': {
            borderColor:  accentColor 
          },
          '&:hover': {
            backgroundColor: hoverColor
          }
        })
      )}


    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <span   {...getWrapperProps()} style={{ borderColor: isSelected ? accentColor : undefined }} >
        <span   {...getControlProps()} style={{ backgroundColor: isSelected ? accentColor : undefined }} />
      </span>

      <div {...getLabelWrapperProps()} >
        {children && <span {...getLabelProps()} className="font-medium text-default-600">{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div>
    </Component >
  );
}
