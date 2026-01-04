import { HeroCard } from "@/components/home/hero-card";
import { TechMarquee } from "@/components/home/tech-marquee";
import { LocationCard } from "@/components/home/location-card";
import { MindsetCard } from "@/components/home/mindset-card";
import { ContactSection } from "@/components/home/contact-section";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

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
			<section>
				<h2 className="text-2xl font-bold mb-6 px-2">My Arsenal</h2>
				<div className="h-[200px]">
					<TechMarquee />
				</div>
			</section>

			{/* Featured Projects Preview (Teaser) */}
			<section>
				<div className="flex items-center justify-between mb-6 px-2">
					<h2 className="text-2xl font-bold">Featured Work</h2>
					<a
						href="/projects"
						className="text-sm text-muted-foreground hover:text-primary transition-colors">
						View all projects →
					</a>
				</div>
				{/* We will add a project preview card here later */}
				<div className="rounded-xl border bg-muted/30 p-12 text-center text-muted-foreground">
					Project Preview Component Coming Soon
				</div>
			</section>

			{/* Contact / Hire Section */}
			<ContactSection />
		</div>
	);
}
