import NextLink from "next/link";
import { Mastery } from "@/enumerators";

export const Navigation = () => {
	return (
		<nav className="p-4 space-x-4">
			<NextLink href="/masteries/cooking">
				<a>{Mastery.COOKING}</a>
			</NextLink>
			<NextLink href="/masteries/fishing">
				<a>{Mastery.FISHING}</a>
			</NextLink>
			<NextLink href="/masteries/foraging">
				<a>{Mastery.FORAGING}</a>
			</NextLink>
			<NextLink href="/masteries/mining">
				<a>{Mastery.MINING}</a>
			</NextLink>
			<NextLink href="/masteries/mixing">
				<a>{Mastery.MIXING}</a>
			</NextLink>
			<NextLink href="/masteries/smithing">
				<a>{Mastery.SMITHING}</a>
			</NextLink>
		</nav>
	);
};
