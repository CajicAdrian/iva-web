import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    shema: z.object({
        title: z.string(),
        slug: z.string(),
        texttitle: z.string(),
        textsubtitle: z.string(),
        textparagraph: z.string(),
        image: z.string(),
        description: z.string(),
        href: z.string(),
        box1h: z.string(),
        box1p: z.string(),
        box2h: z.string(),
        box2p: z.string(),
        box3h: z.string(),
        box3p: z.string(),
    })
});

export const collections = {
    'project': projectCollection,
};