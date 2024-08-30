'use client';
import { Chip } from '@nextui-org/chip';
import { Tabs as NextUITabs, Tab, TabItemProps, TabsProps } from '@nextui-org/tabs'
import React, { Children, cloneElement, Key, ReactElement } from 'react'
import { TabFilter, TabFilterProps } from './TabFilter';

type Props = TabsProps & {
  children: ReactElement<TabFilterProps> | ReactElement<TabFilterProps>[]
}

export const TabsFilters = ({ children, ...restProps }: Props) => {

  const isArray = Array.isArray(children);
  const childrenArr = isArray ? children : [children]

  const [selected, setSelected] = React.useState<string>("photos");

  const color = (color: string) => `bg-${color}-500`;

  const handleChange = (key: Key) => {
    setSelected(key as string)
    
  }
  console.log(selected)

  return (
    <NextUITabs
      aria-label="Options"
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full "+ color('red'),
        tab: "max-w-fit px-0 h-12",
      }}
      {...restProps}
      selectedKey={selected}
      onSelectionChange={handleChange}
    >

      {
        Children.map(childrenArr, ({ props }, index) => <Tab
          {...props}
          title={
            <div className="flex items-center space-x-2">
              <span>{props.text}</span>
              <Chip size="sm" variant="flat" color="danger" classNames={{base: "bg-green-100 text-green-800"}} style={{backgroundColor: "red", color:"white"}}>{props.value}</Chip>
            </div>
          }
        />)
      }

    </NextUITabs>
  )
}
