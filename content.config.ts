import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		all: defineCollection({
			type: "page",
			source: "**/*.md",
			schema: z.object({
				title: z.string().min(1),
				description: z.string(),
				date: z.string().min(1),
				type: z.enum(["article", "book"]),
				tags: z.array(z.string()).optional(),
				image: z.string().optional(),
			}),
		}),
	},
});
