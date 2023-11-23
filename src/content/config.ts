import { z, defineCollection } from 'astro:content';

export const collections = {
    projects: defineCollection ({
        type: "content",
        schema: ({image}) => z.object({
            title: z.string(),
            texttitle: z.string(),
            textsubtitle: z.string(),
            textparagraph: z.string(),
            image: image(),
            description: z.string(),
            href: z.object({}),
            box1h: z.string(),
            box1p: z.string(),
            box2h: z.string(),
            box2p: z.string(),
            box3h: z.string(),
            box3p: z.string(),
        }),
    }),
};

