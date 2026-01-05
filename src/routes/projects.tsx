import { projects } from "@/data/projects";
import {
	FeaturedProjectCard,
	StandardProjectCard,
} from "@/components/projects/project-card";

export function ProjectsComponent() {
	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 pb-32 space-y-24">
			{/* Header */}
			<div className="space-y-4 max-w-2xl">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					Featured Projects
				</h1>
				<p className="text-lg text-muted-foreground">
					A collection of projects I've worked on, ranging from open
					source libraries to full-stack applications.
				</p>
			</div>

			{/* Featured Projects */}
			<div className="space-y-12">
				{featuredProjects.map((project, index) => (
					<FeaturedProjectCard
						key={project.id}
						project={project}
						index={index}
					/>
				))}
			</div>

			{/* Other Projects Archive */}
			<div className="space-y-8">
				<h2 className="text-2xl font-bold tracking-tight">
					More Projects
				</h2>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{otherProjects.map((project, index) => (
						<StandardProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
