import Link from "next/link";

export const SkillNavigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<Link href="/mining">
				<a>Mining</a>
			</Link>
			<Link href="/woodcutting">
				<a>Woodcutting</a>
			</Link>
		</nav>
	);
};
