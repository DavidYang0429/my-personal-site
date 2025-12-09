'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface GlitchAvatarProps {
    src?: string;
    alt?: string;
    size?: number;
}

export function GlitchAvatar({ src = "/avatar.jpg", alt = "Profile", size = 300 }: GlitchAvatarProps) {
    return (
        <div
            className="relative flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] group"
            style={{ width: size + 8, height: size + 8 }}
        >
            <div className="relative overflow-hidden rounded-full bg-black block w-full h-full">
                {/* Main Image */}
                <div className="relative w-full h-full z-10 transition-transform duration-300">
                    <div
                        className="w-full h-full relative"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>

                {/* Glitch Layer 1 (Red/Cyan shift) */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-anim-1_2s_infinite_linear_alternate-reverse]"
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className="absolute inset-0 translate-x-[2px] opacity-70">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover rounded-full mix-blend-screen hue-rotate-90"
                        />
                    </div>
                </div>

                {/* Glitch Layer 2 (Blue/Magenta shift) */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 group-hover:animate-[glitch-anim-2_2.5s_infinite_linear_alternate-reverse]"
                    style={{ clipPath: 'inset(0 0 0 0)' }}
                >
                    <div className="absolute inset-0 -translate-x-[2px] opacity-70">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover rounded-full mix-blend-screen -hue-rotate-90"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
