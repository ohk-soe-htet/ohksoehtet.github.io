import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { motion } from "framer-motion";

export function LocationCard() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	// Singapore Time Zone
	const sgTime = toZonedTime(time, "Asia/Singapore");

	return (
		<div className="relative flex size-full flex-col justify-center items-center p-6 group text-center">
			{/* Abstract Animated Background */}
			<motion.div
				className="absolute -right-20 -top-20 size-64 rounded-full bg-teal-500/10 blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute -left-20 -bottom-20 size-64 rounded-full bg-rose-500/10 blur-3xl"
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
			/>

			<div className="z-10 flex flex-col items-center gap-1">
				<span className="text-xs font-medium text-teal-600 dark:text-teal-300 tracking-widest uppercase">
					Singapore
				</span>
				<div className="text-3xl font-bold tracking-tighter tabular-nums text-teal-950 dark:text-teal-100">
					{format(sgTime, "HH:mm")}
				</div>
				<div className="text-xs font-medium text-teal-600/80 dark:text-teal-300/80">
					GMT+8
				</div>
			</div>
		</div>
	);
}
