import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function ContactSection() {
	return (
		<section className="py-24">
			<div className="relative overflow-hidden p-8 md:p-16 text-center">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/5 opacity-50 rounded-3xl" />
				<div className="relative z-10">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-emerald-950 dark:text-emerald-100">
						Ready to build something amazing?
					</h2>
					<p className="mx-auto max-w-xl text-emerald-900/60 dark:text-emerald-200/60 md:text-xl mb-8">
						I'm currently available for freelance work and open
						source collaborations.
					</p>
					<div className="flex flex-wrap items-center justify-center gap-4">
						<Button
							size="lg"
							className="rounded-full h-12 px-8 bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-lg shadow-emerald-500/20"
							asChild>
							<a href="mailto:hello@example.com">
								<Mail className="mr-2 size-4" />
								Get in Touch
							</a>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="rounded-full h-12 px-8 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-50 dark:hover:bg-emerald-900/20">
							<Download className="mr-2 size-4" />
							Download CV
						</Button>
						<Button
							variant="ghost"
							size="lg"
							className="rounded-full h-12 px-8 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
							asChild>
							<Link to="/projects">
								View Projects{" "}
								<ArrowRight className="ml-2 size-4" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
