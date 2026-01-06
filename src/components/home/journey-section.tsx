import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { WikiLink } from "@/components/ui/wiki-link";

interface JourneyItem {
	id: number;
	year: string;
	title: string;
	description: React.ReactNode;
	context?: string;
}

const journeyItems: JourneyItem[] = [
	{
		id: 1,
		year: "2019 — 2021",
		title: "The Interruption",
		context: "Yangon Technological University",
		description: (
			<>
				It began at{" "}
				<WikiLink
					href="https://en.wikipedia.org/wiki/Yangon_Technological_University"
					description="The premier engineering university in Myanmar, known for its rigorous curriculum and selective admission.">
					Yangon Technological University
				</WikiLink>
				, Myanmar's premier engineering institute. I was diving deep
				into Computer Engineering and IT, building my foundation. Then,
				the world stopped. A global pandemic combined with{" "}
				<WikiLink
					href="https://en.wikipedia.org/wiki/2021_Myanmar_coup_d%27%C3%A9tat"
					description="The 2021 military coup d'état in Myanmar that led to widespread protests and the disruption of the civil government.">
					political upheaval
				</WikiLink>{" "}
				brought formal education to a halt. But standing still wasn't an
				option.
			</>
		),
	},
	{
		id: 2,
		year: "2021 — 2022",
		title: "The Forge",
		context: "Self-Taught & First Professional Key",
		description: (
			<>
				While universities remained closed, I opened my code editor. I
				pivoted to self-learning, mastering JavaScript and modern web
				technologies. This resilience led to my first professional role
				as a Junior Software Engineer. For over a year, I built
				real-world solutions in a fast-paced environment, learning that
				code is more than syntax—it's about solving problems.
			</>
		),
	},
	{
		id: 3,
		year: "2023 — Present",
		title: "The Ascent",
		context: "Temasek Polytechnic, Singapore",
		description: (
			<>
				Seeking a global perspective, I made the move to Singapore. I
				enrolled in{" "}
				<WikiLink
					href="https://www.tp.edu.sg/schools-and-courses/students/schools/iit/information-technology.html"
					description="A leading institution of higher learning in Singapore, emphasizing applied learning specifically in technology and design.">
					Temasek Polytechnic
				</WikiLink>{" "}
				to formalize my knowledge and challenge myself in a new
				environment. Now, blending my previous professional experience
				with rigorous academic training, I'm preparing to graduate in
				2026—ready to build the future.
			</>
		),
	},
];

export function JourneySection() {
	const [activeId, setActiveId] = useState<number | null>(1);

	return (
		<section className="py-24">
			<div className="text-center space-y-4 mb-16">
				<h2 className="text-3xl font-bold tracking-tight">
					My Journey
				</h2>
				<p className="text-muted-foreground">
					The path that brought me here.
				</p>
			</div>

			<div className="mx-auto max-w-3xl space-y-4">
				{journeyItems.map((item) => (
					<motion.div
						key={item.id}
						initial={false}
						onClick={() =>
							setActiveId(activeId === item.id ? null : item.id)
						}
						className={cn(
							"group relative rounded-3xl border p-6 transition-all duration-300 cursor-pointer",
							activeId === item.id
								? "bg-white/40 dark:bg-white/10 border-emerald-500/30 shadow-lg backdrop-blur-xl z-20"
								: "bg-white/10 dark:bg-white/5 border-white/10 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/20 z-0"
						)}>
						<div className="flex items-center justify-between gap-4">
							<div className="flex flex-col gap-1">
								<span
									className={cn(
										"text-sm font-medium transition-colors",
										activeId === item.id
											? "text-emerald-600 dark:text-emerald-400"
											: "text-muted-foreground"
									)}>
									{item.year}
								</span>
								<h3
									className={cn(
										"text-xl font-bold tracking-tight transition-colors",
										activeId === item.id
											? "text-foreground"
											: "text-foreground/80"
									)}>
									{item.title}
								</h3>
							</div>
							{item.context && (
								<span className="hidden sm:block text-xs font-medium text-muted-foreground/60 uppercase tracking-widest text-right max-w-30">
									{item.context}
								</span>
							)}
						</div>

						<AnimatePresence initial={false}>
							{activeId === item.id && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{
										height: "auto",
										opacity: 1,
									}}
									exit={{
										height: 0,
										opacity: 0,
									}}
									transition={{
										duration: 0.3,
										ease: "easeInOut",
									}}
									className="overflow-hidden">
									<p className="pt-6 text-muted-foreground leading-relaxed text-lg">
										{item.description}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</section>
	);
}
