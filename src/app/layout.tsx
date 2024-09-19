
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { GlobalNavbar, SidebarComponents } from "@/components";
import { constructStyleTagsFromChunks, extractCriticalToChunks } from "@/lib/emotion-ssr";

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	if (typeof window === 'undefined') {
		const emotionChunks = extractCriticalToChunks(children);
		const emotionStyleTags = constructStyleTagsFromChunks(emotionChunks);

		return (
			<html lang="en">
				<head>
					<style
						data-emotion-css={emotionChunks.ids.join(' ')}
						dangerouslySetInnerHTML={{ __html: emotionChunks.css }}
					/>
					{emotionStyleTags}
				</head>
				<body className={inter.className}>{children}</body>
			</html>
		);
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="flex overflow-auto relative flex-col h-dvh w-dvw">
						<GlobalNavbar />
						<main className="container">
							{children}
						</main>

						<SidebarComponents />
					</div>
				</Providers>
			</body>
		</html>
	);
}
