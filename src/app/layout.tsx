
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, fontPoppins } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { GlobalNavbar, SidebarComponents } from "@/components";
import { extractCriticalToChunks } from "@/lib/emotion-ssr";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

	return (
		<html lang="en" suppressHydrationWarning>
			{
				typeof window !== 'undefined'
					? <head ></head>
					: <head>
						{extractCriticalToChunks(children).styles.map((style) => (
							<style
								key={style.key}
								data-emotion={`${style.key} ${style.ids.join(' ')}`}
								dangerouslySetInnerHTML={{ __html: style.css }}
							/>
						))}
					</head>
			}

			<body
				className={clsx(
					"font-sans antialiased",
					fontPoppins.className
				)}
			>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						<div className="flex overflow-auto relative flex-col h-dvh w-dvw">
							<GlobalNavbar />
							<main className="overflow-y-auto h-full text-foreground bg-zinc-50 dark:bg-zinc-950">
								{children}
							</main>

							<SidebarComponents />
						</div>
					</Providers>
			</body>
		</html>
	);
}
