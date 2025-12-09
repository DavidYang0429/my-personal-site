'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Post } from '@/lib/blog';

export default function BlogList({ initialPosts }: { initialPosts: Post[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-3xl mx-auto pt-32 pb-20 px-6">
            <h1 className="text-4xl font-bold mb-8">Thoughts & Insights</h1>

            {/* Search Bar */}
            <div className="relative mb-12">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-10">
                <AnimatePresence mode='popLayout'>
                    {filteredPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <article className="glass-card group cursor-pointer rounded-2xl p-8 hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3 text-sm text-secondary mb-3">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.category}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors mb-3">
                                        {post.title}
                                    </h2>
                                    {post.excerpt && (
                                        <p className="text-secondary leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    )}
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-10 text-gray-500"
                    >
                        No posts found for "{searchQuery}"
                    </motion.div>
                )}
            </div>
        </div>
    );
}
