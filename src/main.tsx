import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createRouter,
	createRootRoute,
	createRoute,
} from "@tanstack/react-router";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RootComponent } from "@/routes/__root";
import { IndexComponent } from "@/routes/index";
import { ProjectsComponent } from "@/routes/projects";
import { BlogComponent } from "@/routes/blog";
import { BlogPostComponent } from "@/routes/blog-post";

// 1. Create the root route
const rootRoute = createRootRoute({
	component: RootComponent,
});

// 2. Create the route tree
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: IndexComponent,
});

const projectsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/projects",
	component: ProjectsComponent,
});

const blogRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/blog",
	component: BlogComponent,
});

const blogPostRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/blog/$slug",
	component: BlogPostComponent,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	projectsRoute,
	blogRoute,
	blogPostRoute,
]);

// 3. Create the router
const router = createRouter({ routeTree });

// 4. Register the router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
