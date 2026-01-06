import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface WikiLinkProps {
	children: React.ReactNode;
	href?: string;
	description: string;
}

export function WikiLink({ children, href, description }: WikiLinkProps) {
	const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
	const triggerRef = useRef<HTMLElement>(null);

	const updateCoords = () => {
		if (triggerRef.current) {
			const rect = triggerRef.current.getBoundingClientRect();
			setCoords({
				x: rect.left + rect.width / 2,
				y: rect.top,
			});
		}
	};

	const handleMouseEnter = () => {
		updateCoords();
	};

	const handleMouseLeave = () => {
		setCoords(null);
	};

	// Close on scroll to avoid detached tooltips
	useEffect(() => {
		const handleScroll = () => {
			if (coords) setCoords(null);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, [coords]);

	const Wrapper = href ? "a" : "span";
	const props = href
		? { href, target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<>
			<Wrapper
				ref={triggerRef as any}
				{...props}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className={`cursor-pointer inline-block font-medium decoration-emerald-500/50 decoration-2 underline-offset-4 hover:decoration-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all ${
					href ? "underline" : "underline decoration-dotted"
				}`}>
				{children}
			</Wrapper>

			{createPortal(
				<AnimatePresence>
					{coords && (
						<motion.div
							initial={{
								opacity: 0,
								scale: 0.95,
								x: "-50%",
								y: "-90%",
							}}
							animate={{
								opacity: 1,
								scale: 1,
								x: "-50%",
								y: "-100%",
							}}
							exit={{
								opacity: 0,
								scale: 0.95,
								x: "-50%",
								y: "-90%",
							}}
							transition={{ duration: 0.2, ease: "easeOut" }}
							style={{
								position: "fixed",
								left: coords.x,
								top: coords.y - 8, // 8px gap above element
							}}
							className="pointer-events-none w-64 p-4 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-emerald-500/20 shadow-xl z-9999 text-sm text-center text-foreground">
							<p>{description}</p>
							{href && (
								<div className="mt-2 flex items-center justify-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium opacity-80">
									Click to read more{" "}
									<ExternalLink className="h-3 w-3" />
								</div>
							)}
							{/* Little triangle pointer */}
							<div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/90 dark:border-t-zinc-900/90" />
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
}
