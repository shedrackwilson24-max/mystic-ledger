import { motion } from 'motion/react';
import { Heart, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NFTCardProps {
  image: string;
  name: string;
  price: string;
  blockchain: 'ETH' | 'SOL' | 'XRP';
  likes: number;
}

export const NFTCard = ({ image, name, price, blockchain, likes }: NFTCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card glow-border overflow-hidden group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs">
          <Zap size={12} className="text-nebula-cyan" />
          {blockchain}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Heart size={14} className="group-hover:text-nebula-pink transition-colors" />
            {likes}
          </div>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider">Price</p>
            <p className="font-bold text-nebula-glow">{price} {blockchain}</p>
          </div>
          <button className="bg-white/10 hover:bg-nebula-glow px-4 py-1.5 rounded-full text-xs font-semibold transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
