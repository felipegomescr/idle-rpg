import { ClockIcon } from "@heroicons/react/solid";
import Tooltip from "@reach/tooltip";
import { formatTimeToSecondsText } from "@/helpers";

type ProgressBarProps = {
	duration: number;
	loop?: boolean;
	play?: boolean;
};

export const ProgressBar = ({ duration, loop, play }: ProgressBarProps) => {
	const loopValue = `${loop ? "infinite" : ""}`;

	return (
		<>
			<div className="flex items-center h-10 p-2 space-x-2 bg-gray-900 rounded">
				<Tooltip label="Time to completion.">
					<div>
						<ClockIcon className="w-5 h-5" />
					</div>
				</Tooltip>
				<div className="relative flex items-center justify-center w-full h-full bg-gray-700">
					<div className="z-10 font-medium">{formatTimeToSecondsText(duration)}</div>
					{play && (
						<div
							className="absolute w-full h-full origin-left bg-gradient-to-r from-blue-600 to-blue-400"
							style={{
								animation: `fillAnimation ${formatTimeToSecondsText(duration)} linear ${loopValue}`,
							}}
						/>
					)}
				</div>
			</div>
			<style jsx>
				{`
					@keyframes fillAnimation {
						from {
							transform: scaleX(0);
						}

						to {
							transform: scaleX(1);
						}
					}
				`}
			</style>
		</>
	);
};
