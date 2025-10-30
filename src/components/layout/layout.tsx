import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface LayoutProps {
	children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col relative min-h-screen dark">
			<Header />
			<main className="flex flex-1 flex-col mb-12">{children}</main>
			<Footer />
		</div>
	);
}
