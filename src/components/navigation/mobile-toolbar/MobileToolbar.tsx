import { cn } from '@/lib/utils';
import { ClassNames } from '@emotion/react';
import { Button } from "@heroui/button";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import React, { ReactNode } from 'react'
import { FaChevronLeft } from 'react-icons/fa6';

type Props = {
  title: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  className?: string;
}

export const MobileToolbar = ({ endContent, startContent, title, className }: Props) => {

  return (
    <Navbar height="3rem" isBlurred={false} classNames={{ wrapper: "py-1 px-2 gap-2 bg-transparent ", base: "bg-transparent" }} className={cn(className)} >
      {
        startContent && <NavbarContent justify="start" className="data-[justify=start]:flex-grow-0 ">
          <NavbarItem >
            {startContent}
          </NavbarItem>
        </NavbarContent>
      }

      <NavbarContent justify="start" className="flex-grow">
        <NavbarItem className="text-xl font-semibold ">
          {title}
        </NavbarItem>
      </NavbarContent>

      {
        endContent && <NavbarContent justify="end" className="data-[justify=end]:flex-grow-0" >
          <NavbarItem>
            {endContent}
          </NavbarItem>
        </NavbarContent>
      }

    </Navbar>
  )
}