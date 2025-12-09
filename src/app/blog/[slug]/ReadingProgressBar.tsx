'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ReadingProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 origin-left z-50"
            style={{ scaleX }}
        />
    );
}
