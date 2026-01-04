import { Link, Outlet } from "@tanstack/react-router";
import { ModeToggle } from "@/components/mode-toggle";

export function RootComponent() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans antialiased transition-colors duration-300">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto flex h-14 items-center justify-between px-4">
					<div className="mr-4 hidden md:flex">
						<Link
							to="/"
							className="mr-6 flex items-center space-x-2 font-bold">
							<span>Ohk Soe Htet</span>
						</Link>
						<nav className="flex items-center space-x-6 text-sm font-medium">
							<Link
								to="/"
								className="transition-colors hover:text-foreground/80 text-foreground/60 [&.active]:text-foreground">
								Home
							</Link>
							<Link
								to="/projects"
								className="transition-colors hover:text-foreground/80 text-foreground/60 [&.active]:text-foreground">
								Projects
							</Link>
							<Link
								to="/blog"
								className="transition-colors hover:text-foreground/80 text-foreground/60 [&.active]:text-foreground">
								Blog
							</Link>
						</nav>
					</div>
					{/* Mobile Menu Placeholder - can be expanded later */}
					<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
						<div className="w-full flex-1 md:w-auto md:flex-none">
							{/* Search or other items */}
						</div>
						<ModeToggle />
					</div>
				</div>
			</header>
			<main className="container mx-auto py-6 px-4">
				<Outlet />
			</main>
		</div>
	);
}
