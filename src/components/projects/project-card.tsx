import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function FeaturedProjectCard({ project, index }: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/30 dark:bg-zinc-900/20 p-4 backdrop-blur-xl transition-all hover:bg-white/40 dark:hover:bg-zinc-900/30 md:grid-cols-12 md:p-8 shadow-sm">
			{/* Image Section */}
			<div className="relative col-span-1 overflow-hidden rounded-2xl md:col-span-7 h-64 md:h-full min-h-75">
				<div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10 md:hidden" />
				<img
					src={project.image}
					alt={project.title}
					className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			</div>

			{/* Content Section */}
			<div className="col-span-1 flex flex-col justify-center md:col-span-5 space-y-6">
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
							{project.category}
						</span>
					</div>
					<h3 className="text-3xl font-bold tracking-tight text-foreground">
						{project.title}
					</h3>
					<p className="text-muted-foreground text-lg leading-relaxed">
						{project.description}
					</p>
				</div>

				<div className="flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-gray-500/10">
							{tech}
						</span>
					))}
				</div>

				<div className="flex items-center gap-4 pt-4">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2">
							<SiGithub className="h-4 w-4" />
							View Code
						</a>
					)}
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2">
							<ExternalLink className="h-4 w-4" />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export function StandardProjectCard({ project, index }: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 }}
			className="group relative flex flex-col overflow-hidden rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5">
			<div className="mb-4 flex items-start justify-between">
				<div className="rounded-lg bg-muted p-2">
					<Layers className="h-6 w-6 text-muted-foreground" />
				</div>
				<div className="flex gap-2">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors">
							<SiGithub className="h-5 w-5" />
						</a>
					)}
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors">
							<ArrowUpRight className="h-5 w-5" />
						</a>
					)}
				</div>
			</div>

			<h3 className="mb-2 text-xl font-bold tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
				{project.title}
			</h3>
			<p className="mb-6 flex-1 text-sm text-muted-foreground">
				{project.description}
			</p>

			<div className="flex flex-wrap gap-2 mt-auto">
				{project.tech.map((tech) => (
					<span
						key={tech}
						className="text-xs text-muted-foreground/80">
						{tech}
					</span>
				))}
			</div>
		</motion.div>
	);
}
