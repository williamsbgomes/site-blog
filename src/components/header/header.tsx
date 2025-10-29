import Link from "next/link";
import { useRouter } from "next/router";
import { ActiveLink } from "@/components/active-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
	const router = useRouter();
	const isHomePage = router.pathname === "/";
	const isBlogPage = router.pathname.startsWith("/blog");

	return (
		<header
			className={`
				fixed top-0 z-50 w-full border-b border-white/10 bg-background/95
				backdrop-blur supports-[backdrop-filters]:bg-background/60
			`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
				<div className="flex items-center justify-between h-16">
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
