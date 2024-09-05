"use client";
import { Chip } from "@nextui-org/chip";
import {
  Tabs as NextUITabs,
  Tab,
  TabItemProps,
  TabsProps,
} from "@nextui-org/tabs";
import React, {
  Children,
  cloneElement,
  Key,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { TabFilter, TabFilterProps } from "./TabFilter";
import { getNextUiColor, getNextUIOrTailwindColor, getTailwindColorHex, ThemeName } from "@/utils";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

type Props = TabsProps & {
  // children: ReactElement<TabFilterProps> | ReactElement<TabFilterProps>[];
};

export const TabsFilters = ({ children, ...restProps }: Props) => {

  // console.log(typeof children === "function" && children({}))

  const { theme = "light" } = useTheme();
  const colorScale = theme === "dark" ? 900 : 100;
  const colorOpacity = theme === "dark" ? 30 : 100;

  const isArray = Array.isArray(children);
  const childrenArr = isArray ? children : [children];

  const tabProps = childrenArr.map((item) => ({
    key: item.key,
    ...item.props,
  }));

  const colorKeys = tabProps.reduce(
    (prev: any, curr: any) => {
      const color = getNextUiColor(curr.activeColor, theme as ThemeName, 500, "hex", curr.activeColorOpacity) || getTailwindColorHex(curr.activeColor, colorScale, "hex", colorOpacity)
      return {
        ...prev,
        [curr.key]: `bg-${curr.activeColor}-500`,
        // [curr.key]: `bg-${color}-500`,
      };
    },
    {} as Record<string, any>,
  );

  const [selected, setSelected] = React.useState<string>("");

  const isSSR = useIsSSR();

  const handleChange = (key: any) => {
    setSelected(key);
  };

  const getBgColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, "light", colorScale, "rgba", colorOpacity);
  };

  const getTextColorChip = (color: string = "primary") => {
    return getNextUIOrTailwindColor(color, theme as ThemeName, 500, "hex", 100);
  };

  if (isSSR) return null;

  return (
    <NextUITabs
      aria-label="Options"
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full dark:bg-opacity-70 " + colorKeys[selected.replace(".$", "")],
        tab: "max-w-fit px-0 h-12",
      }}
      {...restProps}
      selectedKey={selected}
      onSelectionChange={handleChange}
    >

      {

        typeof children == "function" && ((item: any) => {
          const childs = cloneElement(children(item))
          return <Tab key={item.key} title={item.text} />
        })
      }


      {/* {tabProps.map(({ value, text, key, activeColor, ...rest }, index) => (
        <Tab
          key={key}
          {...rest}
          title={
            <div className="flex items-center space-x-2 ">
              <span>{text}</span>
              <Chip
                size="sm"
                variant="flat"
                radius="sm"
                style={{
                  backgroundColor: getBgColorChip(activeColor),
                  color: getTextColorChip(activeColor),
                }}
              >
                {value}
              </Chip>
            </div>
          }
        />
      )
      )} */}
    </NextUITabs>
  );
};
