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
import { getNextUiColor, getTailwindColorHex } from "@/utils";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

type Props = TabsProps & {
  children: ReactElement<TabFilterProps> | ReactElement<TabFilterProps>[];
};

export const TabsFilters = ({ children, ...restProps }: Props) => {
  const isArray = Array.isArray(children);
  const childrenArr = isArray ? children : [children];

  const tabProps = childrenArr.map((item) => ({
    key: item.key,
    ...item.props,
  }));

  const [selected, setSelected] = React.useState<string>("");
  const [colors, setColors] = useState<Record<string, any>>({});
  const { theme = "light" } = useTheme();
  const isSSR = useIsSSR();

  const colorScale = theme === "dark" ? 900 : 100;
  const colorOpacity = theme === "dark" ? 40 : 100;

  const color = () => {
    return colors[selected.replace(".$", "")];
  };

  const handleChange = (key: any) => {
    setSelected(key);
  };

  const getBgColorChip = (color: string = "primary") => {
    return (
      getNextUiColor(color, theme, colorScale, "rgba", colorOpacity) ||
      getTailwindColorHex(color, colorScale, "rgba", colorOpacity)
    );
  };

  const getBgTextChip = (color: string = "primary") => {
    return getNextUiColor(color, theme, 600) || getTailwindColorHex(color, 600);
  };

  useEffect(() => {
    const colors = [...childrenArr].reduce(
      (prev: any, curr: any) => {
        const color = curr.props.activeColor;

        return {
          ...prev,
          [curr.key]: `bg-${color}-500 dark:bg-${color}-900`,
        };
      },
      {} as Record<string, any>,
    );

    setColors(colors);
  }, []);

  console.log(Object.keys(colors).length);

  if (Object.keys(colors).length === 0) return null;

  return (
    <NextUITabs
      aria-label="Options"
      variant="underlined"
      classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full " + color(),
        tab: "max-w-fit px-0 h-12",
      }}
      {...restProps}
      selectedKey={selected}
      onSelectionChange={handleChange}
    >
      {tabProps.map(({ value, text, key, activeColor, ...rest }, index) => {
        const color = `bg-${activeColor}-500/30 dark:bg-${activeColor}-500/30`;
        return (
          <Tab
            {...rest}
            title={
              <div className="flex items-center space-x-2">
                <span>{text}</span>
                <Chip
                  size="sm"
                  variant="flat"
                  style={{
                    backgroundColor: getBgColorChip(activeColor),
                    color: getBgTextChip(activeColor),
                  }}
                >
                  {value}
                </Chip>
              </div>
            }
          />
        );
      })}
    </NextUITabs>
  );
};
