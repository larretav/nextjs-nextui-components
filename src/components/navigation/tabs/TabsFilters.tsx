'use client';
import { Chip } from '@nextui-org/chip';
import { Tabs as NextUITabs, Tab, TabItemProps, TabsProps } from '@nextui-org/tabs'
import React, { Children, cloneElement, Key, ReactElement, useEffect, useState } from 'react'
import { TabFilter, TabFilterProps } from './TabFilter';
import { getNextUiColorHex, getTailwindColorHex } from '@/utils';
import { useTheme } from 'next-themes';

type Props = TabsProps & {
  children: ReactElement<TabFilterProps> | ReactElement<TabFilterProps>[]

}

export const TabsFilters = ({ children, ...restProps }: Props) => {

  const isArray = Array.isArray(children);
  const childrenArr = isArray ? children : [children]
  const keys = childrenArr.map(item => item.key);

  const [selected, setSelected] = React.useState<string>("");
  const [colors, setColors] = useState<Record<string, any>>({})
  const { theme = 'light' } = useTheme();

  const color = () => {
    return colors[selected.replace(".$", "")]
  };

  const handleChange = (key: any) => {
    setSelected(key)
  }

  useEffect(() => {
    const colors = [...childrenArr].reduce((prev: any, curr: any) => {
      const color = curr.props.activeColor;

      return {
        ...prev,
        [curr.key]: `bg-${color}-500`
      }
      // return { ...prev, [curr.key]: `bg-${color}-500` }
    }, {} as Record<string, any>)

    setColors(colors)
  }, [])

  console.log(selected)
  return (
    <NextUITabs
      aria-label="Options"
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full " + color(),
        tab: "max-w-fit px-0 h-12",
      }}
      {...restProps}
      selectedKey={selected}
      onSelectionChange={handleChange}

    >

      {
        Children.map(childrenArr, ({ props }, index) => {
          const color = `bg-${props.activeColor}-500/30 dark:bg-${props.activeColor}-500/30`
          return <Tab
            {...props}
            title={
              <div className="flex items-center space-x-2">
                <span>{props.text}</span>
                <Chip size="sm" variant="flat"
                  style={{
                    backgroundColor: !getTailwindColorHex(props?.activeColor ?? 'primary') ? getNextUiColorHex(props?.activeColor ?? 'primary', theme, 100) : getTailwindColorHex(props?.activeColor ?? 'primary', 100),
                    color: !getTailwindColorHex(props?.activeColor ?? 'primary') ? getNextUiColorHex(props?.activeColor ?? 'primary', theme, 700) : getTailwindColorHex(props?.activeColor ?? 'primary', 700),
                  }}
                >{props.value}</Chip>
              </div>
            }
          />
        })
      }

    </NextUITabs>
  )
}
