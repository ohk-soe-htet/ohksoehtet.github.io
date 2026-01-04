import { motion } from "framer-motion";

export function MindsetCard() {
	return (
		<div className="relative flex size-full flex-col justify-center p-6 group">
			{/* Abstract Animated Background */}
			<motion.div
				className="absolute -right-20 -bottom-20 size-64 rounded-full bg-rose-500/10 blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<div className="z-10">
				<h3 className="text-xs font-medium uppercase tracking-wider text-rose-600 dark:text-rose-300 mb-2 flex items-center gap-2">
					<span className="inline-block size-1.5 rounded-full bg-rose-500" />
					Current Philosophy
				</h3>
				<blockquote className="text-xl font-bold leading-tight tracking-tight text-rose-950 dark:text-rose-100">
					"1% better every day."
				</blockquote>
				<cite className="mt-4 block text-sm font-medium not-italic text-rose-600/80 dark:text-rose-300/80">
					— James Clear
				</cite>
			</div>
		</div>
	);
}
