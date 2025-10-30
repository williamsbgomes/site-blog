import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import type React from "react";
import { cn } from "@/lib/utils";

// type ActiveLinkProps = {
// 	children: React.ReactNode;
// } & LinkProps;

interface ActiveLinkProps extends LinkProps {
	children: React.ReactNode;
}

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {
	const router = useRouter();
	const isCurrentPath =
		router.asPath === href ||
		router.asPath === props.as ||
		router.asPath.startsWith(String(props.as));

	return (
		<Link
			href={href}
			className={cn(
				"text-sm font-medium transition-colors hover:text-blue-500",
				isCurrentPath ? "text-blue-500" : "text-muted-foreground",
			)}
		>
			{children}
		</Link>
	);
}
