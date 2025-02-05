'use client';
import { cn } from "@/lib/utils";
import { RadioGroup, useRadio, RadioProps } from "@heroui/radio";
import { Image, ImageProps } from "@heroui/image";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import clsx from "clsx";
import { useState } from "react";
import { getNextUIOrTailwindColor } from "@/utils";
import { NextUIColorKeys, TailwindColorKeys } from "@/types";
import { useTheme } from "next-themes";

type Props = RadioProps & {
  src: string,
  alt: string,
  imageProps?: ImageProps,
  activeColor?: NextUIColorKeys | TailwindColorKeys,
}

export const ImageRadio = ({ src, alt, imageProps, activeColor = 'primary', ...props }: Props) => {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getInputProps,
    getLabelProps,
  } = useRadio(props);

  const { theme = 'light' } = useTheme();
  const isDark = theme === 'dark'

  const bgColor = getNextUIOrTailwindColor(activeColor, 'light', 500, 'rgba', isDark ? 15 : 8);
  const borderColor = getNextUIOrTailwindColor(activeColor, 'light', 500, 'rgba', isDark ? 40 : 60);

  return (
    <Component
      {...getBaseProps()}
      className={clsx(
        "group flex-col items-center justify-between",
        "cursor-pointer rounded-lg py-1 px-2", {
        '[&>div>div]:hover:bg-content1': !isSelected,
        '[&>div>div]:hover:bg-content2': !isSelected && theme === 'light'
      }
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>

      <div className="flex flex-col items-center justify-between gap-1">
        <div className={clsx("p-2 rounded-2xl size-16 border transition-all", {
        })}
          style={{
            backgroundColor: isSelected ? bgColor : undefined,
            borderColor: isSelected ? borderColor : 'transparent',
          }}
        >
          <Image src={src} alt={alt} width={50} height={50} className="object-contain" {...imageProps} />
        </div>
        {children && <span {...getLabelProps()} className={clsx(getLabelProps().className, {
          'font-semibold': isSelected
        })}
        >{children}</span>}
      </div>
    </Component>
  );
};