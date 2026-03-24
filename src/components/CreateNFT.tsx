import { Upload, Image as ImageIcon, Plus, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const CreateNFT = () => {
  return (
    <section id="create" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Mint Your Masterpiece</h2>
          <p className="text-white/40">Upload your work, set your price, and launch it into the nebula.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="glass-card p-6 aspect-square flex flex-col items-center justify-center border-dashed border-2 border-white/20 hover:border-nebula-glow transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-nebula-glow/20 transition-all">
                <Upload className="text-white/40 group-hover:text-nebula-glow" />
              </div>
              <p className="font-semibold text-sm">Upload File</p>
              <p className="text-xs text-white/40 mt-2 text-center">JPG, PNG, GIF, SVG, MP4. Max 100MB.</p>
            </div>
            
            <div className="mt-6 glass-card p-4">
              <div className="flex items-center gap-2 text-nebula-cyan mb-2">
                <Info size={16} />
                <p className="text-xs font-bold uppercase">Pro Tip</p>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                High-quality previews increase your chances of a sale by 45%. Make sure your lighting is cosmic.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Item Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. 'Cosmic Voyager #001'"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-nebula-glow transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Tell the story behind your creation..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-nebula-glow transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Price</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="0.00"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-nebula-glow transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/40">ETH</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Blockchain</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-nebula-glow transition-all">
                    <option>Ethereum</option>
                    <option>Solana</option>
                    <option>XRP Ledger</option>
                    <option>Polygon</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-nebula-glow to-nebula-cyan text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-nebula-glow/20">
                  Mint NFT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
