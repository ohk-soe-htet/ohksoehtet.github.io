import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statements = [
	<>
		Full Stack Developer building digital products with a focus on{" "}
		<span className="text-emerald-600 dark:text-emerald-400">
			Open Source
		</span>{" "}
		and{" "}
		<span className="text-sky-600 dark:text-sky-400">User Experience</span>.
	</>,
	<>
		Crafting{" "}
		<span className="text-emerald-600 dark:text-emerald-400">
			pixel-perfect
		</span>{" "}
		interfaces that are fast, accessible, and{" "}
		<span className="text-sky-600 dark:text-sky-400">
			delightful to use
		</span>
		.
	</>,
	<>
		Turning complex problems into{" "}
		<span className="text-emerald-600 dark:text-emerald-400">
			simple, elegant
		</span>
		, and{" "}
		<span className="text-sky-600 dark:text-sky-400">
			scalable solutions
		</span>
		.
	</>,
];

export function HeroCard() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => (prev + 1) % statements.length);
		}, 4000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative flex size-full flex-col justify-center items-center text-center p-8 md:p-12 group">
			{/* Glassmorphism Background */}
			<div className="absolute inset-0 bg-linear-to-b from-emerald-500/10 via-sky-500/10 to-transparent backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl mask-[linear-gradient(to_bottom,black_50%,transparent)]" />

			<div className="z-10 space-y-8 md:space-y-12 max-w-4xl w-full">
				<div className="space-y-2">
					<h1 className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl text-muted-foreground">
						Ohk Soe Htet
					</h1>
				</div>

				<div className="h-60 sm:h-70 md:h-80 flex items-center justify-center relative">
					<AnimatePresence mode="wait">
						<motion.p
							key={index}
							initial={{
								opacity: 0,
								y: 20,
								filter: "blur(10px)",
							}}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							exit={{
								opacity: 0,
								y: 10,
								filter: "blur(10px)",
								position: "absolute",
							}}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-emerald-950 dark:text-emerald-100 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{statements[index]}
						</motion.p>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}
