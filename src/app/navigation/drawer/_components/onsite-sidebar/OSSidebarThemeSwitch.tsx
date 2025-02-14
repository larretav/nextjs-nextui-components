'use client';
import { Switch, SwitchProps } from '@nextui-org/switch';
import { extendVariants } from '@nextui-org/system';
import { useTheme } from 'next-themes';
import React, { use, useEffect, useState } from 'react'


const MySwitch = extendVariants(Switch, {
  variants: {
    color: {
      blue: {
        wrapper: "group-data-[selected=true]:bg-primary"
      }
    }
  }
})

export const OSSidebarThemeSwitch = (props: typeof MySwitch) => {

  const { theme, setTheme } = useTheme();

  const [isSelected, setIsSelected] = useState(theme === 'dark');
  const [isLoaded, setIsLoaded] = useState(false);


  const onChange = (newValue: boolean) => {
    setIsSelected(newValue);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return null;

  return (
    <MySwitch color="blue" {...props} isSelected={isSelected} onValueChange={onChange} />
  )
}