import Link from "next/link";
import { Mastery } from "@/values";

export const Navigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<Link href="/masteries/carving">
				<a>{Mastery.CARVING}</a>
			</Link>
			<Link href="/masteries/cooking">
				<a>{Mastery.COOKING}</a>
			</Link>
			<Link href="/masteries/fishing">
				<a>{Mastery.FISHING}</a>
			</Link>
			<Link href="/masteries/logging">
				<a>{Mastery.LOGGING}</a>
			</Link>
			<Link href="/masteries/mining">
				<a>{Mastery.MINING}</a>
			</Link>
			<Link href="/masteries/smithing">
				<a>{Mastery.SMITHING}</a>
			</Link>
		</nav>
	);
};
