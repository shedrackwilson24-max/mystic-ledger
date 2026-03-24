import { Filter, LayoutGrid, List, TrendingUp } from 'lucide-react';
import { NFTCard } from './NFTCard';
import { motion } from 'motion/react';

const MOCK_NFTS = [
  { id: 1, name: "Cosmic Crystal #01", price: "2.5", blockchain: "ETH", likes: 124, image: "https://picsum.photos/seed/nft1/400/400" },
  { id: 2, name: "Nebula Voyager", price: "450", blockchain: "SOL", likes: 89, image: "https://picsum.photos/seed/nft2/400/400" },
  { id: 3, name: "XRP Ledger Punk", price: "1200", blockchain: "XRP", likes: 256, image: "https://picsum.photos/seed/nft3/400/400" },
  { id: 4, name: "Void Entity", price: "0.8", blockchain: "ETH", likes: 45, image: "https://picsum.photos/seed/nft4/400/400" },
  { id: 5, name: "Stellar Shard", price: "15", blockchain: "SOL", likes: 67, image: "https://picsum.photos/seed/nft5/400/400" },
  { id: 6, name: "Galactic Guardian", price: "3.2", blockchain: "ETH", likes: 156, image: "https://picsum.photos/seed/nft6/400/400" },
  { id: 7, name: "Cyber Pulse", price: "800", blockchain: "XRP", likes: 34, image: "https://picsum.photos/seed/nft7/400/400" },
  { id: 8, name: "Astro Nomad", price: "1.5", blockchain: "ETH", likes: 92, image: "https://picsum.photos/seed/nft8/400/400" },
] as const;

export const Marketplace = () => {
  return (
    <section id="marketplace" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Explore Marketplace</h2>
            <p className="text-white/40">Discover the rarest digital assets across multiple chains.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-white/5 border border-white/10 rounded-xl p-1">
              <button className="p-2 bg-nebula-glow rounded-lg"><LayoutGrid size={20} /></button>
              <button className="p-2 hover:bg-white/5 rounded-lg text-white/40"><List size={20} /></button>
            </div>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
              <Filter size={18} />
              Filters
            </button>
            <select className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl outline-none focus:border-nebula-glow transition-all">
              <option>Recently Added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Liked</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_NFTS.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <NFTCard {...nft} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-12 py-4 rounded-2xl font-bold transition-all">
            Load More Assets
          </button>
        </div>
      </div>
    </section>
  );
};
