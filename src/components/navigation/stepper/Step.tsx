import { cn } from "@/lib/utils"
import { Avatar, AvatarProps } from "@heroui/avatar"
import { Button } from "@heroui/button"
import clsx from "clsx"
import React, { useMemo } from "react"

type Props = AvatarProps & {
  onPress?: () => void;
  isIconOnly?: boolean;
  className?: string
}



export const Step = ({ isIconOnly, onPress, children, ...props }: Props) => {

  const isValidElement = useMemo(() => {

    return Array.isArray(children)
      ? React.isValidElement(children[0])
      : React.isValidElement(children);

  }, [isIconOnly])

  console.log(children)

  return (
    <>
      {!isValidElement && <div onClick={onPress} className={cn(props?.className, clsx("relative z-10 grid place-items-center min-w-10 min-h-10 p-2 box-border bg-content2 rounded-full font-bold transition-all duration-300", {
        "cursor-pointer active:scale-[.97]": onPress
      }))}>{children}</div>}

      {isValidElement && !isIconOnly && <div onClick={onPress} className={cn(props?.className, clsx("z-10 w-fit", {
        "cursor-pointer": onPress
      }))}>
        {children}
      </div>}

      

      {isValidElement && isIconOnly && <Button
        isIconOnly
        disableRipple={!onPress}
        radius="full"
        className={cn("bg-transparent data-[hover=true]:opacity-[100]", clsx({
          "cursor-default": onPress
        }))}
        onPress={onPress}
      >
        <Avatar color="default" fallback={children} className="bg-default-900 text-default-100" {...props} />
      </Button>}
    </>
  )
}
