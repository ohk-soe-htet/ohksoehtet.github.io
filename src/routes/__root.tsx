import { Link, Outlet } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, Briefcase, BookOpen } from "lucide-react";

export function RootComponent() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300 relative">
			{/* Floating Navigation Dock */}
			<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
				<nav className="flex items-center gap-2 rounded-full border bg-background/80 p-2 shadow-lg backdrop-blur-md supports-backdrop-filter:bg-background/60">
					<Link
						to="/"
						className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted [&.active]:bg-primary [&.active]:text-primary-foreground">
						<Home className="h-5 w-5" />
						<span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
							Home
						</span>
					</Link>

					<Link
						to="/projects"
						className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted [&.active]:bg-primary [&.active]:text-primary-foreground">
						<Briefcase className="h-5 w-5" />
						<span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
							Projects
						</span>
					</Link>

					<Link
						to="/blog"
						className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted [&.active]:bg-primary [&.active]:text-primary-foreground">
						<BookOpen className="h-5 w-5" />
						<span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
							Blog
						</span>
					</Link>

					<div className="mx-1 h-6 w-px bg-border" />

					<div className="flex h-10 w-10 items-center justify-center">
						<ModeToggle />
					</div>
				</nav>
			</div>

			<main>
				<Outlet />
			</main>
		</div>
	);
}
