import Link from "next/link";

export const Navigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<Link href="/logging">
				<a>Logging</a>
			</Link>
			<Link href="/mining">
				<a>Mining</a>
			</Link>
			<Link href="/smithing">
				<a>Smithing</a>
			</Link>
		</nav>
	);
};
