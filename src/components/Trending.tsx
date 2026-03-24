import { TrendingUp, Users, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const COLLECTIONS = [
  { id: 1, name: "Nebula Punks", floor: "1.2 ETH", volume: "450 ETH", change: "+12.5%", image: "https://picsum.photos/seed/coll1/100/100" },
  { id: 2, name: "Void Walkers", floor: "0.8 ETH", volume: "320 ETH", change: "+5.2%", image: "https://picsum.photos/seed/coll2/100/100" },
  { id: 3, name: "Stellar Shards", floor: "45 SOL", volume: "12,000 SOL", change: "-2.1%", image: "https://picsum.photos/seed/coll3/100/100" },
  { id: 4, name: "Cosmic Crystals", floor: "2.5 ETH", volume: "890 ETH", change: "+24.8%", image: "https://picsum.photos/seed/coll4/100/100" },
] as const;

export const Trending = () => {
  return (
    <section className="py-20 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-nebula-glow/20 flex items-center justify-center text-nebula-glow">
              <TrendingUp size={20} />
            </div>
            <h2 className="text-3xl font-bold">Trending Collections</h2>
          </div>
          <button className="text-nebula-glow font-semibold hover:underline">View All</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="relative">
                <img 
                  src={col.image} 
                  alt={col.name} 
                  className="w-16 h-16 rounded-xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-nebula-deep border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate group-hover:text-nebula-glow transition-colors">{col.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-white/40">Floor: {col.floor}</p>
                  <p className={cn(
                    "text-xs font-bold",
                    col.change.startsWith('+') ? "text-green-400" : "text-red-400"
                  )}>
                    {col.change}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="glass-card p-8 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-nebula-cyan/20 flex items-center justify-center text-nebula-cyan">
              <Users size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">2.4M</p>
              <p className="text-white/40 text-sm">Total Collectors</p>
            </div>
          </div>
          <div className="glass-card p-8 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-nebula-glow/20 flex items-center justify-center text-nebula-glow">
              <BarChart3 size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">$12.8B</p>
              <p className="text-white/40 text-sm">Trading Volume</p>
            </div>
          </div>
          <div className="glass-card p-8 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-nebula-pink/20 flex items-center justify-center text-nebula-pink">
              <TrendingUp size={28} />
            </div>
            <div>
              <p className="text-2xl font-bold">15.2K</p>
              <p className="text-white/40 text-sm">Daily Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
