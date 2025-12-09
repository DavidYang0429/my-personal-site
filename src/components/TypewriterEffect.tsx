'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
    cursor?: boolean;
}

export function TypewriterEffect({ text, speed = 100, className, cursor = true }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, speed, text]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <span className="animate-pulse font-light ml-1">|</span>
            )}
        </span>
    );
}
