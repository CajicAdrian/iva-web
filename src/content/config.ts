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
            href: z.string(),
            box1h: z.string(),
            box1p: z.string(),
            box2h: z.string(),
            box2p: z.string(),
            box3h: z.string(),
            box3p: z.string(),
            contentimage: image(),
            content1h: z.string(),
            content1image: image(),
            content2h: z.string(),
            content2image: image(),
            content3h: z.string(),
            content3image: image(),
            content4h: z.string(),
            images: z.array(z.object({
                src: image(),
                alt: z.string(),
              })),
            images2: z.array(z.object({
                src: image(),
                alt: z.string(),
              })),
        }),
    }),
};

