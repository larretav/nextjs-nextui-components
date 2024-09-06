'use client';
import { NextUIColorKeys, TailwindColorKeys } from '@/types';
import { getNextUIOrTailwindColor, ThemeName } from '@/utils';
import { Chip } from '@nextui-org/chip'
import { TabItemProps, Tab as NextUITab } from '@nextui-org/tabs'
import { useTheme } from 'styled-components';

export type TabFilterProps = TabItemProps & {
  text: string;
  value: string | number,
  activeColor?: NextUIColorKeys | TailwindColorKeys,

}



export const TabFilter = ({ text, value, activeColor = "blue", ...restProps }: TabFilterProps) => {
  return (
    <NextUITab {...restProps} />
  )
}



export const TabFilter2 = ({ text, value, activeColor = "blue", key, ...restProps }: TabFilterProps) => {

  const { theme = "light" } = useTheme();
  const colorScale = theme === "dark" ? 900 : 100;
  const colorOpacity = theme === "dark" ? 30 : 100;

  const getBgColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, "light", colorScale, "rgba", colorOpacity);
  };

  const getTextColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, theme as ThemeName, 500, "hex", 100);
  };

  return (
    <NextUITab
      key={key}
      {...restProps}
      title={
        <div className="flex items-center space-x-2 ">
          <span>{text}</span>
          <Chip
            size="sm"
            variant="flat"
            radius="sm"
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
  )
}

export default TabFilter