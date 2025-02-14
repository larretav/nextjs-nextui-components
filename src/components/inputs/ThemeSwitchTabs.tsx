'use client';
import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { Key, useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

export const ThemeSwitchTabs = () => {

  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR();
  const [selected, setSelected] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false)



  const handleChange = (key: any) => {
    setTheme(key as string);
    setSelected(key)
  }

  useEffect(() => {
    setIsLoaded(true)
    setSelected(theme)
  }, [theme])

  if (isSSR) return <span>{isSSR ? "Server" : "Client"}</span>
  if (!isLoaded) return null;

  return (
    <Tabs
      aria-label="Theme Switch"
      selectedKey={selected}
      onSelectionChange={handleChange}
      classNames={{ tabList: 'w-full', base: "w-full" }}
      radius="sm"
    >
      <Tab
        key="dark"
        title={
          <div className="flex items-center space-x-2">
            <FaMoon size={20} />
            <span>Dark</span>
          </div>}

      />
      <Tab key="light" title={
        <div className="flex items-center space-x-2">
          <MdOutlineWbSunny size={20} />
          <span>Light</span>
        </div>} />
    </Tabs>
  );
}