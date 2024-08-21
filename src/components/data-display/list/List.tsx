import { Listbox, ListboxProps } from '@nextui-org/listbox'
import React from 'react'

type Props = ListboxProps

export const List = ({ children, ...props }: Props) => {


  return (
      <Listbox
        classNames={{ list: "gap-1" }}
        {...props}
      >
        {
          children
        }
      </Listbox>
  )
}

