import Link from 'next/link';
import { getPostBySlug } from '@/lib/blog';
import ReadingProgressBar from './ReadingProgressBar';
import ReactMarkdown from 'react-markdown';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostBySlug(slug);

    return (
        <>
            <ReadingProgressBar />

            <div className="min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-secondary hover:text-white transition-colors mb-12 group"
                >
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
                    Back to Thoughts
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 text-sm text-secondary mb-4">
                        <time>{postData.date}</time>
                        <span>•</span>
                        <span className="text-purple-400">{postData.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        {postData.title}
                    </h1>
                </header>

                {/* Content */}
                <article className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <ReactMarkdown
                        components={{
                            img: ({ node, ...props }) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    {...props}
                                    className="w-full h-auto rounded-xl shadow-lg my-8 border border-white/10"
                                    alt={props.alt || ''}
                                />
                            )
                        }}
                    >
                        {postData.content || ''}
                    </ReactMarkdown>
                </article>
            </div>
        </>
    );
}

