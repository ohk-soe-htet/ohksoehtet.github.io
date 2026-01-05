import { HeroCard } from "@/components/home/hero-card";
import { TechMarquee } from "@/components/home/tech-marquee";
import { LocationCard } from "@/components/home/location-card";
import { MindsetCard } from "@/components/home/mindset-card";
import { ContactSection } from "@/components/home/contact-section";
import { FeaturedProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export function IndexComponent() {
	return (
		<div className="container mx-auto px-6 md:px-12 lg:px-24 space-y-32 pb-32">
			{/* Hero Section - Full Height Poster Layout */}
			<section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20">
				{/* Main Hero Content - Centered */}
				<div className="w-full max-w-5xl z-10">
					<HeroCard />
				</div>

				{/* Floating Elements (Desktop: Corners, Mobile: Stacked below) */}
				<div className="mt-12 grid grid-cols-1 gap-8 md:absolute md:bottom-12 md:left-0 md:right-0 md:mt-0 md:flex md:justify-between md:px-12 lg:px-0">
					{/* Philosophy - Bottom Left on Desktop */}
					<motion.div
						variants={item}
						initial="hidden"
						animate="show"
						className="w-full md:w-auto md:max-w-xs">
						<MindsetCard />
					</motion.div>

					{/* Time - Bottom Right on Desktop */}
					<motion.div
						variants={item}
						initial="hidden"
						animate="show"
						className="w-full md:w-auto md:max-w-xs">
						<LocationCard />
					</motion.div>
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="space-y-8">
				<div className="text-center space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						My Arsenal
					</h2>
					<p className="text-muted-foreground">
						The tools I use to build digital products.
					</p>
				</div>
				<div className="h-32">
					<TechMarquee />
				</div>
			</section>

			{/* Featured Projects Preview (Teaser) */}
			<section className="space-y-8">
				<div className="flex items-end justify-between px-2">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">
							Featured Work
						</h2>
						<p className="text-muted-foreground">
							A selection of my recent projects.
						</p>
					</div>
					<a
						href="/projects"
						className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors mb-1">
						View all projects →
					</a>
				</div>
				<div className="space-y-8">
					{projects
						.filter((p) => p.featured)
						.slice(0, 1)
						.map((project, index) => (
							<FeaturedProjectCard
								key={project.id}
								project={project}
								index={index}
							/>
						))}
				</div>
			</section>

			{/* Contact / Hire Section */}
			<ContactSection />
		</div>
	);
}
