import { Avatar, AvatarProps } from "@heroui/avatar"
import { Button } from "@heroui/button"
import React from "react"


export const Step = ({ children, onPress, ...props }: AvatarProps & { onPress?: () => void }) => {
  return (
    <Button isIconOnly radius="full" className="bg-transparent data-[hover=true]:opacity-100" onPress={onPress}>
      {
        !React.isValidElement(children)
          ? <div className="relative z-10 grid place-items-center w-10 h-10 rounded-full bg-gray-300 text-gray-900 font-bold transition-all duration-300">{children}</div>
          : <Avatar color="default" className="bg-default-900 text-default-100" {...props} >
            {children}
          </Avatar>
      }

    </Button>
  )
}
