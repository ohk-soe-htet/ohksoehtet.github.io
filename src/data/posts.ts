export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	tags: string[];
	slug: string;
	image?: string;
}

export const posts: BlogPost[] = [
	{
		id: "1",
		title: "The Future of React: Server Components Explained",
		excerpt:
			"A deep dive into React Server Components, how they work, and why they are changing the way we build web applications.",
		date: "Jan 4, 2026",
		readTime: "5 min read",
		tags: ["React", "Next.js", "Web Development"],
		slug: "future-of-react",
		image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop",
	},
	{
		id: "2",
		title: "Mastering Tailwind CSS v4",
		excerpt:
			"Exploring the new features in Tailwind CSS v4, including the new engine, CSS variables, and improved performance.",
		date: "Dec 28, 2025",
		readTime: "4 min read",
		tags: ["CSS", "Tailwind", "Design"],
		slug: "mastering-tailwind-v4",
		image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2831&auto=format&fit=crop",
	},
	{
		id: "3",
		title: "Building Accessible UI Components",
		excerpt:
			"Why accessibility matters and practical tips for building inclusive user interfaces that work for everyone.",
		date: "Dec 15, 2025",
		readTime: "6 min read",
		tags: ["Accessibility", "UI/UX", "Frontend"],
		slug: "building-accessible-ui",
	},
];
