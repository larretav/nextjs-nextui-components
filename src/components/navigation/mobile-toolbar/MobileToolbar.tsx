import { Button } from "@heroui/button";
import { Navbar, NavbarContent, NavbarItem } from "@heroui/navbar";
import React, { ReactNode } from 'react'
import { FaChevronLeft } from 'react-icons/fa6';

type Props = {
  title: string;
  startContent?: ReactNode,
  endContent?: ReactNode,
}

export const MobileToolbar = ({ endContent, startContent = <FaChevronLeft size={20} className="text-default-400" />, title }: Props) => {

  return (
    <Navbar maxWidth="full" position="sticky" classNames={{ wrapper: "py-1 px-2 bg-default-50" }}>
      <NavbarContent justify="start" className="data-[justify=start]:flex-grow-0 px">
        <NavbarItem >
          <Button
            isIconOnly
            variant="light"
            radius="full"
          >
            {startContent}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="start" className="flex-grow">
        <NavbarItem className="text-2xl font-semibold text-default-700">

          {title}
        </NavbarItem>
      </NavbarContent>

      {

        endContent && <NavbarContent justify="end" className="data-[justify=end]:flex-grow-0" >
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              radius="full"
            >
              {endContent}
            </Button>
          </NavbarItem>
        </NavbarContent>
      }

    </Navbar>
  )
}