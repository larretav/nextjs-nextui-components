
"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { IconContext } from "react-icons";
import StyledComponentsRegistry from "@/lib/registry";


export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<IconContext.Provider value={{ size: "1.5rem" }}>
					<StyledComponentsRegistry >
						{children}
					</StyledComponentsRegistry>
				</IconContext.Provider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
