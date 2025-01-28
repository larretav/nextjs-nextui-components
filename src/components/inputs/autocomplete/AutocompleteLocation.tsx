'use client';
import { Autocomplete, AutocompleteItem, AutocompleteProps, MenuTriggerAction } from "@nextui-org/autocomplete";
import { Key, useRef, useState } from "react";
import { SelectCountryIcon } from "../select/SelectCountryIcon";
import { toast } from "sonner";
import { AutocompleteLocationModel } from "@/models";
import { getAutocompleteLocation } from "@/actions/autocomplete/get-auto-location";
import { IsoCode } from "@/types";
import clsx from "clsx";


type AutocompleteLocation = AutocompleteLocationModel & { selectedCode: string }

type Props = Omit<AutocompleteProps<AutocompleteLocationModel>, "children"> & {
  setSelectedLocation: (location: AutocompleteLocation | null) => void,
  errorMessage?: string,
  allowedCountries: IsoCode[];
  defaultSelectedCountry?: IsoCode;
  grouped?: boolean;
}
export const AutocompleteLocation = ({ setSelectedLocation, isInvalid, errorMessage, allowedCountries, defaultSelectedCountry, grouped = false, ...props }: Props) => {

  const defaultLabel = "Buscar por código postal o ciudad...";

  const debounceRef = useRef<any>();
  const [selectedCountry, setSelectedCountry] = useState<IsoCode>(defaultSelectedCountry || allowedCountries[0]);

  const [items, setItems] = useState<AutocompleteLocationModel[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inpValue, setInpValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const onSelectionChange = (key: Key | null) => {
    if (!key) {
      setSelectedLocation(null);
      setSelectedItem(null);
      return;
    };

    const country = items.find(item => item.id === key)!;
    setSelectedLocation({ ...country, selectedCode: country.country } as AutocompleteLocation)
    setSelectedItem(country.id);
    setInpValue(country.completeAddress);
  }

  const onInputChange = (newValue: string) => {
    if (!newValue || !newValue?.trim()) {
      setInpValue(newValue);
      setItems([]);
      setSelectedItem(null);
      return;
    };

    setInpValue(newValue);

    if (debounceRef.current)
      clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const { ok, data, error } = await getAutocompleteLocation(selectedCountry, newValue);
        if (!ok)
          throw error;

        setItems(data!);

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
    <div className="flex flex-col">
      <div className={clsx("flex gap-2 justify-between items-center", {
        "!gap-0": grouped
      })}>

        <SelectCountryIcon
          variant={props?.variant || "bordered"}
          defaultSelectedCountry={defaultSelectedCountry}
          allowedCountries={allowedCountries}
          onSelectionChange={(country) => {
            setSelectedCountry(country.isoCode);
            onInputChange("");
          }}
          classNames={{ trigger: clsx({ 'rounded-r-none': grouped }) }}
          isInvalid={isInvalid}
          size={props?.size}
        />

        <Autocomplete
          fullWidth
          aria-label="Autocompletado de dirección"
          label={props.size === "sm" ? undefined : defaultLabel}
          placeholder={props.size !== "sm" ? undefined : defaultLabel}
          variant={props?.variant || "bordered"}
          inputValue={inpValue}
          onInputChange={onInputChange}
          isLoading={isLoading}
          items={items}
          selectedKey={selectedItem}
          onSelectionChange={onSelectionChange}
          onOpenChange={onOpenChange}
          popoverProps={{ radius: 'sm', size: 'sm' }}
          inputProps={{
            autoComplete: 'nel',
            classNames: {
              inputWrapper: clsx({
                'rounded-l-none': grouped
              }),
            }
          }}
          listboxProps={{ emptyContent: "Coloque un código postal o ciudad valida" }}
          isInvalid={isInvalid}

          {...props}
        >
          {(item) => (
            <AutocompleteItem key={item.id}  >
              {item.completeAddress}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
      {isInvalid && <span className="p-1 text-tiny text-danger">{errorMessage}</span>}
    </div>
  );
}
