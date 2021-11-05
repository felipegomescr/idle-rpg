import Link from "next/link";
import { Mastery } from "@/values";

export const Navigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<Link href="/carving">
				<a>{Mastery.CARVING}</a>
			</Link>
			<Link href="/cooking">
				<a>{Mastery.COOKING}</a>
			</Link>
			<Link href="/fishing">
				<a>{Mastery.FISHING}</a>
			</Link>
			<Link href="/logging">
				<a>{Mastery.LOGGING}</a>
			</Link>
			<Link href="/mining">
				<a>{Mastery.MINING}</a>
			</Link>
			<Link href="/smithing">
				<a>{Mastery.SMITHING}</a>
			</Link>
		</nav>
	);
};
