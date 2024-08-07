import { getNextUiColorHex, getTailwindColorHex } from '@/app/utils'
import { Button } from '@nextui-org/button'
import { colors, semanticColors } from '@nextui-org/theme'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React, { cloneElement, ReactElement } from 'react'

type Props = {
  label: string,
  icon: ReactElement,
  activeIcon?: ReactElement,
  iconSize?: 24
}



const BottomNavigationBarItem = ({ label, icon, activeIcon, iconSize = 24, ...props }: Props) => {

  const { index, value, onClick, color } = props as any;
  const isActive = index === value;

  const { theme = 'light' } = useTheme()
  const hexColor = !getTailwindColorHex(color) ? getNextUiColorHex(color, theme) : getTailwindColorHex(color);
  // const hexTextColor = !getTailwindColorHex(color) ? getNextUiColorHex(color, theme, 600) : getTailwindColorHex(color, 600);
  // const hexIconColor = !getTailwindColorHex(color) ? getNextUiColorHex(color, theme, 700) : getTailwindColorHex(color, 700);

  return (
    <Button
      disableAnimation
      onClick={(e) => { onClick ? onClick(e, index) : null }} className="flex-col py-2 px-0 h-fit min-w-fit bg-transparent" >
      <div className="w-fit py-1 px-5 box-border flex justify-center relative ">

        <span className={clsx(
          "h-full box-border absolute top-0 bottom-0 m-auto opacity-30 rounded-full animate-bg-expand",
          {
            "w-full": isActive,
            "hidden": !isActive 
          }
        )} style={{ backgroundColor: hexColor }} />
        <span>
          {
            isActive
              ? cloneElement(activeIcon ?? icon, { size: iconSize })
              : cloneElement(icon, { size: iconSize })
          }
        </span>
      </div>

      <span className={clsx("transition-[font-weight] duration-100 box-border text-tiny ", {
        "font-normal": !isActive,
        "font-extrabold": isActive
      }
      )} >{label}</span>


    </Button>
  )
}

export default BottomNavigationBarItem