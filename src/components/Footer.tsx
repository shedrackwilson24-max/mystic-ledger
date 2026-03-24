import { Github, Twitter, Disc as Discord, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-2xl font-bold bg-gradient-to-r from-nebula-glow to-nebula-cyan bg-clip-text text-transparent mb-6">
            Mystic Ledger
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            The premier multichain NFT marketplace for the next generation of digital collectors. Discover, trade, and stake in the nebula.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-nebula-glow transition-all"><Twitter size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-nebula-glow transition-all"><Discord size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-nebula-glow transition-all"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-nebula-glow transition-all"><Github size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Marketplace</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-white transition-colors">All NFTs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Art</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Collectibles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Virtual Worlds</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Taxes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-white/40 mb-4">Join our mailing list to stay in the loop with our newest feature releases.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-nebula-glow flex-1"
            />
            <button className="bg-nebula-glow px-4 py-2 rounded-xl text-sm font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
        <p>© 2026 Mystic Ledger. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
