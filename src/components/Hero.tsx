import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-nebula-glow/20 border border-nebula-glow/30 px-4 py-2 rounded-full text-nebula-glow text-sm font-medium mb-6">
            <Sparkles size={16} />
            The Future of Digital Ownership
          </div>
          <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
            Discover, Trade <br />
            <span className="bg-gradient-to-r from-nebula-glow via-nebula-cyan to-nebula-pink bg-clip-text text-transparent">
              & Stake NFTs
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Enter the Nebula Core. The world's most advanced multichain NFT marketplace for creators and collectors.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-nebula-glow hover:bg-nebula-glow/80 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
              Explore Marketplace
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all">
              Create Collection
            </button>
          </div>

          <div className="mt-12 flex gap-12">
            <div>
              <p className="text-3xl font-bold">120K+</p>
              <p className="text-white/40 text-sm">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">450K+</p>
              <p className="text-white/40 text-sm">NFTs Minted</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$2.4B</p>
              <p className="text-white/40 text-sm">Total Volume</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-nebula-glow/20 blur-[100px] rounded-full" />
          <div className="relative glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/nebula-nft/800/1000" 
              alt="Featured NFT" 
              className="rounded-xl w-full h-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-white/40">Current Bid</p>
                <p className="text-xl font-bold">12.5 ETH</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/40">Ends In</p>
                <p className="text-xl font-bold">08h 24m 12s</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -left-10 glass-card p-3"
          >
            <div className="w-12 h-12 rounded-lg bg-nebula-cyan/20 flex items-center justify-center text-nebula-cyan">
              <Sparkles />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
