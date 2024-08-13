
import {
	Navbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/navigation/ThemeSwitch";
import { FaBars, FaBell, FaUser } from "react-icons/fa6";
import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";
import { HamburguerButton } from "./HamburguerButton";


export const GlobalNavbar = () => {


	return (
		<Navbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand >
					<HamburguerButton > <FaBars size={24} /> </HamburguerButton>

					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">Title App</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</Navbar >
	);
};
