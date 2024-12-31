
"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { IconContext } from "react-icons";
import StyledComponentsRegistry from "@/lib/registry";
import { cache as emotionCache } from '../lib/emotion-ssr';
import { CacheProvider } from "@emotion/react";
import { AlertProvider } from "@/lib/alert-dialog/alert-dialog";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();

	return (
		<CacheProvider value={emotionCache}>
			<NextUIProvider navigate={router.push}>
				<StyledComponentsRegistry >
					<NextThemesProvider {...themeProps}>
						<IconContext.Provider value={{ size: "1.5rem" }}>
							<AlertProvider>
								{children}
							</AlertProvider>
						</IconContext.Provider>						
					</NextThemesProvider>
				</StyledComponentsRegistry>
			</NextUIProvider>
		</CacheProvider>
	);
}
