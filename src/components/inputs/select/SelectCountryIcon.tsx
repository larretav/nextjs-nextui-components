'use client';
import { Select, SelectItem, SelectItemProps, SelectProps, SelectedItems } from "@nextui-org/select";
import { Avatar, AvatarProps } from "@nextui-org/avatar";
import clsx from "clsx";
import { forwardRef, Key, useMemo, useRef } from "react";
import { Country, IsoCode } from "@/types";
import { countries } from "@/constants";
import { cn } from "@/lib/utils";

type Props = Omit<SelectProps, 'children' | 'onSelectionChange'> & {
  itemProps?: SelectItemProps;
  allowedCountries: IsoCode[];
  defaultSelectedCountry?: IsoCode;
  onSelectionChange?: (country: Country) => void;
  avatarProps?: AvatarProps
}

const SelectCountryIcon = forwardRef<HTMLSelectElement, Props>(({ itemProps, onSelectionChange = () => { }, allowedCountries = ["MX"], defaultSelectedCountry, avatarProps, size = 'md', ...props }: Props, ref) => {

  return (
    <Select
      {...props}
      size={size}
      ref={ref}
      aria-label="Seleccionar país"
      defaultSelectedKeys={[defaultSelectedCountry || allowedCountries[0]]}
      renderValue={(items) => {
        return items.map((item) => (
          <Avatar
            {...avatarProps}
            key={item.data?.isoCode || ''}
            alt={item.data?.name || ''}
            size={size === 'lg' ? 'md' : size}
            src={item.data?.flagUrl || ''}
          />
        ));
      }}
      classNames={{
        ...props.classNames,
        base: cn('w-fit ', props.classNames?.base),
        trigger: clsx('w-fit pr-8 ', {
          // Tamaños de inputs con label (son mas altos)
          'h-16': size === 'lg',
          'h-14': size === 'md',
          'h-12': size === 'sm',

        },
          props.classNames?.trigger
        ),
        innerWrapper: cn('w-fit', props.classNames?.innerWrapper),
        popoverContent: cn('w-fit', props.classNames?.popoverContent),
      }}
      onSelectionChange={(key) => onSelectionChange(countries.find(item => item.isoCode === key.currentKey)!)}
      disallowEmptySelection
      items={countries.filter(item => allowedCountries.includes(item.isoCode))}
    >
      {(user) => <SelectItem
        key={user.isoCode}
        textValue={user.name}
        startContent={<Avatar {...avatarProps} alt={user.name} src={user.flagUrl} />}
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