import Link from "next/link";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
	return (
		<nav>
			<Link href="/mining">
				<a>Mining</a>
			</Link>
			<Link href="/woodcutting">
				<a>Woodcutting</a>
			</Link>
		</nav>
	);
};

export default HomePage;
