import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

interface LayoutProps {
	children: React.ReactNode;
}

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
	subsets: ["latin"],
	weight: ["700"],
	variable: "--font-pt-sans-caption",
});

export function Layout({ children }: LayoutProps) {
	return (
		<div
			className={`
				${inter.className} ${ptSansCaption.className}
				w-full flex flex-col relative min-h-screen bg-gray-700
			`}
		>
			<Header />
			<main className="flex flex-1 flex-col mb-12">{children}</main>
			<Footer />
		</div>
	);
}
