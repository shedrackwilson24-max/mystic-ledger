import React from 'react';
import { Search, Bell, Menu, X, Wallet } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-nebula-deep/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-nebula-glow to-nebula-cyan bg-clip-text text-transparent"
          >
            Mystic Ledger
          </motion.div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            {['Explore', 'Marketplace', 'Create', 'Stake'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nebula-glow transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 gap-2 focus-within:border-nebula-glow transition-all">
            <Search size={18} className="text-white/40" />
            <input 
              type="text" 
              placeholder="Search NFTs, collections..." 
              className="bg-transparent border-none outline-none text-sm w-64"
            />
          </div>

          <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-nebula-pink rounded-full" />
          </button>

          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};
