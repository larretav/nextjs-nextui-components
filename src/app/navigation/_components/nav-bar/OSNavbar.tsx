'use client';
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { OnSiteIconSolid } from '@/components/icons';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { FaBars, FaBell, FaUser } from 'react-icons/fa6';
import { Badge } from '@nextui-org/badge';
import { HamburguerButton } from '@/components';


export const OSNavbar = () => {

  return (
    <Navbar maxWidth="xl" position="sticky" classNames={{wrapper: "pl-2 pr-3 bg-default-50 rounded-xl"}}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <HamburguerButton > <FaBars /> </HamburguerButton>
          <OnSiteIconSolid size={56} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" >
        <NavbarItem>Dashboard</NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Badge color="danger" content={5} shape="circle">
          <FaBell />
        </Badge>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              size="sm"
              color="primary"
              icon={<FaUser size={15} />}
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
