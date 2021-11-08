import { formatTimeToSecondsText } from "@/helpers";

type ProgressBarProps = {
	duration: number;
	loop?: boolean;
};

export const ProgressBar = ({ duration, loop }: ProgressBarProps) => {
	const loopValue = `${loop ? "infinite" : ""}`;

	return (
		<>
			<div className="relative w-full h-4 border border-gray-900">
				<div
					className="w-full h-full origin-left bg-blue-600"
					style={{
						animation: `progressBarAnimation ${formatTimeToSecondsText(duration)} linear ${loopValue}`,
					}}
				/>
			</div>
			<style jsx>
				{`
					@keyframes progressBarAnimation {
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
