import { formatTime } from "@/helpers";

import css from "./index.module.css";

type ProgressBarProps = {
	duration: number;
	loop?: boolean;
};

export const ProgressBar = ({ duration, loop }: ProgressBarProps) => {
	const loopValue = `${loop ? "infinite" : ""}`;

	return (
		<div className={css.progressBarContainer}>
			<div
				className={css.progressBar}
				style={{
					animation: `${css.progressBarAnimation} ${formatTime(duration)} linear ${loopValue}`,
				}}
			/>
		</div>
	);
};
