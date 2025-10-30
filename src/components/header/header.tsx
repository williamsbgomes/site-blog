import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "@/components/active-link";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header
			className={`
				fixed top-0 z-50 w-full border-b border-white/10 bg-background/95
				backdrop-blur supports-[backdrop-filters]:bg-background/60
			`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
				<div className="flex items-center justify-between h-16">
					<Link href="/">
						<Image src="/logo.svg" alt={"Logo"} width={116} height={32} />
					</Link>

					<nav className="flex items-center gap-6">
						<ActiveLink href="/">Início</ActiveLink>
						<ActiveLink href="/blog">Blog</ActiveLink>
						<Button variant="secondary" asChild>
							<Link href="/comecar">Começar</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}
