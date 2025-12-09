import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Post = {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt?: string;
    readTime?: string;
    content?: string; // Raw markdown content
    contentHtml?: string;
};

export function getAllPosts(): Post[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter(fileName => fileName.endsWith('.md')).map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            slug,
            readTime: '3 min read', // Mock, could be calculated
            ...(matterResult.data as { date: string; title: string; category: string; excerpt?: string }),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostBySlug(slug: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        content: matterResult.content, // Return raw markdown content
        contentHtml, // Keep for backward compatibility if needed, though we will move to react-markdown
        readTime: '3 min read',
        ...(matterResult.data as { date: string; title: string; category: string; excerpt?: string }),
    };
}
