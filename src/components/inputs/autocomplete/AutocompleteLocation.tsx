'use client';
import { Autocomplete, AutocompleteItem, AutocompleteProps, MenuTriggerAction } from "@nextui-org/autocomplete";
import { Key, useRef, useState } from "react";
import { SelectCountryIcon } from "../select/SelectCountryIcon";
import { toast } from "sonner";
import { AutocompleteLocationModel } from "@/models";
import { getAutocompleteLocation } from "@/actions/autocomplete/get-auto-location";
import { IsoCode } from "@/types";
import clsx from "clsx";
import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { FaImage, FaXmark } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { IconButton } from "../buttons/IconButton";
import { Spinner } from "@nextui-org/spinner";


type AutocompleteLocation = AutocompleteLocationModel & { selectedCode: string }

type Props = Omit<AutocompleteProps<AutocompleteLocationModel>, "children"> & {
  onSelectedLocation: (location: AutocompleteLocation | null) => void,
  startContent?: React.ReactNode,
  errorMessage?: string,
  allowedCountries: IsoCode[];
  defaultSelectedCountry?: IsoCode;
  grouped?: boolean;
  separateResults?: boolean;
}

export const AutocompleteLocation = ({ onSelectedLocation, isInvalid, errorMessage, allowedCountries, defaultSelectedCountry, grouped = false, size = 'md', radius = 'md', separateResults = false, "aria-label": ariaLabel = "Seleccionar ubicación", ...props }: Props) => {

  const defaultLabel = "Buscar por código postal o ciudad...";

  const debounceRef = useRef<any>();
  const [selectedCountry, setSelectedCountry] = useState<IsoCode>(defaultSelectedCountry || allowedCountries[0]);

  const [items, setItems] = useState<AutocompleteLocationModel[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inpValue, setInpValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const onSelectionChange = (key: Key | null) => {
    if (!key) {
      onSelectedLocation(null);
      setSelectedItem(null);
      return;
    };

    const country = items.find(item => item.id === key)!;
    onSelectedLocation({ ...country, selectedCode: country.country } as AutocompleteLocation)
    setSelectedItem(country.id);
    setInpValue(country.completeAddress);
  }

  const onInputChange = (newValue: string) => {
    if (!newValue?.trim()) {
      setInpValue(newValue);
      // setItems([]);
      setSelectedItem(null);
      return;
    };

    setInpValue(newValue);

    if (debounceRef.current)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const { ok, data = [], error } = await getAutocompleteLocation(selectedCountry, newValue);
        if (!ok)
          throw error;

        setItems(data);

      } catch (error: any) {
        toast.error(error)
      }

      setIsLoading(false);
    }, 300);
  }

  const onOpenChange = (isOpen: boolean, menuTrigger: MenuTriggerAction) => {
    if (menuTrigger === "manual" && isOpen) {
      setInpValue(inpValue);
      setSelectedItem(selectedItem);
      setItems(items)
    }
  };

  return (
    <div aria-label={ariaLabel} className="flex flex-col">
      <div aria-label={ariaLabel} className={clsx("flex gap-1.5 justify-between items-center", {
        "!gap-0": grouped
      })}>

        <SelectCountryIcon
          aria-label="Selección de país"
          radius={radius}
          variant={props?.variant || "bordered"}
          defaultSelectedCountry={defaultSelectedCountry}
          allowedCountries={allowedCountries}
          onSelectionChange={(country) => {
            setSelectedCountry(country.isoCode);
            onInputChange("");
          }}
          classNames={{
            trigger: cn("bg-content1", clsx({
              'rounded-r-none': grouped,
              'h-12': size === 'lg' && !props?.label,
              'h-10': size === 'md' && !props?.label,
              'h-8': size === 'sm' && !props?.label,
            }))
          }}
          isInvalid={isInvalid}
          size={size}
          avatarProps={{
            className: clsx({
              '!size-8': size === 'lg' && !props?.label,
              '!size-7': size === 'md' && !props?.label,
              '!size-5': size === 'sm' && !props?.label,
            })
          }}
        />

        {
          separateResults && <>
            <Input
              aria-label="Autocompletado de dirección"
              fullWidth
              size={size}
              radius={radius}
              placeholder={props?.placeholder || defaultLabel}
              label={props?.label}
              variant={props?.variant || "bordered"}
              value={inpValue}
              onValueChange={onInputChange}
              classNames={{
                inputWrapper: cn("bg-content1", clsx({
                  'rounded-l-none ': grouped
                })),
              }}
              isClearable
              endContent={<div className="flex gap-1 items-center">
                <IconButton onPress={() => setInpValue('')}  ><FaXmark size="1rem" className="text-foreground-500" /></IconButton>
                {isLoading && <Spinner size="sm" color="default" />}
              </div>}
            />
          </>
        }

        {
          !separateResults && <>
            <Autocomplete
              fullWidth
              size={size}
              radius={radius}
              aria-label="Autocompletado de dirección"
              placeholder={props?.placeholder || defaultLabel}
              variant={props?.variant || "bordered"}
              inputValue={inpValue}
              onInputChange={onInputChange}
              isLoading={isLoading}
              items={items}
              selectedKey={selectedItem}
              onSelectionChange={onSelectionChange}
              onOpenChange={onOpenChange}
              popoverProps={{ size, radius }}
              inputProps={{
                autoComplete: 'nel',
                classNames: {
                  inputWrapper: cn(clsx({
                    'rounded-l-none bg-content1': grouped
                  }))
                }
              }}
              listboxProps={{ emptyContent: "Buscar por código postal o ciudad..." }}
              isInvalid={isInvalid}
              className="bg-content1"

              {...props}
            >
              {(item) => (
                <AutocompleteItem key={item.id}  >
                  {item.completeAddress}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </>
        }


      </div>
      {isInvalid && <span className="p-1 text-tiny text-danger">{errorMessage}</span>}
      {separateResults && <>
        <Listbox className={clsx("bg-content1 p-3 mt-3 max-h-[300px] overflow-auto no-scrollbar", {
          "rounded-sm": radius === 'none',
          "rounded-small": radius === 'sm',
          "rounded-medium": radius === 'md',
          "rounded-large": radius === 'lg',
        })}
          emptyContent="Sin resultados"
        >

          {separateResults && items.map((item) => (
            <ListboxItem
              key={item.id}
              aria-label="Listado de direcciones"
              onPress={() => { onSelectionChange(item.id) }}
              className={cn(clsx({
                "[&>span]:text-medium": size === 'lg',
              }))}>
              {item.completeAddress}
            </ListboxItem>
          ))}
        </Listbox>
      </>}
    </div >
  );
}
