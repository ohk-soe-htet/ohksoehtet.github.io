export interface Project {
	id: string;
	title: string;
	description: string;
	tech: string[];
	link?: string;
	github?: string;
	image: string;
	featured: boolean;
	category: "Web App" | "Mobile App" | "Tool" | "Library";
}

export const projects: Project[] = [
	{
		id: "1",
		title: "Project Nexus",
		description:
			"A high-performance SaaS dashboard for analytics visualization. Built with Next.js 14, Tremor, and Supabase. Features real-time data synchronization and team collaboration tools.",
		tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
		link: "https://example.com",
		github: "https://github.com",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
		featured: true,
		category: "Web App",
	},
	{
		id: "2",
		title: "Aurora UI",
		description:
			"An open-source React component library focusing on accessibility and glassmorphism aesthetics. Fully typed and compatible with Tailwind CSS.",
		tech: ["React", "TypeScript", "Storybook", "Rollup"],
		link: "https://example.com",
		github: "https://github.com",
		image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2940&auto=format&fit=crop",
		featured: true,
		category: "Library",
	},
	{
		id: "3",
		title: "TaskFlow Mobile",
		description:
			"A cross-platform productivity app built with Flutter. Implements local-first architecture with offline sync capabilities.",
		tech: ["Flutter", "Dart", "Firebase", "SQLite"],
		link: "https://example.com",
		github: "https://github.com",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2940&auto=format&fit=crop",
		featured: false,
		category: "Mobile App",
	},
	{
		id: "4",
		title: "DevSearch CLI",
		description:
			"A command-line tool for searching developer documentation directly from the terminal. Supports MDN, StackOverflow, and GitHub.",
		tech: ["Rust", "Clap", "Tokio"],
		github: "https://github.com",
		image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2874&auto=format&fit=crop",
		featured: false,
		category: "Tool",
	},
];
