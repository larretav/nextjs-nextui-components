'use client';

import {
	Navbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@heroui/navbar";

import NextLink from "next/link";
import { FaBars, FaBell, FaUser } from "react-icons/fa6";
import { Badge } from "@heroui/badge";
import { Avatar } from "@heroui/avatar";
import { HamburguerButton } from "./HamburguerButton";
import { ThemeSwitch } from "@/components/inputs/ThemeSwitch";
import { usePathname } from "next/navigation";
import { useMemo } from "react";


export const GlobalNavbar = () => {

	const hideInPaths = useMemo(() => ([
		'/os-pages/landing',
		'/os-pages/login',
		'/os-pages/register'
	]), [])

	const pathname = usePathname();

	if (hideInPaths.includes(pathname)) return null;

	return (
		<Navbar maxWidth="xl" position="sticky" >
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start" >
				<NavbarBrand className="flex gap-3" >
					<HamburguerButton > <FaBars size={24} /> </HamburguerButton>
					<NextLink href="/" className="text-xl font-bold" >Componentes NextUI</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="end" >
				<NavbarItem className="flex gap-2" >
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</Navbar >
	);
};
