import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface LayoutProps {
	children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: LayoutProps) {
	return (
		<div
			className={`
				${inter.className} flex flex-col relative min-h-screen bg-gray-700
			`}
		>
			<Header />
			<main className="flex flex-1 flex-col mb-12">{children}</main>
			<Footer />
		</div>
	);
}
