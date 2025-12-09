'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [tooltip, setTooltip] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setTooltip(label);
        setTimeout(() => setTooltip(null), 2000);
    };

    const socialCards = [
        {
            id: 'email',
            label: 'Email',
            value: '1443346890a@gmail.com',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            ),
            action: () => handleCopy('1443346890a@gmail.com', 'Email Copied!'),
            gradient: 'group-hover:border-cyan-500/50',
            textGradient: 'group-hover:from-cyan-400 group-hover:to-blue-500',
            bgHover: 'group-hover:bg-cyan-500/10'
        },
        {
            id: 'twitter',
            label: 'Twitter / X',
            value: '@David_Yanggg',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            ),
            link: 'https://x.com/David_Yanggg',
            gradient: 'group-hover:border-blue-500/50',
            textGradient: 'group-hover:from-blue-400 group-hover:to-indigo-500',
            bgHover: 'group-hover:bg-blue-500/10'
        },
        {
            id: 'youtube',
            label: 'YouTube',
            value: '@David-yw8sm',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
            ),
            link: 'https://www.youtube.com/@David-yw8sm',
            gradient: 'group-hover:border-purple-500/50',
            textGradient: 'group-hover:from-purple-400 group-hover:to-pink-500',
            bgHover: 'group-hover:bg-purple-500/10'

        },
        {
            id: 'telegram',
            label: 'Telegram',
            value: '@David_0429',
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.638z"></path>
                </svg>
            ),
            link: 'https://t.me/David_0429',
            gradient: 'group-hover:border-indigo-500/50',
            textGradient: 'group-hover:from-indigo-400 group-hover:to-blue-500',
            bgHover: 'group-hover:bg-indigo-500/10'
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Left Side: Text */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                    Get in Touch
                </h1>
                <p className="text-xl text-secondary max-w-md mx-auto md:mx-0 leading-relaxed">
                    Interested in collaborating or have a question? Reach out through any of these channels.
                </p>

                {/* Visual line/decoration could go here */}
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mt-8 rounded-full mx-auto md:mx-0 opacity-50" />
            </div>

            {/* Right Side: Social Command Center Grid */}
            <div className="flex-1 w-full max-w-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialCards.map((card) => {
                        const Tag = card.link ? 'a' : 'div';
                        const props = card.link
                            ? { href: card.link, target: '_blank', rel: 'noopener noreferrer' }
                            : { onClick: card.action };

                        return (
                            <motion.div
                                key={card.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative"
                            >
                                <Tag
                                    {...props}
                                    className={`glass-card group flex flex-col items-center justify-center p-8 h-48 rounded-3xl border border-white/5 cursor-pointer transition-all duration-300 ${card.gradient} hover:border-opacity-100 ${card.bgHover} hover:shadow-2xl`}
                                >
                                    <div className={`mb-4 text-gray-400 group-hover:text-white transition-colors duration-300`}>
                                        {card.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${card.textGradient} transition-all duration-300`}>
                                        {card.label}
                                    </h3>
                                </Tag>

                                {/* Animate Presence for Toast inside the card (or globally, but simplistic here) */}
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Global Toast Notification */}
            <AnimatePresence>
                {tooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: 20, x: '-50%' }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-medium">{tooltip}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

