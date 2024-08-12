'use client';
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { OnSiteIconSolid } from '@/components/icons';
import HamburguerButton from '@/components/ui/nav-bar/HamburguerButton';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { FaBars, FaBell, FaUser } from 'react-icons/fa6';
import { Badge } from '@nextui-org/badge';

type Props = {}

const OSNavbar = (props: Props) => {
  return (
    <Navbar>
      <NavbarBrand>
        <HamburguerButton > <FaBars size={24} /> </HamburguerButton>
        <OnSiteIconSolid size={56} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Dashboard
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Badge color="danger" content={5} shape="circle">
          <FaBell size={24} className="text-default-600" />
        </Badge>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              classNames={{base: "bg-blue-500", icon: "text-white"}}
              size="sm"
              icon={<FaUser />}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" >
            <DropdownItem key="configurations">Opción 1</DropdownItem>
            <DropdownItem key="configurations">Opción 1</DropdownItem>
            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );

}

export default OSNavbar