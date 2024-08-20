import { Listbox, ListboxProps } from '@nextui-org/listbox'

type Props = ListboxProps

export const List = ({ children, ...props }: Props) => {
  return (
    <Listbox
      classNames={{ list: "gap-1" }}
      {...props}
    >
      {children}
    </Listbox>
  )
}

