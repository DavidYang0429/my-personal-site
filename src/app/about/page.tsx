import { GlitchAvatar } from "@/components/GlitchAvatar";
import { TypewriterEffect } from "@/components/TypewriterEffect";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text */}
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            The Explorer
                        </h1>
                        <div className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 h-[40px]">
                            <TypewriterEffect text="I am a Web3 Native, and AI Creator." speed={80} />
                        </div>
                    </div>

                    <div className="text-gray-400 text-lg leading-relaxed flex flex-col gap-6 max-w-xl">
                        <p>
                            My journey began with a curiosity for how systems work, which led me down the rabbit hole of decentralized networks.
                            I believe in a future where code creates trust, and artificial intelligence amplifies human creativity rather than replacing it.
                        </p>
                        <p>
                            I am adept at leveraging the latest technology to enhance my daily work efficiency and results. Furthermore, I am an experienced operations manager with insights into user operations, particularly community operations. I am capable of independently planning and organizing events to drive user growth.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
                            Web3
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
                            AI
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
                            Community Building
                        </div>
                    </div>
                </div>

                {/* Right Column: Avatar */}
                <div className="flex justify-center items-center order-1 lg:order-2">
                    <GlitchAvatar size={350} />
                </div>

            </div>
        </main>
    );
}
