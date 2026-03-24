import { Shield, TrendingUp, Wallet, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Staking = () => {
  return (
    <section id="stake" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-card p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nebula-glow/10 blur-[80px] -mr-32 -mt-32" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-nebula-glow/20 flex items-center justify-center text-nebula-glow">
                  <Shield />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">NFT Staking Vault</h2>
                  <p className="text-white/40">Lock your assets to earn $MYSTIC rewards.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Total Staked</p>
                  <p className="text-2xl font-bold">12,450 NFTs</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Current APR</p>
                  <p className="text-2xl font-bold text-nebula-cyan">24.5%</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Your Rewards</p>
                  <p className="text-2xl font-bold text-nebula-pink">450.2 $MYSTIC</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-nebula-glow py-4 rounded-xl font-bold hover:opacity-90 transition-all">
                  Stake New NFT
                </button>
                <button className="flex-1 bg-white/5 border border-white/10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  Claim Rewards
                </button>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Staking History</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10" />
                      <div>
                        <p className="font-semibold">Cosmic Crystal #{i}42</p>
                        <p className="text-xs text-white/40">Staked 12 days ago</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-nebula-cyan">+12.4 $MYSTIC</p>
                      <p className="text-xs text-white/40">Earned so far</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-8 border-nebula-cyan/30">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold">Reward Multipliers</h3>
                <TrendingUp size={18} className="text-nebula-cyan" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-white/60">Common</span>
                  <span className="font-bold">1.0x</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-nebula-glow/10 border border-nebula-glow/20 rounded-lg">
                  <span className="text-sm text-nebula-glow">Rare</span>
                  <span className="font-bold text-nebula-glow">1.5x</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-nebula-cyan/10 border border-nebula-cyan/20 rounded-lg">
                  <span className="text-sm text-nebula-cyan">Legendary</span>
                  <span className="font-bold text-nebula-cyan">2.5x</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-nebula-pink/10 to-transparent border-nebula-pink/30">
              <h3 className="font-bold mb-4">Mystic Pass</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                Holders of the Mystic Pass get double rewards and early access to all nebula drops.
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-nebula-pink py-3 rounded-xl font-bold hover:opacity-90 transition-all">
                Buy Pass
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
