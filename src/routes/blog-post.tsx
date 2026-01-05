import { useParams } from "@tanstack/react-router";
import { posts } from "@/data/posts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function BlogPostComponent() {
	const { slug } = useParams({ from: "/blog/$slug" });
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return (
			<div className="container mx-auto px-6 py-24 text-center">
				<h1 className="text-2xl font-bold">Post not found</h1>
				<Link
					to="/blog"
					className="text-primary hover:underline mt-4 block">
					Back to Blog
				</Link>
			</div>
		);
	}

	return (
		<article className="container mx-auto px-6 md:px-12 lg:px-24 py-12 pb-32 max-w-4xl">
			<Link
				to="/blog"
				className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
				<ArrowLeft className="mr-2 h-4 w-4" />
				Back to Writing
			</Link>

			<header className="space-y-6 mb-12">
				<div className="flex items-center gap-4 text-sm text-muted-foreground">
					<div className="flex items-center gap-1">
						<Calendar className="h-4 w-4" />
						{post.date}
					</div>
					<div className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						{post.readTime}
					</div>
				</div>

				<h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
					{post.title}
				</h1>

				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
							{tag}
						</span>
					))}
				</div>
			</header>

			{post.image && (
				<div className="mb-12 overflow-hidden rounded-2xl border bg-muted">
					<img
						src={post.image}
						alt={post.title}
						className="w-full h-[400px] object-cover"
					/>
				</div>
			)}

			<div className="prose prose-lg dark:prose-invert max-w-none">
				<p className="lead text-xl text-muted-foreground mb-8">
					{post.excerpt}
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<h2>Introduction</h2>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<blockquote>
					"The best way to predict the future is to invent it."
				</blockquote>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo.
				</p>
				<h3>Key Takeaways</h3>
				<ul>
					<li>Understanding the core concepts is crucial.</li>
					<li>Practice makes perfect.</li>
					<li>Always keep learning and adapting.</li>
				</ul>
				<p>
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
					odit aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt.
				</p>
			</div>
		</article>
	);
}
