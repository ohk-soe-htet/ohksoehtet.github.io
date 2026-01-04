import { motion } from "framer-motion";
import {
	SiMongodb,
	SiReact,
	SiNodedotjs,
	SiTypescript,
	SiTailwindcss,
	SiPython,
	SiDart,
	SiDocker,
	SiPostgresql,
	SiGit,
} from "react-icons/si";

const icons = [
	{ Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
	{ Icon: SiReact, name: "React", color: "text-blue-400" },
	{ Icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
	{ Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
	{ Icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
	{ Icon: SiPython, name: "Python", color: "text-yellow-500" },
	{ Icon: SiDart, name: "Dart", color: "text-blue-500" },
	{ Icon: SiDocker, name: "Docker", color: "text-blue-500" },
	{ Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
	{ Icon: SiGit, name: "Git", color: "text-orange-600" },
];

export function TechMarquee() {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-background/50 p-6 transition-all duration-300 hover:bg-background/80">
			<div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:mask-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
			<h3 className="z-10 mb-4 text-lg font-semibold tracking-tight text-foreground/80">
				The Arsenal
			</h3>
			<div className="group flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
				<motion.div
					animate={{ x: "-50%" }}
					transition={{
						duration: 20,
						ease: "linear",
						repeat: Infinity,
					}}
					className="flex flex-none gap-8 pr-8">
					{[...icons, ...icons].map((tech, index) => (
						<div
							key={index}
							className="flex items-center justify-center transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0">
							<tech.Icon className={`h-8 w-8 ${tech.color}`} />
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
