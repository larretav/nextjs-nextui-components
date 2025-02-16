
"use client";
import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from 'next/navigation'

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

import StyledComponentsRegistry from "@/lib/registry";
import { AlertProvider } from "@/lib/alert-dialog/alert-dialog";

import { IconContext } from "react-icons";
// import { HashRouter, useNavigate, useHref } from "react-router-dom";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
	interface RouterConfig {
		routerOptions: NonNullable<
			Parameters<ReturnType<typeof useRouter>["push"]>[1]
		>;
	}
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();
	// const navigate = useNavigate();

	return (
		<HeroUIProvider navigate={router.push}>
			<StyledComponentsRegistry >
				<NextThemesProvider {...themeProps}>
					<IconContext.Provider value={{ size: "1.5rem" }}>
						<AlertProvider>
							{children}
						</AlertProvider>
					</IconContext.Provider>
				</NextThemesProvider>
			</StyledComponentsRegistry>
		</HeroUIProvider>
	);
}
