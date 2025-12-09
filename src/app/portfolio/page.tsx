'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Featured Project (Top of page)
const featuredProject = {
    title: 'DataCrypto.net',
    category: 'Web3 & Financial Intelligence',
    description: 'A minimalist investment intelligence terminal aggregating real-time crypto market data and sentiment analysis.',
    link: 'https://datacrypto.net/',
    imageSrc: '/images/portfolio/datacrypto.png',
    color: 'from-blue-600/30 to-purple-600/30'
};

// Side Projects (Grid below)
const sideProjects = [
    {
        id: 'gemini-gem',
        title: 'Visual Prompt Architect',
        category: 'AI Agent / Gemini Gem',
        description: 'A custom Google Gemini Gem designed to reverse-engineer and optimize prompts for Midjourney/Flux image generation.',
        link: 'https://gemini.google.com/gem/1WUlhhH4koMkXTYzcRIgyGdKcX5096Nrc?usp=sharing',
        // imageSrc: '/images/portfolio/gemini.png', // Placeholder
        color: 'from-green-500/20 to-emerald-500/20'
    },
    {
        id: 'ai-nexus',
        title: 'AI Tool Nexus',
        category: 'Education & Knowledge Base',
        description: 'A curated tutorial platform hosted on GitHub Pages for mastering the latest AI tools.',
        link: 'https://davidyang0429.github.io/AI-/',
        // imageSrc: '/images/portfolio/aitools.png', // Placeholder
        color: 'from-orange-500/20 to-red-500/20'
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            {/* Header */}
            <header className="mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
                    Creative & Technical Technologies
                </h1>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                    Selected works bridging the gap between advanced technology and human experience.
                </p>
            </header>

            <div className="space-y-12">
                {/* 1. Featured Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="glass-card relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.1)] group-hover:shadow-[0_0_50px_rgba(147,51,234,0.2)] transition-all duration-500">
                            {/* Background Gradient/Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-end lg:items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="space-y-2">
                                        <span className="inline-block px-4 py-1.5 text-sm font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
                                            {featuredProject.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                            {featuredProject.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                                        {featuredProject.description}
                                    </p>

                                    <div className="pt-4">
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-100 transition-colors">
                                            Launch Terminal
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                {/* Visual Element */}
                                <div className="hidden md:block w-full md:w-1/3 aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                                    {featuredProject.imageSrc ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={featuredProject.imageSrc}
                                            alt={featuredProject.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/20">
                                            <span className="text-sm">Preview Image</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.section>

                {/* 2. Grid Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sideProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                                <article className="glass-card relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 p-8 flex flex-col justify-between">
                                    {/* Bg Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                                    <div className="relative space-y-4 mb-8">
                                        <span className="text-xs font-semibold tracking-wider text-secondary uppercase">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="relative flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                        View Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </section>
            </div>
        </div>
    );
}

