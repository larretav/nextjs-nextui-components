'use client';
import { Select, SelectItem, SelectItemProps, SelectProps, SelectedItems } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";
import clsx from "clsx";
import { forwardRef, Key, useMemo, useRef } from "react";
import { Country, IsoCode } from "@/types";
import { countries } from "@/constants";

type Props = Omit<SelectProps, 'children' | 'onSelectionChange'> & {
  itemProps?: SelectItemProps;
  allowedCountries?: IsoCode[];
  onSelectionChange?: (country: Country) => void;
}

const SelectCountryIcon = forwardRef<HTMLSelectElement, Props>(({ itemProps, onSelectionChange = () => { }, allowedCountries: disableCountries = [], ...props }: Props, ref) => {

  const defaultValue = useMemo(() => countries[0].isoCode, [])

  return (
    <Select
      {...props}
      ref={ref}
      aria-label="Seleccionar país"
      defaultSelectedKeys={[defaultValue]}
      renderValue={(items) => {
        return items.map((item) => (<Avatar
          key={item.data?.isoCode || ''}
          alt={item.data?.name || ''}
          className={clsx("w-5 h-5", {
            "w-7 h-7": props.size !== 'sm',
          })}
          src={item.data?.flagUrl || ''}
        />
        ));
      }}
      classNames={{
        ...props.classNames,
        base: 'w-fit ' + props.classNames?.base,
        trigger: clsx('w-fit pr-9 ' + props.classNames?.trigger, {
          'h-14': props.size !== 'sm'
        }),
        innerWrapper: 'w-fit ' + props.classNames?.innerWrapper,
        popoverContent: 'w-fit ' + props.classNames?.popoverContent,
      }}
      onSelectionChange={(key) => onSelectionChange(countries.find(item => item.isoCode === key.currentKey)!)}
      disallowEmptySelection
      items={countries.filter(item => disableCountries.includes(item.isoCode))}
    >
      {(user) => <SelectItem
        key={user.isoCode}
        textValue={user.name}
        startContent={<Avatar alt={user.name} size="sm" src={user.flagUrl} />}
        {...itemProps}
      >
        {user.name}
      </SelectItem>
      }
    </Select>
  );
})

SelectCountryIcon.displayName = "SelectCountryIcon";

export { SelectCountryIcon };