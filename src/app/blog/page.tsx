import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/BlogList';

export default function BlogPage() {
    const posts = getAllPosts();
    return <BlogList initialPosts={posts} />;
}
