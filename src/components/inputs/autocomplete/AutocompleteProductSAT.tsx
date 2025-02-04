'use client';
import { getAutoProductSAT } from '@/actions'
import ProductSATModel from '@/models/sat/product-sat.model'
import { Autocomplete, AutocompleteItem, AutocompleteProps, MenuTriggerAction } from '@nextui-org/autocomplete'
import { get } from 'http';
import React, { forwardRef, Key, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'


export type AutocompleteProductSATProps = Omit<AutocompleteProps<ProductSATModel>, "children"> & {
  onSelectedItem: (productSAT: ProductSATModel | null) => void,
  defaultValue?: string
}

const AutocompleteProductSAT = forwardRef<HTMLInputElement, AutocompleteProductSATProps>(({ description, classNames, className, isInvalid, onSelectedItem, defaultValue, ...props }: AutocompleteProductSATProps, ref) => {

  const debounceRef = useRef<any>();

  const [items, setItems] = useState<ProductSATModel[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [inpValue, setInpValue] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const getProducSATItems = async (search: string) => {
    setIsLoading(true);
    try {
      const { ok, data, error } = await getAutoProductSAT(search);
      if (!ok)
        throw error;

      setItems(data!);
      setIsLoading(false);

      return data;

    } catch (error: any) {
      toast.error(error)
    }

    setIsLoading(false);
  }

  const onSelectionChange = (key: Key | null) => {
    if (!key) {
      onSelectedItem(null);
      setSelectedItem(null);
      return;
    };

    const productSAT = items.find(item => item.key === key)!;
    onSelectedItem(productSAT);
    setSelectedItem(productSAT.key);
    setInpValue(productSAT.description);
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
      getProducSATItems(newValue);
    }, 300);
  }

  const onOpenChange = (isOpen: boolean, menuTrigger: MenuTriggerAction) => {
    if (menuTrigger === "manual" && isOpen) {
      setInpValue(inpValue);
      setSelectedItem(selectedItem);
      setItems(items)
    }
  };

  useEffect(() => {
    if (defaultValue) {
      getProducSATItems(defaultValue).then((data) => {
        
        if (!data) return

        setInpValue(data[0].description);
        onSelectedItem(data[0]);
        setSelectedItem(data[0].key);

      });
    }
  }, [])


  return (
    <Autocomplete
      ref={ref}
      fullWidth
      aria-label="Autocompletado de Product SAT"
      variant="bordered"
      inputValue={inpValue}
      onInputChange={onInputChange}
      isLoading={isLoading}
      items={items}
      selectedKey={selectedItem}
      onSelectionChange={onSelectionChange}
      onOpenChange={onOpenChange}
      popoverProps={{ radius: 'sm' }}
      inputProps={{ autoComplete: 'nel' }}
      isInvalid={isInvalid}
      {...props}
    >
      {(item) => (
        <AutocompleteItem key={item.key} >
          {item.description}
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
})

AutocompleteProductSAT.displayName = "AutocompleteProductSAT";

export { AutocompleteProductSAT };