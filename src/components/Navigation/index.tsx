import Link from "next/link";
import { Mastery } from "@/enums";

export const Navigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<Link href="/masteries/cooking">
				<a>{Mastery.COOKING}</a>
			</Link>
			<Link href="/masteries/fishing">
				<a>{Mastery.FISHING}</a>
			</Link>
			<Link href="/masteries/foraging">
				<a>{Mastery.FORAGING}</a>
			</Link>
			<Link href="/masteries/mining">
				<a>{Mastery.MINING}</a>
			</Link>
			<Link href="/masteries/mixing">
				<a>{Mastery.MIXING}</a>
			</Link>
			<Link href="/masteries/smithing">
				<a>{Mastery.SMITHING}</a>
			</Link>
		</nav>
	);
};
