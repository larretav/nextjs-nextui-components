'use client';
import { ListboxItem, ListboxItemProps } from "@nextui-org/listbox";
import { Skeleton } from "@nextui-org/skeleton";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = ListboxItemProps & {
  isActive: boolean
};

const ListItem = ({ isActive, key, ...props }: Props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  if (!isLoaded) return <Skeleton className="rounded-xl h-4" />

  return (
    <ListboxItem
      {...props}
      key={key}
      classNames={{
        base: clsx(
          "py-2 px-4 transition-colors ", {
          "py-2 border-0 bg-green-600/20 text-green-700 data-[hover=true]:bg-green-600/20 data-[hover=true]:text-green-700 dark:text-green-600 border-0 transition-colors": isActive
        }),
        title: clsx(
          "text-medium",
          {
            "font-semibold": isActive
          })
      }}


    >

    </ListboxItem>
  )
}

export default ListItem