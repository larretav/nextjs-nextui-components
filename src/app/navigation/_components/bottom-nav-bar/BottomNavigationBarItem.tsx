import { Button } from '@nextui-org/button'
import clsx from 'clsx'
import React, { cloneElement, ReactElement } from 'react'

type Props = {
  label: string,
  icon: ReactElement,
  activeIcon?: ReactElement,
  iconSize?: 24
}

const BottomNavigationBarItem = ({ label, icon, activeIcon, iconSize = 24, ...props }: Props) => {
  const index = 0;
  const isActive = false;

  return (
    <Button
      disableAnimation
      onClick={(e) => { }} className="flex-col py-2 px-0 h-fit min-w-fit bg-transparent" >
      <div className="w-fit py-1 px-5 box-border flex justify-center relative ">

        <span className={clsx(
          "h-full box-border absolute top-0 bottom-0 m-auto bg-primary-500 opacity-30 rounded-full animate-expand",
          {
            "w-full": index === index,
            "hidden": index !== index
          }
        )} />
        <span>
          {
            index === index
              ? cloneElement(activeIcon ?? icon, { size: iconSize })
              : cloneElement(icon, { size: iconSize })
          }
        </span>
      </div>

      <span className={clsx("transition-all box-border text-tiny ", {
        "font-normal": !isActive,
        "font-extrabold": isActive
      }
      )}>{label}</span>


    </Button>
  )
}

export default BottomNavigationBarItem