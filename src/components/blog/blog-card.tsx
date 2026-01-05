import { motion } from "framer-motion";
import type { BlogPost } from "@/data/posts";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface BlogCardProps {
	post: BlogPost;
	index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
	return (
		<Link
			to="/blog/$slug"
			params={{ slug: post.slug }}
			className="block h-full">
			<motion.article
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: index * 0.1 }}
				className="group relative flex h-full flex-col justify-between rounded-2xl border bg-background/50 p-6 backdrop-blur-sm transition-all hover:bg-muted/50 hover:border-primary/20">
				<div className="space-y-4">
					<div className="flex items-center gap-4 text-xs text-muted-foreground">
						<div className="flex items-center gap-1">
							<Calendar className="h-3 w-3" />
							{post.date}
						</div>
						<div className="flex items-center gap-1">
							<Clock className="h-3 w-3" />
							{post.readTime}
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
							{post.title}
						</h3>
						<p className="text-muted-foreground line-clamp-3">
							{post.excerpt}
						</p>
					</div>

					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
								{tag}
							</span>
						))}
					</div>
				</div>

				<div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
					Read Article <ArrowRight className="ml-1 h-4 w-4" />
				</div>
			</motion.article>
		</Link>
	);
}
