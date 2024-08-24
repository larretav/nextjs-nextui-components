'use client';
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { OnSiteIconSolid, OnSiteIconSolid2 } from '@/components/icons';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { FaBars, FaBell, FaUser } from 'react-icons/fa6';
import { Badge } from '@nextui-org/badge';
import { OSHamburguerButton } from '../drawer/OSHamburguerButton';
import Link from 'next/link';


export const OSNavbar = () => {

  return (
    <Navbar maxWidth="xl" position="sticky" classNames={{ wrapper: "pl-2 pr-3 bg-default-50 rounded-xl" }}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand>
          <OSHamburguerButton > <FaBars /> </OSHamburguerButton>
          <Link href="/">
            <OnSiteIconSolid size={50} className="inline-flex md:hidden" />
            <OnSiteIconSolid2 size={80} className="hidden md:inline-block" />
          </Link>
        </NavbarBrand >
      </NavbarContent>

      <NavbarContent justify="center" >
        <NavbarItem>Dashboard</NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Badge color="danger" content={5} shape="circle" >
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
            <DropdownItem key="option-1">Opción 1</DropdownItem>
            <DropdownItem key="option-2">Opción 1</DropdownItem>
            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );

}
