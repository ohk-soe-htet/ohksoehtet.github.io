import { posts } from "@/data/posts";
import { BlogCard } from "@/components/blog/blog-card";

export function BlogComponent() {
	return (
		<div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 pb-32 space-y-12">
			<div className="space-y-4 max-w-2xl">
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					Writing
				</h1>
				<p className="text-lg text-muted-foreground">
					Thoughts on software development, design, and the future of
					the web.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{posts.map((post, index) => (
					<BlogCard key={post.id} post={post} index={index} />
				))}
			</div>
		</div>
	);
}
