import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";
import { PhysicsHero } from "@/components/PhysicsHero";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 relative overflow-hidden pb-20">
      {/* Hero Section */}
      <section className="flex flex-col justify-center gap-6 py-20 lg:py-32 relative z-10">
        <PhysicsHero />
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          David Yang
        </h1>
        <p className="text-xl text-secondary max-w-2xl font-light leading-loose">
          Exploring the frontiers of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">Web3</span>, <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">AI</span>, and the <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-medium">future of finance</span>.
          Building digital experiences that bridge technology and humanity.
        </p>
        <div className="flex gap-4 pt-8">
          <MagneticButton>
            <a
              href="/portfolio"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="/blog"
              className="inline-block rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Read Thoughts
            </a>
          </MagneticButton>
        </div>
      </section>

      {/* Bento Grid Teaser (Placeholder) */}
      {/* Bento Grid Teaser */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/blog/newbie-tuition" className="glass-card rounded-3xl p-8 min-h-[300px] group flex flex-col justify-between hover:bg-white/5 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-medium text-foreground group-hover:text-blue-400 transition-colors">Latest Article</h3>
              <span className="text-xs text-secondary border border-white/10 px-2 py-1 rounded-full">Dec 01, 2025</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Newbie Guide: How to safely deposit USDT</h4>
            <p className="text-secondary leading-relaxed">A full process guide for beginners entering the crypto world to avoid frozen cards and scams.</p>
          </div>
          <div className="text-sm text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Read Article →</div>
        </Link>

        <Link href="/portfolio" className="glass-card rounded-3xl p-8 min-h-[300px] md:col-span-2 group flex flex-col hover:bg-white/5 transition-colors relative overflow-hidden">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-medium text-foreground group-hover:text-purple-400 transition-colors">Featured Project</h3>
                <h4 className="text-xl font-bold text-white mt-1">DataCrypto.net</h4>
              </div>
              <span className="text-xs font-semibold bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20">Web3</span>
            </div>

            <p className="text-secondary max-w-md mb-6 relative z-10">A minimalist investment intelligence terminal aggregating real-time crypto market data.</p>

            {/* Image Area */}
            <div className="flex-1 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl relative bg-black/50 mt-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portfolio/datacrypto.png"
                alt="DataCrypto.net"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}
