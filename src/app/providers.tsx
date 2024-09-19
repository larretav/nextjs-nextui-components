
"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { IconContext } from "react-icons";
import StyledComponentsRegistry from "@/lib/registry";
import createEmotionCache from '../lib/emotion-ssr';
import { CacheProvider } from "@emotion/react";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

// Crea una instancia de caché para Emotion
const clientSideEmotionCache = createEmotionCache();

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter();

	return (
		<CacheProvider value={clientSideEmotionCache}>
			<NextUIProvider navigate={router.push}>
				<StyledComponentsRegistry >
					<NextThemesProvider {...themeProps}>
						<IconContext.Provider value={{ size: "1.5rem" }}>
							{children}
						</IconContext.Provider>
					</NextThemesProvider>
				</StyledComponentsRegistry>
			</NextUIProvider>
		</CacheProvider>
	);
}
