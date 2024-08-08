import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		mdx(),
		sitemap(),
		tailwind(),
		react(),
		icon({
			include: {
				mdi: [
					"home-account",
					"blog-outline",
					"about-circle-outline",
					"weather-night",
					"white-balance-sunny",
				],
			},
		}),
	],
	output: "static",
	adapter: vercel(),
});
