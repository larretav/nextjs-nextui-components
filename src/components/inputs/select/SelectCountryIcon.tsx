'use client';
import { Select, SelectItem, SelectItemProps, SelectProps, SelectedItems } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";
import clsx from "clsx";
import { forwardRef, Key, useMemo, useRef } from "react";
import { Country, IsoCode } from "@/types";
import { countries } from "@/constants";

type Props = Omit<SelectProps, 'children' | 'onSelectionChange'> & {
  itemProps?: SelectItemProps;
  allowedCountries: IsoCode[];
  defaultSelectedCountry?: IsoCode;
  onSelectionChange?: (country: Country) => void;
}

const SelectCountryIcon = forwardRef<HTMLSelectElement, Props>(({ itemProps, onSelectionChange = () => { }, allowedCountries = ["MX"], defaultSelectedCountry, ...props }: Props, ref) => {

  return (
    <Select
      {...props}
      ref={ref}
      aria-label="Seleccionar país"
      defaultSelectedKeys={[defaultSelectedCountry || allowedCountries[0]]}
      renderValue={(items) => {
        return items.map((item) => (<Avatar
          key={item.data?.isoCode || ''}
          alt={item.data?.name || ''}
          className={clsx({
            "w-6 h-6": props.size === 'sm',
            "w-10 h-10": props.size === 'md',
          })}
          src={item.data?.flagUrl || ''}
        />
        ));
      }}
      classNames={{
        ...props.classNames,
        base: 'w-fit ' + props.classNames?.base,
        trigger: clsx('w-fit pr-8 ' + props.classNames?.trigger, {
          'h-14': props.size !== 'sm',
          'h-16': props.size === 'lg',
        }),
        innerWrapper: 'w-fit ' + props.classNames?.innerWrapper,
        popoverContent: 'w-fit ' + props.classNames?.popoverContent,
      }}
      onSelectionChange={(key) => onSelectionChange(countries.find(item => item.isoCode === key.currentKey)!)}
      disallowEmptySelection
      items={countries.filter(item => allowedCountries.includes(item.isoCode))}
    >
      {(user) => <SelectItem
        key={user.isoCode}
        textValue={user.name}
        startContent={<Avatar alt={user.name} src={user.flagUrl} size={props.size} className={clsx({
          "w-6 h-6": props.size === 'sm',
        })} />}
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